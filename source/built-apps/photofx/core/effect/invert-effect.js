var Montage=require("montage").Montage,Effect=require("core/effect/effect").Effect;exports.InvertEffect=Montage.create(Effect,{applyEffect:{value:function(e,t){var n;for(n=0;n<t;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2]}}})