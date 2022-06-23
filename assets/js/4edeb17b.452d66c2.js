"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[714],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7751:function(e,t,a){a.r(t),a.d(t,{default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],o={id:"discovery",title:"Variant Discovery"},l={unversionedId:"guides/discovery",id:"guides/discovery",isDocsHomePage:!1,title:"Variant Discovery",description:"In order to call a variant, it must have been 'discovered' and included in the set of candidate variants. Therefore, the final called variants is a subset of candidate variants. To maximise sensitivity, Octopus uses a hybrid approach to variant discovery by combining candidates discovered from multiple strategies.",source:"@site/docs/guides/discovery.md",sourceDirName:"guides",slug:"/guides/discovery",permalink:"/octopus/docs/guides/discovery",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/guides/discovery.md",version:"current",frontMatter:{id:"discovery",title:"Variant Discovery"},sidebar:"docs",previous:{title:"Read Preprocessing",permalink:"/octopus/docs/guides/preprocessing"},next:{title:"Haplotype Proposal",permalink:"/octopus/docs/guides/haplotypes"}},c=[{value:"Pileups",id:"pileups",children:[]},{value:"Repeat expander",id:"repeat-expander",children:[]},{value:"Local reassembly",id:"local-reassembly",children:[]},{value:"Input VCF",id:"input-vcf",children:[]}],d={toc:c};function p(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to call a variant, it must have been 'discovered' and included in the set of candidate variants. Therefore, the final called variants is a subset of candidate variants. To maximise sensitivity, Octopus uses a hybrid approach to variant discovery by combining candidates discovered from multiple strategies. "),(0,r.kt)("h2",{id:"pileups"},"Pileups"),(0,r.kt)("p",null,"The pileup candidate generator discovers variants directly from input alignments (i.e. the mapper CIGAR entries). Mismatch and indel positions are aggregated for filtered input reads, and candidates are accepted based on several criteria."),(0,r.kt)("p",null,"The pileup candidate generator can be disabled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-pileup-candidate-generator")," option."),(0,r.kt)("h2",{id:"repeat-expander"},"Repeat expander"),(0,r.kt)("p",null,"Similar to the pileup candidate generator, the repeat expander candidate generator examines input alignments, but looks for specific patterns of SNV mismatches in compound tandem repeat regions (tandem repeats composed of two or more motifs) that are indicative of misaligned balanced indels. An example is shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus",src:a(5428).Z})),(0,r.kt)("p",null,"The repeat expander candidate generator can be disabled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-repeat-candidate-generator")," option."),(0,r.kt)("h2",{id:"local-reassembly"},"Local reassembly"),(0,r.kt)("p",null,"When input reads are misaligned, the pileup generator may propose false candidates. In such cases, correct variants can still be discovered by assembling reads with a de-Bruijn graph. Both the reference sequence and reads are threaded into the graph and any 'bubbles' (divergences from the reference path) are explored (up to ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--max-bubbles"},(0,r.kt)("inlineCode",{parentName:"a"},"--max-bubbles")),") and scored by counting k-mer observations. To help remove spurious bubbles and increase sensitivity, mismatch bases with low base quality scores (",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--assembler-mask-base-quality"},(0,r.kt)("inlineCode",{parentName:"a"},"--assembler-mask-base-quality")),") are converted to reference before graph threading into the assembly graph. Bubbles with a high score (minimum ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--min-bubble-score"},(0,r.kt)("inlineCode",{parentName:"a"},"--min-bubble-score")),") are extracted from the graph, before the alignment to the reference portion of the bubble with Smith Waterman to find candidate variants."),(0,r.kt)("p",null,"To simplify construction and evaluation, graphs that contain cycles in the reference sequence are not not allowed. This restriction necessitates the use of relatively small reference subsequences (up to ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--max-assembly-region-size"},(0,r.kt)("inlineCode",{parentName:"a"},"--max-assembly-region-size")),"), though cycles can also be avoided with large k-mer sizes. As such, for a given assembly region, assembly is attempted with the multiple k-mer sizes specified with ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--kmer-sizes"},(0,r.kt)("inlineCode",{parentName:"a"},"--kmer-sizes")),". If none of these k-mer sizes result in an acylic graph, then assembly is attempted with up to ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--num-fallback-kmers"},(0,r.kt)("inlineCode",{parentName:"a"},"--num-fallback-kmers")),". By default, graphs containing non-reference cycles are also not allowed as this often results in spurious candidates. However, this restriction can be disabled with the ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--allow-cycles"},(0,r.kt)("inlineCode",{parentName:"a"},"--allow-cycles"))," command."),(0,r.kt)("p",null,"De novo assembly is significantly more complex and time consuming than evaluating pileups, therefore by default assembly is only attempted using reads mapped to small genomic regions (hence local assembly). In addition, only regions considered to have a high likelihood of containing variation are assembled (unless the ",(0,r.kt)("a",{parentName:"p",href:"/octopus/docs/cli#--assemble-all"},(0,r.kt)("inlineCode",{parentName:"a"},"--assemble-all"))," command is specified)."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The maximum assembly region size (",(0,r.kt)("inlineCode",{parentName:"p"},"--max-assembly-region-size"),") implicitly limits the maximum discoverable deletion and complex substitution size. However, using larger region sizes increases the chance of a reference cycle in the assembly graph, necessitating the use of larger k-mer sizes, which can in turn hurt sensitivity."))),(0,r.kt)("p",null,"The assembly candidate generator can be disabled with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-assembly-candidate-generator")," option."),(0,r.kt)("h2",{id:"input-vcf"},"Input VCF"),(0,r.kt)("p",null,"Previously called variants in VCF can be included as candidates with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--source-candidates")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--source-candidates-file")," options. By default, only records with ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTER")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"PASS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".")," are included. To use all variants the ",(0,r.kt)("inlineCode",{parentName:"p"},"--use-filtered-source-candidates")," should be specified."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Supplying input candidates does not guarantee that they will be reported in the final VCF - they are treated just like candidates discovered from the other generators. Octopus does not currently provide complete 'regenotyping' functionality. However, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-denovo-variant-discovery")," command along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--source-candidates")," is a reasonable approximation - the output VCF will be a subset of the input."))))}p.isMDXComponent=!0},5428:function(e,t,a){t.Z=a.p+"assets/images/balanced_indels-2b0b035abe5c8d7942b0977fddb3d8a3.png"}}]);