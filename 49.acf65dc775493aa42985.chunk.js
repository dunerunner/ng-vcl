(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{188:function(n,l,a){"use strict";a.d(l,"a",function(){return e});var s=a(7),t=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var a in l)l.hasOwnProperty(a)&&(n[a]=l[a])};return function(l,a){function s(){this.constructor=l}n(l,a),l.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}(),e=function(n){function l(l){return n.call(this,l)||this}return t(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var a=n.target.currentValue;a&&(this.wormhole=this.connectWormhole(a,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(s.b)},387:function(n,l,a){"use strict";a.r(l);var s=a(0),t=function(){return function(){}}();var e={demo:function(){return{label:"Badge",tabs:{Demo:t,"README.md":{type:"md",content:a(648)},"demo.component.html":{type:"pre",content:a(647)},"demo.component.ts":{type:"pre",content:a(646)}}}}},u=function(){return function(){}}(),c=a(407),r=function(){function n(){}return Object.defineProperty(n.prototype,"vclPrimary",{get:function(){return"primary"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclSuccess",{get:function(){return"success"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclInfo",{get:function(){return"info"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclWarning",{get:function(){return"warning"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"vclError",{get:function(){return"error"===this.type},enumerable:!0,configurable:!0}),n}(),o=s.Xa({encapsulation:2,styles:[],data:{}});function p(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Default badge"])),(n()(),s.Za(2,0,null,null,2,"span",[["vcl-badge",""]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(3,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["default"])),(n()(),s.Za(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Primary badge"])),(n()(),s.Za(7,0,null,null,2,"span",[["vcl-badge","primary"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(8,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["primary"])),(n()(),s.Za(10,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Success badge"])),(n()(),s.Za(12,0,null,null,2,"span",[["vcl-badge","success"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(13,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["success"])),(n()(),s.Za(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Info badge"])),(n()(),s.Za(17,0,null,null,2,"span",[["vcl-badge","info"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(18,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["info"])),(n()(),s.Za(20,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Warning badge"])),(n()(),s.Za(22,0,null,null,2,"span",[["vcl-badge","warning"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(23,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["warning"])),(n()(),s.Za(25,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.qb(-1,null,["Error badge"])),(n()(),s.Za(27,0,null,null,2,"span",[["vcl-badge","error"]],[[2,"vclBadge",null],[2,"vclPrimary",null],[2,"vclSuccess",null],[2,"vclInfo",null],[2,"vclWarning",null],[2,"vclError",null]],null,null,null,null)),s.Ya(28,16384,null,0,r,[],{type:[0,"type"]},null),(n()(),s.qb(-1,null,["error"]))],function(n,l){n(l,3,0,"");n(l,8,0,"primary");n(l,13,0,"success");n(l,18,0,"info");n(l,23,0,"warning");n(l,28,0,"error")},function(n,l){n(l,2,0,!0,s.jb(l,3).vclPrimary,s.jb(l,3).vclSuccess,s.jb(l,3).vclInfo,s.jb(l,3).vclWarning,s.jb(l,3).vclError);n(l,7,0,!0,s.jb(l,8).vclPrimary,s.jb(l,8).vclSuccess,s.jb(l,8).vclInfo,s.jb(l,8).vclWarning,s.jb(l,8).vclError);n(l,12,0,!0,s.jb(l,13).vclPrimary,s.jb(l,13).vclSuccess,s.jb(l,13).vclInfo,s.jb(l,13).vclWarning,s.jb(l,13).vclError);n(l,17,0,!0,s.jb(l,18).vclPrimary,s.jb(l,18).vclSuccess,s.jb(l,18).vclInfo,s.jb(l,18).vclWarning,s.jb(l,18).vclError);n(l,22,0,!0,s.jb(l,23).vclPrimary,s.jb(l,23).vclSuccess,s.jb(l,23).vclInfo,s.jb(l,23).vclWarning,s.jb(l,23).vclError);n(l,27,0,!0,s.jb(l,28).vclPrimary,s.jb(l,28).vclSuccess,s.jb(l,28).vclInfo,s.jb(l,28).vclWarning,s.jb(l,28).vclError)})}var i=s.Va("ng-component",t,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,p,o)),s.Ya(1,49152,null,0,t,[],null,null)],null,null)},{},{},[]),b=a(3),h=a(81),g=a(406),f=a(405),d=a(427),m=function(){return function(){}}(),v=a(4),j=a(402);a.d(l,"BadgeDemoModuleNgFactory",function(){return y});var y=s.Wa(u,[],function(n){return s.gb([s.hb(512,s.k,s.La,[[8,[c.a,i]],[3,s.k],s.E]),s.hb(4608,b.n,b.m,[s.A,[2,b.v]]),s.hb(1073742336,b.c,b.c,[]),s.hb(1073742336,h.a,h.a,[]),s.hb(1073742336,g.a,g.a,[]),s.hb(1073742336,f.a,f.a,[]),s.hb(1073742336,d.a,d.a,[]),s.hb(1073742336,m,m,[]),s.hb(1073742336,v.m,v.m,[[2,v.r],[2,v.l]]),s.hb(1073742336,u,u,[]),s.hb(1024,v.j,function(){return[[{path:"",component:j.a,data:e}]]},[])])})},402:function(n,l,a){"use strict";a.d(l,"a",function(){return s});a(4);var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(a){var s,t;return"object"==typeof l.tabs[a]&&l.tabs[a]?t="pre"===(s=l.tabs[a].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[a].content):l.tabs[a].content:"function"==typeof l.tabs[a]&&(s="component",t=l.tabs[a]),{name:a,content:t,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},403:function(n,l,a){"use strict";a.d(l,"b",function(){return s}),a.d(l,"a",function(){return t});var s=function(){return function(){}}(),t=function(){return function(){this.disabled=!1,this.tabClass=""}}()},404:function(n,l,a){"use strict";a.d(l,"a",function(){return u});var s=a(7),t=a(0),e=a(403),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,a,s=this.tabs.toArray();n instanceof e.a?(l=s.indexOf(n),a=n):"number"==typeof n&&s[n]?a=s[l=n]:(l=-1,a=null),l>=0&&a instanceof e.a&&!a.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(a.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},405:function(n,l,a){"use strict";a.d(l,"a",function(){return s});a(402);var s=function(){return function(){}}()},406:function(n,l,a){"use strict";a.d(l,"a",function(){return s});var s=function(){return function(){}}()},407:function(n,l,a){"use strict";a.d(l,"a",function(){return x});var s=a(0),t=a(188),e=a(409),u=a(403),c=a(3),r=a(408),o=a(404),p=a(402),i=a(4),b=a(6),h=s.Xa({encapsulation:2,styles:[],data:{}});function g(n){return s.sb(0,[(n()(),s.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function f(n){return s.sb(0,[(n()(),s.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(1,671744,null,0,t.a,[s.Aa],{target:[0,"target"]},null),(n()(),s.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function d(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),s.Ya(1,49152,[[1,4]],1,u.a,[],null,null),s.ob(335544320,2,{label:0}),(n()(),s.Qa(0,[[2,2]],0,1,null,g)),s.Ya(4,16384,null,0,u.b,[],null,null),(n()(),s.Qa(16777216,null,0,1,null,f)),s.Ya(6,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,d)),s.Ya(8,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,m)),s.Ya(10,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,v)),s.Ya(12,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,j)),s.Ya(14,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),s.Ya(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),s.ob(603979776,1,{tabs:1}),(n()(),s.Qa(16777216,null,0,1,null,y)),s.Ya(5,802816,null,0,c.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var a=l.component;n(l,2,0,"true"),n(l,5,0,a.tabs)},null)}function I(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.qb(1,null,[" ",""])),(n()(),s.Qa(16777216,null,null,1,null,w)),s.Ya(3,16384,null,0,c.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var x=s.Va("ng-component",p.a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,I,h)),s.Ya(1,114688,null,0,p.a,[i.a,b.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},408:function(n,l,a){"use strict";a.d(l,"a",function(){return c}),a.d(l,"b",function(){return o});var s=a(0),t=a(188),e=a(3),u=a(404),c=s.Xa({encapsulation:2,styles:[],data:{}});function r(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,a){var s=!0,t=n.component;"tap"===l&&(s=!1!==t.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(3,671744,null,0,t.a,[s.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var a=l.component;n(l,0,0,s.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,a.selectedTabIndex===l.context.index,a.selectedTabIndex===l.context.index)})}function o(n){return s.sb(0,[s.ob(402653184,1,{tabContent:0}),(n()(),s.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.Qa(16777216,null,null,1,null,r)),s.Ya(4,802816,null,0,e.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var a=l.component;n(l,1,0,s.bb(1,"vclTabbable ",a.tabbableClass,""),"left"===a.layout,"right"===a.layout),n(l,2,0,s.bb(1,"vclTabs ",a.tabsClass,""),!!a.borders),n(l,5,0,!0===a.hideContent?"none":null,s.bb(1,"vclTabContent ",a.tabContentClass,""),!a.borders)})}u.a},409:function(n,l,a){"use strict";a.d(l,"a",function(){return e}),a.d(l,"b",function(){return c});var s=a(0),t=a(403),e=s.Xa({encapsulation:2,styles:[],data:{}});function u(n){return s.sb(0,[s.ib(null,0),(n()(),s.Qa(0,null,null,0))],null,null)}function c(n){return s.sb(0,[s.ob(402653184,1,{content:0}),(n()(),s.Qa(0,[[1,2]],null,0,null,u))],null,null)}t.a},427:function(n,l,a){"use strict";a.d(l,"a",function(){return s});var s=function(){return function(){}}()},646:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BadgeDemoComponent {\n}\n'},647:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Default badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Primary badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"primary"</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Success badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"success"</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Info badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"info"</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Warning badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"warning"</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Error badge<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">"error"</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n'},648:function(n,l){n.exports='<h1 id="vcl-badge">vcl-badge</h1>\n<p>A visually highlighted tag to attribute items.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLBadgeModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLBadgeModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>primary<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>info<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>warning<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-badge</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>error<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-badge-properties">vcl-badge Properties</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>vcl-badge</code></td>\n<td>string</td>\n<td></td>\n<td>the badge&apos;s type</td>\n</tr>\n</tbody>\n</table>\n'}}]);