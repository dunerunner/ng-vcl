(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{406:function(n,l,t){"use strict";t.r(l);var s=t(0),a=function(){function n(n){this.hintService=n}return n.prototype.startTour=function(){this.hintService.initialize()},n}();var e,o={demo:function(){return{label:"Tour",tabs:{Demo:a,"README.md":{type:"md",content:t(515)},"demo.component.html":{type:"pre",content:t(514)},"demo.component.ts":{type:"pre",content:t(513)}}}}},i=function(){return function(){}}(),r=t(411),u=t(3),p=function(){function n(n){var l=this;this.hintService=n,this.hintService.overlay$.subscribe(function(n){return l.show=n})}return n.prototype.dismiss=function(){this.hintService.hintOptions.dismissOnOverlay&&this.hintService.overlayNext()},n}(),c=t(35),h=function(){return function(){this.elementsDisabled=!0,this.defaultPosition=d.DEFAULT_POSITION,this.defaultOrder=d.DEFAULT_ORDER,this.defaultLayer=d.DEFAULT_PX_LAYER,this.applyRelative=d.APPLY_RELATIVE,this.stepTag=d.HINT_TAG,this.dismissOnOverlay=d.DISMISS_ON_OVERLAY}}(),d={HINT_TAG:"vcl-tour-step",DEFAULT_POSITION:"bottom",Z_INDEX:"999",DEFAULT_ORDER:99,DEFAULT_PX_LAYER:15,APPLY_RELATIVE:!0,DISMISS_ON_OVERLAY:!1};e||(e={});var g=function(){function n(){this.anchors={},this.overlay$=new c.a,this.registration$=new c.a,this.finish$=new c.a,this.showingStep$=new c.a}return n.prototype.initialize=function(n){void 0===n&&(n=new h),this.hintOptions=Object.assign(new h,n);var l=document.getElementsByTagName(this.hintOptions.stepTag);this.steps=this.initSteps(l),this.startAt(0),this.overlay$.next(!0)},n.prototype.show=function(n){var l=this.anchors[n.selector+"_"+n.order];l&&l.showStep()},n.prototype.showNext=function(){this.currentStep=void 0!=this.currentStep?this.steps[this.steps.indexOf(this.currentStep)+1]:void 0;var n=void 0!=this.currentStep?this.anchors[this.currentStep.selector+"_"+this.currentStep.order]:null;n&&n.showStep()},n.prototype.overlayNext=function(){this.hasNext()&&void 0!=this.currentStep?(this.anchors[this.currentStep.selector+"_"+this.currentStep.order].hideStep(),this.showNext()):this.end()},n.prototype.showPrevious=function(){this.currentStep=void 0!=this.currentStep?this.steps[this.steps.indexOf(this.currentStep)-1]:void 0;var n=void 0!=this.currentStep?this.anchors[this.currentStep.selector+"_"+this.currentStep.order]:null;n&&n.showStep()},n.prototype.register=function(n,l){if(this.anchors[n])throw"selector "+n+" already registered!";this.anchors[n]=l,this.registration$.next(!0)},n.prototype.hasNext=function(){return void 0!=this.currentStep&&this.steps.indexOf(this.currentStep)<this.steps.length-1},n.prototype.hasPrevious=function(){return void 0!=this.currentStep&&this.steps.indexOf(this.currentStep)>0},n.prototype.end=function(){this.overlay$.next(!1);var n=void 0!=this.currentStep?this.anchors[this.currentStep.selector+"_"+this.currentStep.order]:null;n&&(this.currentStep=void 0,n.hideStep(),this.finish$.next(!0))},n.prototype.startAt=function(n){this.currentStep=this.steps[n],this.show(this.currentStep)},n.prototype.initSteps=function(n){for(var l=[],t=0;t<n.length;t++)l.push({selector:n[t].getAttribute("selector"),order:Number(n[t].getAttribute("order"))||this.hintOptions.defaultOrder});return l.sort(function(n,l){return n.order-l.order})},n.prototype.putOverlay=function(){document.getElementsByTagName("body")},n}(),f=[[".hintOverlay[_ngcontent-%COMP%] {\n    position: fixed !important ;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .5);\n    z-index: 20;\n    top: 0;\n    left: 0;\n}"]],b=s.Xa({encapsulation:0,styles:f,data:{}});function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[["class","hintOverlay"]],null,[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.dismiss()&&s);return s},null,null))],null,null)}function m(n){return s.sb(0,[(n()(),s.Qa(16777216,null,null,1,null,v)),s.Ya(1,16384,null,0,u.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.show)},null)}var j=function(){function n(n){this.hintService=n}return n.prototype.ngOnInit=function(){this.hintService.register(this.selector+"_"+Number(this.order||0),this)},n.prototype.showStep=function(){this.hintService.showingStep$.next(this),this.position=this.position||this.hintService.hintOptions.defaultPosition,this.order=+this.order||this.hintService.hintOptions.defaultOrder;var n=document.getElementById(this.selector);if(n)switch(n.style.zIndex=d.Z_INDEX,this.hintService.hintOptions.elementsDisabled&&this.disableClick(n),this.hintService.hintOptions.applyRelative&&this.enableHighlight(n),this.position){case e.Top:this.transformClass="transformX_50 transformY_100",this.topPos=n.offsetTop-this.hintService.hintOptions.defaultLayer,this.leftPos=n.offsetLeft+n.offsetWidth/2;break;case e.Bottom:this.transformClass="transformX_50",this.topPos=n.offsetTop+n.offsetHeight+this.hintService.hintOptions.defaultLayer,this.leftPos=n.offsetLeft+n.offsetWidth/2;break;case e.Left:this.topPos=n.offsetTop+n.offsetHeight/2,this.leftPos=n.offsetLeft-this.hintService.hintOptions.defaultLayer,this.transformClass="transformY_50 transformX_100";break;case e.Right:this.topPos=n.offsetTop+n.offsetHeight/2,this.leftPos=n.offsetLeft+n.offsetWidth+this.hintService.hintOptions.defaultLayer,this.transformClass="transformY_50";break;default:throw"Invalid hint position: "+this.position}else this.topPos=0,this.leftPos=0;this.showMe=!0,this.hasNext=this.hintService.hasNext(),this.hasPrevious=this.hintService.hasPrevious()},n.prototype.hideStep=function(){var n=document.getElementById(this.selector);n&&(n.style.zIndex=null,this.enableClick(n),this.disableHighlight(n)),this.showMe=!1},n.prototype.exit=function(){this.hintService.end()},n.prototype.next=function(){this.hideStep(),this.hintService.showNext()},n.prototype.previous=function(){this.hideStep(),this.hintService.showPrevious()},n.prototype.disableClick=function(n){n.style.cursor="default",n.style.pointerEvents="none"},n.prototype.enableClick=function(n){n.style.cursor=null,n.style.pointerEvents=null},n.prototype.enableHighlight=function(n){n.style.position="relative"},n.prototype.disableHighlight=function(n){n.style.position=null},n}(),y=[[".vclTourHintWrapper[_ngcontent-%COMP%] {\n    position: absolute !important;\n    background-color: #fff;\n    z-index: 999;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourHintWrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourHintWrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.vclTourHintWrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.vclTourHintWrapper[_ngcontent-%COMP%]   .vclButton[_ngcontent-%COMP%]:first {\n  margin-left: 0;\n}\n  \n.vclTourHintWrapper.transformX_50.transformY_100[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-50%) translateY(-100%);\n  transform: translateX(-50%) translateY(-100%);\n}\n  \n.vclTourHintWrapper.transformX_50[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n  \n.vclTourHintWrapper.transformY_50[_ngcontent-%COMP%] {\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n  \n.vclTourHintWrapper.transformY_50.transformX_100[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-100%) translateY(-50%);\n  transform: translateX(-100%) translateY(-50%);\n}"]],S=s.Xa({encapsulation:0,styles:y,data:{}});function w(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(n()(),s.qb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.title)})}function x(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,4,"button",[["class","vclButton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.previous()&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,3,"div",[["class","vclIcogram"]],null,null,null,null,null)),(n()(),s.Za(2,0,null,null,0,"div",[["aria-hidden","true"],["class","vclIcon fa fa-chevron-left"],["role","img"]],null,null,null,null,null)),(n()(),s.Za(3,0,null,null,1,"span",[["class","vclText"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Previous"]))],null,null)}function T(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,4,"button",[["class","vclButton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.next()&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,3,"div",[["class","vclIcogram"]],null,null,null,null,null)),(n()(),s.Za(2,0,null,null,0,"div",[["aria-hidden","true"],["class","vclIcon fa fa-chevron-right"],["role","img"]],null,null,null,null,null)),(n()(),s.Za(3,0,null,null,1,"span",[["class","vclText"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Next"]))],null,null)}function O(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,16,"div",[],[[8,"className",0]],null,null,null,null)),s.Ya(1,278528,null,0,u.o,[s.z,s.n,s.O],{ngStyle:[0,"ngStyle"]},null),s.mb(2,{top:0,left:1}),(n()(),s.Qa(16777216,null,null,1,null,w)),s.Ya(4,16384,null,0,u.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Za(5,0,null,null,1,"div",[["class","content"]],null,null,null,null,null)),s.ib(null,0),(n()(),s.Za(7,0,null,null,9,"div",[["class","footer"]],null,null,null,null,null)),(n()(),s.Qa(16777216,null,null,1,null,x)),s.Ya(9,16384,null,0,u.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,null,1,null,T)),s.Ya(11,16384,null,0,u.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Za(12,0,null,null,4,"button",[["class","vclButton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.exit()&&s);return s},null,null)),(n()(),s.Za(13,0,null,null,3,"div",[["class","vclIcogram"]],null,null,null,null,null)),(n()(),s.Za(14,0,null,null,0,"div",[["aria-hidden","true"],["class","vclIcon fa fa-close"],["role","img"]],null,null,null,null,null)),(n()(),s.Za(15,0,null,null,1,"span",[["class","vclText"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Exit"]))],function(n,l){var t=l.component;n(l,1,0,n(l,2,0,t.topPos+"px",t.leftPos+"px")),n(l,4,0,t.title),n(l,9,0,t.hasPrevious),n(l,11,0,t.hasNext)},function(n,l){var t=l.component;n(l,0,0,s.bb(3,"vclTourHintWrapper ",t.transformClass," step",t.order," ",t.position,""))})}function C(n){return s.sb(0,[(n()(),s.Qa(16777216,null,null,1,null,O)),s.Ya(1,16384,null,0,u.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.showMe)},null)}var I=s.Xa({encapsulation:2,styles:[],data:{}});function Z(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,39,"section",[["class","vlcContentArea"]],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,1,"vcl-tour-overlay",[],null,null,null,m,b)),s.Ya(2,49152,null,0,p,[g],null,null),(n()(),s.Za(3,0,null,null,21,"div",[["class","vclLayoutVertical"]],null,null,null,null,null)),(n()(),s.Za(4,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),s.Za(5,0,null,null,3,"button",[["class","vclButton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var s=!0,a=n.component;"click"===l&&(s=!1!==a.startTour()&&s);return s},null,null)),(n()(),s.Za(6,0,null,null,2,"div",[["class","vclIcogram"]],null,null,null,null,null)),(n()(),s.Za(7,0,null,null,1,"span",[["class","vclText"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Start tour"])),(n()(),s.Za(9,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),s.Za(10,0,null,null,2,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.Za(11,0,null,null,1,"h1",[["class","vclContainer"],["id","heading1"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Heading"])),(n()(),s.Za(13,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.Za(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(15,0,null,null,1,"p",[["class","vclContainer"],["id","heading2"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Heading"])),(n()(),s.Za(17,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.Za(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(19,0,null,null,1,"p",[["class","vclContainer"],["id","heading3"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Heading"])),(n()(),s.Za(21,0,null,null,3,"div",[["class","vclGridSpan-25p"]],null,null,null,null,null)),(n()(),s.Za(22,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Za(23,0,null,null,1,"p",[["class","vclContainer"],["id","heading4"]],null,null,null,null,null)),(n()(),s.qb(-1,null,["Heading"])),(n()(),s.Za(25,0,null,null,2,"vcl-tour-step",[["order","1"],["selector","heading1"],["title","Step Title"]],null,null,null,C,S)),s.Ya(26,114688,null,0,j,[g],{title:[0,"title"],selector:[1,"selector"],order:[2,"order"]},null),(n()(),s.qb(-1,0,[" Demo tour first step with title "])),(n()(),s.Za(28,0,null,null,2,"vcl-tour-step",[["order","2"],["selector","heading2"]],null,null,null,C,S)),s.Ya(29,114688,null,0,j,[g],{selector:[0,"selector"],order:[1,"order"]},null),(n()(),s.qb(-1,0,[" Demo tour second step no title "])),(n()(),s.Za(31,0,null,null,2,"vcl-tour-step",[["order","3"],["position","top"],["selector","heading3"]],null,null,null,C,S)),s.Ya(32,114688,null,0,j,[g],{selector:[0,"selector"],order:[1,"order"],position:[2,"position"]},null),(n()(),s.qb(-1,0,[" Demo tour third step top position "])),(n()(),s.Za(34,0,null,null,2,"vcl-tour-step",[["order","4"],["position","left"],["selector","heading4"]],null,null,null,C,S)),s.Ya(35,114688,null,0,j,[g],{selector:[0,"selector"],order:[1,"order"],position:[2,"position"]},null),(n()(),s.qb(-1,0,[" Demo tour fourth step left position "])),(n()(),s.Za(37,0,null,null,2,"vcl-tour-step",[["order","5"],["position","right"],["selector","heading2"]],null,null,null,C,S)),s.Ya(38,114688,null,0,j,[g],{selector:[0,"selector"],order:[1,"order"],position:[2,"position"]},null),(n()(),s.qb(-1,0,[" Demo tour fifth step right position "]))],function(n,l){n(l,26,0,"Step Title","heading1","1");n(l,29,0,"heading2","2");n(l,32,0,"heading3","3","top");n(l,35,0,"heading4","4","left");n(l,38,0,"heading2","5","right")},null)}var k=s.Va("ng-component",a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,Z,I)),s.Ya(1,49152,null,0,a,[g],null,null)],null,null)},{},{},[]),P=t(43),_=t(172),A=t(412),H=t(410),Y=function(){return function(){}}(),D=t(171),E=t(24),L=t(170),N=t(166),X=t(169),q=t(167),$=t(420),M=t(4),R=t(409);t.d(l,"TourDemoModuleNgFactory",function(){return Q});var Q=s.Wa(i,[],function(n){return s.gb([s.hb(512,s.k,s.La,[[8,[r.a,k]],[3,s.k],s.E]),s.hb(4608,u.n,u.m,[s.A,[2,u.v]]),s.hb(4608,g,g,[]),s.hb(5120,P.b,function(){return[new P.a]},[]),s.hb(1073742336,u.c,u.c,[]),s.hb(1073742336,_.a,_.a,[]),s.hb(1073742336,A.a,A.a,[]),s.hb(1073742336,H.a,H.a,[]),s.hb(1073742336,Y,Y,[]),s.hb(1073742336,D.a,D.a,[]),s.hb(1073742336,E.c,E.c,[]),s.hb(1073742336,L.a,L.a,[]),s.hb(1073742336,N.a,N.a,[]),s.hb(1073742336,X.a,X.a,[]),s.hb(1073742336,q.a,q.a,[]),s.hb(1073742336,$.a,$.a,[]),s.hb(1073742336,M.m,M.m,[[2,M.r],[2,M.l]]),s.hb(1073742336,i,i,[]),s.hb(1024,M.j,function(){return[[{path:"",component:R.a,data:o}]]},[])])})},409:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(s=l.tabs[t].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(s="component",a=l.tabs[t]),{name:t,content:a,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},410:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(409);var s=function(){return function(){}}()},411:function(n,l,t){"use strict";t.d(l,"a",function(){return x});var s=t(0),a=t(354),e=t(416),o=t(415),i=t(3),r=t(414),u=t(413),p=t(409),c=t(4),h=t(6),d=s.Xa({encapsulation:2,styles:[],data:{}});function g(n){return s.sb(0,[(n()(),s.qb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function f(n){return s.sb(0,[(n()(),s.Za(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(1,671744,null,0,a.a,[s.Aa],{target:[0,"target"]},null),(n()(),s.Qa(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function b(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.qb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function v(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function m(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),s.Ya(1,49152,[[1,4]],1,o.a,[],null,null),s.ob(335544320,2,{label:0}),(n()(),s.Qa(0,[[2,2]],0,1,null,g)),s.Ya(4,16384,null,0,o.b,[],null,null),(n()(),s.Qa(16777216,null,0,1,null,f)),s.Ya(6,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,b)),s.Ya(8,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,v)),s.Ya(10,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,m)),s.Ya(12,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null),(n()(),s.Qa(16777216,null,0,1,null,j)),s.Ya(14,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function S(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Za(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),s.Ya(2,1228800,null,1,u.a,[],{borders:[0,"borders"]},null),s.ob(603979776,1,{tabs:1}),(n()(),s.Qa(16777216,null,0,1,null,y)),s.Ya(5,802816,null,0,i.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function w(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.qb(1,null,[" ",""])),(n()(),s.Qa(16777216,null,null,1,null,S)),s.Ya(3,16384,null,0,i.l,[s.Aa,s.X],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var x=s.Va("ng-component",p.a,function(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,1,"ng-component",[],null,null,null,w,d)),s.Ya(1,114688,null,0,p.a,[c.a,h.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},412:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},413:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var s=t(89),a=t(0),e=t(415),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,s=this.tabs.toArray();n instanceof e.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?t=s[l=n]:(l=-1,t=null),l>=0&&t instanceof e.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},414:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return u});var s=t(0),a=t(354),e=t(3),o=t(413),i=s.Xa({encapsulation:2,styles:[],data:{}});function r(n){return s.sb(0,[(n()(),s.Za(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,a=n.component;"tap"===l&&(s=!1!==a.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Za(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Za(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Ya(3,671744,null,0,a.a,[s.Aa],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s.bb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function u(n){return s.sb(0,[s.ob(402653184,1,{tabContent:0}),(n()(),s.Za(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Za(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.Qa(16777216,null,null,1,null,r)),s.Ya(4,802816,null,0,e.k,[s.Aa,s.X,s.y],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Za(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Za(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Za(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Za(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.ib(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s.bb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,s.bb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,s.bb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}o.a},415:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},416:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return i});var s=t(0),a=t(415),e=s.Xa({encapsulation:2,styles:[],data:{}});function o(n){return s.sb(0,[s.ib(null,0),(n()(),s.Qa(0,null,null,0))],null,null)}function i(n){return s.sb(0,[s.ob(402653184,1,{content:0}),(n()(),s.Qa(0,[[1,2]],null,0,null,o))],null,null)}a.a},417:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){function n(){this.disabled=!1}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.disabled||null},enumerable:!0,configurable:!0}),n}(),a=function(){function n(n){this.elRef=n}return n.prototype.onFocus=function(){this.elRef.nativeElement.select()},n}()},420:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},513:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { HintService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TourDemoComponent {\n    <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> hintService: HintService</span>) {}\n\n    startTour() {\n      <span class="hljs-keyword">this</span>.hintService.initialize();\n    }\n}\n'},514:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vlcContentArea"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n    \n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutVertical"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclButton"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"startTour()"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclIcogram"</span>&gt;</span>\n                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclText"</span>&gt;</span>Start tour<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>   \n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"heading1"</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"heading2"</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"heading3"</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"heading4"</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">"heading1"</span> <span class="hljs-attr">order</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Step Title"</span>&gt;</span>\n        Demo tour first step with title\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">"heading2"</span> <span class="hljs-attr">order</span>=<span class="hljs-string">"2"</span>&gt;</span>\n        Demo tour second step no title\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">"heading3"</span> <span class="hljs-attr">order</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"top"</span>&gt;</span>\n        Demo tour third step top position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">"heading4"</span> <span class="hljs-attr">order</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"left"</span>&gt;</span>\n        Demo tour fourth step left position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">"heading2"</span> <span class="hljs-attr">order</span>=<span class="hljs-string">"5"</span> <span class="hljs-attr">position</span>=<span class="hljs-string">"right"</span>&gt;</span>\n        Demo tour fifth step right position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>'},515:function(n,l){n.exports='<h1 id="vcl-tour-step-and-vcl-tour-overlay">vcl-tour-step and vcl-tour-overlay</h1>\n<p>Simple and customizable application tour component with overlay</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTourModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTourModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(public hintService: HintService){ }\n\n  startTour() {\n    <span class="hljs-keyword">this</span>.hintService.initialize();\n  }\n}\n\n</pre>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Overlay element inserted on top of the page--&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Start tour --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;startTour()&quot;</span>&gt;</span>Begin tour<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Some application element --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;foo&quot;</span>&gt;</span>Some element<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">selector</span>=<span class="hljs-string">&quot;foo&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;some title&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- ANY HTML HERE\n    <span class="hljs-doctag">NOTE:</span> Only selector attribute is required! \n          If same element used multiple times, \n          provide order in which the steps should follow!\n  --&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-tour-step-properties">vcl-tour-step Properties</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Tour step title</td>\n</tr>\n<tr>\n<td><code>selector</code></td>\n<td>string</td>\n<td></td>\n<td>Required property, elements id which to highlight and attach tour step</td>\n</tr>\n<tr>\n<td><code>order</code></td>\n<td>number</td>\n<td>0</td>\n<td>The order number in which tour step should be shown, necessary if same element used multiple times</td>\n</tr>\n<tr>\n<td><code>position</code></td>\n<td>string</td>\n<td>bottom</td>\n<td>Tour step window position relative to element</td>\n</tr>\n</tbody>\n</table>\n<h4 id="hintservice-events">HintService events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>finish$</code></td>\n<td>Triggers when tour is finished</td>\n</tr>\n<tr>\n<td><code>showingStep$</code></td>\n<td>Triggers on each step show(Params &gt; CurrentStep)</td>\n</tr>\n</tbody>\n</table>\n<h3 id="hintservice-default-options">HintService default options</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>elementsDisabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Disabling highlightedElement (click) wont work</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>defaultPosition</code></td>\n<td>string</td>\n<td>bottom</td>\n<td>Position of tour step to highlightedElement</td>\n</tr>\n<tr>\n<td><code>defaultOrder</code></td>\n<td>number</td>\n<td>99</td>\n<td>Order of showing steps</td>\n</tr>\n<tr>\n<td><code>defaultLayer</code></td>\n<td>number</td>\n<td>15</td>\n<td>Distance between highlightedElement and step in px</td>\n</tr>\n<tr>\n<td><code>applyRelative</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)</td>\n</tr>\n</tbody>\n</table>\n<h4 id="custom-options-usage">Custom options usage</h4>\n<pre class="hljs"> startTour() {\n    <span class="hljs-keyword">this</span>.hintService.initialize({<span class="hljs-attr">elementsDisabled</span>: <span class="hljs-literal">false</span>}); <span class="hljs-comment">// HintOptions</span>\n  }\n</pre>\n'}}]);