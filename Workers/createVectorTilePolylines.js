/*! For license information please see createVectorTilePolylines.js.LICENSE.txt */
import{a as K}from"./chunk-4M7FKQYC.js";import{a as G}from"./chunk-PNRMC4IG.js";import{a as S}from"./chunk-JZL634RF.js";import{a as B}from"./chunk-4FFHQQYZ.js";import{c as R}from"./chunk-KCIWEUSR.js";import"./chunk-7XDW3BZW.js";import{a as t,b as _,c as L}from"./chunk-F33YCXD2.js";import{a as F}from"./chunk-DUBQPPQZ.js";import"./chunk-CG3JQAX7.js";import"./chunk-P3JQY4NV.js";import"./chunk-K36PKEJW.js";import"./chunk-KD2PMTHD.js";import"./chunk-ZUCO5WNM.js";var O=32767,ct=new _,rt=new t;function it(e,r,a,n,u){let o=e.length/3,s=e.subarray(0,o),f=e.subarray(o,2*o),i=e.subarray(2*o,3*o);G.zigZagDeltaDecode(s,f,i);let c=new Float64Array(e.length);for(let e=0;e<o;++e){let o=s[e],p=f[e],l=i[e],d=F.lerp(r.west,r.east,o/O),k=F.lerp(r.south,r.north,p/O),h=F.lerp(a,n,l/O),b=_.fromRadians(d,k,h,ct),m=u.cartographicToCartesian(b,rt);t.pack(m,c,3*e)}return c}var Y=it,X=new R,$=new L,j=new t,H={min:void 0,max:void 0};function at(e){e=new Float64Array(e);let r=0;H.min=e[r++],H.max=e[r++],R.unpack(e,r,X),r+=R.packedLength,L.unpack(e,r,$),r+=L.packedLength,t.unpack(e,r,j)}function ft(t){let e=t.length,r=new Uint32Array(e+1),a=0;for(let n=0;n<e;++n)r[n]=a,a+=t[n];return r[e]=a,r}var Z=new t,q=new t,J=new t,dt=new t,Q=new t;function ut(e,r){let a=new Uint16Array(e.positions),n=new Uint16Array(e.widths),u=new Uint32Array(e.counts),o=new Uint16Array(e.batchIds);at(e.packedBuffer);let s,f=X,i=$,c=j,p=H.min,l=H.max,d=Y(a,f,p,l,i),k=d.length/3,h=4*k-4,b=new Float32Array(3*h),m=new Float32Array(3*h),w=new Float32Array(3*h),y=new Float32Array(2*h),A=new Uint16Array(h),F=0,P=0,D=0,U=0,g=u.length;for(s=0;s<g;++s){let e=u[s],r=n[s],a=o[s];for(let n=0;n<e;++n){let u;if(0===n){let e=t.unpack(d,3*U,Z),r=t.unpack(d,3*(U+1),q);u=t.subtract(e,r,J),t.add(e,u,u)}else u=t.unpack(d,3*(U+n-1),J);let o,s=t.unpack(d,3*(U+n),dt);if(n===e-1){let r=t.unpack(d,3*(U+e-1),Z),a=t.unpack(d,3*(U+e-2),q);o=t.subtract(r,a,Q),t.add(r,o,o)}else o=t.unpack(d,3*(U+n+1),Q);t.subtract(u,c,u),t.subtract(s,c,s),t.subtract(o,c,o);let f=n===e-1?2:4;for(let e=0===n?2:0;e<f;++e){t.pack(s,b,F),t.pack(u,m,F),t.pack(o,w,F),F+=3;let n=e-2<0?-1:1;y[P++]=e%2*2-1,y[P++]=n*r,A[D++]=a}}U+=e}let R=S.createTypedArray(h,6*k-6),E=0,I=0;for(g=k-1,s=0;s<g;++s)R[I++]=E,R[I++]=E+2,R[I++]=E+1,R[I++]=E+1,R[I++]=E+2,R[I++]=E+3,E+=4;r.push(b.buffer,m.buffer,w.buffer),r.push(y.buffer,A.buffer,R.buffer);let N={indexDatatype:2===R.BYTES_PER_ELEMENT?S.UNSIGNED_SHORT:S.UNSIGNED_INT,currentPositions:b.buffer,previousPositions:m.buffer,nextPositions:w.buffer,expandAndWidth:y.buffer,batchIds:A.buffer,indices:R.buffer};if(e.keepDecodedPositions){let t=ft(u);r.push(d.buffer,t.buffer),N=B(N,{decodedPositions:d.buffer,decodedPositionOffsets:t.buffer})}return N}var It=K(ut);export{It as default};