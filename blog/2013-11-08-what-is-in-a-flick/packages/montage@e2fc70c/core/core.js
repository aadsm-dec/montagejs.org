function getAttributeProperties(e,t){var n=UNDERSCORE+t+ATTRIBUTE_PROPERTIES;return e.hasOwnProperty(n)?e[n]:Object.defineProperty(e,n,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(getAttributeProperties(Object.getPrototypeOf(e),t))})[n]}require("collections/shim"),require("core/shim/object"),require("core/shim/array"),require("core/shim/string"),require("core/extras/object"),require("core/extras/date"),require("core/extras/element"),require("core/extras/function"),require("core/extras/regexp"),require("core/extras/string");var ATTRIBUTE_PROPERTIES="AttributeProperties",UNDERSCORE="_",PROTO="__proto__",VALUE="value",ENUMERABLE="enumerable",DISTINCT="distinct",SERIALIZABLE="serializable",MODIFY="modify",Array_prototype=Array.prototype,Object_prototype=Object.prototype,CONSTRUCTOR_COMPATIBILITY=!0,Montage=exports.Montage=function Montage(){};Montage.deprecate=function(e,t,n,r){var i=function(){var i=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(r?console.warn(n+" is deprecated, use "+r+" instead.",Error("").stack):console.warn(n,Error("").stack)),Error.stackTraceLimit=i,t.apply(e?e:this,arguments)};return i.deprecatedFunction=t,i},Montage.callDeprecatedFunction=function(e,t,n,r){var i,a,s=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(i=Montage.getInfoForObject(e).objectName,r?console.warn(n+" is deprecated, use "+r+" instead.",i):console.warn(n,i)),Error.stackTraceLimit=s,a=Array_prototype.slice.call(arguments,4),t.apply(e?e:this,a)};var PROTO_IS_SUPPORTED={}.__proto__===Object.prototype,PROTO_PROPERTIES_BLACKLIST={_montage_metadata:1,__state__:1},FUNCTION_PROPERTIES=Object.getOwnPropertyNames(Function);if(Object.defineProperty(Montage,"specialize",{value:function(e,t){var n,r,i,a,s,o,u,l=this,h=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?Montage.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},PROTO_IS_SUPPORTED)n.__proto__=l;else{i=Object.getOwnPropertyNames(l);for(var o=0;i.length>o;o++)a=i[o],PROTO_PROPERTIES_BLACKLIST.hasOwnProperty(a)||(s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(n,a,Object.getOwnPropertyDescriptor(l,a)));n.__constructorProto__=l,Montage.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(r=Object.create(this.prototype),h){for(i=Object.getOwnPropertyNames(Montage),o=0;i.length>o;o++)a=i[o],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(n,a,Object.getOwnPropertyDescriptor(Montage,a));for(i=Object.getOwnPropertyNames(Montage.prototype),o=0;i.length>o;o++)a=i[o],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&Montage.defineProperty(r,a,Object.getOwnPropertyDescriptor(Montage.prototype,a))}if(Montage.defineProperties(r,e),CONSTRUCTOR_COMPATIBILITY){u=function(e,t,n){function r(){return this===t&&console.warn("Deprecated - "+Montage.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties"),e.apply(this,arguments)}return r.deprecatedFunction=e,r};for(a in e)FUNCTION_PROPERTIES.has(a)?delete e[a]:(s=e[a],s.value&&"function"==typeof s.value&&!s.value.__isConstructor__?s.value=u(s.value,n,a):(s.get&&(s.get=u(s.get,n,a)),s.set&&(s.set=u(s.set,n,a))));Montage.defineProperties(n,e),Montage.defineProperty(n,"create",{value:function(){return new n},enumerable:!1}),r.hasOwnProperty("didCreate")||Montage.defineProperty(r,"didCreate",{value:n,enumerable:!1}),n.hasOwnProperty("didCreate")||Montage.defineProperty(n,"didCreate",{value:n,enumerable:!1})}return Montage.defineProperties(n,t),Montage.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),Montage.defineProperty(n,"_superCache",{value:{},enumerable:!1}),n.prototype=r,Montage.defineProperty(r,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!PROTO_IS_SUPPORTED){var originalGetPrototypeOf=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:originalGetPrototypeOf.apply(Object,arguments)}}Object.defineProperty(Montage,"create",{configurable:!0,value:function(e,t){if(void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&Montage.defineProperties(n,t),n}});var extendedPropertyAttributes=[SERIALIZABLE];extendedPropertyAttributes.forEach(function(e){Object.defineProperty(Object.prototype,UNDERSCORE+e+ATTRIBUTE_PROPERTIES,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(Montage,"defineProperty",{value:function(e,t,n){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var r=VALUE in n;if(DISTINCT in n&&!r)throw"Cannot use distinct attribute on non-value property '"+t+"'";if(PROTO in n)n.__proto__=r?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;else{var i;i=r?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;for(var a in i)a in n||(n[a]=i[a])}if(n.hasOwnProperty(ENUMERABLE)||t.charAt(0)!==UNDERSCORE||(n.enumerable=!1),n.hasOwnProperty(SERIALIZABLE)||(n.enumerable?n.get&&!n.set?n.serializable=!1:n.writable===!1&&(n.serializable=!1):n.serializable=!1),SERIALIZABLE in n&&(getAttributeProperties(e,SERIALIZABLE)[t]=n.serializable),n.distinct!==!0||"object"!=typeof n.value){var s,o,u;if(e._superDependencies){if("function"==typeof n.value&&(s=e._superDependencies[t+".value"]))for(o=0,u=s.length;u>o;o++)delete s[o]._superCache[t+".value"];if("function"==typeof n.get&&(s=e._superDependencies[t+".get"]))for(o=0,u=s.length;u>o;o++)delete s[o]._superCache[t+".get"];if("function"==typeof n.set&&(s=e._superDependencies[t+".set"]))for(o=0,u=s.length;u>o;o++)delete s[o]._superCache[t+".set"]}return Object.defineProperty(e,t,n)}(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===Object_prototype?0!==Object.keys(n).length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===Array_prototype?0!==n.length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,a;for(e=[],r=0;(a=n[r])!==void 0;r++)e[r]=a;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})})(t,UNDERSCORE+t,n.value,e)}}),Object.defineProperty(Montage,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var _defaultAccessorProperty={enumerable:!0,configurable:!0,serializable:!0},_defaultObjectValueProperty={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},_defaultFunctionValueProperty={writable:!0,enumerable:!1,configurable:!0,serializable:!1};Montage.defineProperty(Montage,"didCreate",{value:Function.noop});var getSuper=function(e,t){var n,r,i,a,s,o,u,l,h;if(!t._superPropertyName||!t._superPropertyType)for(Montage.defineProperty(t,"_superPropertyType",{value:null}),Montage.defineProperty(t,"_superPropertyName",{value:null}),u=e;!l&&null!==u;){for(n=Object.getOwnPropertyNames(u),r=Object.getPrototypeOf(u),i=0,a=n.length,i;a>i;i++){if(s=n[i],h=Object.getOwnPropertyDescriptor(u,s),null!=(o=h.value)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="value",t._superPropertyName=s,l=!0;break}if(null!=(o=h.get)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="get",t._superPropertyName=s,l=!0;break}if(null!=(o=h.set)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="set",t._superPropertyName=s,l=!0;break}}u=r}return superForImplementation(e,t._superPropertyType,t._superPropertyName)},superImplementation=function(){if("function"!=typeof superImplementation.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var e=getSuper(this,superImplementation.caller);return"function"==typeof e?e.bind(this):Function.noop},superForImplementation=function(e,t,n){var r,i,a,s,o,u=e,l=n+"."+t;if(e._superContext||Montage.defineProperty(e,"_superContext",{value:{}}),e._superContext[l])u=e._superContext[l];else for(u=e;null!==u&&(!u.hasOwnProperty(n)||(a=Object.getOwnPropertyDescriptor(u,n),"function"!=typeof a[t]));)u=Object.getPrototypeOf(u);if(s=u.constructor,s._superCache&&s._superCache[l])return o=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(l,e,s._superCache[l].owner,s._superCache[l].func);for(i=u;r===void 0&&(i=Object.getPrototypeOf(i));)if(i._superDependencies||Montage.defineProperty(i,"_superDependencies",{value:{}}),i._superDependencies[l]||(i._superDependencies[l]=[]),i._superDependencies[l].push(s),a=Object.getOwnPropertyDescriptor(i,n)){if("function"==typeof a[t]){r=a[t];break}break}return"function"==typeof r?(o=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(l,e,i,r),s._superCache||Montage.defineProperty(s,"_superCache",{value:{}}),s._superCache[l]={func:r,owner:i},o):Function.noop},superForValueImplementation=function(e){return superForImplementation(this,"value",e)},superForGetImplementation=function(e){return superForImplementation(this,"get",e)},superForSetImplementation=function(e){return superForImplementation(this,"set",e)};Montage.defineProperty(Montage,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),Montage.defineProperty(Montage,"getPropertyAttribute",{value:function(e,t,n){var r=UNDERSCORE+n+ATTRIBUTE_PROPERTIES,i=e[r];return i?i[t]:void 0}}),Montage.defineProperty(Montage,"getPropertyAttributes",{value:function(e,t){var n={},r=UNDERSCORE+t+ATTRIBUTE_PROPERTIES,i=e[r];if(i){for(var a in i)n[a]=i[a];return n}}});var _instanceMetadataDescriptor={isInstance:{value:!0}},_functionInstanceMetadataDescriptor={objectName:{value:"Function"},isInstance:{value:!0}};Montage.defineProperty(Montage,"getInfoForObject",{value:function(e){var t,n;if(hasOwnProperty.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?_functionInstanceMetadataDescriptor:_instanceMetadataDescriptor,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}});var UUID=require("core/uuid");"undefined"!=typeof window&&(window.uuid=UUID.generate());var hasOwnProperty=Object.prototype.hasOwnProperty,uuidGetGenerator=function(){var e=UUID.generate(),t=Montage.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:uuidGetGenerator.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&VALUE in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&PROTO in this||(this._uuid=e))}catch(n){this._uuid=e}return e},defaultUuidGet=function defaultUuidGet(){return hasOwnProperty.call(this,"_uuid")?this._uuid:uuidGetGenerator.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:defaultUuidGet,set:function(){}}),Montage.defineProperty(Montage,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),Montage.defineProperty(Montage,"equals",{value:Montage.prototype.equals}),Montage.defineProperty(Montage.prototype,"callDelegateMethod",{value:function(e){var t,n,r=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),r&&"function"==typeof(n=r[t]))?(Array_prototype.shift.call(arguments),n.apply(r,arguments)):r&&"function"==typeof(n=r[e])?(Array_prototype.shift.call(arguments),n.apply(r,arguments)):void 0}});var PropertyChanges=require("collections/listen/property-changes");Object.addEach(Montage,PropertyChanges.prototype),Object.addEach(Montage.prototype,PropertyChanges.prototype),require("core/bindings"),require("core/paths"),require("core/serialization/bindings"),exports._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=-1===r?0:r+1,i=-1===i?n.length:i,i=r>i?n.length:i,Montage.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+".meta"})}return t._blueprintModuleId}},exports._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprint")||!t._blueprint){var n=t.blueprintModuleId;if(""===n)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(t)+"'");exports._blueprintDescriptor.BlueprintModulePromise||(exports._blueprintDescriptor.BlueprintModulePromise=require.async("core/meta/module-blueprint").get("ModuleBlueprint")),Montage.defineProperty(t,"_blueprint",{enumerable:!1,value:exports._blueprintDescriptor.BlueprintModulePromise.then(function(e){var r=Montage.getInfoForObject(t);return e.getBlueprintWithModuleId(n,r.require).fail(function(n){if(-1!==n.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(t).then(function(e){return e});throw n})})})}return t._blueprint},set:function(e){var t,n=Montage.getInfoForObject(this),r=n&&!n.isInstance?this:this.constructor;if(null===e)t=null;else{if("function"==typeof e.then)throw new TypeError("Object blueprint should not be a promise");e.blueprintInstanceModule=r.blueprintModule,t=require("core/promise").Promise.resolve(e)}Montage.defineProperty(r,"_blueprint",{enumerable:!1,value:t})}};