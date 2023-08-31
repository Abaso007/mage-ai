"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6987],{52749:function(e,n,t){var r=t(82394),i=t(82684),o=t(71180),c=t(55485),l=t(93369),d=t(7267),a=t(38276),u=t(30160),s=t(35576),p=t(17488),f=t(72473),h=t(4015),v=t(70515),b=t(31098),j=t(28598);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t,r,m,g=e.createPipeline,Z=e.isLoading,y=e.onClose,O=(0,i.useRef)(null),P=(0,i.useState)(!1),w=P[0],I=P[1],k=(0,i.useState)({name:(0,b.Y6)()}),C=k[0],_=k[1];return(0,i.useEffect)((function(){var e;null===O||void 0===O||null===(e=O.current)||void 0===e||e.focus()}),[]),(0,j.jsxs)(h.Nk,{children:[(0,j.jsx)(h.I5,{children:(0,j.jsx)(c.ZP,{alignItems:"center",justifyContent:"center",children:(0,j.jsx)(f.xq,{size:5*v.iI,warning:!0})})}),(0,j.jsx)(h.gI,{children:(0,j.jsxs)(a.Z,{py:1,children:[(0,j.jsx)(a.Z,{mb:1,children:(0,j.jsx)(u.ZP,{default:!0,children:"New pipeline"})}),(0,j.jsx)(u.ZP,{textOverflow:!0,children:"Using AI"})]})}),(0,j.jsxs)(h.gI,{children:[(0,j.jsx)(u.ZP,{default:!0,children:"Name"}),(0,j.jsx)(p.Z,{alignRight:!0,noBackground:!0,noBorder:!0,onChange:function(e){return _((function(n){return x(x({},n),{},{name:e.target.value})}))},paddingVertical:v.iI,placeholder:"Enter pipeline name...",value:(null===C||void 0===C?void 0:C.name)||""})]}),(0,j.jsx)(h.gI,{children:(0,j.jsxs)(c.ZP,{flexDirection:"column",fullWidth:!0,children:[(0,j.jsx)(a.Z,{mb:2,pt:1,children:(0,j.jsx)(u.ZP,{default:!0,children:"Describe what the pipeline should do"})}),(0,j.jsxs)(a.Z,{pb:1,pr:v.cd,children:[(0,j.jsx)(s.Z,{fullWidth:!0,onChange:function(e){return _((function(n){return x(x({},n),{},{llm:{request:{pipeline_description:e.target.value},use_case:d.z.GENERATE_PIPELINE_WITH_DESCRIPTION}})}))},placeholder:"Type the pipeline purpose...",ref:O,rows:8,value:(null===C||void 0===C||null===(n=C.llm)||void 0===n||null===(t=n.request)||void 0===t?void 0:t.pipeline_description)||""}),(Z||w)&&(0,j.jsx)(a.Z,{mt:1,children:(0,j.jsx)(u.ZP,{warning:!0,children:"Pipeline is being generated using AI based on your description above..."})})]})]})}),(0,j.jsx)(h.$b,{children:(0,j.jsxs)(c.ZP,{fullWidth:!0,children:[(0,j.jsx)(l.ZP,{bold:!0,centerText:!0,disabled:!(null!==C&&void 0!==C&&C.name)||!(null!==C&&void 0!==C&&null!==(r=C.llm)&&void 0!==r&&null!==(m=r.request)&&void 0!==m&&m.pipeline_description),loading:Z||w,onClick:function(){I(!0),g({pipeline:C}).then((function(){return I(!1)}))},primary:!0,tabIndex:0,uuid:"AIControlPanel/CreatePipeline",children:"Create pipeline"}),y&&(0,j.jsx)(a.Z,{ml:1,children:(0,j.jsx)(o.Z,{onClick:y,tabIndex:0,children:"Cancel"})})]})})]})}},94629:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(82394),i=t(21831),o=t(82684),c=t(50724),l=t(82555),d=t(97618),a=t(70613),u=t(59696),s=t(68899),p=t(28598);function f(e,n){var t=e.children;return(0,p.jsx)(s.HS,{ref:n,children:t})}var h=o.forwardRef(f),v=t(62547),b=t(82571),j=t(35686),m=t(98464),x=t(46684),g=t(70515),Z=t(53808),y=t(19183);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,f=e.afterHidden,O=e.afterWidth,w=e.afterWidthOverride,I=e.before,k=e.beforeWidth,C=e.breadcrumbs,_=e.children,S=e.errors,N=e.headerMenuItems,E=e.headerOffset,D=e.mainContainerHeader,B=e.navigationItems,M=e.setErrors,A=e.subheaderChildren,T=e.title,H=e.uuid,R=(0,y.i)().width,W="dashboard_after_width_".concat(H),q="dashboard_before_width_".concat(H),z=(0,o.useRef)(null),F=(0,o.useState)(w?O:(0,Z.U2)(W,O)),L=F[0],U=F[1],G=(0,o.useState)(!1),V=G[0],Y=G[1],$=(0,o.useState)(I?Math.max((0,Z.U2)(q,k),13*g.iI):null),K=$[0],Q=$[1],X=(0,o.useState)(!1),J=X[0],ee=X[1],ne=(0,o.useState)(null)[1],te=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];C?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(C))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return T}}]),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||V||J||null===ne||void 0===ne||ne(z.current.getBoundingClientRect().width)}),[V,L,J,K,z,ne,R]),(0,o.useEffect)((function(){V||(0,Z.t8)(W,L)}),[f,V,L,W]),(0,o.useEffect)((function(){J||(0,Z.t8)(q,K)}),[J,K,q]);var ce=(0,m.Z)(O);return(0,o.useEffect)((function(){w&&ce!==O&&U(O)}),[w,O,ce]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{title:T}),(0,p.jsx)(u.Z,{breadcrumbs:oe,menuItems:N,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,p.jsxs)(s.Nk,{children:[0!==(null===B||void 0===B?void 0:B.length)&&(0,p.jsx)(s.lm,{showMore:!0,children:(0,p.jsx)(b.Z,{navigationItems:B,showMore:!0})}),(0,p.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:r,afterHeightOffset:x.Mz,afterHidden:f,afterMousedownActive:V,afterWidth:L,before:I,beforeHeightOffset:x.Mz,beforeMousedownActive:J,beforeWidth:s.k1+(I?K:0),headerOffset:E,hideAfterCompletely:!0,leftOffset:I?s.k1:null,mainContainerHeader:D,mainContainerRef:z,setAfterMousedownActive:Y,setAfterWidth:U,setBeforeMousedownActive:ee,setBeforeWidth:Q,children:[A&&(0,p.jsx)(h,{children:A}),_]})})]}),S&&(0,p.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===M||void 0===M?void 0:M(null)},children:(0,p.jsx)(l.Z,P(P({},S),{},{onClose:function(){return null===M||void 0===M?void 0:M(null)}}))})]})}},65458:function(e,n,t){t.d(n,{d:function(){return u}});var r=t(13507),i=t(72473),o=t(57653),c=t(70515),l=t(31098),d=t(28598),a=1.5*c.iI,u=function(e,n){var t=[{beforeIcon:(0,d.jsx)(i.X5,{}),label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,l.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{beforeIcon:(0,d.jsx)(i.ZG,{}),label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,l.Y6)(),type:o.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{beforeIcon:(0,d.jsx)(r.Z,{size:a}),label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,l.Y6)(),type:o.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&t.push({beforeIcon:(0,d.jsx)(i.zQ,{}),label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),null!==n&&void 0!==n&&n.showAIModal&&t.push({beforeIcon:(0,d.jsx)(i.xq,{}),label:function(){return"Using AI (beta)"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showAIModal)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/AI_modal"}),t}},4015:function(e,n,t){t.d(n,{$b:function(){return u},I5:function(){return d},Nk:function(){return l},gI:function(){return a}});var r=t(38626),i=t(44897),o=t(42631),c=t(70515),l=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-h093u4-0"})([""," ",""],(function(e){return!e.width&&"\n    width: ".concat(40*c.iI,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-h093u4-1"})(["padding:","px;",""],2.5*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-top-left-radius: ").concat(o.n_,"px;\n    border-top-right-radius: ").concat(o.n_,"px;\n    border-top: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n  ")})),a=r.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-h093u4-2"})(["align-items:center;justify-content:space-between;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-top: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    display: ").concat((null===e||void 0===e?void 0:e.display)||"flex",";\n    padding-bottom: ").concat(1*c.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n    padding-left: ").concat(c.cd*c.iI,"px;\n    padding-top: ").concat(1*c.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n  ")})),u=r.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-h093u4-3"})(["padding:","px ","px;",""],2.5*c.iI,2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n    border-bottom-left-radius: ").concat(o.n_,"px;\n    border-bottom-right-radius: ").concat(o.n_,"px;\n    border-bottom: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||i.Z.interactive).defaultBorder,";\n  ")}))},55729:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(82394),i=t(75582),o=t(82684),c=t(83455),l=t(71180),d=t(15338),a=t(97618),u=t(55485),s=t(85854),p=t(48670),f=t(65956),h=t(38276),v=t(30160),b=t(17488),j=t(69650),m=t(35686),x=t(38626),g=t(44897),Z=t(42631),y=t(70515),O=x.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],Z.n_,y.cd*y.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||g.Z.background).codeArea,";\n  ")})),P=t(72619),w=t(23780),I=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n=e.cancelButtonText,t=e.contained,x=e.header,g=e.onCancel,Z=e.onSaveSuccess,k=(0,w.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),_=(0,i.Z)(k,1)[0],S=(0,o.useState)(null),N=S[0],E=S[1],D=m.ZP.projects.list(),B=D.data,M=D.mutate,A=(0,o.useMemo)((function(){var e;return null===B||void 0===B||null===(e=B.projects)||void 0===e?void 0:e[0]}),[B]),T=A||{},H=T.name,R=T.project_uuid;(0,o.useEffect)((function(){N||E(A)}),[A,N]);var W=(0,c.Db)(m.ZP.projects.useUpdate(H),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.project;M(),E(n),Z&&(null===Z||void 0===Z||Z(n))},onErrorCallback:function(e,n){return _({errors:n,response:e})}})}}),q=(0,i.Z)(W,2),z=q[0],F=q[1].isLoading,L=(0,o.useCallback)((function(e){return z({project:e})}),[z]),U=(0,I.jsxs)(I.Fragment,{children:[x,(0,I.jsxs)(f.Z,{noPadding:!0,children:[(0,I.jsxs)(h.Z,{p:y.cd,children:[(0,I.jsx)(h.Z,{mb:1,children:(0,I.jsx)(s.Z,{level:5,children:"Project name"})}),(0,I.jsx)(v.ZP,{default:!0,monospace:!0,children:H})]}),(0,I.jsx)(d.Z,{light:!0}),(0,I.jsxs)(h.Z,{p:y.cd,children:[(0,I.jsx)(h.Z,{mb:1,children:(0,I.jsx)(s.Z,{level:5,children:"Project UUID"})}),(0,I.jsx)(v.ZP,{default:!!R,monospace:!0,muted:!R,children:R||"Not required"})]}),(0,I.jsx)(d.Z,{light:!0}),(0,I.jsx)(h.Z,{p:y.cd,children:(0,I.jsxs)(u.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,I.jsxs)(a.Z,{flexDirection:"column",children:[(0,I.jsx)(h.Z,{mb:1,children:(0,I.jsx)(s.Z,{level:5,children:"Help improve Mage"})}),(0,I.jsxs)(v.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,I.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,I.jsx)(h.Z,{mr:y.cd}),(0,I.jsx)(j.Z,{checked:null===N||void 0===N?void 0:N.help_improve_mage,onCheck:function(){return E((function(e){return C(C({},e),{},{help_improve_mage:!(null!==N&&void 0!==N&&N.help_improve_mage)})}))}})]})})]}),(0,I.jsx)(h.Z,{mt:y.HN}),(0,I.jsx)(f.Z,{noPadding:!0,children:(0,I.jsxs)(h.Z,{p:y.cd,children:[(0,I.jsx)(h.Z,{mb:1,children:(0,I.jsx)(s.Z,{level:5,children:"Features"})}),Object.entries((null===N||void 0===N?void 0:N.features)||{}).map((function(e){var n=(0,i.Z)(e,2),t=n[0],o=n[1];return(0,I.jsxs)(u.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,I.jsx)(v.ZP,{default:!0,monospace:!0,children:t}),(0,I.jsx)(h.Z,{mr:y.cd}),(0,I.jsx)(j.Z,{checked:!!o,onCheck:function(){return E((function(e){return C(C({},e),{},{features:C(C({},null===N||void 0===N?void 0:N.features),{},(0,r.Z)({},t,!o))})}))}})]},t)}))]})}),(0,I.jsx)(h.Z,{mt:y.HN}),(0,I.jsx)(f.Z,{noPadding:!0,children:(0,I.jsxs)(h.Z,{p:y.cd,children:[(0,I.jsx)(h.Z,{mb:1,children:(0,I.jsx)(s.Z,{level:5,children:"OpenAI"})}),(0,I.jsx)(b.Z,{label:"API key",monospace:!0,onChange:function(e){return E((function(n){return C(C({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===N||void 0===N?void 0:N.openai_api_key)||""})]})}),(0,I.jsx)(h.Z,{mt:y.HN}),(0,I.jsxs)(u.ZP,{alignItems:"center",children:[(0,I.jsx)(l.Z,{loading:F,onClick:function(){L({features:null===N||void 0===N?void 0:N.features,help_improve_mage:null===N||void 0===N?void 0:N.help_improve_mage,openai_api_key:null===N||void 0===N?void 0:N.openai_api_key})},primary:!0,children:"Save project settings"}),g&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h.Z,{mr:y.cd}),(0,I.jsx)(l.Z,{onClick:g,secondary:!0,children:n||"Cancel"})]})]})]});return t?(0,I.jsx)(O,{children:U}):U}},81066:function(e,n,t){t.d(n,{B:function(){return p}});var r=t(82394),i=t(46732),o=t(93369),c=t(72473),l=t(8059),d=t(70515),a=t(28598);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,r=e.isLoading,u=e.label,f=e.menuItems,h=e.onClick,v=e.onClickCallback;return(0,a.jsx)(i.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:v,onClickOutside:v,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,a.jsx)(o.ZP,s(s({},p),{},{background:l.eW,beforeElement:(0,a.jsx)(c.mm,{size:2.5*d.iI}),loading:r,onClick:function(e){e.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:u}))})}}}]);