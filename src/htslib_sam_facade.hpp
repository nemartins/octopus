//
//  htslib_sam_facade.hpp
//  Octopus
//
//  Created by Daniel Cooke on 11/02/2015.
//  Copyright (c) 2015 Oxford University. All rights reserved.
//

#ifndef __Octopus__htslib_sam_facade__
#define __Octopus__htslib_sam_facade__

#include <string>
#include <vector>
#include <unordered_map>
#include <cstddef>
#include <cstdint>
#include <algorithm>
#include <stdexcept>
#include <memory>

#include <boost/filesystem/path.hpp>
#include <boost/optional.hpp>

#include "htslib/hts.h"
#include "htslib/sam.h"

#include "read_reader_impl.hpp"
#include "aligned_read.hpp"

class HtslibSamFacade : public IReadReaderImpl
{
public:
    using Path = boost::filesystem::path;
    
    using SequenceType    = AlignedRead::SequenceType;
    using SampleIdType    = IReadReaderImpl::SampleIdType;
    using Reads           = IReadReaderImpl::Reads;
    using SampleReadMap   = IReadReaderImpl::SampleReadMap;
    using SizeType        = IReadReaderImpl::SizeType;
    using ReadGroupIdType = std::string;
    
    HtslibSamFacade() = delete;
    HtslibSamFacade(Path file_path);
    ~HtslibSamFacade() noexcept override = default;
    
    HtslibSamFacade(const HtslibSamFacade&)            = delete;
    HtslibSamFacade& operator=(const HtslibSamFacade&) = delete;
    HtslibSamFacade(HtslibSamFacade&&)                 = default;
    HtslibSamFacade& operator=(HtslibSamFacade&&)      = default;
    
    bool is_open() const noexcept override;
    void open() override;
    void close() override;
    
    std::vector<SampleIdType> get_samples() override;
    std::vector<ReadGroupIdType> get_read_groups_in_sample(const SampleIdType& sample) override;
    size_t count_reads(const GenomicRegion& region) override;
    size_t count_reads(const SampleIdType& sample, const GenomicRegion& region) override;
    GenomicRegion find_covered_subregion(const GenomicRegion& region, size_t target_coverage) override;
    SampleReadMap fetch_reads(const GenomicRegion& region) override;
    Reads fetch_reads(const SampleIdType& sample, const GenomicRegion& region) override;
    unsigned get_num_reference_contigs() noexcept override;
    std::vector<std::string> get_reference_contig_names() override;
    SizeType get_reference_contig_size(const std::string& contig_name) override;
    std::vector<GenomicRegion> get_possible_regions_in_file() override;
    
private:
    using HtsTidType = int32_t;
    
    class HtslibIterator
    {
    public:
        HtslibIterator() = delete;
        HtslibIterator(HtslibSamFacade& hts_facade, const GenomicRegion& region);
        ~HtslibIterator() noexcept = default;
        
        HtslibIterator(const HtslibIterator&) = delete;
        HtslibIterator& operator=(const HtslibIterator&) = delete;
        
        bool operator++();
        boost::optional<AlignedRead> operator*() const;
        HtslibSamFacade::ReadGroupIdType get_read_group() const;
        
    private:
        struct HtsIteratorDeleter
        {
            void operator()(hts_itr_t* iterator) const { sam_itr_destroy(iterator); }
        };
        struct HtsBam1Deleter
        {
            void operator()(bam1_t* b) const { bam_destroy1(b); }
        };
        
        HtslibSamFacade& hts_facade_;
        std::unique_ptr<hts_itr_t, HtsIteratorDeleter> hts_iterator_;
        std::unique_ptr<bam1_t, HtsBam1Deleter> hts_bam1_;
    };
    
    struct HtsFileDeleter
    {
        void operator()(htsFile* file) const { hts_close(file); }
    };
    struct HtsHeaderDeleter
    {
        void operator()(bam_hdr_t* header) const { bam_hdr_destroy(header); }
    };
    struct HtsIndexDeleter
    {
        void operator()(hts_idx_t* index) const { hts_idx_destroy(index); }
    };
    
    static constexpr const char* Read_group_tag    {"RG"};
    static constexpr const char* Read_group_id_tag {"ID"};
    static constexpr const char* Sample_id_tag     {"SM"};
    
    Path file_path_;
    
    std::unique_ptr<htsFile, HtsFileDeleter> hts_file_;
    std::unique_ptr<bam_hdr_t, HtsHeaderDeleter> hts_header_;
    std::unique_ptr<hts_idx_t, HtsIndexDeleter> hts_index_;
    
    std::unordered_map<std::string, HtsTidType> hts_tid_map_;
    std::unordered_map<HtsTidType, std::string> contig_name_map_;
    std::unordered_map<ReadGroupIdType, SampleIdType> sample_map_;
    
    void init_maps();
    HtsTidType get_htslib_tid(const std::string& contig_name) const;
    const std::string& get_contig_name(HtsTidType hts_tid) const;
    uint64_t get_num_mapped_reads(const std::string& contig_name) const;
};

#endif /* defined(__Octopus__htslib_sam_facade__) */
