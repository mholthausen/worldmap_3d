/*! For license information please see createSphereGeometry.js.LICENSE.txt */
import{a as r}from"./chunk-UHM4ND4S.js";import"./chunk-4VIV3K4J.js";import{a as m}from"./chunk-GWMEMIDW.js";import"./chunk-SPMRTIBU.js";import"./chunk-U6MIZ4IC.js";import"./chunk-3G4OCZJT.js";import"./chunk-LYPPBP4Q.js";import"./chunk-PCFGFNNQ.js";import"./chunk-V2SDNSQR.js";import"./chunk-S7TTFAYA.js";import"./chunk-TLYHKSDJ.js";import{a as s}from"./chunk-PYVDHCDQ.js";import"./chunk-JMWWNZHX.js";import"./chunk-DNO4OWAM.js";import"./chunk-XDVDNOI4.js";import{a as l}from"./chunk-Z3SYNMQT.js";import{b as p}from"./chunk-4KGDZUZQ.js";import{e as c}from"./chunk-F3TINEFX.js";function n(t){let i=l(t.radius,1),e={radii:new s(i,i,i),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,vertexFormat:t.vertexFormat};this._ellipsoidGeometry=new r(e),this._workerName="createSphereGeometry"}n.packedLength=r.packedLength,n.pack=function(t,i,e){return p.typeOf.object("value",t),r.pack(t._ellipsoidGeometry,i,e)};var f=new r,i={radius:void 0,radii:new s,vertexFormat:new m,stackPartitions:void 0,slicePartitions:void 0};n.unpack=function(t,e,o){let a=r.unpack(t,e,f);return i.vertexFormat=m.clone(a._vertexFormat,i.vertexFormat),i.stackPartitions=a._stackPartitions,i.slicePartitions=a._slicePartitions,c(o)?(s.clone(a._radii,i.radii),o._ellipsoidGeometry=new r(i),o):(i.radius=a._radii.x,new n(i))},n.createGeometry=function(t){return r.createGeometry(t._ellipsoidGeometry)};var d=n;function u(r,t){return c(t)&&(r=d.unpack(r,t)),d.createGeometry(r)}var v=u;export{v as default};