(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[152],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9497:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],c={id:"preprocessing",title:"Read Preprocessing"},s={unversionedId:"guides/preprocessing",id:"guides/preprocessing",isDocsHomePage:!1,title:"Read Preprocessing",description:"The basic idea of read pre-processing is to remove or modify reads containing artifact sequences that are likely to mislead variant calling or increase runtime by introducing spurious candidates.",source:"@site/docs/guides/preprocessing.md",sourceDirName:"guides",slug:"/guides/preprocessing",permalink:"/octopus/docs/guides/preprocessing",editUrl:"https://github.com/${organizationName}/${projectName}/edit/${branch}/website/docs/guides/preprocessing.md",version:"current",frontMatter:{id:"preprocessing",title:"Read Preprocessing"},sidebar:"docs",previous:{title:"Installation",permalink:"/octopus/docs/installation"},next:{title:"Variant Discovery",permalink:"/octopus/docs/guides/discovery"}},p=[{value:"Deduplication",id:"deduplication",children:[]}],u={toc:p};function l(e){var r=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The basic idea of read pre-processing is to remove or modify reads containing artifact sequences that are likely to mislead variant calling or increase runtime by introducing spurious candidates."),(0,o.kt)("h2",{id:"deduplication"},"Deduplication"),(0,o.kt)("p",null,"Read duplicates can arise during sequencing in several ways, and are library-prep and technology dependent:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:t(4894).Z})),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.cureffi.org/2012/12/11/how-pcr-duplicates-arise-in-next-generation-sequencing/"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"http://core-genomics.blogspot.com/2016/05/increased-read-duplication-on-patterned.html"},"here")," for more detailed discussions on how duplicates arise. "),(0,o.kt)("p",null,"Duplicates can be problematic for variant calling as they can introduce systematic error (e.g. copying errors during PCR). Removing them is usually recommended for WGS libraries, but this remains somewhat ",(0,o.kt)("a",{parentName:"p",href:"https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-016-1097-3"},"controversial"),"."))}l.isMDXComponent=!0},4894:function(e,r,t){"use strict";r.Z=t.p+"assets/images/duplicates-1f7022d7613287f5986d27a147fa17f4.png"}}]);