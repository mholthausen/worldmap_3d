/*! For license information please see chunk-V6ZHITEJ.js.LICENSE.txt */
import{a as c}from"./chunk-F33YCXD2.js";import{b as t}from"./chunk-KD2PMTHD.js";import{e as g}from"./chunk-ZUCO5WNM.js";function f(){this.high=c.clone(c.ZERO),this.low=c.clone(c.ZERO)}f.encode=function(e,o){let n;return t.typeOf.number("value",e),g(o)||(o={high:0,low:0}),e>=0?(n=65536*Math.floor(e/65536),o.high=n,o.low=e-n):(n=65536*Math.floor(-e/65536),o.high=-n,o.low=e+n),o};var e={high:0,low:0};f.fromCartesian=function(o,n){t.typeOf.object("cartesian",o),g(n)||(n=new f);let r=n.high,h=n.low;return f.encode(o.x,e),r.x=e.high,h.x=e.low,f.encode(o.y,e),r.y=e.high,h.y=e.low,f.encode(o.z,e),r.z=e.high,h.z=e.low,n};var m=new f;f.writeElements=function(e,o,n){t.defined("cartesianArray",o),t.typeOf.number("index",n),t.typeOf.number.greaterThanOrEquals("index",n,0),f.fromCartesian(e,m);let r=m.high,h=m.low;o[n]=r.x,o[n+1]=r.y,o[n+2]=r.z,o[n+3]=h.x,o[n+4]=h.y,o[n+5]=h.z};var O=f;export{O as a};