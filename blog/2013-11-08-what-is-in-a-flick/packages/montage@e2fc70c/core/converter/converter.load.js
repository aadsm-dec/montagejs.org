montageDefine("e2fc70c","core/converter/converter",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,i="[object Number]",s=Object.prototype.toString,a=function(e){return s.call(e)===i};t.isNumber=a;var r=function(e){return e&&e!==void 0};t.isDef=r,t.Validator=n.specialize({validate:{value:null}}),t.Converter=n.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});