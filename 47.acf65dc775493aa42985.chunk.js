(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{188:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var s=t(7),a=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function s(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),e=function(n){function l(l){return n.call(this,l)||this}return a(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(s.b)},189:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return Object.defineProperty(n.prototype,"ariaLabel",{get:function(){return this.title||this.label},enumerable:!0,configurable:!0}),n}()},190:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},193:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(0),a=function(){function n(){this.selected=!1,this.select=new s.p}return Object.defineProperty(n.prototype,"selectable",{set:function(n){this.selected=!!n},enumerable:!0,configurable:!0}),n.prototype.onClick=function(){this.selected=!this.selected,this.select.emit(this.selected)},n}()},364:function(n,l,t){"use strict";t.r(l);var s=t(0),a=function(){function n(){}return n.prototype.someAction=function(n){console.log("Action handler, param:",n)},n}();var e={demo:function(){return{label:"Button",tabs:{Demo:a,"README.md":{type:"md",content:t(642)},"demo.component.html":{type:"pre",content:t(641)},"demo.component.ts":{type:"pre",content:t(640)}}}}},u=function(){return function(){}}(),o=t(407),c=t(91),r=t(411),i=t(189),p=t(414),b=t(190),h=t(193),d=s.Xa({encapsulation:2,styles:[],data:{}});function m(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,2,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,1).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,1).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},null,null)),s.Ya(1,16384,null,0,c.a,[s.n],null,null),(n()(),s.qb(-1,null,["Button"])),(n()(),s.Za(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(4,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(5,0,null,null,2,"button",[["disabled","true"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,6).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,6).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},null,null)),s.Ya(6,16384,null,0,c.a,[s.n],{disabled:[0,"disabled"]},null),(n()(),s.qb(-1,null,["Disabled button"])),(n()(),s.Za(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(10,0,null,null,2,"button",[["appIcon","fa:bolt"],["label","Label button with appended icon"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,11).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,11).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},r.b,r.a)),s.Ya(11,16384,null,0,c.a,[s.n],null,null),s.Ya(12,49152,null,0,i.a,[],{label:[0,"label"],appIcon:[1,"appIcon"]},null),(n()(),s.Za(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(15,0,null,null,2,"button",[["label","Label button with prepended icon"],["prepIcon","fa:bolt"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,16).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,16).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},r.b,r.a)),s.Ya(16,16384,null,0,c.a,[s.n],null,null),s.Ya(17,49152,null,0,i.a,[],{label:[0,"label"],prepIcon:[1,"prepIcon"]},null),(n()(),s.Za(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(20,0,null,null,2,"button",[["class","vclEmphasized"],["label","Emphasized label button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,21).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,21).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},r.b,r.a)),s.Ya(21,16384,null,0,c.a,[s.n],null,null),s.Ya(22,49152,null,0,i.a,[],{label:[0,"label"]},null),(n()(),s.Za(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(24,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(25,0,null,null,2,"button",[["icon","fa:bolt"],["title","Square Button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,26).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,26).onMouseLeave(t)&&a);"click"===l&&(a=!1!==e.someAction(t)&&a);return a},p.b,p.a)),s.Ya(26,16384,null,0,c.a,[s.n],null,null),s.Ya(27,49152,null,0,b.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(n()(),s.Za(28,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(30,0,null,null,3,"button",[["selectable",""],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSelected",null]],[[null,"select"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,31).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,31).onMouseLeave(t)&&a);"click"===l&&(a=!1!==s.jb(n,32).onClick()&&a);"select"===l&&(a=!1!==e.someAction(t)&&a);return a},null,null)),s.Ya(31,16384,null,0,c.a,[s.n],null,null),s.Ya(32,16384,null,0,h.a,[],{selectable:[0,"selectable"]},{select:"select"}),(n()(),s.qb(-1,null,["Selectable button"])),(n()(),s.Za(34,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(35,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(36,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSelected",null]],[[null,"select"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,l,t){var a=!0,e=n.component;"mouseenter"===l&&(a=!1!==s.jb(n,37).onMouseEnter(t)&&a);"mouseleave"===l&&(a=!1!==s.jb(n,37).onMouseLeave(t)&&a);"click"===l&&(a=!1!==s.jb(n,38).onClick()&&a);"select"===l&&(a=!1!==e.someAction(t)&&a);return a},null,null)),s.Ya(37,16384,null,0,c.a,[s.n],null,null),s.Ya(38,16384,null,0,h.a,[],{selectable:[0,"selectable"]},{select:"select"}),(n()(),s.qb(-1,null,["Selectable button (preselected)"]))],function(n,l){n(l,6,0,"true");n(l,12,0,"Label button with appended icon","fa:bolt");n(l,17,0,"Label button with prepended icon","fa:bolt");n(l,22,0,"Emphasized label button");n(l,27,0,"Square Button","fa:bolt");n(l,32,0,"");n(l,38,0,!0)},function(n,l){n(l,0,0,!0,s.jb(l,1).isDisabled,s.jb(l,1).isDisabled,s.jb(l,1).hovered);n(l,5,0,!0,s.jb(l,6).isDisabled,s.jb(l,6).isDisabled,s.jb(l,6).hovered);n(l,10,0,!0,s.jb(l,11).isDisabled,s.jb(l,11).isDisabled,s.jb(l,11).hovered,s.jb(l,12).ariaLabel);n(l,15,0,!0,s.jb(l,16).isDisabled,s.jb(l,16).isDisabled,s.jb(l,16).hovered,s.jb(l,17).ariaLabel);n(l,20,0,!0,s.jb(l,21).isDisabled,s.jb(l,21).isDisabled,s.jb(l,21).hovered,s.jb(l,22).ariaLabel);n(l,25,0,!0,s.jb(l,26).isDisabled,s.jb(l,26).isDisabled,s.jb(l,26).hovered,!0,s.jb(l,27).title);n(l,30,0,!0,s.jb(l,31).isDisabled,s.jb(l,31).isDisabled,s.jb(l,31).hovered,s.jb(l,32).selected);n(l,36,0,!0,s.jb(l,37).isDisabled,s.jb(l,37).isDisabled,s.jb(l,37).hovered,s.jb(l,38).selected)})}var j=s.Va("ng-component",a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,m,d)),s.Ya(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]),f=t(3),v=t(21),g=t(81),y=t(406),I=t(405),Z=t(116),k=t(18),w=t(117),A=t(119),D=t(4),x=t(402);t.d(l,"ButtonDemoModuleNgFactory",function(){return C});var C=s.Wa(u,[],function(n){return s.gb([s.hb(512,s.k,s.La,[[8,[o.a,j]],[3,s.k],s.E]),s.hb(4608,f.n,f.m,[s.A,[2,f.v]]),s.hb(5120,v.b,function(){return[new v.a]},[]),s.hb(1073742336,f.c,f.c,[]),s.hb(1073742336,g.a,g.a,[]),s.hb(1073742336,y.a,y.a,[]),s.hb(1073742336,I.a,I.a,[]),s.hb(1073742336,Z.a,Z.a,[]),s.hb(1073742336,k.c,k.c,[]),s.hb(1073742336,w.a,w.a,[]),s.hb(1073742336,A.a,A.a,[]),s.hb(1073742336,D.m,D.m,[[2,D.r],[2,D.l]]),s.hb(1073742336,u,u,[]),s.hb(1024,D.j,function(){return[[{path:"",component:x.a,data:e}]]},[])])})},402:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(4);var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(s=l.tabs[t].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(s="component",a=l.tabs[t]),{name:t,content:a,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},403:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},404:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var s=t(7),a=t(0),e=t(403),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,s=this.tabs.toArray();n instanceof e.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?t=s[l=n]:(l=-1,t=null),l>=0&&t instanceof e.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},405:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(402);var s=function(){return function(){}}()},406:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},407:function(n,l,t){"use strict";t.d(l,"a",function(){return k});var s=t(0),a=t(188),e=t(409),u=t(403),o=t(3),c=t(408),r=t(404),i=t(402),p=t(4),b=t(6),h=s.Xa({encapsulation:2,styles:[],data:{}});function d(n){return s.sb(0,[(n()(),s.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function m(n){return s.sb(0,[(n()(),s.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(1,671744,null,0,a.a,[s.Aa],{target:[0,"target"]},null),(n()(),s.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function j(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function f(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function g(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),s.Ya(1,49152,[[1,4]],1,u.a,[],null,null),s.ob(335544320,2,{label:0}),(n()(),s.Qa(0,[[2,2]],0,1,null,d)),s.Ya(4,16384,null,0,u.b,[],null,null),(n()(),s.Qa(16777216,null,0,1,null,m)),s.Ya(6,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,j)),s.Ya(8,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,f)),s.Ya(10,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,v)),s.Ya(12,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,g)),s.Ya(14,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function I(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,c.b,c.a)),s.Ya(2,1228800,null,1,r.a,[],{borders:[0,"borders"]},null),s.ob(603979776,1,{tabs:1}),(n()(),s.Qa(16777216,null,0,1,null,y)),s.Ya(5,802816,null,0,o.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function Z(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.qb(1,null,[" ",""])),(n()(),s.Qa(16777216,null,null,1,null,I)),s.Ya(3,16384,null,0,o.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var k=s.Va("ng-component",i.a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,Z,h)),s.Ya(1,114688,null,0,i.a,[p.a,b.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},408:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return r});var s=t(0),a=t(188),e=t(3),u=t(404),o=s.Xa({encapsulation:2,styles:[],data:{}});function c(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,a=n.component;"tap"===l&&(s=!1!==a.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(3,671744,null,0,a.a,[s.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function r(n){return s.sb(0,[s.ob(402653184,1,{tabContent:0}),(n()(),s.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.Qa(16777216,null,null,1,null,c)),s.Ya(4,802816,null,0,e.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s.bb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,s.bb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,s.bb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}u.a},409:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return o});var s=t(0),a=t(403),e=s.Xa({encapsulation:2,styles:[],data:{}});function u(n){return s.sb(0,[s.ib(null,0),(n()(),s.Qa(0,null,null,0))],null,null)}function o(n){return s.sb(0,[s.ob(402653184,1,{content:0}),(n()(),s.Qa(0,[[1,2]],null,0,null,u))],null,null)}a.a},411:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return c});var s=t(0),a=t(118),e=t(34),u=t(189),o=s.Xa({encapsulation:2,styles:[],data:{}});function c(n){return s.sb(2,[(n()(),s.Za(0,0,null,null,2,"span",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,a.d,a.b)),s.Ya(1,49152,null,0,e.b,[],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"],prepIconSrc:[3,"prepIconSrc"],appIconSrc:[4,"appIconSrc"]},null),s.ib(1,0)],function(n,l){var t=l.component;n(l,1,0,t.label,t.prepIcon,t.appIcon,t.prepIconSrc,t.appIconSrc)},function(n,l){n(l,0,0,!0,"img")})}u.a},414:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return c});var s=t(0),a=t(118),e=t(34),u=t(190),o=s.Xa({encapsulation:2,styles:[],data:{}});function c(n){return s.sb(2,[(n()(),s.Za(0,0,null,null,1,"span",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,a.d,a.b)),s.Ya(1,49152,null,0,e.b,[],{appIcon:[0,"appIcon"],appIconSrc:[1,"appIconSrc"]},null)],function(n,l){var t=l.component;n(l,1,0,t.icon,t.iconSrc)},function(n,l){n(l,0,0,!0,"img")})}u.a},640:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ButtonDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'},641:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">true</span>&gt;</span>Disabled button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label button with appended icon"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label button with prepended icon"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:bolt"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Emphasized label button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclEmphasized"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa:bolt"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Square Button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">select</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Selectable button<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">select</span>)=<span class="hljs-string">"someAction($event)"</span>&gt;</span>Selectable button (preselected)<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n'},642:function(n,l){n.exports='<h1 id="vcl-button">vcl-button</h1>\n<p><code>vcl-button</code> enhances the HTML <code>&lt;button&gt;</code> with styling and features.<br>It is the main control for triggering actions.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLButtonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLButtonModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{ ... }\n</pre>\n<h3 id="button-vcl-button-">button[vcl-button]</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;someAction($event)&quot;</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="button-vcl-button-label-">button[vcl-button][label]</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Action&quot;</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">&quot;fa:bolt&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="button-vcl-button-selectable-">button[vcl-button][selectable]</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">selectable</span> (<span class="hljs-attr">select</span>)=<span class="hljs-string">&quot;someAction($event)&quot;</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-button-attributes">vcl-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>State to indicate that the button is disabled</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-button-label-attributes">vcl-button[label] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>Sets button label</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Sets button title</td>\n</tr>\n<tr>\n<td><code>flexLabel</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>The label gets a flex layout property if true</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as prepIcon but appended</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-button-selectable-attributes">vcl-button[selectable] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Preselect button if true</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-button-selectable-events">vcl-button[selectable] events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>select</code></td>\n<td>Triggered when the button is selected</td>\n</tr>\n</tbody>\n</table>\n'}}]);