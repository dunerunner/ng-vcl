(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{188:function(n,l,s){"use strict";s.d(l,"a",function(){return e});var a=s(7),t=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s])};return function(l,s){function a(){this.constructor=l}n(l,s),l.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),e=function(n){function l(l){return n.call(this,l)||this}return t(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var s=n.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(a.b)},396:function(n,l,s){"use strict";s.r(l);var a=s(0),t=function(){return function(){}}();var e={demo:function(){return{label:"Busy",tabs:{Demo:t,"README.md":{type:"md",content:s(535)},"demo.component.html":{type:"pre",content:s(534)},"demo.component.ts":{type:"pre",content:s(533)}}}}},p=function(){return function(){}}(),i=s(407),u=function(){function n(n,l){this.element=n,this.x=0,this.y=0,this.resetOnOut=!1,this.hidden=!1,this.hiding=!1,this.invisible=!1,this.startX=-1,this.startY=-1,l.setStyle(n.nativeElement,"position","relative")}return n.prototype.ngAfterContentInit=function(){var n=this;this.magnifier.parent=this,this.magnifier.update(),this.imgContent=this.element.nativeElement.querySelector("img"),this.imgContent.onmousemove=function(l){return n.onMove(l)},this.imgContent.onmouseover=function(){return n.onOver()},this.imgContent.onmouseout=function(){return n.onOut()}},n.prototype.onMove=function(n){-1==this.startX&&(this.startX=this.x,this.startY=this.y);var l=this.width/2,s=this.imgContent.width-this.width/2,a=this.height/2,t=this.imgContent.height-this.height/2;this.x=Math.max(l,Math.min(s,n.layerX))-this.width/2,this.y=Math.max(a,Math.min(t,n.layerY))-this.height/2,this.magnifier.update()},n.prototype.onOver=function(){(this.hidden||this.hiding)&&(this.hiding=!1),this.magnifier.update()},n.prototype.onOut=function(){this.resetOnOut&&(this.x=this.startX,this.y=this.startY),this.hidden&&(this.hiding=!0),this.magnifier.update()},Object.defineProperty(n.prototype,"image",{get:function(){return this.imgContent.getAttribute("src")},enumerable:!0,configurable:!0}),n}(),o=a.Xa({encapsulation:2,styles:[],data:{}});function c(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"div",[],null,null,null,null,null)),a.ib(null,0)],null,null)}var r=function(){function n(n,l){this.element=n,this.renderer=l,l.addClass(n.nativeElement,"vclZoomBoxMagnifier")}return n.prototype.update=function(){var n={top:this.parent.y+"px",left:this.parent.x+"px",width:this.parent.width+"px",height:this.parent.height+"px",display:this.parent.hiding||this.parent.invisible?"none":"block","pointer-events":"none"};for(var l in n)this.renderer.setStyle(this.element.nativeElement,l,n[l])},n}(),h=a.Xa({encapsulation:2,styles:[],data:{}});function g(n){return a.sb(0,[a.ib(null,0)],null,null)}var m=s(3),d=function(){function n(){}return Object.defineProperty(n.prototype,"zoomedSource",{get:function(){return this.image?this.image:this.target.image},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"zoomedX",{get:function(){return this.image?this.target.x*this.scale:this.target.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"zoomedY",{get:function(){return this.image?this.target.y*this.scale:this.target.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"zoomedWidth",{get:function(){return this.image?this.target.width*this.scale:this.target.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"zoomedHeight",{get:function(){return this.image?this.target.height*this.scale:this.target.height},enumerable:!0,configurable:!0}),n}(),j=a.Xa({encapsulation:2,styles:[],data:{}});function b(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,2,"div",[["class","vclZoomBox"]],null,null,null,null,null)),a.Ya(1,278528,null,0,m.o,[a.z,a.n,a.O],{ngStyle:[0,"ngStyle"]},null),a.mb(2,{position:0,"background-image":1,width:2,height:3,"background-position-x":4,"background-position-y":5})],function(n,l){var s=l.component;n(l,1,0,n(l,2,0,"static","url("+s.zoomedSource+")",s.zoomedWidth+"px",s.zoomedHeight+"px","-"+s.zoomedX+"px","-"+s.zoomedY+"px"))},null)}var f=a.Xa({encapsulation:2,styles:[],data:{}});function v(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Sample Zoom-Box"])),(n()(),a.Za(2,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(n()(),a.Za(3,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(4,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,c,o)),a.Ya(5,1097728,[["first",4]],1,u,[a.n,a.O],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"]},null),a.ob(335544320,1,{magnifier:0}),(n()(),a.Za(7,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(n()(),a.Za(8,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,g,h)),a.Ya(9,49152,[[1,4]],0,r,[a.n,a.O],null,null),(n()(),a.Za(10,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(11,0,null,null,1,"vcl-zoom-box",[],[[1,"role",0]],null,null,b,j)),a.Ya(12,49152,null,0,d,[],{target:[0,"target"]},null),(n()(),a.Za(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Zoom-Box with a higher resolution image and mouse reset"])),(n()(),a.Za(17,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(n()(),a.Za(18,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(19,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,c,o)),a.Ya(20,1097728,[["second",4]],1,u,[a.n,a.O],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],resetOnOut:[4,"resetOnOut"]},null),a.ob(335544320,2,{magnifier:0}),(n()(),a.Za(22,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(n()(),a.Za(23,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,g,h)),a.Ya(24,49152,[[2,4]],0,r,[a.n,a.O],null,null),(n()(),a.Za(25,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(26,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,b,j)),a.Ya(27,49152,null,0,d,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(n()(),a.Za(28,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(30,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Zoom-Box with an initially hidden magnifier"])),(n()(),a.Za(32,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(n()(),a.Za(33,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(34,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,c,o)),a.Ya(35,1097728,[["third",4]],1,u,[a.n,a.O],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hiding:[4,"hiding"]},null),a.ob(335544320,3,{magnifier:0}),(n()(),a.Za(37,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(n()(),a.Za(38,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,g,h)),a.Ya(39,49152,[[3,4]],0,r,[a.n,a.O],null,null),(n()(),a.Za(40,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(41,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,b,j)),a.Ya(42,49152,null,0,d,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(n()(),a.Za(43,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(45,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Zoom-Box with appearing magnifier"])),(n()(),a.Za(47,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(n()(),a.Za(48,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(49,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,c,o)),a.Ya(50,1097728,[["fourth",4]],1,u,[a.n,a.O],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hidden:[4,"hidden"],hiding:[5,"hiding"]},null),a.ob(335544320,4,{magnifier:0}),(n()(),a.Za(52,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(n()(),a.Za(53,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,g,h)),a.Ya(54,49152,[[4,4]],0,r,[a.n,a.O],null,null),(n()(),a.Za(55,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(56,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,b,j)),a.Ya(57,49152,null,0,d,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(n()(),a.Za(58,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(59,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Za(60,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.qb(-1,null,["Zoom-Box with an constantly hidden magnifier"])),(n()(),a.Za(62,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(n()(),a.Za(63,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(64,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,c,o)),a.Ya(65,1097728,[["fifth",4]],1,u,[a.n,a.O],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],invisible:[4,"invisible"]},null),a.ob(335544320,5,{magnifier:0}),(n()(),a.Za(67,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(n()(),a.Za(68,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,g,h)),a.Ya(69,49152,[[5,4]],0,r,[a.n,a.O],null,null),(n()(),a.Za(70,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(n()(),a.Za(71,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,b,j)),a.Ya(72,49152,null,0,d,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null)],function(n,l){n(l,5,0,30,60,120,190),n(l,12,0,a.jb(l,5));n(l,20,0,30,60,190,120,!0);n(l,27,0,a.jb(l,20),"https://picsum.photos/640/640?image=434",2);n(l,35,0,30,60,190,120,!0);n(l,42,0,a.jb(l,35),"https://picsum.photos/640/640?image=434",2);n(l,50,0,30,60,190,120,!0,!0);n(l,57,0,a.jb(l,50),"https://picsum.photos/640/640?image=434",2);n(l,65,0,30,60,190,120,!0);n(l,72,0,a.jb(l,65),"https://picsum.photos/640/640?image=434",2)},function(n,l){n(l,11,0,"zoombox");n(l,26,0,"zoombox");n(l,41,0,"zoombox");n(l,56,0,"zoombox");n(l,71,0,"zoombox")})}var x=a.Va("ng-component",t,function(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"ng-component",[],null,null,null,v,f)),a.Ya(1,49152,null,0,t,[],null,null)],null,null)},{},{},[]),y=s(81),Z=s(406),z=s(405),w=function(){return function(){}}(),O=s(4),C=s(402);s.d(l,"ZoomBoxDemoModuleNgFactory",function(){return Y});var Y=a.Wa(p,[],function(n){return a.gb([a.hb(512,a.k,a.La,[[8,[i.a,x]],[3,a.k],a.E]),a.hb(4608,m.n,m.m,[a.A,[2,m.v]]),a.hb(1073742336,m.c,m.c,[]),a.hb(1073742336,y.a,y.a,[]),a.hb(1073742336,Z.a,Z.a,[]),a.hb(1073742336,z.a,z.a,[]),a.hb(1073742336,w,w,[]),a.hb(1073742336,O.m,O.m,[[2,O.r],[2,O.l]]),a.hb(1073742336,p,p,[]),a.hb(1024,O.j,function(){return[[{path:"",component:C.a,data:e}]]},[])])})},402:function(n,l,s){"use strict";s.d(l,"a",function(){return a});s(4);var a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(s){var a,t;return"object"==typeof l.tabs[s]&&l.tabs[s]?t="pre"===(a=l.tabs[s].type)||"html"===a||"md"===a?n.sanitizer.bypassSecurityTrustHtml(l.tabs[s].content):l.tabs[s].content:"function"==typeof l.tabs[s]&&(a="component",t=l.tabs[s]),{name:s,content:t,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},403:function(n,l,s){"use strict";s.d(l,"b",function(){return a}),s.d(l,"a",function(){return t});var a=function(){return function(){}}(),t=function(){return function(){this.disabled=!1,this.tabClass=""}}()},404:function(n,l,s){"use strict";s.d(l,"a",function(){return p});var a=s(7),t=s(0),e=s(403),p=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new a.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,s,a=this.tabs.toArray();n instanceof e.a?(l=a.indexOf(n),s=n):"number"==typeof n&&a[n]?s=a[l=n]:(l=-1,s=null),l>=0&&s instanceof e.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},405:function(n,l,s){"use strict";s.d(l,"a",function(){return a});s(402);var a=function(){return function(){}}()},406:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var a=function(){return function(){}}()},407:function(n,l,s){"use strict";s.d(l,"a",function(){return z});var a=s(0),t=s(188),e=s(409),p=s(403),i=s(3),u=s(408),o=s(404),c=s(402),r=s(4),h=s(6),g=a.Xa({encapsulation:2,styles:[],data:{}});function m(n){return a.sb(0,[(n()(),a.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return a.sb(0,[(n()(),a.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Ya(1,671744,null,0,t.a,[a.Aa],{target:[0,"target"]},null),(n()(),a.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function j(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),a.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),a.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function b(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function f(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function x(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),a.Ya(1,49152,[[1,4]],1,p.a,[],null,null),a.ob(335544320,2,{label:0}),(n()(),a.Qa(0,[[2,2]],0,1,null,m)),a.Ya(4,16384,null,0,p.b,[],null,null),(n()(),a.Qa(16777216,null,0,1,null,d)),a.Ya(6,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null),(n()(),a.Qa(16777216,null,0,1,null,j)),a.Ya(8,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null),(n()(),a.Qa(16777216,null,0,1,null,b)),a.Ya(10,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null),(n()(),a.Qa(16777216,null,0,1,null,f)),a.Ya(12,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null),(n()(),a.Qa(16777216,null,0,1,null,v)),a.Ya(14,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function y(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),a.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,u.b,u.a)),a.Ya(2,1228800,null,1,o.a,[],{borders:[0,"borders"]},null),a.ob(603979776,1,{tabs:1}),(n()(),a.Qa(16777216,null,0,1,null,x)),a.Ya(5,802816,null,0,i.k,[a.Aa,a.X,a.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var s=l.component;n(l,2,0,"true"),n(l,5,0,s.tabs)},null)}function Z(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),a.qb(1,null,[" ",""])),(n()(),a.Qa(16777216,null,null,1,null,y)),a.Ya(3,16384,null,0,i.l,[a.Aa,a.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var z=a.Va("ng-component",c.a,function(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,1,"ng-component",[],null,null,null,Z,g)),a.Ya(1,114688,null,0,c.a,[r.a,h.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},408:function(n,l,s){"use strict";s.d(l,"a",function(){return i}),s.d(l,"b",function(){return o});var a=s(0),t=s(188),e=s(3),p=s(404),i=a.Xa({encapsulation:2,styles:[],data:{}});function u(n){return a.sb(0,[(n()(),a.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,s){var a=!0,t=n.component;"tap"===l&&(a=!1!==t.onTabClick(n.context.$implicit)&&a);return a},null,null)),(n()(),a.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),a.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),a.Ya(3,671744,null,0,t.a,[a.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var s=l.component;n(l,0,0,a.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,s.selectedTabIndex===l.context.index,s.selectedTabIndex===l.context.index)})}function o(n){return a.sb(0,[a.ob(402653184,1,{tabContent:0}),(n()(),a.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),a.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),a.Qa(16777216,null,null,1,null,u)),a.Ya(4,802816,null,0,e.k,[a.Aa,a.X,a.y],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),a.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),a.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),a.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),a.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var s=l.component;n(l,1,0,a.bb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),n(l,2,0,a.bb(1,"vclTabs ",s.tabsClass,""),!!s.borders),n(l,5,0,!0===s.hideContent?"none":null,a.bb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}p.a},409:function(n,l,s){"use strict";s.d(l,"a",function(){return e}),s.d(l,"b",function(){return i});var a=s(0),t=s(403),e=a.Xa({encapsulation:2,styles:[],data:{}});function p(n){return a.sb(0,[a.ib(null,0),(n()(),a.Qa(0,null,null,0))],null,null)}function i(n){return a.sb(0,[a.ob(402653184,1,{content:0}),(n()(),a.Qa(0,[[1,2]],null,0,null,p))],null,null)}t.a},533:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ZoomBoxDemoComponent {\n\n}\n'},534:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Sample Zoom-Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"190"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"first"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with a higher resolution image and mouse reset<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">second</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">resetOnOut</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"second"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an initially hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">third</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"third"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with appearing magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fourth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hidden</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fourth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an constantly hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fifth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">invisible</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fifth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},535:function(n,l){n.exports='<h1 id="vcl-zoom-box">vcl-zoom-box</h1>\n<p>Zoom into areas of images.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">&quot;30&quot;</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;120&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;190&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/320/320?image=434&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;first&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="zoom-box-container-properties">Zoom-Box Container Properties</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>x</code></td>\n<td>number</td>\n<td>0</td>\n<td>Left offset (optional)</td>\n</tr>\n<tr>\n<td><code>y</code></td>\n<td>number</td>\n<td>0</td>\n<td>Top offset (optional)</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number</td>\n<td></td>\n<td>Width of zoomed box</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number</td>\n<td></td>\n<td>Height of zoomed box</td>\n</tr>\n<tr>\n<td><code>resetOnOut</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Reset position to initial on mouse out</td>\n</tr>\n</tbody>\n</table>\n<h3 id="zoom-box-properties">Zoom-Box Properties</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>image</code></td>\n<td>string</td>\n<td>&quot;&quot;</td>\n<td>High resolution image (optional)</td>\n</tr>\n<tr>\n<td><code>highResScale</code></td>\n<td>number</td>\n<td>1</td>\n<td>High resolution image scale multiplier (required if image is defined)</td>\n</tr>\n</tbody>\n</table>\n'}}]);