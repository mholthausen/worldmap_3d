/*! For license information please see chunk-ZKHPTJEK.js.LICENSE.txt */
import{a as O}from"./chunk-DV7DPSRL.js";import{c as I,e as V}from"./chunk-KCIWEUSR.js";import{a as W,b as v}from"./chunk-F33YCXD2.js";import{a as R}from"./chunk-DUBQPPQZ.js";import{a as k}from"./chunk-KD2PMTHD.js";import{e as N}from"./chunk-ZUCO5WNM.js";var z=Math.cos,Z=Math.sin,D=Math.sqrt,L={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,l=g.latitude-t.granYCos*r+o*t.granXSin,u=z(l),c=Z(l),C=i.z*c,S=g.longitude+r*t.granYSin+o*t.granXCos,w=u*z(S),R=u*Z(S),m=i.x*w,d=i.y*R,O=D(m*w+d*R+C*c);if(s.x=m/O,s.y=d/O,s.z=C/O,a){let n=t.stNwCorner;N(n)?(l=n.latitude-t.stGranYCos*r+o*t.stGranXSin,S=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(S-t.stWest)*t.lonScalar,e.y=(l-t.stSouth)*t.latScalar):(e.x=(S-h.west)*t.lonScalar,e.y=(l-h.south)*t.latScalar)}}},A=new V,g=new W,F=new v,b=new W,q=new O;function B(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,l=a*i,u=Math.sin(n),c=r*u,C=a*u;g=q.project(t,g),g=W.subtract(g,b,g);let S=V.fromRotation(n,A);g=V.multiplyByVector(S,g,g),g=W.add(g,b,g),s-=1,e-=1;let w=(t=q.unproject(g,t)).latitude,R=w+s*C,m=w-h*e,d=w-h*e+s*C,O=Math.max(w,R,m,d),p=Math.min(w,R,m,d),X=t.longitude,Y=X+s*l,I=X+e*c,f=X+e*c+s*l;return{north:O,south:p,east:Math.max(X,Y,I,f),west:Math.min(X,Y,I,f),granYCos:h,granYSin:c,granXCos:l,granXSin:C,nwCorner:t}}L.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,g=t.west,h=t.north,l=t.south,u=!1,c=!1;h===R.PI_OVER_TWO&&(u=!0),l===-R.PI_OVER_TWO&&(c=!0);let C,S=h-l;C=g>i?R.TWO_PI-g+i:i-g;let w=Math.ceil(C/n)+1,m=Math.ceil(S/n)+1,d=C/(w-1),O=S/(m-1),p=I.northwest(t,s),W=I.center(t,F);(0!==a||0!==r)&&(W.longitude<p.longitude&&(W.longitude+=R.TWO_PI),b=q.project(W,b));let X=O,Y=d,f=I.clone(t,o),_={granYCos:X,granYSin:0,granXCos:Y,granXSin:0,nwCorner:p,boundingRectangle:f,width:w,height:m,northCap:u,southCap:c};if(0!==a){let t=B(p,a,d,O,W,w,m);if(h=t.north,l=t.south,i=t.east,g=t.west,h<-R.PI_OVER_TWO||h>R.PI_OVER_TWO||l<-R.PI_OVER_TWO||l>R.PI_OVER_TWO)throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");_.granYCos=t.granYCos,_.granYSin=t.granYSin,_.granXCos=t.granXCos,_.granXSin=t.granXSin,f.north=h,f.south=l,f.east=i,f.west=g}if(0!==r){a-=r;let t=I.northwest(f,e),n=B(t,a,d,O,W,w,m);_.stGranYCos=n.granYCos,_.stGranXCos=n.granXCos,_.stGranYSin=n.granYSin,_.stGranXSin=n.granXSin,_.stNwCorner=t,_.stWest=n.west,_.stSouth=n.south}return _};var nt=L;export{nt as a};