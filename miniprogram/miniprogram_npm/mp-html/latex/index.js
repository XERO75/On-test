"use strict";function t(){}var e=require("./katex.min");t.prototype.onParse=function(t,n){!n.options.editable&&"text"===t.type&&/\$(.+?)\$/.test(t.text)&&(delete t.type,t.name="span",t.attrs={},t.children=t.text.split("$").map(function(t,n){return(n+1)%2==0?{name:"span",attrs:{},children:e.default(t)}:{type:"text",text:t}}),delete t.text)},module.exports=t;