// Copyright (c) 2016 Daniel Cooke
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

#include "quality_by_depth.hpp"

#include "io/variant/vcf_record.hpp"

namespace octopus { namespace csr {

Measure::ResultType QualityByDepth::do_evaluate(const VcfRecord& call, const FacetMap& facets) const
{
    if (call.qual()) {
        return *call.qual() / std::stod(call.info_value("DP").front());
    } else {
        return 0;
    }
}

std::string QualityByDepth::do_name() const
{
    return "QD";
}

} // namespace csr
} // namespace octopus
