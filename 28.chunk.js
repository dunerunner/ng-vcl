webpackJsonp([28],{416:function(n,l,t){"use strict";function s(){return{label:"Input Control Group",tabs:{Demo:i,"README.md":{type:"md",content:t(592)},"demo.component.html":{type:"pre",content:t(593)},"demo.component.ts":{type:"pre",content:t(594)}}}}function e(n){return f._41(0,[(n()(),f._19(0,null,null,1,"div",[["class","vclFormControlHint"]],[[2,"vclError",null],[2,"vclWarning",null],[2,"vclSuccess",null]],null,null,null,null)),(n()(),f._39(null,["\n  ","\n"]))],null,function(n,l){var t=l.component;n(l,0,0,"error"==t.type,"warning"==t.type,"success"==t.type),n(l,1,0,t.label)})}function u(n){return f._41(2,[f._32(null,0),(n()(),f._39(null,["\n\n"])),(n()(),f._13(16777216,null,null,1,null,e)),f._17(16384,null,0,h.k,[f._1,f.Y],{ngIf:[0,"ngIf"]},null),(n()(),f._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,null!==t.type&&null!==t.label&&""!==t.label)},null)}function a(n){return f._41(0,[(n()(),f._19(0,null,null,1,"vcl-input-control-group",[],[[2,"vclInputControlGroup",null]],null,null,u,y)),f._17(49152,null,0,_,[f.n],null,null)],null,function(n,l){n(l,0,0,!0)})}function o(n){return g._41(0,[(n()(),g._19(0,null,null,4,"vcl-input-control-group",[],[[2,"vclInputControlGroup",null]],null,null,u,y)),g._17(49152,null,0,_,[g.n],{type:[0,"type"],label:[1,"label"]},null),(n()(),g._39(0,["\n  "])),(n()(),g._19(0,null,0,0,"input",[["type","text"],["vcl-input",""]],null,null,null,null,null)),(n()(),g._39(0,["\n"])),(n()(),g._39(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,t.type,t.label)},function(n,l){n(l,0,0,!0)})}function r(n){return g._41(0,[(n()(),g._19(0,null,null,1,"ng-component",[],null,null,null,o,j)),g._17(49152,null,0,i,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var c=t(1),p=(t.n(c),t(16)),i=(t.n(p),function(){function n(){var n=this;this.message=new p.Subject,this.obs=c.Observable.interval(2e3).scan(function(n,l){return n++,n>3&&(n=0),n}).map(function(n){return 0==n?"error":1==n?"warning":2==n?"success":void 0}).map(function(l){return n.type=l,n.label="my custom "+l,{type:l,value:"my custom "+l}}).subscribe(function(l){return n.message.next(l)})}return n}()),d=function(){function n(){}return n}(),b=t(2),_=function(){function n(n){this.elRef=n,this.elRef=n}return n.prototype.ucfirst=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},n.ctorParameters=function(){return[{type:b.n}]},n}(),f=t(2),h=t(21),m=[],y=f._16({encapsulation:2,styles:m,data:{}}),g=(f._14("vcl-input-control-group",_,a,{type:"type",label:"label"},{},["*"]),t(2)),v=[],j=g._16({encapsulation:2,styles:v,data:{}}),w=g._14("ng-component",i,r,{},{},[]);t.d(l,"InputControlGroupDemoModuleNgFactory",function(){return Y});var x=t(2),C=t(454),k=t(21),I=t(114),T=t(59),O=t(451),$=t(455),H=t(488),S=t(27),P=t(449),Y=x._15(d,[],function(n){return x._30([x._31(512,x.k,x._11,[[8,[C.a,w]],[3,x.k],x.E]),x._31(4608,k.m,k.l,[x.A]),x._31(512,k.c,k.c,[]),x._31(512,I.a,I.a,[]),x._31(512,T.d,T.d,[]),x._31(512,O.a,O.a,[]),x._31(512,$.a,$.a,[]),x._31(512,H.a,H.a,[]),x._31(512,S.m,S.m,[[2,S.r],[2,S.l]]),x._31(512,d,d,[]),x._31(1024,S.j,function(){return[[{path:"",component:P.a,data:{demo:s}}]]},[])])})},448:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return e});var s=function(){function n(){}return n}(),e=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},449:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var s=t(27),e=t(28),u=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?(s=l.tabs[t].type,e="pre"===s||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(s="component",e=l.tabs[t]),{name:t,content:e,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:s.a},{type:e.c}]},n}()},450:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(59),e=t(2),u=t(448),a=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new s.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,s=this.tabs.toArray();n instanceof u.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?(l=n,t=s[l]):(l=-1,t=null),l>=0&&t instanceof u.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},451:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},452:function(n,l,t){"use strict";function s(n){return a._41(0,[a._32(null,0),(n()(),a._13(0,null,null,0))],null,null)}function e(n){return a._41(0,[a._37(402653184,1,{content:0}),(n()(),a._13(0,[[1,2]],null,0,null,s))],null,null)}function u(n){return a._41(0,[(n()(),a._19(0,null,null,2,"vcl-tab",[],null,null,null,e,c)),a._17(49152,null,1,o.a,[],null,null),a._37(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return c}),l.b=e;var a=t(2),o=t(448),r=[],c=a._16({encapsulation:2,styles:r,data:{}});a._14("vcl-tab",o.a,u,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},453:function(n,l,t){"use strict";function s(n){return a._41(0,[(n()(),a._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,e=n.component;if("tap"===l){s=!1!==e.selectTab(n.context.$implicit)&&s}return s},null,null)),(n()(),a._39(null,["\n        "])),(n()(),a._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),a._39(null,[" \n          "])),(n()(),a._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a._17(671744,null,0,o.a,[a._1],{target:[0,"target"]},null),(n()(),a._39(null,["\n        "])),(n()(),a._39(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,a._22(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function e(n){return a._41(0,[a._37(402653184,1,{tabContent:0}),(n()(),a._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),a._39(null,["\n  "])),(n()(),a._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),a._39(null,["\n    "])),(n()(),a._13(16777216,null,null,1,null,s)),a._17(802816,null,0,r.j,[a._1,a.Y,a.y],{ngForOf:[0,"ngForOf"]},null),(n()(),a._39(null,["\n  "])),(n()(),a._39(null,["\n  "])),(n()(),a._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),a._39(null,["\n    "])),(n()(),a._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),a._39(null,["\n      "])),(n()(),a._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),a._39(null,["\n    "])),(n()(),a._39(null,["\n    "])),(n()(),a._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),a._39(null,["\n      "])),a._32(null,0),(n()(),a._39(null,["\n    "])),(n()(),a._39(null,["\n  "])),(n()(),a._39(null,["\n"])),(n()(),a._39(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,a._22(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,a._22(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,a._22(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function u(n){return a._41(0,[(n()(),a._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,e,i)),a._17(1228800,null,1,c.a,[],null,null),a._37(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return i}),l.b=e;var a=t(2),o=t(186),r=t(21),c=t(450),p=[],i=a._16({encapsulation:2,styles:p,data:{}});a._14("vcl-tab-nav",c.a,u,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},454:function(n,l,t){"use strict";function s(n){return b._41(0,[(n()(),b._39(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function e(n){return b._41(0,[(n()(),b._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),b._17(671744,null,0,_.a,[b._1],{target:[0,"target"]},null),(n()(),b._13(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function u(n){return b._41(0,[(n()(),b._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),b._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),b._39(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function a(n){return b._41(0,[(n()(),b._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return b._41(0,[(n()(),b._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function r(n){return b._41(0,[(n()(),b._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return b._41(0,[(n()(),b._19(0,null,null,21,"vcl-tab",[],null,null,null,f.b,f.a)),b._17(49152,[[1,4]],1,h.a,[],null,null),b._37(335544320,2,{label:0}),(n()(),b._39(0,["\n      "])),(n()(),b._13(0,[[2,2]],0,1,null,s)),b._17(16384,null,0,h.b,[],null,null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,e)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,u)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,a)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,o)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,r)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function p(n){return b._41(0,[(n()(),b._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),b._39(null,["\n  "])),(n()(),b._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,y.b,y.a)),b._17(1228800,null,1,g.a,[],{borders:[0,"borders"]},null),b._37(603979776,1,{tabs:1}),(n()(),b._39(0,["\n    "])),(n()(),b._13(16777216,null,0,1,null,c)),b._17(802816,null,0,m.j,[b._1,b.Y,b.y],{ngForOf:[0,"ngForOf"]},null),(n()(),b._39(0,["\n  "])),(n()(),b._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function i(n){return b._41(0,[(n()(),b._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),b._39(null,[" ",""])),(n()(),b._39(null,["\n"])),(n()(),b._13(16777216,null,null,1,null,p)),b._17(16384,null,0,m.k,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function d(n){return b._41(0,[(n()(),b._19(0,null,null,1,"ng-component",[],null,null,null,i,C)),b._17(114688,null,0,v.a,[j.a,w.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return k});var b=t(2),_=t(186),f=t(452),h=t(448),m=t(21),y=t(453),g=t(450),v=t(449),j=t(27),w=t(28),x=[],C=b._16({encapsulation:2,styles:x,data:{}}),k=b._14("ng-component",v.a,d,{},{},[])},455:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=(t(449),function(){function n(){}return n}())},488:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},592:function(n,l){n.exports='<h1 id="vcl-input-control-group">vcl-input-control-group</h1>\n<p>Input-Control-Group to handle the error-state of any object.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs">\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>selectAllOnFocus</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects</td>\n</tr>\n<tr>\n<td><code>typedValue</code> <em>(1)</em></td>\n<td>any</td>\n<td></td>\n<td>The current value of the input element. Type is converted as specified in <code>valueType</code>  </td>\n</tr>\n<tr>\n<td><code>valueType</code></td>\n<td>string</td>\n<td>string</td>\n<td><code>string</code> or <code>number</code>. Type to use in <code>typedValue</code></td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},593:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-control-group</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"label"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span>  <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-control-group</span>&gt;</span>\n'},594:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Observable\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Subject\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputControlGroupDemoComponent {\n\n  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span>;\n  label: <span class="hljs-built_in">string</span>;\n\n  message = <span class="hljs-keyword">new</span> Subject();\n  <span class="hljs-comment">// emit messages over time</span>\n  obs = Observable\n    .interval(<span class="hljs-number">2000</span>)\n    .scan(<span class="hljs-function">(<span class="hljs-params">s, x</span>) =&gt;</span> {\n      s++;\n      <span class="hljs-keyword">if</span> (s &gt; <span class="hljs-number">3</span>) s = <span class="hljs-number">0</span>;\n      <span class="hljs-keyword">return</span> s;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">s</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'warning\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">2</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'success\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">3</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">undefined</span>;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">type</span> =&gt;</span> {\n\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-keyword">type</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>;\n\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-keyword">type</span>,\n        value: <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>\n      };\n    })\n    .subscribe(<span class="hljs-function"><span class="hljs-params">msg</span> =&gt;</span> <span class="hljs-keyword">this</span>.message.next(msg));\n\n}\n'}});