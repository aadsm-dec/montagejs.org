var Montage=require("core/core").Montage,Interpreter=require("mousse/deserialization/interpreter").Interpreter,Context=require("mousse/deserialization/context").Context,MontageReviver=require("./montage-reviver").MontageReviver,Promise=require("core/promise").Promise,MontageInterpreter=Montage.specialize.call(Interpreter,{_require:{value:null},_reviver:{value:null},init:{value:function(e,n){if("function"!=typeof e)throw Error("Function 'require' missing.");return this._reviver=(new MontageReviver).init(e,n),this}},instantiate:{value:function(e,n,s){var a;return a=(new MontageContext).init(e,this._reviver,n,s),a.getObjects()}},preloadModules:{value:function(e){var n,s,a,t,o=this._reviver,i=o.moduleLoader,r=[];for(var p in e)n=e[p],s=n.prototype||n.object,s&&(a=MontageReviver.parseObjectLocationId(s),t=i.getModule(a.moduleId,p),Promise.isPromise(t)&&r.push(t));return r.length>0?Promise.all(r):void 0}}}),MontageContext=Montage.specialize.call(Context,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,n,s,a){return Context.call(this,e,n,s),this._element=a,this}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var n="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(n)}},setUnitsToDeserialize:{value:function(e,n,s){this._unitsToDeserialize.push({object:e,objectDesc:n,unitNames:s})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});exports.MontageInterpreter=MontageInterpreter,exports.MontageContext=MontageContext;