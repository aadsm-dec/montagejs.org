montageDefine("545ad1d","ui/popup/alert.reel/alert",{dependencies:["montage","ui/component","ui/popup/popup.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/popup/popup.reel").Popup,o=t.Alert=r.create(i,{title:{value:"Alert"},msg:{value:""},details:{value:""},_popup:{value:null},popup:{set:function(e){this._popup=e},get:function(){return this._popup}},okCallback:{value:null},prepareForDraw:{value:function(){this.element.addEventListener("keyup",this,!1)}},handleKeyup:{value:function(e){(e.keyCode==13||e.keyCode==27)&&this.handleOkAction(e)}},handleOkAction:{value:function(e){this.okCallback&&this.okCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_alert_ok",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},show:{value:function(e,t){var n=this.application._alertPopup,r;n||(n=s.create(),this.popup=n,n.type="alert",n.title="Message",n.modal=!0,this.application._alertPopup=n,r=o.create(),n.content=r),r=n.content,r.msg=e,r.okCallback=t||null,n.show()}}})}})