montageDefine("e2fc70c","core/logger",{dependencies:["montage"],factory:function(e,t){var n,i,r,a,o,s,u,l,c,d=e("montage").Montage;i=t.loggers={},s=function(){var e,t=s.caller.caller;return e=t.name,""===e&&(e="anonymous"),e},u=function(e){if(e.getHours){var t=e.getHours(),n=e.getMinutes(),i=e.getSeconds();return(1===t.length?"0"+t:t)+":"+(1===n.length?"0"+n:n)+":"+(1===i.length?"0"+i:i)+"."+e.getMilliseconds()}},o=function(){},r=function(){console.log(arguments)},a=function(){var e=arguments[0],t=e._montage_metadata;new Date,t?([].shift.call(arguments),[].unshift.call(arguments,t.objectName+"."+s(e)+"()"),this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)):this.buffered?this.buffer.push(arguments):console.debug.apply(console,arguments)},n=t.Logger=d.specialize({constructor:{value:function n(){this.super()}},init:{value:function(e,t,n){if(this.name=e,this._onStateChange=t,this._storeState=!n,this._storeState&&c){var i=c.getItem("_montage_logger_"+e);i&&(this.isDebug="true"===i)}return t&&this._onStateChange("true"===i),this.isError=!0,this}},name:{value:null},buffer:{value:[],distinct:!0},buffered:{value:!1},flush:{value:function(){var e,t,n=this.buffer;for(t=0;e=n[t];t++)console.debug.apply(console,e);this.buffer.length=0}},isDebug:{get:function(){return this.debug!==o},set:function(e){this.debug=e?a:o}},isError:{get:function(){return this.error!==o},set:function(e){this.error=e?a:o}},debug:{value:o},error:{value:o},toTimeString:{value:u},_storeState:{value:null},_onStateChange:{value:null}}),t.logger=function(e,t,r){var a;return null==(a=i[e])&&(a=(new n).init(e,t,r),d.defineProperty(i,e,{value:a})),a},l=d.specialize({constructor:{value:function l(){this.super()}},init:{value:function(){return document.nativeAddEventListener?(document.nativeAddEventListener("keyup",this,!1),document.nativeAddEventListener("keydown",this,!1)):(document.addEventListener("keyup",this,!1),document.addEventListener("keydown",this,!1)),this}},inspectorElement:{value:null},m_dontRemove:{value:null},titleHeader:{value:null},shown:{value:!1},isCtrl:{value:!1},isAlt:{value:!1},keyup:{value:function(e){17==e.which&&(this.isCtrl=!1),18==e.which&&(this.isAlt=!1)}},keydown:{value:function(e){return 17==e.which&&(this.isCtrl=!0),18==e.which&&(this.isAlt=!0),76==e.which&&this.isCtrl===!0&&this.isAlt===!0?(this.shown?this.hideInspector():this.showInspector(),!1):void 0}},change:{value:function(e){var t=e.target.checked,n=e.target.value,r=i[n];r.isDebug=t,r._onStateChange&&r._onStateChange(t),r._storeState&&c&&c.setItem("_montage_logger_"+n,t)}},mouseup:{value:function(){this.hideInspector()}},showInspector:{value:function(){if(!this.inspectorElement){var e,t,n,r,a,o,s,u,l,d,h,f=0;for(this.m_dontRemove=document.getElementsByTagName("body")[0],this.inspectorElement=document.createElement("div"),this.inspectorElement.id="_montage_logger_inspector",t=document.createElement("div"),this.inspectorElement.appendChild(t),r=document.createElement("div"),t.appendChild(r),n=document.createElement("h1"),n.className="_montage_logger_inspector-title",n.textContent="Logger Inspector",this.titleHeader=n,r.appendChild(n),l=Object.keys(i),f=0;e=i[l[f]];f++)a=document.createElement("label"),o=document.createElement("input"),h=document.createElement("span"),a.className="_montage_logger_inspector-content",h.textContent=e.name,a.appendChild(o),a.appendChild(h),o.value=e.name,o.type="checkbox",o.checked=!!e.isDebug,u="_montage_logger_"+e.name,e._storeState&&c&&(s=c.getItem(u),null==s&&c.setItem(u,e.isDebug)),r.appendChild(a);d=document.createElement("style");var p="#_montage_logger_inspector {";p+="    border: 1px solid rgba(15,15,15,0.4);",p+="    position: fixed;",p+="    right: 25px;",p+="    top: 25px;",p+="    -webkit-border-radius: 5px;",p+="    color: #dddddd;",p+='    font: 10px "Lucida Grande","Lucida Sans", sans;',p+="    background:-webkit-gradient(linear, left top, left bottom, from(rgba(15,15,15,0.75)), to(rgba(15,15,15,0.95)) );",p+="    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.3);",p+="    width: 250px;",p+="}",p+="#_montage_logger_inspector div {",p+="    -webkit-border-radius: 5px;",p+="    background: -webkit-gradient(radial, 100 -60, 0, 125 -50, 125, from(rgba(255,255,255,0.00)), to(rgba(0,0,0,.2)), color-stop(1, rgba(0,0,0,.2)));",p+="}",p+="#_montage_logger_inspector div div {",p+="    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), to(rgba(0,0,0,.1)), color-stop(0.33, rgba(255,255,255,.01)), color-stop(0.33, rgba(50,50,50,1)) );",p+="    padding: 7px 10px;",p+="    -webkit-border-radius: 3px;",p+="    overflow-x: hidden;",p+="}",p+="._montage_logger_inspector-title {",p+="    color: rgba(255,255,255,0.9);",p+="    font-size: 13px;",p+="    margin: 0 0 11px 0;",p+="    padding: 0 0 0 5px;",p+="}",p+="._montage_logger_inspector-content {",p+="    padding: 0 0 0 20px;",p+="    margin: 0;",p+="    display: block;",p+="}",d.textContent=p,document.head.appendChild(d)}this.shown=!0,this.m_dontRemove.appendChild(this.inspectorElement),this.titleHeader.nativeAddEventListener("mouseup",this,!1),this.inspectorElement.nativeAddEventListener("change",this,!1)}},hideInspector:{value:function(){document.getElementById("_montage_logger_inspector")&&(this.shown=!1,this.m_dontRemove.removeChild(this.inspectorElement),this.titleHeader.nativeRemoveEventListener("mouseup",this,!1),this.inspectorElement.nativeRemoveEventListener("change",this,!1))}},handleEvent:{enumerable:!1,value:function(e){this[e.type]&&this[e.type](e)}}});var h=function(){(new l).init()};"undefined"!=typeof window&&(c=window.localStorage,window.loggers=i,window.localStorage&&h())}});