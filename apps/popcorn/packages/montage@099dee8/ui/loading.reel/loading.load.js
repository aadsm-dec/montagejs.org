montageDefine("099dee8","ui/loading.reel/loading",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.Loading=r.create(i,{_loading:{value:null},loading:{get:function(){return this._loading},set:function(e){this._loading!==e&&(this._loading=e,this.needsDraw=!0)}},draw:{value:function(){var e=this.element.classList,t=e.contains("animate");this.loading?t||e.add("animate"):t&&e.remove("animate")}}})}})