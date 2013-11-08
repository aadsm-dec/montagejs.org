"use strict";function LruMap(e,t,n,i,r){return this instanceof LruMap?(n=n||Object.equals,i=i||Object.hash,r=r||Function.noop,this.contentEquals=n,this.contentHash=i,this.getDefault=r,this.store=new LruSet(void 0,t,function(e,t){return n(e.key,t.key)},function(e){return i(e.key)}),this.length=0,this.addEach(e),void 0):new LruMap(e,t,n,i,r)}var Shim=require("./shim"),LruSet=require("./lru-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=LruMap,Object.addEach(LruMap.prototype,GenericCollection.prototype),Object.addEach(LruMap.prototype,GenericMap.prototype),Object.addEach(LruMap.prototype,PropertyChanges.prototype),LruMap.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},LruMap.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},LruMap.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)},LruMap.prototype.addMapChangeListener=function(){if(!this.dispatchesMapChanges){var e=this;this.store.addBeforeRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchBeforeMapChange(n[0].key,void 0)}),this.store.addRangeChangeListener(function(t,n){t.length&&n.length&&e.dispatchMapChange(n[0].key,void 0)})}GenericMap.prototype.addMapChangeListener.apply(this,arguments)};