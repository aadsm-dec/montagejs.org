var Montage=require("montage").Montage,Component=require("montage/ui/component").Component;exports.Features=Montage.create(Component,{hasTemplate:{value:!0},convert:{value:function(n){return""+Number(Math.round(n))}},revert:{value:function(n){return""+Number(Math.round(n))}}});