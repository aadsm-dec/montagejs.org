function bind(e,t,n){n.target=e,n.targetPath=t;var a=n.source=n.source||e,s=n["<-"]||n["<->"]||"",i=n.twoWay="<->"in n;n.sourcePath=s,n.value;var r=n.parameters=n.parameters||a,o=n.document,l=n.components,c=n.trace,p=n.sourceScope=new Scope(a,null,r,o,l),h=n.targetScope=new Scope(e,null,r,o,l);if(n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var u=n.reverter;u.convert&&(n.revert=u.convert.bind(u)),u.revert&&(n.convert=u.revert.bind(u))}var g=n.convert,m=n.revert,f=n.sourceSyntax=parse(s),v=n.targetSyntax=parse(t);c&&console.log("DEFINE BINDING",t,"<-",s,e);var y=bindOneWay(h,v,p,f,g,n,c),w=noop;return i&&(c&&console.log("DEFINE BINDING",t,"->",s,a),w=bindOneWay(p,f,h,v,m,n,c)),function(){y(),w()}}function bindOneWay(e,t,n,a,s,i,r){var o=solve(t,a);t=o[0],a=o[1];var l=compileObserver(a);s&&(l=Observers.makeConverterObserver(l,s,n));var c=compileBinder(t);return c(l,n,e,i,r?{sourcePath:stringify(a),targetPath:stringify(t)}:null)}function noop(){}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),Observers=require("./observers"),Scope=require("./scope");module.exports=bind;