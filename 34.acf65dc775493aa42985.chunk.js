(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{378:function(n,s,l){"use strict";l.r(s);var a=l(0),t=function(){function n(){this.items=[{label:"item 1",value:1},{label:"item 2",value:2},{label:"item 3 (preselect)",value:3},{label:"item 4",value:4},{label:"item 5",value:5},{label:"item 6",value:6},{label:"item 7",value:7},{label:"item 8",value:8},{label:"item 9",value:9},{label:"item 10",value:10},{label:"item 11",value:11},{label:"item 12",value:12},{label:"item 13",value:13},{label:"item 14",value:14},{label:"item 15",value:15},{label:"item 16",value:16},{label:"item 17",value:17},{label:"item 18",value:18},{label:"item 19",value:19},{label:"item 20",value:20},{label:"item 21",value:21},{label:"item 22",value:22},{label:"item 23",value:23},{label:"item 24",value:24},{label:"item 25",value:25,selected:!0},{label:"item 26",value:26},{label:"item 27",value:27},{label:"item 28",value:28}],this.value=5}return n.prototype.onChange=function(n){console.log("vcl-select: onChange()",n)},n}();var e={demo:function(){return{label:"Select",tabs:{Demo:t,"README.md":{type:"md",content:l(604)},"demo.component.html":{type:"pre",content:l(603)},"demo.component.ts":{type:"pre",content:l(602)}}}}},p=function(){return function(){}}(),c=l(407),u=l(464),i=l(484),r=l(41),o=l(441),h=l(3),b=a.Xa({encapsulation:2,styles:[],data:{}});function j(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"vcl-select-option",[],null,null,null,null,null)),a.Ya(1,16384,[[1,4]],0,u.a,[],{value:[0,"value"],sublabel:[1,"sublabel"],label:[2,"label"]},null)],function(n,s){n(s,1,0,s.context.$implicit.value,s.context.$implicit.sublabel,s.context.$implicit.label)},null)}function d(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"vcl-select-option",[],null,null,null,null,null)),a.Ya(1,16384,[[2,4]],0,u.a,[],{value:[0,"value"],sublabel:[1,"sublabel"],label:[2,"label"]},null)],function(n,s){n(s,1,0,s.context.$implicit.value,s.context.$implicit.sublabel,s.context.$implicit.label)},null)}function m(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"vcl-select-option",[],null,null,null,null,null)),a.Ya(1,16384,[[3,4]],0,u.a,[],{value:[0,"value"],sublabel:[1,"sublabel"],label:[2,"label"]},null)],function(n,s){n(s,1,0,s.context.$implicit.value,s.context.$implicit.sublabel,s.context.$implicit.label)},null)}function g(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["single-select"])),(n()(),a.Za(2,0,null,null,5,"vcl-select",[["label","Single select"]],[[4,"position",null],[4,"display",null],[1,"tabindex",0]],[[null,"change"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(n,s,l){var t=!0,e=n.component;"keydown"===s&&(t=!1!==a.jb(n,4).keydown(l)&&t);"focus"===s&&(t=!1!==a.jb(n,4).onFocus(l)&&t);"blur"===s&&(t=!1!==a.jb(n,4).onBlur(l)&&t);"change"===s&&(t=!1!==e.onChange(l)&&t);return t},i.b,i.a)),a.nb(5120,null,r.j,function(n){return[n]},[o.a]),a.Ya(4,4243456,null,1,o.a,[a.n,a.i],{tabindex:[0,"tabindex"],value:[1,"value"]},{change:"change"}),a.ob(603979776,1,{items:1}),(n()(),a.Qa(16777216,null,null,1,null,j)),a.Ya(7,802816,null,0,h.k,[a.Aa,a.X,a.y],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Za(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(9,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["multi-select, 3 items selectable"])),(n()(),a.Za(11,0,null,null,6,"vcl-select",[["mode","multiple"]],[[4,"position",null],[4,"display",null],[1,"tabindex",0]],[[null,"change"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(n,s,l){var t=!0,e=n.component;"keydown"===s&&(t=!1!==a.jb(n,13).keydown(l)&&t);"focus"===s&&(t=!1!==a.jb(n,13).onFocus(l)&&t);"blur"===s&&(t=!1!==a.jb(n,13).onBlur(l)&&t);"change"===s&&(t=!1!==e.onChange(l)&&t);return t},i.b,i.a)),a.nb(5120,null,r.j,function(n){return[n]},[o.a]),a.Ya(13,4243456,null,1,o.a,[a.n,a.i],{mode:[0,"mode"],tabindex:[1,"tabindex"],maxSelectableItems:[2,"maxSelectableItems"],value:[3,"value"]},{change:"change"}),a.ob(603979776,2,{items:1}),a.kb(15,1),(n()(),a.Qa(16777216,null,null,1,null,d)),a.Ya(17,802816,null,0,h.k,[a.Aa,a.X,a.y],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Za(18,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Single select with ngModel"])),(n()(),a.Za(20,0,null,null,8,"vcl-select",[["label","Single select"]],[[4,"position",null],[4,"display",null],[1,"tabindex",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(n,s,l){var t=!0,e=n.component;"keydown"===s&&(t=!1!==a.jb(n,21).keydown(l)&&t);"focus"===s&&(t=!1!==a.jb(n,21).onFocus(l)&&t);"blur"===s&&(t=!1!==a.jb(n,21).onBlur(l)&&t);"ngModelChange"===s&&(t=!1!==(e.value=l)&&t);return t},i.b,i.a)),a.Ya(21,4243456,null,1,o.a,[a.n,a.i],{tabindex:[0,"tabindex"]},null),a.ob(603979776,3,{items:1}),a.nb(1024,null,r.j,function(n){return[n]},[o.a]),a.Ya(24,671744,null,0,r.o,[[8,null],[8,null],[8,null],[6,r.j]],{model:[0,"model"]},{update:"ngModelChange"}),a.nb(2048,null,r.k,null,[r.o]),a.Ya(26,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),a.Qa(16777216,null,null,1,null,m)),a.Ya(28,802816,null,0,h.k,[a.Aa,a.X,a.y],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Za(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.qb(30,null,["Current value: ","\n"]))],function(n,s){var l=s.component;n(s,4,0,1,3),n(s,7,0,l.items);n(s,13,0,"multiple",2,3,n(s,15,0,3)),n(s,17,0,l.items);n(s,21,0,3),n(s,24,0,l.value),n(s,28,0,l.items)},function(n,s){var l=s.component;n(s,2,0,"relative","block",a.jb(s,4).tabindex);n(s,11,0,"relative","block",a.jb(s,13).tabindex);n(s,20,0,"relative","block",a.jb(s,21).tabindex,a.jb(s,26).ngClassUntouched,a.jb(s,26).ngClassTouched,a.jb(s,26).ngClassPristine,a.jb(s,26).ngClassDirty,a.jb(s,26).ngClassValid,a.jb(s,26).ngClassInvalid,a.jb(s,26).ngClassPending),n(s,30,0,l.value)})}var v=a.Va("ng-component",t,function(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"ng-component",[],null,null,null,g,b)),a.Ya(1,49152,null,0,t,[],null,null)],null,null)},{},{},[]),f=l(21),y=l(81),x=l(406),q=l(405),w=l(427),k=l(443),C=l(116),O=l(18),S=l(117),I=l(119),F=l(428),Y=l(431),Z=l(413),$=l(440),D=l(487),L=l(4),M=l(402);l.d(s,"SelectDemoModuleNgFactory",function(){return E});var E=a.Wa(p,[],function(n){return a.gb([a.hb(512,a.k,a.La,[[8,[c.a,v]],[3,a.k],a.E]),a.hb(4608,h.n,h.m,[a.A,[2,h.v]]),a.hb(4608,r.u,r.u,[]),a.hb(5120,f.b,function(){return[new f.a]},[]),a.hb(1073742336,h.c,h.c,[]),a.hb(1073742336,r.r,r.r,[]),a.hb(1073742336,r.i,r.i,[]),a.hb(1073742336,y.a,y.a,[]),a.hb(1073742336,x.a,x.a,[]),a.hb(1073742336,q.a,q.a,[]),a.hb(1073742336,w.a,w.a,[]),a.hb(1073742336,k.a,k.a,[]),a.hb(1073742336,C.a,C.a,[]),a.hb(1073742336,O.c,O.c,[]),a.hb(1073742336,S.a,S.a,[]),a.hb(1073742336,I.a,I.a,[]),a.hb(1073742336,F.a,F.a,[]),a.hb(1073742336,Y.a,Y.a,[]),a.hb(1073742336,Z.a,Z.a,[]),a.hb(1073742336,$.a,$.a,[]),a.hb(1073742336,D.a,D.a,[]),a.hb(1073742336,L.m,L.m,[[2,L.r],[2,L.l]]),a.hb(1073742336,p,p,[]),a.hb(1024,L.j,function(){return[[{path:"",component:M.a,data:e}]]},[])])})},417:function(n,s,l){"use strict";l.d(s,"a",function(){return t});var a=l(146),t=new(l(145).a)(a.a)},423:function(n,s,l){"use strict";l.d(s,"a",function(){return t});var a=l(70);function t(n){return!Object(a.a)(n)&&n-parseFloat(n)+1>=0}},476:function(n,s,l){"use strict";l.d(s,"a",function(){return p});var a=l(1),t=l(54),e=l(53);function p(n){return function(s){return s.lift(new c(n))}}var c=function(){function n(n){this.notifier=n}return n.prototype.call=function(n,s){return s.subscribe(new u(n,this.notifier))},n}(),u=function(n){function s(s,l){var a=n.call(this,s)||this;return a.hasValue=!1,a.add(a.innerSubscription=Object(e.a)(a,l)),a}return a.c(s,n),s.prototype._next=function(s){this.hasValue&&n.prototype._next.call(this,s)},s.prototype.notifyNext=function(n,s,l,a,t){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},s.prototype.notifyComplete=function(){},s}(t.a)},477:function(n,s,l){"use strict";l.d(s,"a",function(){return c});var a=l(9),t=l(417),e=l(423),p=l(69);function c(n,s,l){void 0===n&&(n=0);var c=-1;return Object(e.a)(s)?c=Number(s)<1?1:Number(s):Object(p.a)(s)&&(l=s),Object(p.a)(l)||(l=t.a),new a.a(function(s){var a=Object(e.a)(n)?n:+n-l.now();return l.schedule(u,a,{index:0,period:c,subscriber:s})})}function u(n){var s=n.index,l=n.period,a=n.subscriber;if(a.next(s),!a.closed){if(-1===l)return a.complete();n.index=s+1,this.schedule(n,l)}}},478:function(n,s,l){"use strict";l.d(s,"a",function(){return c});var a=l(9),t=l(70),e=l(61),p=l(48);Object.prototype.toString;function c(n,s,l,u){return Object(e.a)(l)&&(u=l,l=void 0),u?c(n,s,l).pipe(Object(p.a)(function(n){return Object(t.a)(n)?u.apply(void 0,n):u(n)})):new a.a(function(a){!function n(s,l,a,t,e){var p;if(function(n){return n&&"function"==typeof n.addEventListener&&"function"==typeof n.removeEventListener}(s)){var c=s;s.addEventListener(l,a,e),p=function(){return c.removeEventListener(l,a,e)}}else if(function(n){return n&&"function"==typeof n.on&&"function"==typeof n.off}(s)){var u=s;s.on(l,a),p=function(){return u.off(l,a)}}else if(function(n){return n&&"function"==typeof n.addListener&&"function"==typeof n.removeListener}(s)){var i=s;s.addListener(l,a),p=function(){return i.removeListener(l,a)}}else{if(!s||!s.length)throw new TypeError("Invalid event target");for(var r=0,o=s.length;r<o;r++)n(s[r],l,a,t,e)}t.add(p)}(n,s,function(n){arguments.length>1?a.next(Array.prototype.slice.call(arguments)):a.next(n)},a,l)})}},602:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SelectDemoComponent {\n\n  items = [\n    {\n      label: <span class="hljs-string">\'item 1\'</span>,\n      value: <span class="hljs-number">1</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 2\'</span>,\n      value: <span class="hljs-number">2</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 3 (preselect)\'</span>,\n      value: <span class="hljs-number">3</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 4\'</span>,\n      value: <span class="hljs-number">4</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 5\'</span>,\n      value: <span class="hljs-number">5</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 6\'</span>,\n      value: <span class="hljs-number">6</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 7\'</span>,\n      value: <span class="hljs-number">7</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 8\'</span>,\n      value: <span class="hljs-number">8</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 9\'</span>,\n      value: <span class="hljs-number">9</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 10\'</span>,\n      value: <span class="hljs-number">10</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 11\'</span>,\n      value: <span class="hljs-number">11</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 12\'</span>,\n      value: <span class="hljs-number">12</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 13\'</span>,\n      value: <span class="hljs-number">13</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 14\'</span>,\n      value: <span class="hljs-number">14</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 15\'</span>,\n      value: <span class="hljs-number">15</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 16\'</span>,\n      value: <span class="hljs-number">16</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 17\'</span>,\n      value: <span class="hljs-number">17</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 18\'</span>,\n      value: <span class="hljs-number">18</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 19\'</span>,\n      value: <span class="hljs-number">19</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 20\'</span>,\n      value: <span class="hljs-number">20</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 21\'</span>,\n      value: <span class="hljs-number">21</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 22\'</span>,\n      value: <span class="hljs-number">22</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 23\'</span>,\n      value: <span class="hljs-number">23</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 24\'</span>,\n      value: <span class="hljs-number">24</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 25\'</span>,\n      value: <span class="hljs-number">25</span>,\n      selected: <span class="hljs-literal">true</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 26\'</span>,\n      value: <span class="hljs-number">26</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 27\'</span>,\n      value: <span class="hljs-number">27</span>\n    },\n    {\n      label: <span class="hljs-string">\'item 28\'</span> +\n      <span class="hljs-string">\'\'</span>,\n      value: <span class="hljs-number">28</span>\n\n    }\n  ];\n\n  value: <span class="hljs-built_in">any</span> = <span class="hljs-number">5</span>;\n\n  onChange(change) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'vcl-select: onChange()\'</span>, change);\n  }\n}\n'},603:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"3"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Single select"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select, 3 items selectable<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[3]"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"multiple"</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">"3"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"2"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Single select with ngModel<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Single select"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"value"</span> [<span class="hljs-attr">tabindex</span>]=<span class="hljs-string">"3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"item.label"</span> [<span class="hljs-attr">sublabel</span>]=<span class="hljs-string">"item.sublabel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>Current value: {{value}}\n'},604:function(n,s){n.exports='<h1 id="vcl-select">vcl-select</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;2&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;onSelect($event)&quot;</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">&quot;1&quot;</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 4&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Item 5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-option</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-select-attributes">vcl-select attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>ngModel</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>&quot;single&quot; | &quot;multiple&quot;</td>\n<td>&quot;single&quot;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>maxSelectableItems</code></td>\n<td>number | undefined</td>\n<td></td>\n<td>maximum number of options that can be selected at the same time. Unlimited if undefined.</td>\n</tr>\n<tr>\n<td><code>listenKeys</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>if true, the select will listen and interact to keypress-events </td>\n</tr>\n<tr>\n<td><code>zIndex</code></td>\n<td>number</td>\n<td>999999</td>\n<td>z-index of the dropdown </td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-select-events">vcl-select events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>change</code></td>\n<td>any | any[]</td>\n<td>emits the new value when the selected options change</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-select-option-attributes">vcl-select-option attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>The items value</td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>The items label</td>\n</tr>\n<tr>\n<td><code>sublabel</code></td>\n<td>string</td>\n<td></td>\n<td>The items sublabel</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the item cannot be selected</td>\n</tr>\n</tbody>\n</table>\n'},62:function(n,s,l){"use strict";var a=l(42),t=l(147),e=l(35),p=l(69),c=l(49),u=l(25),i=l(60);function r(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return 1===n.length||2===n.length&&Object(p.a)(n[1])?Object(u.a)(n[0]):Object(i.a)()(c.a.apply(void 0,n))}function o(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return function(s){var l=n[n.length-1];Object(p.a)(l)?n.pop():l=null;var c=n.length;return r(1!==c||l?c>0?Object(a.a)(n,l):Object(e.b)(l):Object(t.a)(n[0]),s)}}l.d(s,"a",function(){return o})}}]);