/*! For license information please see createVectorTileGeometries.js.LICENSE.txt */
import{a as P}from"./chunk-VFOAUMZG.js";import{a as z}from"./chunk-MM64X6QX.js";import"./chunk-AAIHI2WK.js";import{a as H}from"./chunk-Y664VY52.js";import{a as Y}from"./chunk-4M7FKQYC.js";import{a as j}from"./chunk-VD6RJEWG.js";import"./chunk-N52FZRFP.js";import"./chunk-WIRUK4BS.js";import{a as W}from"./chunk-JZL634RF.js";import"./chunk-3UAKIC5Y.js";import"./chunk-QEWKHB6D.js";import{d as E}from"./chunk-DV7DPSRL.js";import"./chunk-4FFHQQYZ.js";import{b as d}from"./chunk-KCIWEUSR.js";import"./chunk-7XDW3BZW.js";import{a as o}from"./chunk-F33YCXD2.js";import"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import"./chunk-K36PKEJW.js";import"./chunk-KD2PMTHD.js";import{e as l}from"./chunk-ZUCO5WNM.js";function X(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var J=X,S=new o,$=d.packedLength+o.packedLength,ee=d.packedLength+2,ne=d.packedLength+o.packedLength,te=o.packedLength+1,u={modelMatrix:new d,boundingVolume:new E};function oe(e,t){let n=t*$,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=Math.sqrt(3),u}function ce(e,t){let n=t*ee,r=e[n++],i=e[n++],s=o.fromElements(r,r,i,S),a=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(a,s,a);let l=u.boundingVolume;return o.clone(o.ZERO,l.center),l.radius=Math.sqrt(2),u}function se(e,t){let n=t*ne,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=1,u}function ie(e,t){let n=t*te,r=e[n++],i=o.unpack(e,n,S),s=d.fromTranslation(i,u.modelMatrix);d.multiplyByUniformScale(s,r,s);let a=u.boundingVolume;return o.clone(o.ZERO,a.center),a.radius=1,u}var de=new o;function R(e,t,n,r,i){if(!l(t))return;let s=n.length,a=r.attributes.position.values,c=r.indices,u=e.positions,f=e.vertexBatchIds,h=e.indices,p=e.batchIds,m=e.batchTableColors,b=e.batchedIndices,k=e.indexOffsets,g=e.indexCounts,y=e.boundingVolumes,I=e.modelMatrix,x=e.center,w=e.positionOffset,j=e.batchIdIndex,A=e.indexOffset,B=e.batchedIndicesOffset;for(let e=0;e<s;++e){let r=i(t,e),s=r.modelMatrix;d.multiply(I,s,s);let l=n[e],O=a.length;for(let e=0;e<O;e+=3){let t=o.unpack(a,e,de);d.multiplyByPoint(s,t,t),o.subtract(t,x,t),o.pack(t,u,3*w+e),f[j++]=l}let v=c.length;for(let e=0;e<v;++e)h[A+e]=c[e]+w;let U=e+B;b[U]=new J({offset:A,count:v,color:P.fromRgba(m[l]),batchIds:[l]}),p[U]=l,k[U]=A,g[U]=v,y[U]=E.transform(r.boundingVolume,s),w+=O/3,A+=v}e.positionOffset=w,e.batchIdIndex=j,e.indexOffset=A,e.batchedIndicesOffset+=s}var K=new o,Q=new d;function re(e){let t=new Float64Array(e),n=0;o.unpack(t,n,K),n+=o.packedLength,d.unpack(t,n,Q)}function le(e){let t=e.length,n=0;for(let o=0;o<t;++o)n+=P.packedLength+3+e[o].batchIds.length;return n}function ae(e,t,n){let o=n.length,r=2+o*E.packedLength+1+le(t),i=new Float64Array(r),s=0;i[s++]=e,i[s++]=o;for(let e=0;e<o;++e)E.pack(n[e],i,s),s+=E.packedLength;let a=t.length;i[s++]=a;for(let e=0;e<a;++e){let n=t[e];P.pack(n.color,i,s),s+=P.packedLength,i[s++]=n.offset,i[s++]=n.count;let o=n.batchIds,r=o.length;i[s++]=r;for(let e=0;e<r;++e)i[s++]=o[e]}return i}function fe(e,t){let n=l(e.boxes)?new Float32Array(e.boxes):void 0,o=l(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=l(e.cylinders)?new Float32Array(e.cylinders):void 0,i=l(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,s=l(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,a=l(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,c=l(e.spheres)?new Float32Array(e.spheres):void 0,d=l(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,u=l(n)?o.length:0,f=l(r)?i.length:0,h=l(s)?a.length:0,p=l(c)?d.length:0,m=j.getUnitBox(),b=z.getUnitCylinder(),k=H.getUnitEllipsoid(),g=m.attributes.position.values,y=b.attributes.position.values,I=k.attributes.position.values,x=g.length*u;x+=y.length*f,x+=I.length*(h+p);let w=m.indices,A=b.indices,B=k.indices,E=w.length*u;E+=A.length*f,E+=B.length*(h+p);let O=new Float32Array(x),v=new Uint16Array(x/3),U=W.createTypedArray(x/3,E),M=u+f+h+p,L=new Uint16Array(M),F=new Array(M),P=new Uint32Array(M),C=new Uint32Array(M),S=new Array(M);re(e.packedBuffer);let V={batchTableColors:new Uint32Array(e.batchTableColors),positions:O,vertexBatchIds:v,indices:U,batchIds:L,batchedIndices:F,indexOffsets:P,indexCounts:C,boundingVolumes:S,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Q,center:K};R(V,n,o,m,oe),R(V,r,i,b,ce),R(V,s,a,k,se),R(V,c,d,k,ie);let Z=ae(U.BYTES_PER_ELEMENT,F,S);return t.push(O.buffer,v.buffer,U.buffer),t.push(L.buffer,P.buffer,C.buffer),t.push(Z.buffer),{positions:O.buffer,vertexBatchIds:v.buffer,indices:U.buffer,indexOffsets:P.buffer,indexCounts:C.buffer,batchIds:L.buffer,packedBuffer:Z.buffer}}var Oe=Y(fe);export{Oe as default};