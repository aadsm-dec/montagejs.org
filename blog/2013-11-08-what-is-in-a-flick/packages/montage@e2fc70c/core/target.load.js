montageDefine("e2fc70c","core/target",{dependencies:["montage","core/event/event-manager","core/event/mutable-event"],factory:function(e,t){var n=e("montage").Montage,r=e("core/event/event-manager").defaultEventManager,i=e("core/event/mutable-event").MutableEvent;t.Target=n.specialize({constructor:{value:function(){this.super()}},acceptsActiveTarget:{serializable:!1,value:!1},isActiveTarget:{get:function(){return this===r.activeTarget}},willBecomeActiveTarget:{value:Function.noop},didBecomeActiveTarget:{value:Function.noop},surrendersActiveTarget:{value:function(){return!0}},nextTarget:{serializable:!1,value:null},dispatchEvent:{value:function(e){var t=e;return e instanceof i||(t=i.fromEvent(t)),t.target=this,r.handleEvent(t),!e.defaultPrevented}},dispatchEventNamed:{value:function(e,t,n,a){var o=i.fromType(e,t,n,a);return o.target=this,r.handleEvent(o),!o.defaultPrevented}},addEventListener:{value:function(e,t,n){t&&r.registerEventListener(this,e,t,n)}},removeEventListener:{value:function(e,t,n){t&&r.unregisterEventListener(this,e,t,n)}}})}});