"use strict";!function(e){function n(e){var n={};for(var t in e)n[e[t]]=e[t];return n}var t={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},r={},i={keys:n(t),parseKey:function(e){var n=t[e.which||e.keyCode]||String.fromCharCode(e.which).toUpperCase();return e.shiftKey&&(n="SHIFT_"+n),e.ctrlKey&&(n="CTRL_"+n),e.altKey&&(n="ALT_"+n),n},handleKey:function(n,t,i){var a,d,o,f=r[t],l=this.parseKey(n);if(!f)return console.warn("Component not defined!");if(a="undefined"==typeof f.ltr?f:Foundation.rtl()?e.extend({},f.ltr,f.rtl):e.extend({},f.rtl,f.ltr),d=a[l],o=i[d],o&&"function"==typeof o){var u=o.apply();(i.handled||"function"==typeof i.handled)&&i.handled(u)}else(i.unhandled||"function"==typeof i.unhandled)&&i.unhandled()},findFocusable:function(n){return n.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!e(this).is(":visible")||e(this).attr("tabindex")<0)})},register:function(e,n){r[e]=n}};Foundation.Keyboard=i}(jQuery);