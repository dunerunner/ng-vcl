webpackJsonp([43],{370:function(n,e,t){"use strict";function l(){return{label:"Month Picker",tabs:{Demo:h,"demo.component.html":{type:"pre",content:t(706)},"demo.component.ts":{type:"pre",content:t(707)}}}}function s(n){return u._29(0,[(n()(),u._6(0,0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare vclLayoutHorizontal vclLayoutCenterCenter"],["type","button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,e,t){var l=!0,s=n.component;if("keypress"===e){l=!1!==u._20(n,1).onKeypress(t)&&l}if("mouseenter"===e){l=!1!==u._20(n,1).onMouseEnter(t)&&l}if("mouseleave"===e){l=!1!==u._20(n,1).onMouseLeave(t)&&l}if("tap"===e){l=!1!==u._20(n,1).onTap(t)&&l}if("click"===e){l=!1!==u._20(n,1).onClick(t)&&l}if("click"===e){l=!1!==s.onCloseBtnTap()&&l}return l},b.b,b.a)),u._5(1,4898816,null,1,_.a,[u.k],{appIcon:[0,"appIcon"]},null),u._25(603979776,3,{buttonContent:1}),(n()(),u._27(-1,0,["\n          "]))],function(n,e){n(e,1,0,e.component.closeBtnIcon)},function(n,e){n(e,0,0,!0,u._20(e,1).hovered,u._20(e,1).isDisabled,u._20(e,1).selected,u._20(e,1).title)})}function a(n){return u._29(0,[(n()(),u._6(0,0,null,null,4,"div",[["class","vclDGCell vclCalItem"],["role","gridcell"]],[[2,"vclAvailable",null],[2,"vclUnavailable",null],[2,"vclToday",null],[2,"vclOtherMonth",null],[2,"vclDisabled",null],[2,"vclSelected",null],[4,"background-color",null],[4,"order",null],[1,"aria-selected",0],[8,"tabIndex",0]],[[null,"click"]],function(n,e,t){var l=!0,s=n.component;if("click"===e){l=!1!==s.selectMonth(s.currentYear,n.parent.parent.context.index+n.context.index)&&l}return l},null,null)),(n()(),u._27(-1,null,["\n            "])),(n()(),u._6(2,0,null,null,1,"div",[["class","vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel"]],null,null,null,null,null)),(n()(),u._27(3,null,["\n              ","\n            "])),(n()(),u._27(-1,null,["\n        "]))],null,function(n,e){var t=e.component;n(e,0,0,!t.useAvailableMonths||t.currentMeta[e.parent.parent.context.index+e.context.index].available,t.useAvailableMonths&&!t.currentMeta[e.parent.parent.context.index+e.context.index].available,t.isCurrentMonth(e.parent.parent.context.index+e.context.index),!t.isCurrentMonth(e.parent.parent.context.index+e.context.index),t.useAvailableMonths&&!t.currentMeta[e.parent.parent.context.index+e.context.index].available,t.currentMeta[e.parent.parent.context.index+e.context.index].selected||t.currentMeta[e.parent.parent.context.index+e.context.index].preselected,t.currentMeta[e.parent.parent.context.index+e.context.index].color,e.parent.parent.context.index+e.context.index,t.currentMeta[e.parent.parent.context.index+e.context.index].selected||t.currentMeta[e.parent.parent.context.index+e.context.index].preselected,e.parent.parent.context.index+e.context.index),n(e,3,0,t.months[e.parent.parent.context.index+e.context.index])})}function r(n){return u._29(0,[(n()(),u._6(0,0,null,null,4,"div",[["class","vclDGRow"],["role","row"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n        "])),(n()(),u._1(16777216,null,null,1,null,a)),u._5(3,802816,null,0,m.k,[u.P,u.M,u.r],{ngForOf:[0,"ngForOf"]},null),(n()(),u._27(-1,null,["\n      "]))],function(n,e){var t=e.component;n(e,3,0,t.months.slice(e.parent.context.index,e.parent.context.index+t.monthsPerRow>t.months.length?t.months.length:e.parent.context.index+t.monthsPerRow))},null)}function o(n){return u._29(0,[(n()(),u._27(-1,null,["\n      "])),(n()(),u._1(16777216,null,null,1,null,r)),u._5(2,16384,null,0,m.l,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u._27(-1,null,["\n    "]))],function(n,e){var t=e.component;n(e,2,0,e.context.index%t.monthsPerRow==0)},null)}function i(n){return u._29(2,[(n()(),u._6(0,0,null,null,37,"div",[["class","vclDatePicker"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n  "])),(n()(),u._6(2,0,null,null,34,"div",[["class","vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput"]],[[1,"role",0],[1,"tabindex",0],[1,"aria-multiselectable",0],[1,"aria-expanded",0]],null,null,null,null)),(n()(),u._27(-1,null,["\n\n    "])),(n()(),u._6(4,0,null,null,26,"div",[["class","vclDGRow"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n      "])),(n()(),u._6(6,0,null,null,23,"div",[["aria-level","1"],["class","vclToolbar vclLayoutHorizontal vclLayoutFlex vclLayoutJustified vclLayoutCenter"],["role","menubar"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n        "])),(n()(),u._6(8,0,null,null,14,"div",[["class","vclLayoutHorizontal vclLayoutCenter"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n          "])),(n()(),u._6(10,0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare vclLayoutHorizontal vclLayoutCenterCenter"],["type","button"],["vcl-button",""]],[[2,"vclDisabled",null],[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,e,t){var l=!0,s=n.component;if("keypress"===e){l=!1!==u._20(n,11).onKeypress(t)&&l}if("mouseenter"===e){l=!1!==u._20(n,11).onMouseEnter(t)&&l}if("mouseleave"===e){l=!1!==u._20(n,11).onMouseLeave(t)&&l}if("tap"===e){l=!1!==u._20(n,11).onTap(t)&&l}if("click"===e){l=!1!==u._20(n,11).onClick(t)&&l}if("click"===e){l=!1!==s.onPrevYearTap()&&l}return l},b.b,b.a)),u._5(11,4898816,null,1,_.a,[u.k],{appIcon:[0,"appIcon"]},null),u._25(603979776,1,{buttonContent:1}),(n()(),u._27(-1,0,["\n          "])),(n()(),u._27(-1,null,["\n\n          "])),(n()(),u._6(15,0,null,null,1,"span",[["class","vclCalHeaderLabel"]],null,null,null,null,null)),(n()(),u._27(16,null,["",""])),(n()(),u._27(-1,null,["\n\n          "])),(n()(),u._6(18,0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare vclLayoutHorizontal vclLayoutCenterCenter"],["type","button"],["vcl-button",""]],[[2,"vclDisabled",null],[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,e,t){var l=!0,s=n.component;if("keypress"===e){l=!1!==u._20(n,19).onKeypress(t)&&l}if("mouseenter"===e){l=!1!==u._20(n,19).onMouseEnter(t)&&l}if("mouseleave"===e){l=!1!==u._20(n,19).onMouseLeave(t)&&l}if("tap"===e){l=!1!==u._20(n,19).onTap(t)&&l}if("click"===e){l=!1!==u._20(n,19).onClick(t)&&l}if("click"===e){l=!1!==s.onNextYearTap()&&l}return l},b.b,b.a)),u._5(19,4898816,null,1,_.a,[u.k],{appIcon:[0,"appIcon"]},null),u._25(603979776,2,{buttonContent:1}),(n()(),u._27(-1,0,["\n          "])),(n()(),u._27(-1,null,["\n        "])),(n()(),u._27(-1,null,["\n\n        "])),(n()(),u._6(24,0,null,null,4,"div",[["class","vclLayoutHorizontal vclLayoutFlex vclLayoutEndJustified"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n          "])),(n()(),u._1(16777216,null,null,1,null,s)),u._5(27,16384,null,0,m.l,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(n()(),u._27(-1,null,["\n        "])),(n()(),u._27(-1,null,["\n\n      "])),(n()(),u._27(-1,null,["\n    "])),(n()(),u._27(-1,null,["\n\n    "])),(n()(),u._6(32,0,null,null,0,"div",[["class","vclSeparator"]],null,null,null,null,null)),(n()(),u._27(-1,null,["\n\n    "])),(n()(),u._1(16777216,null,null,1,null,o)),u._5(35,802816,null,0,m.k,[u.P,u.M,u.r],{ngForOf:[0,"ngForOf"]},null),(n()(),u._27(-1,null,["\n  "])),(n()(),u._27(-1,null,["\n"])),(n()(),u._27(-1,null,["\n"]))],function(n,e){var t=e.component;n(e,11,0,t.prevYearBtnIcon),n(e,19,0,t.nextYearBtnIcon),n(e,27,0,t.expandable),n(e,35,0,t.months)},function(n,e){var t=e.component;n(e,2,0,"grid",t.tabindex,t.maxSelectableMonths>1,t.expanded);n(e,10,0,!t.prevYearAvailable,!0,u._20(e,11).hovered,u._20(e,11).isDisabled,u._20(e,11).selected,u._20(e,11).title),n(e,16,0,t.currentYear);n(e,18,0,!t.nextYearAvailable,!0,u._20(e,19).hovered,u._20(e,19).isDisabled,u._20(e,19).selected,u._20(e,19).title)})}function c(n){return u._29(0,[u._25(402653184,1,{styledMonthPicker:0}),(n()(),u._6(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u._27(-1,null,["Demo with 2 selectable months in different colors"])),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(4,0,null,null,3,"vcl-month-picker",[["id","myStyledMonthPicker"]],null,null,null,i,x)),u._5(5,638976,[[1,4],["myStyledMonthPicker",4]],0,M,[u.h],{colors:[0,"colors"],locales:[1,"locales"],dateOptions:[2,"dateOptions"],prevYearAvailable:[3,"prevYearAvailable"],nextYearAvailable:[4,"nextYearAvailable"]},null),u._21(6,2),(n()(),u._27(-1,null,["\n"])),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n\n"])),(n()(),u._6(12,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u._27(-1,null,["Demo with a button which creates a popover with a month picker"])),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(15,0,null,null,3,"button",[["label","Expand"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,e,t){var l=!0,s=n.component;if("keypress"===e){l=!1!==u._20(n,16).onKeypress(t)&&l}if("mouseenter"===e){l=!1!==u._20(n,16).onMouseEnter(t)&&l}if("mouseleave"===e){l=!1!==u._20(n,16).onMouseLeave(t)&&l}if("tap"===e){l=!1!==u._20(n,16).onTap(t)&&l}if("click"===e){l=!1!==u._20(n,16).onClick(t)&&l}if("click"===e){l=!1!==s.expandMonthPicker()&&l}return l},b.b,b.a)),u._5(16,4898816,[["target",4]],1,_.a,[u.k],{label:[0,"label"]},null),u._25(603979776,2,{buttonContent:1}),(n()(),u._27(-1,0,["\n"])),(n()(),u._27(-1,null,["\n\n"])),(n()(),u._6(20,0,null,null,6,"vcl-popover",[["attachment","top right"],["class","vclNoPadding"],["targetAttachment","bottom right"]],[[2,"vclPopOver",null],[4,"position",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(n,e,t){var l=!0;if("window:resize"===e){l=!1!==u._20(n,21).onWindowResize(t)&&l}return l},y.b,y.a)),u._5(21,4964352,[["mp",4]],0,j.b,[u.k,Y.b,u.h,[2,j.a]],{target:[0,"target"],visible:[1,"visible"]},null),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(23,0,null,0,2,"vcl-month-picker",[],null,[[null,"expandedChange"],[null,"currentYearChange"],[null,"select"],[null,"prevYearBtnTap"],[null,"nextYearBtnTap"]],function(n,e,t){var l=!0,s=n.component;if("expandedChange"===e){l=!1!==(s.expanded=t)&&l}if("currentYearChange"===e){l=!1!==(s.currentYear=t)&&l}if("select"===e){l=!1!==s.onSelect(t)&&l}if("prevYearBtnTap"===e){l=!1!==s.onPreviousYearTap()&&l}if("nextYearBtnTap"===e){l=!1!==s.onNextYearTap()&&l}return l},i,x)),u._5(24,638976,null,0,M,[u.h],{expanded:[0,"expanded"],currentYear:[1,"currentYear"],monthsPerRow:[2,"monthsPerRow"],expandable:[3,"expandable"],prevYearAvailable:[4,"prevYearAvailable"],nextYearAvailable:[5,"nextYearAvailable"]},{expandedChange:"expandedChange",currentYearChange:"currentYearChange",prevYearBtnTap:"prevYearBtnTap",nextYearBtnTap:"nextYearBtnTap",select:"select"}),(n()(),u._27(-1,null,["\n  "])),(n()(),u._27(-1,0,["\n"])),(n()(),u._27(-1,null,["\n"]))],function(n,e){var t=e.component;n(e,5,0,n(e,6,0,"#50E3C2","#FF3CE6"),t.locales,t.dateOptions,!0,!0);n(e,16,0,"Expand"),n(e,21,0,u._20(e,16),t.expanded);n(e,24,0,t.expanded,t.currentYear,4,!0,t.prevYearAvailable,t.nextYearAvailable)},function(n,e){n(e,15,0,!0,u._20(e,16).hovered,u._20(e,16).isDisabled,u._20(e,16).selected,u._20(e,16).title);n(e,20,0,!0,"absolute",u._20(e,21).classHidden,u._20(e,21).styleVisibility,u._20(e,21).transform)})}function p(n){return u._29(0,[(n()(),u._6(0,0,null,null,1,"month-picker",[],null,null,null,c,w)),u._5(1,4308992,null,0,h,[],null,null)],function(n,e){n(e,1,0)},null)}Object.defineProperty(e,"__esModule",{value:!0});var u=t(4),h=function(){function n(){this.expanded=!1,this.thisYear=(new Date).getUTCFullYear(),this.currentYear=this.thisYear,this.prevYearAvailable=!0,this.nextYearAvailable=!1,this.locales="lv-LV",this.dateOptions={month:"long"}}return n.prototype.ngOnInit=function(){},n.prototype.ngAfterViewInit=function(){var n=new Date;this.styledMonthPicker.preselectMonth(n.getFullYear(),n.getMonth(),"pink"),n.setMonth(n.getMonth()-1),this.styledMonthPicker.preselectMonth(n.getFullYear(),n.getMonth(),"black"),this.styledMonthPicker.dePreselectMonth(n.getFullYear(),n.getMonth())},n.prototype.expandMonthPicker=function(){this.expanded=!this.expanded},n.prototype.onSelect=function(n){console.log("onSelect():",n)},n.prototype.onPreviousYearTap=function(){console.log("onPreviousYearTap()"),console.log("this.currentYear:",this.currentYear),this.currentYear<this.thisYear&&(this.nextYearAvailable=!0)},n.prototype.onNextYearTap=function(){console.log("onNextYearTap()"),console.log("this.currentYear:",this.currentYear),this.currentYear===this.thisYear&&(this.nextYearAvailable=!1)},n}(),d={demo:l},v=function(){function n(){}return n}(),g=t(407),b=t(177),_=t(106),m=t(21),M=function(){function n(e){this.ref=e,this.tag=n.Tag,this.now=new Date,this.yearMeta={},this.debug=!1,this.expanded=!0,this.expandedChange=new u.m,this.currentYear=this.now.getFullYear(),this.currentYearChange=new u.m,this.prevYearBtnTap=new u.m,this.nextYearBtnTap=new u.m,this.select=new u.m,this.deselect=new u.m,this.tabindex=0,this.monthsPerRow=3,this.locales="en-US",this.dateOptions={month:"short"},this.expandable=!1,this.prevYearAvailable=!1,this.nextYearAvailable=!1,this.useAvailableMonths=!1,this.closeBtnIcon="fa:times",this.prevYearBtnIcon="fa:chevron-left",this.nextYearBtnIcon="fa:chevron-right",this.minSelectableMonths=0,this.minYear=Number.MIN_SAFE_INTEGER,this.maxYear=Number.MAX_SAFE_INTEGER}return n.prototype.ngOnInit=function(){var e=this,t=new Date(this.now.getFullYear(),0);this.months=Array(n.MonthCount).fill(0).map(function(n){var l=t.toLocaleString(e.locales,e.dateOptions);return t.setMonth(t.getMonth()+1),l}),this.maxSelectableMonths||(this.maxSelectableMonths=this.colors&&this.colors.length||1),this.availableColors=this.colors?this.colors.map(function(n){return!0}):[],this.setYearMeta(this.currentYear)},n.prototype.ngOnChanges=function(n){var e=this.tag+".ngOnChanges()";this.debug&&console.log(e,"changes:",n),n.currentYear&&!n.currentYear.isFirstChange()&&this.setYearMeta(n.currentYear.currentValue)},n.prototype.setYearMeta=function(n){this.yearMeta[n]||(this.yearMeta[n]=this.createYearMeta(n)),this.currentMeta=this.yearMeta[n]},n.prototype.createYearMeta=function(n){return this.months.map(function(n){return{}})},n.prototype.selectMonth=function(n,e){if(this.isMonthAvailable(n,e)&&!this.isMonthPreselected(n,e)){var t=this.getYearMeta(n)[e];if(t.selected){if(this.getSelectedDates().length<=this.minSelectableMonths)return;return this.deselectMonth(n,e)}1===this.maxSelectableMonths&&this.iterateMonthMetas(function(n,e,l){l.selected=l===t}),this.getSelectedDates().length<this.maxSelectableMonths&&(t.selected=!0),t.selected&&(this.setMonthBackgroundColor(n,e),this.notifySelect(n+"."+e),1===this.maxSelectableMonths&&this.expandable&&(this.expanded=!1,this.expandedChange.emit(this.expanded)))}},n.prototype.preselectMonth=function(n,e,t){var l=this.tag+".preselectMonth()";this.debug&&console.log(l,n+"."+e);var s=this.getYearMeta(n)[e];s.selected&&this.deselectMonth(n,e),s.preselected=!0,s.color=t,this.debug&&console.log(l,"monthMeta:",s),this.ref.markForCheck()},n.prototype.dePreselectMonth=function(n,e){var t=this.tag+".dePreselectMonth()";if(this.debug&&console.log(t,n+"."+e),this.isMonthPreselected(n,e)){var l=this.getYearMeta(n)[e];l.preselected=!1,delete l.color,this.debug&&console.log(t,"monthMeta:",l),this.ref.markForCheck()}},n.prototype.isMonthAvailable=function(n,e){return this.isDateInBounds(n,e)&&(!this.useAvailableMonths||this.yearMeta[n]&&this.yearMeta[n][e].available)},n.prototype.isDateInBounds=function(n,e){return this.isMonthInBounds(e)&&this.isYearInBounds(n)},n.prototype.isMonthInBounds=function(e){return e>-1&&e<n.MonthCount},n.prototype.isYearInBounds=function(n){return n>this.minYear&&n<this.maxYear},n.prototype.isMonthPreselected=function(n,e){var t=this.tag+".isMonthPreselected()";this.debug&&console.log(t,n+"."+e);var l=!!(this.isDateInBounds(n,e)&&this.yearMeta[n]&&this.yearMeta[n][e].preselected);return this.debug&&console.log(t,"isMonthPreselected:",l),l},n.prototype.getYearMeta=function(n){return this.yearMeta[n]||(this.yearMeta[n]=this.createYearMeta(n)),this.yearMeta[n]},n.prototype.iterateMonthMetas=function(n){var e=this;Object.keys(this.yearMeta).forEach(function(t){e.yearMeta[t].forEach(function(e,l){n(Number(t),l,e)})})},n.prototype.getSelectedDates=function(){var n=[];return this.iterateMonthMetas(function(e,t,l){l.selected&&n.push(e+"."+t)}),n},n.prototype.setMonthBackgroundColor=function(n,e){var t=this.getMonthBackgroundColor();if(t){this.getYearMeta(n)[e].color=t}},n.prototype.getMonthBackgroundColor=function(){var n=this.availableColors.findIndex(function(n){return n});if(-1!==n)return this.availableColors[n]=!1,this.colors[n]},n.prototype.deselectMonth=function(n,e){if(this.isMonthSelected(n,e)){this.getYearMeta(n)[e].selected=!1,this.clearMonthBackgroundColor(n,e),this.notifyDeselect(n+"."+e)}},n.prototype.isMonthSelected=function(n,e){return this.isDateInBounds(n,e)&&this.yearMeta[n]&&this.yearMeta[n][e].selected},n.prototype.clearMonthBackgroundColor=function(n,e){if(this.availableColors){var t=this.getYearMeta(n)[e];if(t.color){var l=this.colors.indexOf(t.color);this.availableColors[l]=!0,delete t.color}}},n.prototype.deselectAllMonths=function(){this.iterateMonthMetas(this.deselectMonth)},n.prototype.addAvailableMonth=function(n,e){this.isDateInBounds(n,e)&&(this.getYearMeta(n)[e].available=!0)},n.prototype.removeAvailableMonth=function(n,e){this.isDateInBounds(n,e)&&this.yearMeta[n]&&(this.yearMeta[n][e].available=!1)},n.prototype.removeAllAvailableMonths=function(){var n=this;this.iterateMonthMetas(function(e,t){n.dePreselectMonth(e,t),n.deselectMonth(e,t),n.removeAvailableMonth(e,t)})},n.prototype.onPrevYearTap=function(){this.prevYearAvailable&&(this.currentYear--,this.setYearMeta(this.currentYear),this.currentYearChange.emit(this.currentYear),this.prevYearBtnTap.emit())},n.prototype.onNextYearTap=function(){this.nextYearAvailable&&(this.currentYear++,this.setYearMeta(this.currentYear),this.currentYearChange.emit(this.currentYear),this.nextYearBtnTap.emit())},n.prototype.onCloseBtnTap=function(){this.expandable&&this.expanded&&(this.expanded=!1,this.expandedChange.emit(this.expanded))},n.prototype.notifySelect=function(n){this.select.emit(n)},n.prototype.notifyDeselect=function(n){this.deselect.emit(n)},n.prototype.isCurrentMonth=function(n,e){return this.now.getFullYear()==n&&this.now.getMonth()===e},n.prototype.getMonth=function(n,e){if(this.isDateInBounds(n,e))return Object.assign({date:n+"."+e,label:this.months[e]},this.getYearMeta(n)[e])},n.Tag="MonthPickerComponent",n.MonthCount=12,n}(),f=[],x=u._4({encapsulation:2,styles:f,data:{}}),y=t(496),j=t(180),Y=t(31),k=[],w=u._4({encapsulation:2,styles:k,data:{}}),C=u._2("month-picker",h,p,{},{},[]),P=t(43),A=t(174),T=t(71),B=t(406),D=t(408),I=t(175),S=t(176),L=t(178),F=t(421),O=t(427),E=t(545),N=t(42),H=t(405);t.d(e,"MonthPickerDemoModuleNgFactory",function(){return R});var R=u._3(v,[],function(n){return u._17([u._18(512,u.j,u.Z,[[8,[g.a,C]],[3,u.j],u.w]),u._18(4608,m.n,m.m,[u.t,[2,m.v]]),u._18(4608,P.a,P.a,[]),u._18(512,m.c,m.c,[]),u._18(512,A.a,A.a,[]),u._18(512,T.d,T.d,[]),u._18(512,B.a,B.a,[]),u._18(512,D.a,D.a,[]),u._18(512,I.a,I.a,[]),u._18(512,S.a,S.a,[]),u._18(512,L.a,L.a,[]),u._18(512,F.a,F.a,[]),u._18(512,O.a,O.a,[]),u._18(512,E.a,E.a,[]),u._18(512,N.m,N.m,[[2,N.r],[2,N.l]]),u._18(512,v,v,[]),u._18(1024,N.j,function(){return[[{path:"",component:H.a,data:d}]]},[])])})},706:function(n,e){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Demo with 2 selectable months in different colors<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-month-picker</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myStyledMonthPicker"</span> #<span class="hljs-attr">myStyledMonthPicker</span>\n  [<span class="hljs-attr">locales</span>]=<span class="hljs-string">"locales"</span>\n  [<span class="hljs-attr">dateOptions</span>]=<span class="hljs-string">"dateOptions"</span>\n  [<span class="hljs-attr">prevYearAvailable</span>]=<span class="hljs-string">"true"</span>\n  [<span class="hljs-attr">nextYearAvailable</span>]=<span class="hljs-string">"true"</span>\n  [<span class="hljs-attr">colors</span>]=<span class="hljs-string">"[\'#50E3C2\', \'#FF3CE6\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-month-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Demo with a button which creates a popover with a month picker<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span>\n  #<span class="hljs-attr">target</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">"Expand"</span>\n  (<span class="hljs-attr">click</span>)=<span class="hljs-string">"expandMonthPicker()"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> #<span class="hljs-attr">mp</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span> <span class="hljs-attr">targetAttachment</span>=<span class="hljs-string">\'bottom right\'</span> <span class="hljs-attr">attachment</span>=<span class="hljs-string">\'top right\'</span> [<span class="hljs-attr">visible</span>]=<span class="hljs-string">"expanded"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclNoPadding"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-month-picker</span>\n    [<span class="hljs-attr">expandable</span>]=<span class="hljs-string">"true"</span>\n    [(<span class="hljs-attr">expanded</span>)]=<span class="hljs-string">"expanded"</span>\n    [(<span class="hljs-attr">currentYear</span>)]=<span class="hljs-string">"currentYear"</span>\n    [<span class="hljs-attr">monthsPerRow</span>]=<span class="hljs-string">"4"</span>\n    (<span class="hljs-attr">select</span>)=<span class="hljs-string">"onSelect($event)"</span>\n    (<span class="hljs-attr">prevYearBtnTap</span>)=<span class="hljs-string">"onPreviousYearTap()"</span>\n    [<span class="hljs-attr">prevYearAvailable</span>]=<span class="hljs-string">"prevYearAvailable"</span>\n    (<span class="hljs-attr">nextYearBtnTap</span>)=<span class="hljs-string">"onNextYearTap()"</span>\n    [<span class="hljs-attr">nextYearAvailable</span>]=<span class="hljs-string">"nextYearAvailable"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-month-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n'},707:function(n,e){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { MonthPickerComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'month-picker\'</span>,\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MonthPickerDemoComponent {\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'myStyledMonthPicker\'</span>) styledMonthPicker: MonthPickerComponent;\n\n  expanded: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  thisYear: <span class="hljs-built_in">number</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getUTCFullYear();\n\n  currentYear: <span class="hljs-built_in">number</span> = <span class="hljs-keyword">this</span>.thisYear;\n\n  prevYearAvailable: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n\n  nextYearAvailable: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  locales: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'lv-LV\'</span>;\n\n  dateOptions: <span class="hljs-built_in">any</span> = {\n    month: <span class="hljs-string">\'long\'</span>\n  };\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) { }\n\n  ngOnInit() { }\n\n  ngAfterViewInit() {\n    <span class="hljs-keyword">const</span> now: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n    <span class="hljs-keyword">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class="hljs-string">\'pink\'</span>);\n\n    now.setMonth(now.getMonth() - <span class="hljs-number">1</span>);\n    <span class="hljs-keyword">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class="hljs-string">\'black\'</span>);\n    <span class="hljs-keyword">this</span>.styledMonthPicker.dePreselectMonth(now.getFullYear(), now.getMonth());\n  }\n\n  expandMonthPicker() {\n    <span class="hljs-keyword">this</span>.expanded = !<span class="hljs-keyword">this</span>.expanded;\n  }\n\n  onSelect(date: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onSelect():\'</span>, date);\n  }\n\n  onPreviousYearTap() {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onPreviousYearTap()\'</span>);\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'this.currentYear:\'</span>, <span class="hljs-keyword">this</span>.currentYear);\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.currentYear &lt; <span class="hljs-keyword">this</span>.thisYear) {\n      <span class="hljs-keyword">this</span>.nextYearAvailable = <span class="hljs-literal">true</span>;\n    }\n  }\n\n  onNextYearTap() {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onNextYearTap()\'</span>);\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'this.currentYear:\'</span>, <span class="hljs-keyword">this</span>.currentYear);\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.currentYear === <span class="hljs-keyword">this</span>.thisYear) {\n      <span class="hljs-keyword">this</span>.nextYearAvailable = <span class="hljs-literal">false</span>;\n    }\n  }\n}\n\n'}});