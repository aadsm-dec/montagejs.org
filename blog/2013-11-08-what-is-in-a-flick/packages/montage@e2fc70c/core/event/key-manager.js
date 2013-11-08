var Montage=require("montage").Montage,defaultEventManager=require("core/event/event-manager").defaultEventManager,MutableEvent=require("core/event/mutable-event").MutableEvent,KEYNAMES_TO_KEYCODES={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,"delete":46,semicolon:186,colon:186,equal:187,plus:187,comma:188,less:188,minus:189,underscore:189,period:190,greater:190,slash:191,questionmark:191,backtick:192,tilde:192,openingsquarebracket:219,openingcurlybracket:219,backslash:220,pipe:220,closingsquarebracket:221,closingcurlybracket:221,singlequote:222,doublequote:222,clear:12,meta:91,contextmenu:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimal:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,f13:124,f14:125,f15:126,f16:127,f17:128,f18:129,f19:130,f20:131,f21:132,f22:133,f23:134,f24:135},KEYCODES_TO_KEYNAMES=null,OPERAMAC_KEYNAMES_TO_KEYCODES={meta:17,control:57392,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259},FIREFOX_KEYNAMES_TO_KEYCODES={f13:44,f14:145,f15:19,f16:63251,f17:63252,f18:63253,f19:63254,f20:63255,f21:63256,f22:63257,f23:63258,f24:63259,meta:224},KEYNAMES_ALIASES={cmd:"command",ctl:"control",ctrl:"control",win:"meta",windows:"meta",opt:"alt",option:"alt"},MODIFIERS={meta:{name:"meta",value:1},alt:{name:"alt",value:2},control:{name:"control",value:4},shift:{name:"shift",value:8}},NORMALIZED_KEYS={semicolon:";",colon:":",equal:"=",plus:"+",comma:",",less:"<",minus:"-",underscore:"_",period:".",greater:">",slash:"/",questionmark:"?",backtick:"`",tilde:"~",openingsquarebracket:"[",openingcurlybracket:"{",backslash:"\\",pipe:"|",closingsquarebracket:"]",closingcurlybracket:"}",singlequote:"'",doublequote:'"',multiply:"*",add:"+",subtract:"-",decimal:".",divide:"/"},NORMALIZED_CHARS=null,KEYPRESS_EVENT_TYPE="keyPress",LONGKEYPRESS_EVENT_TYPE="longKeyPress",KEYRELEASE_EVENT_TYPE="keyRelease",KeyManager=exports.KeyManager=Montage.specialize({_keyEventsListenerInstalled:{value:!1},_composerKeyMap:{value:{}},_triggeredKeys:{value:{}},_longPressKeys:{value:{}},_cleanupTimeout:{value:null},_cleanupThreshold:{value:2e3},_longPressThreshold:{value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){e>0&&e!==this._longPressThreshold&&(this._longPressThreshold=e,this._cleanupThreshold=this._longPressThreshold>this._cleanupThreshold-100?this._longPressThreshold+100:2e3)}},registerKey:{value:function(e){var t,n,r,i,o,a=this._normalizeKeySequence(e.keys),s=this._composerKeyMap,u=!1;if(a){if(t=this._convertKeysToModifiersAndKeyCode(a),n=s[t.modifiers],n||(n=s[t.modifiers]={}),r=n[t.keyCode]){for(o in r)if(i=r[o],i.object===e){i.refCount++,u=!0;break}u||r.push({object:e,refCount:1})}else n[t.keyCode]=[{object:e,refCount:1}];e._modifiers=t.modifiers,e._keyCode=t.keyCode,this._registerListeners()}}},unregisterKey:{value:function(e){var t,n,r,i,o=this._composerKeyMap;if(t=o[e._modifiers]){n=t[e._keyCode];for(i in n)r=n[i],r.object===e&&(r.refCount--,0>=r.refCount&&(n.splice(i,1),0===n.length&&(delete t[e._keyCode],0===Object.keys(t).length&&(delete o[e._modifiers],0===Object.keys(o).length&&this._unregisterListeners()))))}}},constructor:{value:function(){var e,t=navigator.userAgent;if(_defaultKeyManager&&console.warn("Rather than creating a new KeyManager object, you might want to use the default key manager"),t.match(/ firefox\//i)?this._firefox=!0:t.match(/ appleWebkit\//i)?(this._webkit=!0,t.match(/ chrome\//i)&&(this._chrome=!0)):t.match(/^opera\//i)&&(this._opera=!0),t.match(/macintosh/i)&&(this._mac=!0,this._opera&&(this._operaMac=!0)),MODIFIERS.command=this._mac?MODIFIERS.meta:MODIFIERS.control,this._operaMac)for(e in OPERAMAC_KEYNAMES_TO_KEYCODES)KEYNAMES_TO_KEYCODES[e]=OPERAMAC_KEYNAMES_TO_KEYCODES[e];if(this._firefox)for(e in FIREFOX_KEYNAMES_TO_KEYCODES)KEYNAMES_TO_KEYCODES[e]=FIREFOX_KEYNAMES_TO_KEYCODES[e];KEYCODES_TO_KEYNAMES={};for(var n in KEYNAMES_TO_KEYCODES){var e=KEYNAMES_TO_KEYCODES[n];void 0===KEYCODES_TO_KEYNAMES[e]&&(KEYCODES_TO_KEYNAMES[e]=n)}NORMALIZED_CHARS={};for(var n in NORMALIZED_KEYS){var e=NORMALIZED_KEYS[n];void 0===NORMALIZED_CHARS[e]&&(NORMALIZED_CHARS[e]=n)}this._shiftKey=!1,this._altKey=!1,this._metaKey=!1,this._ctrlKey=!1}},captureKeydown:{value:function(e){var t,n,r,i=!1;this._preprocessKeyEvent(e),r=this._submap,r&&(t=this._keyCode,t&&r[t]&&(i=this._dispatchComposerKeyMatches(r[t],e)),!i&&e.keyIdentifier&&(n=KEYNAMES_TO_KEYCODES[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),n&&n!==t&&r[n]&&this._dispatchComposerKeyMatches(r[n],e))),this._setupCleanupTimer()}},captureKeypress:{value:function(e){var t,n,r,i=e.charCode,o=!1;this._preprocessKeyEvent(e),r=this._submap,r&&(t=this._keyCode,t&&r[t]&&(o=this._dispatchComposerKeyMatches(r[t],e)),!o&&i&&i!==t&&r[i]&&(o=this._dispatchComposerKeyMatches(r[i],e)),!o&&e.keyIdentifier&&(n=KEYNAMES_TO_KEYCODES[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),n&&n!==t&&r[n]&&this._dispatchComposerKeyMatches(r[n],e))),this._setupCleanupTimer()}},captureKeyup:{value:function(e){var t,n,r,i,o=e.keyCode,a=0,s=!1;if(this._preprocessKeyEvent(e),n=this._submap,n&&(o=this._keyCode,o&&n[o]&&(s=this._dispatchComposerKeyMatches(n[o],e),a=o),!s&&e.keyIdentifier&&(t=KEYNAMES_TO_KEYCODES[e.keyIdentifier.toLowerCase()]||this._decodeKeyIdentifier(e.keyIdentifier),t&&t!==a&&n[t]&&(s=this._dispatchComposerKeyMatches(n[t],e)))),!s)for(i in this._triggeredKeys)r=this._triggeredKeys[i],(r._keyCode==o||r._keyCode==t)&&this._dispatchComposerKeyMatches([r],e);this._cleanup()}},_normalizeKeySequence:{value:function(e){var t,n,r=[MODIFIERS.meta.name,MODIFIERS.alt.name,MODIFIERS.control.name,MODIFIERS.shift.name],i=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),o=i.length,a=[];for(n=0;o-1>n;n++){if(t=i[n],t=KEYNAMES_ALIASES[t]||t,t=MODIFIERS[t],!t)return console.warn("Invalid key sequence (modifier):",e),null;a.push(t.name)}return a.sort(function(e,t){return r.indexOf(e)-r.indexOf(t)}),t=i[o-1],t.length>1&&!KEYNAMES_TO_KEYCODES[t]?(console.warn("Invalid key sequence (key):",e,t),null):a.length?a.join("+")+"+"+t:t}},_preprocessKeyEvent:{value:function(e){var t,n,r=this,i=e.type,o=e.keyCode;this._operaMac&&this._operaModifierTimeout&&(clearTimeout(this._operaModifierTimeout),this._operaModifierTimeout=null),("keydown"==i||"keyup"==i)&&(this._operaMac?(n="keydown"==i,o==KEYNAMES_TO_KEYCODES.shift?this._shiftKey=n:o==KEYNAMES_TO_KEYCODES.alt?this._altKey=n:o==KEYNAMES_TO_KEYCODES.meta?this._mac&&(this._metaKey=n):o==KEYNAMES_TO_KEYCODES.control&&(this._ctrlKey=n),"keyup"==i&&(this._operaModifierTimeout=setTimeout(function(){r._shiftKey=!1,r._altKey=!1,r._metaKey=!1,r._ctrlKey=!1,r._operaModifierTimeout=null},this._cleanupThreshold+1e3))):(this._shiftKey=e.shiftKey,this._altKey=e.altKey,this._metaKey=e.metaKey,this._ctrlKey=e.ctrlKey)),this._mac&&this._webkit&&o==KEYNAMES_TO_KEYCODES.contextmenu&&(this._metaKey=!1),this._chrome&&(this._shiftKey||o!=KEYNAMES_TO_KEYCODES.plus||"U+002B"!=e.keyIdentifier||(e.keyCode=KEYNAMES_TO_KEYCODES.add)),this._modifiers=t=(this._shiftKey?MODIFIERS.shift.value:0)+(this._altKey?MODIFIERS.alt.value:0)+(this._metaKey?MODIFIERS.meta.value:0)+(this._ctrlKey?MODIFIERS.control.value:0),this._submap=this._composerKeyMap[t],this._keyCode=e.keyCode,this._keyIdentifier=e.keyIdentifier}},_registerListeners:{value:function(){this._keyEventsListenerInstalled||(window.addEventListener("keydown",this,!0),window.addEventListener("keypress",this,!0),window.addEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!0)}},_unregisterListeners:{value:function(){this._keyEventsListenerInstalled&&(window.removeEventListener("keydown",this,!0),window.removeEventListener("keypress",this,!0),window.removeEventListener("keyup",this,!0),this._keyEventsListenerInstalled=!1)}},_dispatchComposerKeyMatches:{value:function(e,t){var n,r,i,o,a=this,s=!1,u="keyup"==t.type,l="keydown"==t.type,c=u?KEYRELEASE_EVENT_TYPE:KEYPRESS_EVENT_TYPE,h=e.length;for(o=0;h>o&&!s;o++){n=e[o].object||e[o];for(var d=t.target,v=n.element,p=n.element===window;!p&&(p=d===v,d!=document);)d=d.parentElement,d||(d=document);if(p){if(u){if(i=Object.keys(this._triggeredKeys),-1==i.indexOf(n.uuid))continue;n._longPressTimeout&&(clearTimeout(n._longPressTimeout),n._longPressTimeout=null,delete this._longPressKeys[n.uuid])}else{if(l)delete this._triggeredKeys[n.uuid],t.preventDefault();else if(this._triggeredKeys[n.uuid])continue;n._shouldDispatchLongPress&&!n._longPressTimeout&&(n._longPressTimeout=setTimeout(function(){var e;n._longPressTimeout=null,e=document.createEvent("CustomEvent"),e.initCustomEvent(LONGKEYPRESS_EVENT_TYPE,!0,!0,null),e.activeElement=t.target,e.identifier=n.identifier,e=MutableEvent.fromEvent(e),defaultEventManager.activeTarget.dispatchEvent(e),delete a._longPressKeys[n.uuid]},this._longPressThreshold),this._longPressKeys[n.uuid]=n)}r=document.createEvent("CustomEvent"),r.initCustomEvent(c,!0,!0,null),r.activeElement=t.target,r.identifier=n.identifier,r.keyComposer=n,r=MutableEvent.fromEvent(r),this._opera&&(r.type=c),defaultEventManager.activeTarget.dispatchEvent(r),r.defaultPrevented&&t.preventDefault(),r.propagationStopped&&(t.stopPropagation(),s=!0),u?delete this._triggeredKeys[n.uuid]:this._triggeredKeys[n.uuid]=n}}if(s)for(o=u?o:0;h>o;o++)n=e[o].object||e[o],delete this._triggeredKeys[n.uuid],n._longPressTimeout&&(clearTimeout(n._longPressTimeout),n._longPressTimeout=null,delete this._longPressKeys[n.uuid]);return s}},_cleanup:{value:function(){var e,t;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout);for(t in this._triggeredKeys)this._triggeredKeys.hasOwnProperty(t)&&delete this._triggeredKeys[t];for(t in this._longPressKeys)this._longPressKeys.hasOwnProperty(t)&&(e=this._longPressKeys[t],clearTimeout(e._longPressTimeout),e._longPressTimeout=null,delete this._longPressKeys[t]);this._cleanupTimeout=null}},_setupCleanupTimer:{value:function(){var e=this;this._cleanupTimeout&&clearTimeout(this._cleanupTimeout),this._cleanupTimeout=setTimeout(function(){e._cleanup()},this._cleanupThreshold)}},_convertKeysToModifiersAndKeyCode:{value:function(e){var t,n,r,i=0,o=0;for(e=e.toLowerCase().replace(/ /g,"").replace(/\+\+/g,"+add").split("+"),t=e.length,r=0;t-1>r;r++){if(n=e[r],n=KEYNAMES_ALIASES[n]||n,n=MODIFIERS[n],!n)return console.warn("Invalid Key sequence:",e),null;o|=n.value}return n=e[t-1],n=NORMALIZED_CHARS[n]||n,n=NORMALIZED_KEYS[n]||n,n.length>1?(i=KEYNAMES_TO_KEYCODES[n],n=MODIFIERS[KEYNAMES_ALIASES[n]||n],n&&(o|=n.value)):i=n.toUpperCase().charCodeAt(0),{modifiers:o,keyCode:i}}},_decodeKeyIdentifier:{value:function(e){return e.match(/U\+/)?parseInt(e.substring(2),16):void 0}}}),_defaultKeyManager=null;Montage.defineProperty(exports,"defaultKeyManager",{get:function(){return _defaultKeyManager||(_defaultKeyManager=new KeyManager),_defaultKeyManager}});