(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(7),e=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function u(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),o=function(n){function l(l){return n.call(this,l)||this}return e(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(u.b)},190:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},402:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(4);var u=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var u,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?e="pre"===(u=l.tabs[t].type)||"html"===u||"md"===u?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(u="component",e=l.tabs[t]),{name:t,content:e,type:u}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},403:function(n,l,t){"use strict";t.d(l,"b",function(){return u}),t.d(l,"a",function(){return e});var u=function(){return function(){}}(),e=function(){return function(){this.disabled=!1,this.tabClass=""}}()},404:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var u=t(7),e=t(0),o=t(403),i=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new u.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,u=this.tabs.toArray();n instanceof o.a?(l=u.indexOf(n),t=n):"number"==typeof n&&u[n]?t=u[l=n]:(l=-1,t=null),l>=0&&t instanceof o.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},405:function(n,l,t){"use strict";t.d(l,"a",function(){return u});t(402);var u=function(){return function(){}}()},406:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},407:function(n,l,t){"use strict";t.d(l,"a",function(){return j});var u=t(0),e=t(188),o=t(409),i=t(403),r=t(3),a=t(408),c=t(404),s=t(402),b=t(4),f=t(6),p=u.Xa({encapsulation:2,styles:[],data:{}});function d(n){return u.sb(0,[(n()(),u.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function h(n){return u.sb(0,[(n()(),u.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),u.Ya(1,671744,null,0,e.a,[u.Aa],{target:[0,"target"]},null),(n()(),u.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function m(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),u.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function v(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function g(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function I(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,o.b,o.a)),u.Ya(1,49152,[[1,4]],1,i.a,[],null,null),u.ob(335544320,2,{label:0}),(n()(),u.Qa(0,[[2,2]],0,1,null,d)),u.Ya(4,16384,null,0,i.b,[],null,null),(n()(),u.Qa(16777216,null,0,1,null,h)),u.Ya(6,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),(n()(),u.Qa(16777216,null,0,1,null,m)),u.Ya(8,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),(n()(),u.Qa(16777216,null,0,1,null,v)),u.Ya(10,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),(n()(),u.Qa(16777216,null,0,1,null,y)),u.Ya(12,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),(n()(),u.Qa(16777216,null,0,1,null,g)),u.Ya(14,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function O(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),u.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,a.b,a.a)),u.Ya(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),u.ob(603979776,1,{tabs:1}),(n()(),u.Qa(16777216,null,0,1,null,I)),u.Ya(5,802816,null,0,r.k,[u.Aa,u.X,u.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function x(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),u.qb(1,null,[" ",""])),(n()(),u.Qa(16777216,null,null,1,null,O)),u.Ya(3,16384,null,0,r.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var j=u.Va("ng-component",s.a,function(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,1,"ng-component",[],null,null,null,x,p)),u.Ya(1,114688,null,0,s.a,[b.a,f.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},408:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return c});var u=t(0),e=t(188),o=t(3),i=t(404),r=u.Xa({encapsulation:2,styles:[],data:{}});function a(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var u=!0,e=n.component;"tap"===l&&(u=!1!==e.onTabClick(n.context.$implicit)&&u);return u},null,null)),(n()(),u.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),u.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),u.Ya(3,671744,null,0,e.a,[u.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,u.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return u.sb(0,[u.ob(402653184,1,{tabContent:0}),(n()(),u.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),u.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),u.Qa(16777216,null,null,1,null,a)),u.Ya(4,802816,null,0,o.k,[u.Aa,u.X,u.y],{ngForOf:[0,"ngForOf"]},null),(n()(),u.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),u.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),u.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),u.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,u.bb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,u.bb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,u.bb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}i.a},409:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return r});var u=t(0),e=t(403),o=u.Xa({encapsulation:2,styles:[],data:{}});function i(n){return u.sb(0,[u.ib(null,0),(n()(),u.Qa(0,null,null,0))],null,null)}function r(n){return u.sb(0,[u.ob(402653184,1,{content:0}),(n()(),u.Qa(0,[[1,2]],null,0,null,i))],null,null)}e.a},410:function(n,l,t){"use strict";t.d(l,"b",function(){return u}),t.d(l,"a",function(){return e});var u=function(){function n(){this.disabled=!1}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.disabled||null},enumerable:!0,configurable:!0}),n}(),e=function(){function n(n){this.elRef=n}return n.prototype.onFocus=function(){this.elRef.nativeElement.select()},n}()},413:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},414:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return a});var u=t(0),e=t(118),o=t(34),i=t(190),r=u.Xa({encapsulation:2,styles:[],data:{}});function a(n){return u.sb(2,[(n()(),u.Za(0,0,null,null,1,"span",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,e.d,e.b)),u.Ya(1,49152,null,0,o.b,[],{appIcon:[0,"appIcon"],appIconSrc:[1,"appIconSrc"]},null)],function(n,l){var t=l.component;n(l,1,0,t.icon,t.iconSrc)},function(n,l){n(l,0,0,!0,"img")})}i.a},488:function(n,l,t){"use strict";t.d(l,"c",function(){return o}),t.d(l,"b",function(){return i}),t.d(l,"a",function(){return r});var u=t(503),e=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function u(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),o=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.disabled=!1,l}return e(l,n),Object.defineProperty(l.prototype,"hasAppendedItem",{get:function(){return!!this.appIcon||this.buttons&&this.buttons.length>0},enumerable:!0,configurable:!0}),l}(u.a),i=function(){function n(n,l){this.input=n,this.inputGroup=l}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.input.disabled||this.inputGroup.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classDisabled",{get:function(){return this.isDisabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.isDisabled||null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"prepItem",{get:function(){return!!this.inputGroup.prepIcon},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasAppendedItem",{get:function(){return this.inputGroup.hasAppendedItem},enumerable:!0,configurable:!0}),n}(),r=function(){function n(n,l){this.button=n,this.inputGroup=l}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return!(!this.button.disabled&&!this.inputGroup.disabled)||null},enumerable:!0,configurable:!0}),n}()},498:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},499:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return b});var u=t(0),e=t(20),o=t(3),i=t(21),r=t(488),a=u.Xa({encapsulation:2,styles:[],data:{}});function c(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,4,"div",[["class","vclPrepended"]],null,null,null,null,null)),(n()(),u.Za(1,0,null,null,3,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),u.Ya(2,16384,null,0,e.a,[],null,null),u.nb(512,null,o.j,o.j,[u.y,u.z,u.n,u.O]),u.Ya(4,540672,null,0,e.b,[[4,o.j],i.b],{icon:[0,"icon"]},null)],function(n,l){n(l,4,0,l.component.prepIcon)},function(n,l){n(l,1,0,!0,u.jb(l,2).attrRole,u.jb(l,2).attrAriaLabel,u.jb(l,2).isAriaHidden)})}function s(n){return u.sb(0,[(n()(),u.Za(0,0,null,null,4,"div",[["class","vclAppended"]],null,null,null,null,null)),(n()(),u.Za(1,0,null,null,3,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0],[1,"aria-label",0],[1,"aria-hidden",0]],null,null,null,null)),u.Ya(2,16384,null,0,e.a,[],null,null),u.nb(512,null,o.j,o.j,[u.y,u.z,u.n,u.O]),u.Ya(4,540672,null,0,e.b,[[4,o.j],i.b],{icon:[0,"icon"]},null)],function(n,l){n(l,4,0,l.component.appIcon)},function(n,l){n(l,1,0,!0,u.jb(l,2).attrRole,u.jb(l,2).attrAriaLabel,u.jb(l,2).isAriaHidden)})}function b(n){return u.sb(0,[(n()(),u.Qa(16777216,null,null,1,null,c)),u.Ya(1,16384,null,0,o.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),u.ib(null,0),(n()(),u.Qa(16777216,null,null,1,null,s)),u.Ya(4,16384,null,0,o.l,[u.Aa,u.X],{ngIf:[0,"ngIf"]},null),u.ib(null,1)],function(n,l){var t=l.component;n(l,1,0,t.prepIcon),n(l,4,0,t.appIcon)},null)}r.c}}]);