(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{188:function(n,l,a){"use strict";a.d(l,"a",function(){return e});var t=a(7),s=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var a in l)l.hasOwnProperty(a)&&(n[a]=l[a])};return function(l,a){function t(){this.constructor=l}n(l,a),l.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}}(),e=function(n){function l(l){return n.call(this,l)||this}return s(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var a=n.target.currentValue;a&&(this.wormhole=this.connectWormhole(a,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t.b)},367:function(n,l,a){"use strict";a.r(l);var t=a(0),s=function(){return function(){}}();var e={demo:function(){return{label:"Icogram",tabs:{Demo:s,"README.md":{type:"md",content:a(538)},"demo.component.html":{type:"pre",content:a(537)},"demo.component.ts":{type:"pre",content:a(536)}}}}},c=function(){return function(){}}(),u=a(407),o=a(118),r=a(34),p=a(18),i=t.Xa({encapsulation:2,styles:[],data:{}});function h(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,1,"vcl-icogram",[["label","some label"]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.c,o.a)),t.Ya(1,49152,null,0,r.a,[],{label:[0,"label"]},null),(n()(),t.Za(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(4,0,null,null,1,"vcl-icogram",[["label","icogram with accessible link"],["prepIcon","fa:chevron-right"]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.c,o.a)),t.Ya(5,49152,null,0,r.a,[],{label:[0,"label"],prepIcon:[1,"prepIcon"]},null),(n()(),t.Za(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(8,0,null,null,1,"vcl-icogram",[["appIcon","fa:chevron-right"],["label","prep/app icons"],["prepIcon","fa:chevron-right"]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.c,o.a)),t.Ya(9,49152,null,0,r.a,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"]},null),(n()(),t.Za(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(12,0,null,null,3,"vcl-icogram",[["appIcon","fa:chevron-right"],["class","vclLayoutHorizontal"],["label","flex label"],["prepIcon","fa:chevron-right"]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.c,o.a)),t.Ya(13,671744,null,0,p.a,[],{layout:[0,"layout"]},null),t.mb(14,{label:0}),t.Ya(15,49152,null,0,r.a,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"]},null),(n()(),t.Za(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.Za(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.qb(-1,null,["\nThis is "])),(n()(),t.Za(19,0,null,null,1,"span",[["appIcon","fa:chevron-right"],["label","an inline"],["prepIcon","fa:chevron-right"],["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.d,o.b)),t.Ya(20,49152,null,0,r.b,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"]},null),(n()(),t.qb(-1,null,[" icogram\n"]))],function(n,l){n(l,1,0,"some label");n(l,5,0,"icogram with accessible link","fa:chevron-right");n(l,9,0,"prep/app icons","fa:chevron-right","fa:chevron-right"),n(l,13,0,n(l,14,0,"vclLayoutFlex vclAlignCentered"));n(l,15,0,"flex label","fa:chevron-right","fa:chevron-right");n(l,20,0,"an inline","fa:chevron-right","fa:chevron-right")},function(n,l){n(l,0,0,!0,"img");n(l,4,0,!0,"img");n(l,8,0,!0,"img");n(l,12,0,!0,"img");n(l,19,0,!0,"img")})}var b=t.Va("ng-component",s,function(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,1,"ng-component",[],null,null,null,h,i)),t.Ya(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),d=a(3),g=a(21),f=a(81),m=a(406),v=a(405),j=a(116),I=a(117),y=a(4),x=a(402);a.d(l,"IcogramDemoModuleNgFactory",function(){return w});var w=t.Wa(c,[],function(n){return t.gb([t.hb(512,t.k,t.La,[[8,[u.a,b]],[3,t.k],t.E]),t.hb(4608,d.n,d.m,[t.A,[2,d.v]]),t.hb(5120,g.b,function(){return[new g.a]},[]),t.hb(1073742336,d.c,d.c,[]),t.hb(1073742336,f.a,f.a,[]),t.hb(1073742336,m.a,m.a,[]),t.hb(1073742336,v.a,v.a,[]),t.hb(1073742336,j.a,j.a,[]),t.hb(1073742336,p.c,p.c,[]),t.hb(1073742336,I.a,I.a,[]),t.hb(1073742336,y.m,y.m,[[2,y.r],[2,y.l]]),t.hb(1073742336,c,c,[]),t.hb(1024,y.j,function(){return[[{path:"",component:x.a,data:e}]]},[])])})},402:function(n,l,a){"use strict";a.d(l,"a",function(){return t});a(4);var t=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(a){var t,s;return"object"==typeof l.tabs[a]&&l.tabs[a]?s="pre"===(t=l.tabs[a].type)||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[a].content):l.tabs[a].content:"function"==typeof l.tabs[a]&&(t="component",s=l.tabs[a]),{name:a,content:s,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},403:function(n,l,a){"use strict";a.d(l,"b",function(){return t}),a.d(l,"a",function(){return s});var t=function(){return function(){}}(),s=function(){return function(){this.disabled=!1,this.tabClass=""}}()},404:function(n,l,a){"use strict";a.d(l,"a",function(){return c});var t=a(7),s=a(0),e=a(403),c=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new t.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,a,t=this.tabs.toArray();n instanceof e.a?(l=t.indexOf(n),a=n):"number"==typeof n&&t[n]?a=t[l=n]:(l=-1,a=null),l>=0&&a instanceof e.a&&!a.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(a.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},405:function(n,l,a){"use strict";a.d(l,"a",function(){return t});a(402);var t=function(){return function(){}}()},406:function(n,l,a){"use strict";a.d(l,"a",function(){return t});var t=function(){return function(){}}()},407:function(n,l,a){"use strict";a.d(l,"a",function(){return w});var t=a(0),s=a(188),e=a(409),c=a(403),u=a(3),o=a(408),r=a(404),p=a(402),i=a(4),h=a(6),b=t.Xa({encapsulation:2,styles:[],data:{}});function d(n){return t.sb(0,[(n()(),t.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function g(n){return t.sb(0,[(n()(),t.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Ya(1,671744,null,0,s.a,[t.Aa],{target:[0,"target"]},null),(n()(),t.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function f(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),t.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function I(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),t.Ya(1,49152,[[1,4]],1,c.a,[],null,null),t.ob(335544320,2,{label:0}),(n()(),t.Qa(0,[[2,2]],0,1,null,d)),t.Ya(4,16384,null,0,c.b,[],null,null),(n()(),t.Qa(16777216,null,0,1,null,g)),t.Ya(6,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null),(n()(),t.Qa(16777216,null,0,1,null,f)),t.Ya(8,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null),(n()(),t.Qa(16777216,null,0,1,null,m)),t.Ya(10,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null),(n()(),t.Qa(16777216,null,0,1,null,v)),t.Ya(12,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null),(n()(),t.Qa(16777216,null,0,1,null,j)),t.Ya(14,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function y(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,o.b,o.a)),t.Ya(2,1228800,null,1,r.a,[],{borders:[0,"borders"]},null),t.ob(603979776,1,{tabs:1}),(n()(),t.Qa(16777216,null,0,1,null,I)),t.Ya(5,802816,null,0,u.k,[t.Aa,t.X,t.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var a=l.component;n(l,2,0,"true"),n(l,5,0,a.tabs)},null)}function x(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),t.qb(1,null,[" ",""])),(n()(),t.Qa(16777216,null,null,1,null,y)),t.Ya(3,16384,null,0,u.l,[t.Aa,t.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var w=t.Va("ng-component",p.a,function(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,1,"ng-component",[],null,null,null,x,b)),t.Ya(1,114688,null,0,p.a,[i.a,h.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},408:function(n,l,a){"use strict";a.d(l,"a",function(){return u}),a.d(l,"b",function(){return r});var t=a(0),s=a(188),e=a(3),c=a(404),u=t.Xa({encapsulation:2,styles:[],data:{}});function o(n){return t.sb(0,[(n()(),t.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,a){var t=!0,s=n.component;"tap"===l&&(t=!1!==s.onTabClick(n.context.$implicit)&&t);return t},null,null)),(n()(),t.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),t.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Ya(3,671744,null,0,s.a,[t.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var a=l.component;n(l,0,0,t.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,a.selectedTabIndex===l.context.index,a.selectedTabIndex===l.context.index)})}function r(n){return t.sb(0,[t.ob(402653184,1,{tabContent:0}),(n()(),t.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),t.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),t.Qa(16777216,null,null,1,null,o)),t.Ya(4,802816,null,0,e.k,[t.Aa,t.X,t.y],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),t.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),t.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),t.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),t.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var a=l.component;n(l,1,0,t.bb(1,"vclTabbable ",a.tabbableClass,""),"left"===a.layout,"right"===a.layout),n(l,2,0,t.bb(1,"vclTabs ",a.tabsClass,""),!!a.borders),n(l,5,0,!0===a.hideContent?"none":null,t.bb(1,"vclTabContent ",a.tabContentClass,""),!a.borders)})}c.a},409:function(n,l,a){"use strict";a.d(l,"a",function(){return e}),a.d(l,"b",function(){return u});var t=a(0),s=a(403),e=t.Xa({encapsulation:2,styles:[],data:{}});function c(n){return t.sb(0,[t.ib(null,0),(n()(),t.Qa(0,null,null,0))],null,null)}function u(n){return t.sb(0,[t.ob(402653184,1,{content:0}),(n()(),t.Qa(0,[[1,2]],null,0,null,c))],null,null)}s.a},536:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IcogramDemoComponent {\n\n}\n'},537:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"some label"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"icogram with accessible link"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"prep/app icons"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"flex label"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal"</span> [<span class="hljs-attr">vclLayout</span>]=<span class="hljs-string">"{label: \'vclLayoutFlex vclAlignCentered\'}"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nThis is <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"an inline"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> icogram\n'},538:function(n,l){n.exports='<h1 id="vcl-icogram">vcl-icogram</h1>\n<p>Combination of icon and text of which both are optional and can be permuted.<br>Icons can be prepended or appended to a textual label and can be sourced from icon<br>fonts or directly from file based imagery.<br>The component takes care of accessibility aspects such rendering appropriate aria<br>attributes.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;some label&quot;</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fa:chevron-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;some label&quot;</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fa:chevron-right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties">Properties</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The textual label </td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIcon</code> but appended</td>\n</tr>\n<tr>\n<td><code>prepIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Image as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIconSrc</code> but appended</td>\n</tr>\n</tbody>\n</table>\n'}}]);