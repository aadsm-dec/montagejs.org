montageDefine("e2fc70c","core/meta/validation-rule",{dependencies:["montage","core/selector","core/meta/validation-semantics","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage,r=e("core/selector").Selector,i=e("core/meta/validation-semantics").PropertyValidationSemantics;e("core/logger").logger("blueprint"),t.PropertyValidationRule=n.specialize({constructor:{value:function(){this.superForValue("constructor")()}},initWithNameAndBlueprint:{value:function(e,t){return this._name=e,this._owner=t,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this.owner,"reference"),e.setProperty("messageKey",this.messageKey),e.setAllProperties()}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this._messageKey=e.getProperty("messageKey");for(var t=n.getSerializablePropertyNames(this),r=0,i=t.length;i>r;r++){var a=t[r];this[a]=e.getProperty(a)}}},_owner:{value:null},owner:{get:function(){return this._owner}},identifier:{get:function(){return[this.blueprint.identifier,"rule",this.name].join("_")}},_name:{value:""},name:{get:function(){return this._name}},_validationSelector:{value:null},validationSelector:{serializable:!1,get:function(){return this._validationSelector||(this._validationSelector=r["false"]),this._validationSelector},set:function(e){this._validationSelector=e}},_messageKey:{value:""},messageKey:{serializable:!1,get:function(){return this._messageKey&&0!==this._messageKey.length?this._messageKey:this._name},set:function(e){this._messageKey=e}},_propertyValidationEvaluator:{value:null},evaluateRule:{value:function(e){if(null===this._propertyValidationEvaluator){var t=(new i).initWithBlueprint(this.blueprint);this._propertyValidationEvaluator=t.compile(this.selector.syntax)}return this._propertyValidationEvaluator(e)}},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});