(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{402:function(n,t,l){"use strict";l.r(t);var s=l(0),e=function(){return function(){}}();var a,o,i={demo:function(){return{label:"Tooltip",tabs:{Demo:e,"README.md":{type:"md",content:l(518)},"demo.component.html":{type:"pre",content:l(517)},"demo.component.ts":{type:"pre",content:l(516)}}}}},u=function(){return function(){}}();a||(a={}),o||(o={});var p=function(){function n(n,t,l,s){this.element=n,this.document=t,this.renderer=l,this.tooltipService=s,this.debug=!1,this.placement=o.Top,this._animationState=a.Hidden,this.showArrowPointer=!0,this.tooltipPlacement={Top:-1e3,Left:-1e3},this.showOnInit=!1}return n.prototype.ngOnChanges=function(n){(n.placement||n.content||n.animationState)&&this.showTooltip()()},n.prototype.ngAfterViewInit=function(){var t=this,l=n.Tag+".ngAfterViewInit()",s=this.debug||!1;s&&console.log(l,"this:",this),s&&console.log(l,"this.animationState:",this.animationState),setTimeout(function(){t.showOnInit||t.animationState===a.Shown?setTimeout(function(){return t.showTooltip()()}):t.animationState||(t._animationState=a.None,t.renderer.listen(t.hostElement,"mouseenter",function(){return t.showTooltip()}),t.renderer.listen(t.hostElement,"focusin",function(){return t.showTooltip()}),t.renderer.listen(t.hostElement,"focusout",function(){t._animationState=a.Hidden}),t.renderer.listen(t.hostElement,"mouseleave",function(){t._animationState=a.Hidden}))})},n.prototype.showTooltip=function(){var t=this,l=n.Tag+".showTooltip()",s=this.debug||!1;return function(){if(t.hostElement){var n=t.tooltipService.positionElements(t.hostElement,t.element.nativeElement.children[0].children[0],t.placement);return s&&console.log(l,"tooltipOffset:",n),t.tooltipPlacement={Top:n.Top,Left:n.Left},s&&console.log(l,"this.tooltipPlacement:",t.tooltipPlacement),t._animationState=a.Shown,t.document.querySelector("body").appendChild(t.element.nativeElement),!0}return console.error("Host element not specified"),!1}},Object.defineProperty(n.prototype,"tooltipPosition",{get:function(){switch(this.placement){case o.Right:return"vclTooltip vclArrowPointerLeft";case o.Left:return"vclTooltip vclArrowPointerRight";case o.Bottom:return"vclTooltip vclArrowPointerTop";case o.Top:default:return"vclTooltip vclArrowPointerBottom"}},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this.showOnInit||this.element.nativeElement.parentNode.removeChild(this.element.nativeElement)},n.Tag="TooltipComponent",n}(),c=l(6),r=function(){function n(){this.offsetCorrection=10}return n.prototype.positionElements=function(n,t,l,s){void 0===s&&(s=!1);var e,a=l,o=s?this.offset(n):this.position(n),i=t.offsetWidth,u=t.offsetHeight,p={center:function(){return o.left+o.width/2-i/2},left:function(){return o.left},right:function(){return o.left+o.width}},c={center:function(){return o.top+o.height/2-u/2},top:function(){return o.top},bottom:function(){return o.top+o.height}};switch(a){case"right":e={Top:c.center(),Left:p[a]()+this.offsetCorrection};break;case"left":e={Top:c.center(),Left:o.left-i-this.offsetCorrection};break;case"bottom":e={Top:c[a]()+this.offsetCorrection,Left:p.center()};break;default:e={Top:o.top-u-this.offsetCorrection,Left:p.center()}}return e},n.prototype.position=function(n){var t={top:0,left:0},l=this.offset(n),s=this.parentOffsetEl(n);s!==window.document&&((t=this.offset(s)).top+=s.clientTop-s.scrollTop,t.left+=s.clientLeft-s.scrollLeft);var e=n.getBoundingClientRect();return{width:e.width||n.offsetWidth,height:e.height||n.offsetHeight,top:l.top-t.top,left:l.left-t.left}},n.prototype.offset=function(n){var t=n.getBoundingClientRect();return{width:t.width||n.offsetWidth,height:t.height||n.offsetHeight,top:t.top+(window.pageYOffset||window.document.documentElement.scrollTop),left:t.left+(window.pageXOffset||window.document.documentElement.scrollLeft)}},n.prototype.getStyle=function(n,t){return n.currentStyle?n.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(n)[t]:n.style[t]},n.prototype.isStaticPositioned=function(n){return"static"===(this.getStyle(n,"position")||"static")},n.prototype.parentOffsetEl=function(n){for(var t=n.offsetParent||window.document;t&&t!==window.document&&this.isStaticPositioned(t);)t=t.offsetParent;return t||window.document},n}(),h=s.Xa({encapsulation:0,styles:["[_nghost-%COMP%]{ top: 0; left: 0 }"],data:{animation:[{type:7,name:"enterAnimation",definitions:[{type:0,name:"shown",styles:{type:6,styles:{opacity:1,"z-index":"initial"},offset:null},options:void 0},{type:0,name:"hidden",styles:{type:6,styles:{opacity:0,"z-index":"-1"},offset:null},options:void 0},{type:0,name:"none",styles:{type:6,styles:{opacity:0},offset:null},options:void 0},{type:1,expr:"hidden => shown",animation:{type:4,styles:null,timings:"0.2s"},options:null}],options:{}}]}});function d(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,4,"div",[["role","tooltip"],["style","white-space:nowrap;"]],[[24,"@enterAnimation",0],[4,"left",null],[4,"top",null],[8,"className",0]],null,null,null,null)),(n()(),s.Za(1,0,null,null,2,"div",[["class","vclTooltipContent"]],null,null,null,null,null)),(n()(),s.qb(2,null,[" "," "])),s.ib(null,0),(n()(),s.Za(4,0,null,null,0,"div",[],[[2,"vclArrowPointer",null]],null,null,null,null))],null,function(n,t){var l=t.component;n(t,0,0,l.animationState||l._animationState,l.tooltipPlacement.Left+"px",l.tooltipPlacement.Top+"px",l.tooltipPosition),n(t,2,0,l.content),n(t,4,0,l.showArrowPointer)})}var f=s.Va("vcl-tooltip",p,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"vcl-tooltip",[],[[2,"vclTooltip",null]],null,null,d,h)),s.Ya(1,4898816,null,0,p,[s.n,c.b,s.N,r],null,null)],null,function(n,t){n(t,0,0,!0)})},{debug:"debug",content:"content",placement:"placement",hostElement:"hostElement",animationState:"animationState",showArrowPointer:"showArrowPointer"},{},["*"]),m=l(411),g=function(){function n(n,t,l,s){this.element=n,this.resolver=t,this.viewContainerRef=l,this.document=s,this.content=""}return n.prototype.ngOnChanges=function(n){this.tooltip&&(n.content?this.tooltip.instance.content=this.content:n.position&&(this.tooltip.instance.placement=this.position))},n.prototype.onMouseEnter=function(){var n=this.resolver.resolveComponentFactory(p);this.tooltip=this.viewContainerRef.createComponent(n),this.tooltip.instance.content=this.content,this.tooltip.instance.placement=this.position,this.tooltip.instance.hostElement=this.element.nativeElement,this.tooltip.instance.showOnInit=!0},n.prototype.ngOnDestroy=function(){this.tooltip&&this.tooltip.destroy()},n}(),b=function(){return function(){}}(),j=s.Xa({encapsulation:2,styles:[],data:{}});function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,3,"div",[["class","vclLayoutHorizontal vclLayoutCenter"]],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,0,"img",[["src","http://lorempixel.com/50/50/cats/"]],null,null,null,null,null)),(n()(),s.Za(2,0,null,null,1,"span",[["class","vclGutterMarginLR"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Tooltip with rich content "]))],null,null)}var y=s.Xa({encapsulation:0,styles:["p[_ngcontent-%COMP%]{ text-align:center;padding-top:30px}"],data:{}});function T(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,16,"div",[["style","display: flex;height:100px"]],null,null,null,null,null)),(n()(),s.Za(1,16777216,null,null,3,"div",[["content","Tooltip on the top"],["style","background-color:#E6E6E6;flex:1"],["vcl-tooltip",""]],null,[[null,"mouseenter"],[null,"focusin"],[null,"focusout"],[null,"mouseleave"]],function(n,t,l){var e=!0;"mouseenter"===t&&(e=!1!==s.jb(n,2).onMouseEnter()&&e);"focusin"===t&&(e=!1!==s.jb(n,2).onMouseEnter()&&e);"focusout"===t&&(e=!1!==s.jb(n,2).ngOnDestroy()&&e);"mouseleave"===t&&(e=!1!==s.jb(n,2).ngOnDestroy()&&e);return e},null,null)),s.Ya(2,671744,null,0,g,[s.n,s.k,s.Aa,c.b],{content:[0,"content"]},null),(n()(),s.Za(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Tooltip on the top"])),(n()(),s.Za(5,16777216,null,null,3,"div",[["content","Tooltip on the right"],["position","right"],["style","background-color:#D8D8D8;flex:1"],["vcl-tooltip",""]],null,[[null,"mouseenter"],[null,"focusin"],[null,"focusout"],[null,"mouseleave"]],function(n,t,l){var e=!0;"mouseenter"===t&&(e=!1!==s.jb(n,6).onMouseEnter()&&e);"focusin"===t&&(e=!1!==s.jb(n,6).onMouseEnter()&&e);"focusout"===t&&(e=!1!==s.jb(n,6).ngOnDestroy()&&e);"mouseleave"===t&&(e=!1!==s.jb(n,6).ngOnDestroy()&&e);return e},null,null)),s.Ya(6,671744,null,0,g,[s.n,s.k,s.Aa,c.b],{content:[0,"content"],position:[1,"position"]},null),(n()(),s.Za(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Tooltip on the right"])),(n()(),s.Za(9,16777216,null,null,3,"div",[["content","Tooltip on the left"],["position","left"],["style","background-color:#BDBDBD;flex:1"],["vcl-tooltip",""]],null,[[null,"mouseenter"],[null,"focusin"],[null,"focusout"],[null,"mouseleave"]],function(n,t,l){var e=!0;"mouseenter"===t&&(e=!1!==s.jb(n,10).onMouseEnter()&&e);"focusin"===t&&(e=!1!==s.jb(n,10).onMouseEnter()&&e);"focusout"===t&&(e=!1!==s.jb(n,10).ngOnDestroy()&&e);"mouseleave"===t&&(e=!1!==s.jb(n,10).ngOnDestroy()&&e);return e},null,null)),s.Ya(10,671744,null,0,g,[s.n,s.k,s.Aa,c.b],{content:[0,"content"],position:[1,"position"]},null),(n()(),s.Za(11,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Tooltip on the left"])),(n()(),s.Za(13,16777216,null,null,3,"div",[["content","Tooltip on the bottom"],["position","bottom"],["style","background-color:#A4A4A4;flex:1"],["vcl-tooltip",""]],null,[[null,"mouseenter"],[null,"focusin"],[null,"focusout"],[null,"mouseleave"]],function(n,t,l){var e=!0;"mouseenter"===t&&(e=!1!==s.jb(n,14).onMouseEnter()&&e);"focusin"===t&&(e=!1!==s.jb(n,14).onMouseEnter()&&e);"focusout"===t&&(e=!1!==s.jb(n,14).ngOnDestroy()&&e);"mouseleave"===t&&(e=!1!==s.jb(n,14).ngOnDestroy()&&e);return e},null,null)),s.Ya(14,671744,null,0,g,[s.n,s.k,s.Aa,c.b],{content:[0,"content"],position:[1,"position"]},null),(n()(),s.Za(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Tooltip on the bottom"])),(n()(),s.Za(17,0,null,null,13,"div",[["style","display: flex;height:100px"]],null,null,null,null,null)),(n()(),s.Za(18,0,[["hostContainer1",1]],null,5,"div",[["style","background-color:#A4A4A4;flex:0.25"]],null,null,null,null,null)),(n()(),s.Za(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Custom tooltip"])),(n()(),s.Za(21,0,null,null,2,"vcl-tooltip",[["class","vclLayoutHorizontal vclLayoutCenter"]],[[2,"vclTooltip",null]],null,null,d,h)),s.Ya(22,4898816,null,0,p,[s.n,c.b,s.N,r],{hostElement:[0,"hostElement"]},null),(n()(),s.qb(-1,0,[" Custom tooltip "])),(n()(),s.Za(24,0,[["hostContainer2",1]],null,6,"div",[["style","background-color:#BDBDBD;flex:0.25"]],null,null,null,null,null)),(n()(),s.Za(25,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Custom tooltip with rich content"])),(n()(),s.Za(27,0,null,null,3,"vcl-tooltip",[["placement","right"]],[[2,"vclTooltip",null]],null,null,d,h)),s.Ya(28,4898816,null,0,p,[s.n,c.b,s.N,r],{placement:[0,"placement"],hostElement:[1,"hostElement"]},null),(n()(),s.Za(29,0,null,0,1,"my-tooltip-sample",[],null,null,null,v,j)),s.Ya(30,49152,null,0,b,[],null,null)],function(n,t){n(t,2,0,"Tooltip on the top");n(t,6,0,"Tooltip on the right","right");n(t,10,0,"Tooltip on the left","left");n(t,14,0,"Tooltip on the bottom","bottom"),n(t,22,0,s.jb(t,18));n(t,28,0,"right",s.jb(t,24))},function(n,t){n(t,21,0,!0);n(t,27,0,!0)})}var w=s.Va("ng-component",e,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,T,y)),s.Ya(1,49152,null,0,e,[],null,null)],null,null)},{},{},[]),x=l(3),C=l(172),E=l(412),A=l(410),Z=function(){return function(){}}(),D=l(4),O=l(409);l.d(t,"ToolTipDemoModuleNgFactory",function(){return k});var k=s.Wa(u,[],function(n){return s.gb([s.hb(512,s.k,s.La,[[8,[f,m.a,w]],[3,s.k],s.E]),s.hb(4608,x.n,x.m,[s.A,[2,x.v]]),s.hb(4608,r,r,[]),s.hb(1073742336,x.c,x.c,[]),s.hb(1073742336,C.a,C.a,[]),s.hb(1073742336,E.a,E.a,[]),s.hb(1073742336,A.a,A.a,[]),s.hb(1073742336,Z,Z,[]),s.hb(1073742336,D.m,D.m,[[2,D.r],[2,D.l]]),s.hb(1073742336,u,u,[]),s.hb(1024,D.j,function(){return[[{path:"",component:O.a,data:i}]]},[])])})},409:function(n,t,l){"use strict";l.d(t,"a",function(){return s});var s=function(){function n(n,t){this.activatedRoute=n,this.sanitizer=t,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,t=this.activatedRoute.snapshot.data.demo();t?(this.title=t.label,t.tabs?this.tabs=Object.keys(t.tabs).map(function(l){var s,e;return"object"==typeof t.tabs[l]&&t.tabs[l]?e="pre"===(s=t.tabs[l].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(t.tabs[l].content):t.tabs[l].content:"function"==typeof t.tabs[l]&&(s="component",e=t.tabs[l]),{name:l,content:e,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},410:function(n,t,l){"use strict";l.d(t,"a",function(){return s});l(409);var s=function(){return function(){}}()},411:function(n,t,l){"use strict";l.d(t,"a",function(){return x});var s=l(0),e=l(354),a=l(416),o=l(415),i=l(3),u=l(414),p=l(413),c=l(409),r=l(4),h=l(6),d=s.Xa({encapsulation:2,styles:[],data:{}});function f(n){return s.sb(0,[(n()(),s.qb(0,null,["",""]))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.name)})}function m(n){return s.sb(0,[(n()(),s.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(1,671744,null,0,e.a,[s.Aa],{target:[0,"target"]},null),(n()(),s.Qa(0,null,null,0))],function(n,t){n(t,1,0,t.parent.context.$implicit.content)},null)}function g(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.qb(2,null,["",""]))],null,function(n,t){n(t,2,0,t.parent.context.$implicit.content)})}function b(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function j(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.content)})}function y(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),s.Ya(1,49152,[[1,4]],1,o.a,[],null,null),s.ob(335544320,2,{label:0}),(n()(),s.Qa(0,[[2,2]],0,1,null,f)),s.Ya(4,16384,null,0,o.b,[],null,null),(n()(),s.Qa(16777216,null,0,1,null,m)),s.Ya(6,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,g)),s.Ya(8,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,b)),s.Ya(10,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,j)),s.Ya(12,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,v)),s.Ya(14,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,6,0,"component"===t.context.$implicit.type),n(t,8,0,"text"===t.context.$implicit.type),n(t,10,0,"html"===t.context.$implicit.type),n(t,12,0,"md"===t.context.$implicit.type),n(t,14,0,"pre"===t.context.$implicit.type)},null)}function T(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,u.b,u.a)),s.Ya(2,1228800,null,1,p.a,[],{borders:[0,"borders"]},null),s.ob(603979776,1,{tabs:1}),(n()(),s.Qa(16777216,null,0,1,null,y)),s.Ya(5,802816,null,0,i.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,2,0,"true"),n(t,5,0,l.tabs)},null)}function w(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.qb(1,null,[" ",""])),(n()(),s.Qa(16777216,null,null,1,null,T)),s.Ya(3,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,3,0,t.component.tabs.length>0)},function(n,t){n(t,1,0,t.component.title)})}var x=s.Va("ng-component",c.a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,w,d)),s.Ya(1,114688,null,0,c.a,[r.a,h.c],null,null)],function(n,t){n(t,1,0)},null)},{},{},[])},412:function(n,t,l){"use strict";l.d(t,"a",function(){return s});var s=function(){return function(){}}()},413:function(n,t,l){"use strict";l.d(t,"a",function(){return o});var s=l(89),e=l(0),a=l(415),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var t,l,s=this.tabs.toArray();n instanceof a.a?(t=s.indexOf(n),l=n):"number"==typeof n&&s[n]?l=s[t=n]:(t=-1,l=null),t>=0&&l instanceof a.a&&!l.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(l.content)),this.selectedTabIndex=t)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},414:function(n,t,l){"use strict";l.d(t,"a",function(){return i}),l.d(t,"b",function(){return p});var s=l(0),e=l(354),a=l(3),o=l(413),i=s.Xa({encapsulation:2,styles:[],data:{}});function u(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,t,l){var s=!0,e=n.component;"tap"===t&&(s=!1!==e.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(3,671744,null,0,e.a,[s.Aa],{target:[0,"target"]},null)],function(n,t){n(t,3,0,t.context.$implicit.label)},function(n,t){var l=t.component;n(t,0,0,s.bb(1,"vclTab ",t.context.$implicit.tabClass,""),t.context.$implicit.disabled,l.selectedTabIndex===t.context.index,l.selectedTabIndex===t.context.index)})}function p(n){return s.sb(0,[s.ob(402653184,1,{tabContent:0}),(n()(),s.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.Qa(16777216,null,null,1,null,u)),s.Ya(4,802816,null,0,a.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.ib(null,0)],function(n,t){n(t,4,0,t.component.tabs)},function(n,t){var l=t.component;n(t,1,0,s.bb(1,"vclTabbable ",l.tabbableClass,""),"left"===l.layout,"right"===l.layout),n(t,2,0,s.bb(1,"vclTabs ",l.tabsClass,""),!!l.borders),n(t,5,0,!0===l.hideContent?"none":null,s.bb(1,"vclTabContent ",l.tabContentClass,""),!l.borders)})}o.a},415:function(n,t,l){"use strict";l.d(t,"b",function(){return s}),l.d(t,"a",function(){return e});var s=function(){return function(){}}(),e=function(){return function(){this.disabled=!1,this.tabClass=""}}()},416:function(n,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return i});var s=l(0),e=l(415),a=s.Xa({encapsulation:2,styles:[],data:{}});function o(n){return s.sb(0,[s.ib(null,0),(n()(),s.Qa(0,null,null,0))],null,null)}function i(n){return s.sb(0,[s.ob(402653184,1,{content:0}),(n()(),s.Qa(0,[[1,2]],null,0,null,o))],null,null)}e.a},516:function(n,t){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n    templateUrl: <span class="hljs-string">\'./demo.component.html\'</span>,\n    styles: [<span class="hljs-string">`p{ text-align:center;padding-top:30px}`</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ToolTipDemoComponent  {\n\n}\n'},517:function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex;height:100px"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Tooltip on the top"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#E6E6E6;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the top<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Tooltip on the right"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#D8D8D8;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the right<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"left"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Tooltip on the left"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the left<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Tooltip on the bottom"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Tooltip on the bottom<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: flex;height:100px"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">hostContainer1</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#A4A4A4;flex:0.25"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Custom tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> [<span class="hljs-attr">hostElement</span>]=<span class="hljs-string">"hostContainer1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal vclLayoutCenter"</span>&gt;</span>\n      Custom tooltip\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">hostContainer2</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color:#BDBDBD;flex:0.25"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Custom tooltip with rich content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> [<span class="hljs-attr">hostElement</span>]=<span class="hljs-string">"hostContainer2"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">my-tooltip-sample</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-tooltip-sample</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},518:function(n,t){n.exports='<h1 id="vcl-tooltip">vcl-tooltip</h1>\n<h2 id="usage">Usage</h2>\n<p><code>vcl-tooltip</code> directive with <code>content</code> input is the minimal settings required to set up tooltip.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Tooltip on the top&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n<p>Default tooltip placement is at the <code>top</code> of target element. To change tooltip placement set <code>position</code> value to either <code>right</code>, <code>left</code> or <code>bottom</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vcl-tooltip</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Tooltip on the right&quot;</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n<p>The content can also be made up of other components.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">hostElement</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tooltip</span> [<span class="hljs-attr">hostElement</span>]=<span class="hljs-string">&quot;hostElement&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">my-component</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">my-component</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether to output debug information</td>\n</tr>\n<tr>\n<td><code>content</code></td>\n<td>string</td>\n<td></td>\n<td>Content displayed within the tooltip (for the directive)</td>\n</tr>\n<tr>\n<td><code>placement</code></td>\n<td>Placement</td>\n<td>Placement.Top</td>\n<td>Placement of the tooltip</td>\n</tr>\n<tr>\n<td><code>hostElement</code></td>\n<td>HTMLElement</td>\n<td></td>\n<td>The describyed element by the tooltip</td>\n</tr>\n<tr>\n<td><code>animationState</code></td>\n<td>AnimationState</td>\n<td></td>\n<td>Override the tooltip</td>\n</tr>\n<tr>\n<td><code>showArrowPointer</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Whether to show the tooltip&apos;s arrow pointer</td>\n</tr>\n</tbody>\n</table>\n'}}]);