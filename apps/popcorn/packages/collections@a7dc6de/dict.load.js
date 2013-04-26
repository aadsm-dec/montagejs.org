montageDefine("a7dc6de","dict",{dependencies:["./shim","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function u(e,t){if(!(this instanceof u))return new u(e,t);t=t||Function.noop,this.getDefault=t,this.store={},this.length=0,this.addEach(e)}function a(e){return"~"+e}function f(e){return e.slice(1)}var r=e("./shim"),i=e("./generic-collection"),s=e("./generic-map"),o=e("./listen/property-changes");n.exports=u,Object.addEach(u.prototype,i.prototype),Object.addEach(u.prototype,s.prototype),Object.addEach(u.prototype,o.prototype),u.prototype.constructClone=function(e){return new this.constructor(e,this.mangle,this.getDefault)},u.prototype.assertString=function(e){if(typeof e!="string")throw new TypeError("key must be a string.")},u.prototype.get=function(e,t){this.assertString(e);var n=a(e);return n in this.store?this.store[n]:arguments.length>1?t:this.getDefault(e)},u.prototype.set=function(e,t){this.assertString(e);var n=a(e);return n in this.store?(this.store[n]=t,!1):(this.length++,this.store[n]=t,!0)},u.prototype.has=function(e){this.assertString(e);var t=a(e);return t in this.store},u.prototype["delete"]=function(e){this.assertString(e);var t=a(e);return t in this.store?(delete this.store[a(e)],this.length--,!0):!1},u.prototype.clear=function(){for(var e in this.store)delete this.store[e];this.length=0},u.prototype.reduce=function(e,t,n){for(var r in this.store)t=e.call(n,t,this.store[r],f(r),this);return t},u.prototype.reduceRight=function(e,t,n){var r=this,i=this.store;return Object.keys(this.store).reduceRight(function(t,s){return e.call(n,t,i[s],f(s),r)},t)},u.prototype.one=function(){var e;for(var e in this.store)return this.store[e]}}})