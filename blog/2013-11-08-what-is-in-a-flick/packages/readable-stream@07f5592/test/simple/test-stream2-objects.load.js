montageDefine("07f5592","test/simple/test-stream2-objects",{dependencies:["../common.js","../../lib/_stream_readable","../../lib/_stream_writable","assert"],factory:function(e){function t(e,t){u++,c.push([e,t])}function n(){var e=c.shift();if(!e)return console.error("ok");var t=e[0],r=e[1];console.log("# %s",t),r({same:l.deepEqual,equal:l.equal,end:function(){u--,n()}})}function r(e){var t=new s({objectMode:!0}),n=[];return t.write=function(e){n.push(e)},t.end=function(){e(n)},t}function i(e){var t=new o({objectMode:!0});return t._read=a,e.forEach(function(e){t.push(e)}),t.push(null),t}function a(){}e("../common.js");var o=e("../../lib/_stream_readable"),s=e("../../lib/_stream_writable"),l=e("assert"),c=[],u=0;process.on("exit",function(){l.equal(u,0)}),process.nextTick(n),t("can read objects from stream",function(e){var t=i([{one:"1"},{two:"2"}]),n=t.read(),r=t.read(),a=t.read();l.deepEqual(n,{one:"1"}),l.deepEqual(r,{two:"2"}),l.deepEqual(a,null),e.end()}),t("can pipe objects into stream",function(e){var t=i([{one:"1"},{two:"2"}]);t.pipe(r(function(t){l.deepEqual(t,[{one:"1"},{two:"2"}]),e.end()}))}),t("read(n) is ignored",function(e){var t=i([{one:"1"},{two:"2"}]),n=t.read(2);l.deepEqual(n,{one:"1"}),e.end()}),t("can read objects from _read (sync)",function(e){var t=new o({objectMode:!0}),n=[{one:"1"},{two:"2"}];t._read=function(){var e=n.shift();t.push(e||null)},t.pipe(r(function(t){l.deepEqual(t,[{one:"1"},{two:"2"}]),e.end()}))}),t("can read objects from _read (async)",function(e){var t=new o({objectMode:!0}),n=[{one:"1"},{two:"2"}];t._read=function(){var e=n.shift();process.nextTick(function(){t.push(e||null)})},t.pipe(r(function(t){l.deepEqual(t,[{one:"1"},{two:"2"}]),e.end()}))}),t("can read strings as objects",function(e){var t=new o({objectMode:!0});t._read=a;var n=["one","two","three"];n.forEach(function(e){t.push(e)}),t.push(null),t.pipe(r(function(t){l.deepEqual(t,n),e.end()}))}),t("read(0) for object streams",function(e){var t=new o({objectMode:!0});t._read=a,t.push("foobar"),t.push(null),t.read(0),t.pipe(r(function(t){l.deepEqual(t,["foobar"]),e.end()}))}),t("falsey values",function(e){var t=new o({objectMode:!0});t._read=a,t.push(!1),t.push(0),t.push(""),t.push(null),t.pipe(r(function(t){l.deepEqual(t,[!1,0,""]),e.end()}))}),t("high watermark _read",function(e){var t=new o({highWaterMark:6,objectMode:!0}),n=0,r=["1","2","3","4","5","6","7","8"];t._read=function(){n++},r.forEach(function(e){t.push(e)});var i=t.read();l.equal(n,0),l.equal(i,"1");var a=t.read();l.equal(n,1),l.equal(a,"2"),e.end()}),t("high watermark push",function(e){var t=new o({highWaterMark:6,objectMode:!0});t._read=function(){};for(var n=0;6>n;n++){var r=t.push(n);l.equal(r,5===n?!1:!0)}e.end()}),t("can write objects to stream",function(e){var t=new s({objectMode:!0});t._write=function(e,t,n){l.deepEqual(e,{foo:"bar"}),n()},t.on("finish",function(){e.end()}),t.write({foo:"bar"}),t.end()}),t("can write multiple objects to stream",function(e){var t=new s({objectMode:!0}),n=[];t._write=function(e,t,r){n.push(e),r()},t.on("finish",function(){l.deepEqual(n,[0,1,2,3,4]),e.end()}),t.write(0),t.write(1),t.write(2),t.write(3),t.write(4),t.end()}),t("can write strings as objects",function(e){var t=new s({objectMode:!0}),n=[];t._write=function(e,t,r){n.push(e),process.nextTick(r)},t.on("finish",function(){l.deepEqual(n,["0","1","2","3","4"]),e.end()}),t.write("0"),t.write("1"),t.write("2"),t.write("3"),t.write("4"),t.end()}),t("buffers finish until cb is called",function(e){var t=new s({objectMode:!0}),n=!1;t._write=function(e,t,r){l.equal(e,"foo"),process.nextTick(function(){n=!0,r()})},t.on("finish",function(){l.equal(n,!0),e.end()}),t.write("foo"),t.end()})}});