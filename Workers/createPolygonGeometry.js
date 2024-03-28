/*! For license information please see createPolygonGeometry.js.LICENSE.txt */
import{a as dt}from"./chunk-ESZR37FT.js";import{a as F}from"./chunk-EXHN5NWQ.js";import{a as at}from"./chunk-AJBZ3ZYP.js";import{a as st}from"./chunk-FD76FI2G.js";import{a as bt}from"./chunk-NNNHC2WA.js";import"./chunk-FZIR7YHL.js";import"./chunk-FHUOX7Q3.js";import{a as ht}from"./chunk-4VIV3K4J.js";import{a as Q}from"./chunk-GWMEMIDW.js";import{a as K}from"./chunk-JATOGJGF.js";import"./chunk-U54QHQ4X.js";import{a as gt,b as nt}from"./chunk-SUQSMXXT.js";import"./chunk-EKKRJHD7.js";import"./chunk-KZVVSHMS.js";import{a as wt,b as yt}from"./chunk-EQAHH27B.js";import"./chunk-LWO5EUNN.js";import{a as lt}from"./chunk-SPMRTIBU.js";import"./chunk-U6MIZ4IC.js";import{c as mt,d as tt}from"./chunk-3G4OCZJT.js";import{d as Tt,e as ct}from"./chunk-LYPPBP4Q.js";import"./chunk-PCFGFNNQ.js";import"./chunk-V2SDNSQR.js";import{c as _t}from"./chunk-S7TTFAYA.js";import{a as $}from"./chunk-TLYHKSDJ.js";import{a as c,b as ot,c as O,d as V,e as W}from"./chunk-PYVDHCDQ.js";import{a as l}from"./chunk-JMWWNZHX.js";import"./chunk-DNO4OWAM.js";import"./chunk-XDVDNOI4.js";import{a as L}from"./chunk-Z3SYNMQT.js";import{a as ut,b as q}from"./chunk-4KGDZUZQ.js";import{e as P}from"./chunk-F3TINEFX.js";function b(t,e){this.position=t,P(this.position)||(this.position=new O),this.tangentPlane=e,P(this.tangentPlane)||(this.tangentPlane=b.NORTH_POLE_TANGENT_PLANE)}Object.defineProperties(b.prototype,{ellipsoid:{get:function(){return this.tangentPlane.ellipsoid}},x:{get:function(){return this.position.x}},y:{get:function(){return this.position.y}},conformalLatitude:{get:function(){let t=O.magnitude(this.position),e=2*this.ellipsoid.maximumRadius;return this.tangentPlane.plane.normal.z*(l.PI_OVER_TWO-2*Math.atan2(t,e))}},longitude:{get:function(){let t=l.PI_OVER_TWO+Math.atan2(this.y,this.x);return t>Math.PI&&(t-=l.TWO_PI),t}}});var it=new ot,Rt=new c;b.prototype.getLatitude=function(t){P(t)||(t=V.WGS84),it.latitude=this.conformalLatitude,it.longitude=this.longitude,it.height=0;let e=this.ellipsoid.cartographicToCartesian(it,Rt);return t.cartesianToCartographic(e,it),it.latitude};var It=new wt,Lt=new c,Ft=new c;b.fromCartesian=function(t,e){q.defined("cartesian",t);let o=l.signNotZero(t.z),i=b.NORTH_POLE_TANGENT_PLANE,n=b.SOUTH_POLE;o<0&&(i=b.SOUTH_POLE_TANGENT_PLANE,n=b.NORTH_POLE);let r=It;r.origin=i.ellipsoid.scaleToGeocentricSurface(t,r.origin),r.direction=c.subtract(r.origin,n,Lt),c.normalize(r.direction,r.direction);let a=yt.rayPlane(r,i.plane,Ft),s=c.subtract(a,n,a),u=c.dot(i.xAxis,s),h=o*c.dot(i.yAxis,s);return P(e)?(e.position=new O(u,h),e.tangentPlane=i,e):new b(new O(u,h),i)},b.fromCartesianArray=function(t,e){q.defined("cartesians",t);let o=t.length;P(e)?e.length=o:e=new Array(o);for(let i=0;i<o;i++)e[i]=b.fromCartesian(t[i],e[i]);return e},b.clone=function(t,e){if(P(t))return P(e)?(e.position=t.position,e.tangentPlane=t.tangentPlane,e):new b(t.position,t.tangentPlane)},b.HALF_UNIT_SPHERE=Object.freeze(new V(.5,.5,.5)),b.NORTH_POLE=Object.freeze(new c(0,0,.5)),b.SOUTH_POLE=Object.freeze(new c(0,0,-.5)),b.NORTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.NORTH_POLE,b.HALF_UNIT_SPHERE)),b.SOUTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.SOUTH_POLE,b.HALF_UNIT_SPHERE));var D=b,vt=new ot,Ot=new ot;function St(t,e,o,i){let n=i.cartesianToCartographic(t,vt).height,r=i.cartesianToCartographic(e,Ot);r.height=n,i.cartographicToCartesian(r,e);let a=i.cartesianToCartographic(o,Ot);a.height=n-100,i.cartographicToCartesian(a,o)}var Et=new dt,Vt=new c,Bt=new c,Mt=new c,jt=new c,kt=new c,zt=new c,ft=new c,Z=new c,rt=new c,Dt=new O,Wt=new O,Ut=new c,At=new ct,Gt=new W,Yt=new W;function pt(t){let e=t.vertexFormat,o=t.geometry,i=t.shadowVolume,n=o.attributes.position.values,r=P(o.attributes.st)?o.attributes.st.values:void 0,a=n.length,s=t.wall,u=t.top||s,h=t.bottom||s;if(e.st||e.normal||e.tangent||e.bitangent||i){let p=t.boundingRectangle,g=t.rotationAxis,m=t.projectTo2d,d=t.ellipsoid,f=t.stRotation,y=t.perPositionHeight,_=Dt;_.x=p.x,_.y=p.y;let T,b=e.st?new Float32Array(a/3*2):void 0;e.normal&&(T=y&&u&&!s?o.attributes.normal.values:new Float32Array(a));let w=e.tangent?new Float32Array(a):void 0,I=e.bitangent?new Float32Array(a):void 0,A=i?new Float32Array(a):void 0,E=0,H=0,N=Bt,v=Mt,x=jt,L=!0,F=Gt,R=Yt;if(0!==f){let t=ct.fromAxisAngle(g,f,At);F=W.fromQuaternion(t,F),t=ct.fromAxisAngle(g,-f,At),R=W.fromQuaternion(t,R)}else F=W.clone(W.IDENTITY,F),R=W.clone(W.IDENTITY,R);let k=0,G=0;u&&h&&(k=a/2,G=a/3,a/=2);for(let o=0;o<a;o+=3){let g=c.fromArray(n,o,Ut);if(e.st&&!P(r)){let t=W.multiplyByVector(F,g,Vt);t=d.scaleToGeodeticSurface(t,t);let e=m(t,Wt);O.subtract(e,_,e);let o=l.clamp(e.x/p.width,0,1),i=l.clamp(e.y/p.height,0,1);h&&(b[E+G]=o,b[E+1+G]=i),u&&(b[E]=o,b[E+1]=i),E+=2}if(e.normal||e.tangent||e.bitangent||i){let r=H+1,p=H+2;if(s){if(o+3<a){let t=c.fromArray(n,o+3,kt);if(L){let e=c.fromArray(n,o+a,zt);y&&St(g,t,e,d),c.subtract(t,g,t),c.subtract(e,g,e),N=c.normalize(c.cross(e,t,N),N),L=!1}c.equalsEpsilon(t,g,l.EPSILON10)&&(L=!0)}(e.tangent||e.bitangent)&&(x=d.geodeticSurfaceNormal(g,x),e.tangent&&(v=c.normalize(c.cross(x,N,v),v)))}else N=d.geodeticSurfaceNormal(g,N),(e.tangent||e.bitangent)&&(y&&(ft=c.fromArray(T,H,ft),Z=c.cross(c.UNIT_Z,ft,Z),Z=c.normalize(W.multiplyByVector(R,Z,Z),Z),e.bitangent&&(rt=c.normalize(c.cross(ft,Z,rt),rt))),v=c.cross(c.UNIT_Z,N,v),v=c.normalize(W.multiplyByVector(R,v,v),v),e.bitangent&&(x=c.normalize(c.cross(N,v,x),x)));e.normal&&(t.wall?(T[H+k]=N.x,T[r+k]=N.y,T[p+k]=N.z):h&&(T[H+k]=-N.x,T[r+k]=-N.y,T[p+k]=-N.z),(u&&!y||s)&&(T[H]=N.x,T[r]=N.y,T[p]=N.z)),i&&(s&&(N=d.geodeticSurfaceNormal(g,N)),A[H+k]=-N.x,A[r+k]=-N.y,A[p+k]=-N.z),e.tangent&&(t.wall?(w[H+k]=v.x,w[r+k]=v.y,w[p+k]=v.z):h&&(w[H+k]=-v.x,w[r+k]=-v.y,w[p+k]=-v.z),u&&(y?(w[H]=Z.x,w[r]=Z.y,w[p]=Z.z):(w[H]=v.x,w[r]=v.y,w[p]=v.z))),e.bitangent&&(h&&(I[H+k]=x.x,I[r+k]=x.y,I[p+k]=x.z),u&&(y?(I[H]=rt.x,I[r]=rt.y,I[p]=rt.z):(I[H]=x.x,I[r]=x.y,I[p]=x.z))),H+=3}}e.st&&!P(r)&&(o.attributes.st=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:2,values:b})),e.normal&&(o.attributes.normal=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:T})),e.tangent&&(o.attributes.tangent=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:w})),e.bitangent&&(o.attributes.bitangent=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:I})),i&&(o.attributes.extrudeDirection=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:A}))}if(t.extrude&&P(t.offsetAttribute)){let e=n.length/3,i=new Uint8Array(e);if(t.offsetAttribute===ht.TOP)u&&h||s?i=i.fill(1,0,e/2):u&&(i=i.fill(1));else{let e=t.offsetAttribute===ht.NONE?0:1;i=i.fill(e)}o.attributes.applyOffset=new tt({componentDatatype:$.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return o}var Ht=[];function qt(t,e,o,i,n,r,a,s,l,c){let u,h={walls:[]};if(a||s){let n,p,g=F.createGeometryFromPositions(t,e,o,i,r,l,c),m=g.attributes.position.values,d=g.indices;if(a&&s){let t=m.concat(m);n=t.length/3,p=lt.createTypedArray(n,2*d.length),p.set(d);let e=d.length,i=n/2;for(u=0;u<e;u+=3){let t=p[u]+i,o=p[u+1]+i,n=p[u+2]+i;p[u+e]=n,p[u+1+e]=o,p[u+2+e]=t}if(g.attributes.position.values=t,r&&l.normal){let e=g.attributes.normal.values;g.attributes.normal.values=new Float32Array(t.length),g.attributes.normal.values.set(e)}if(l.st&&P(o)){let t=g.attributes.st.values;g.attributes.st.values=new Float32Array(2*n),g.attributes.st.values=t.concat(t)}g.indices=p}else if(s){for(n=m.length/3,p=lt.createTypedArray(n,d.length),u=0;u<d.length;u+=3)p[u]=d[u+2],p[u+1]=d[u+1],p[u+2]=d[u];g.indices=p}h.topAndBottom=new st({geometry:g})}let p=n.outerRing,g=K.fromPoints(p,t),m=g.projectPointsOntoPlane(p,Ht),d=nt.computeWindingOrder2D(m);d===gt.CLOCKWISE&&(p=p.slice().reverse());let f=F.computeWallGeometry(p,o,t,i,r,c);h.walls.push(new st({geometry:f}));let y=n.holes;for(u=0;u<y.length;u++){let e=y[u];m=g.projectPointsOntoPlane(e,Ht),d=nt.computeWindingOrder2D(m),d===gt.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),f=F.computeWallGeometry(e,o,t,i,r,c),h.walls.push(new st({geometry:f}))}return h}function G(t){if(q.typeOf.object("options",t),q.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),P(t.perPositionHeight)&&t.perPositionHeight&&P(t.height))throw new ut("Cannot use both options.perPositionHeight and options.height");if(P(t.arcType)&&t.arcType!==at.GEODESIC&&t.arcType!==at.RHUMB)throw new ut("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let e=t.polygonHierarchy,o=L(t.vertexFormat,Q.DEFAULT),i=L(t.ellipsoid,V.WGS84),n=L(t.granularity,l.RADIANS_PER_DEGREE),r=L(t.stRotation,0),a=t.textureCoordinates,s=L(t.perPositionHeight,!1),u=s&&P(t.extrudedHeight),h=L(t.height,0),p=L(t.extrudedHeight,h);if(!u){let t=Math.max(h,p);p=Math.min(h,p),h=t}this._vertexFormat=Q.clone(o),this._ellipsoid=V.clone(i),this._granularity=n,this._stRotation=r,this._height=h,this._extrudedHeight=p,this._closeTop=L(t.closeTop,!0),this._closeBottom=L(t.closeBottom,!0),this._polygonHierarchy=e,this._perPositionHeight=s,this._perPositionHeightExtrude=u,this._shadowVolume=L(t.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=t.offsetAttribute,this._arcType=L(t.arcType,at.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=a,this.packedLength=F.computeHierarchyPackedLength(e,c)+V.packedLength+Q.packedLength+(a?F.computeHierarchyPackedLength(a,O):1)+12}G.fromPositions=function(t){return t=L(t,L.EMPTY_OBJECT),q.defined("options.positions",t.positions),new G({polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates})},G.pack=function(t,e,o){return q.typeOf.object("value",t),q.defined("array",e),o=L(o,0),o=F.packPolygonHierarchy(t._polygonHierarchy,e,o,c),V.pack(t._ellipsoid,e,o),o+=V.packedLength,Q.pack(t._vertexFormat,e,o),o+=Q.packedLength,e[o++]=t._height,e[o++]=t._extrudedHeight,e[o++]=t._granularity,e[o++]=t._stRotation,e[o++]=t._perPositionHeightExtrude?1:0,e[o++]=t._perPositionHeight?1:0,e[o++]=t._closeTop?1:0,e[o++]=t._closeBottom?1:0,e[o++]=t._shadowVolume?1:0,e[o++]=L(t._offsetAttribute,-1),e[o++]=t._arcType,P(t._textureCoordinates)?o=F.packPolygonHierarchy(t._textureCoordinates,e,o,O):e[o++]=-1,e[o++]=t.packedLength,e};var Qt=V.clone(V.UNIT_SPHERE),Zt=new Q,Kt={polygonHierarchy:{}};G.unpack=function(t,e,o){q.defined("array",t),e=L(e,0);let i=F.unpackPolygonHierarchy(t,e,c);e=i.startingIndex,delete i.startingIndex;let n=V.unpack(t,e,Qt);e+=V.packedLength;let r=Q.unpack(t,e,Zt);e+=Q.packedLength;let a=t[e++],s=t[e++],l=t[e++],u=t[e++],h=1===t[e++],p=1===t[e++],g=1===t[e++],m=1===t[e++],d=1===t[e++],f=t[e++],y=t[e++],_=-1===t[e]?void 0:F.unpackPolygonHierarchy(t,e,O);P(_)?(e=_.startingIndex,delete _.startingIndex):e++;let T=t[e++];return P(o)||(o=new G(Kt)),o._polygonHierarchy=i,o._ellipsoid=V.clone(n,o._ellipsoid),o._vertexFormat=Q.clone(r,o._vertexFormat),o._height=a,o._extrudedHeight=s,o._granularity=l,o._stRotation=u,o._perPositionHeightExtrude=h,o._perPositionHeight=p,o._closeTop=g,o._closeBottom=m,o._shadowVolume=d,o._offsetAttribute=-1===f?void 0:f,o._arcType=y,o._textureCoordinates=_,o.packedLength=T,o};var Jt=new O,Xt=new O,$t=new D;function xt(t,e,o,i,n,r){let a=t.longitude,s=a>=0?a:a+l.TWO_PI;n.westOverIdl=Math.min(n.westOverIdl,s),n.eastOverIdl=Math.max(n.eastOverIdl,s),r.west=Math.min(r.west,a),r.east=Math.max(r.east,a);let c=t.getLatitude(o),u=c;if(r.south=Math.min(r.south,c),r.north=Math.max(r.north,c),i!==at.RHUMB){let i=O.subtract(e.position,t.position,Jt),n=O.dot(e.position,i)/O.dot(i,i);if(n>0&&n<1){let t=O.add(e.position,O.multiplyByScalar(i,-n,i),Xt),a=D.clone(e,$t);a.position=t;let s=a.getLatitude(o);r.south=Math.min(r.south,s),r.north=Math.max(r.north,s),Math.abs(c)>Math.abs(s)&&(u=s)}}let h=e.x*t.y-t.x*e.y,p=Math.sign(h);0!==p&&(p*=O.angleBetween(e.position,t.position)),u>=0&&(n.northAngle+=p),u<=0&&(n.southAngle+=p)}var Ct=new D,te=new D,U={northAngle:0,southAngle:0,westOverIdl:0,eastOverIdl:0};G.computeRectangleFromPositions=function(t,e,o,i){if(q.defined("positions",t),P(i)||(i=new _t),t.length<3)return i;i.west=Number.POSITIVE_INFINITY,i.east=Number.NEGATIVE_INFINITY,i.south=Number.POSITIVE_INFINITY,i.north=Number.NEGATIVE_INFINITY,U.northAngle=0,U.southAngle=0,U.westOverIdl=Number.POSITIVE_INFINITY,U.eastOverIdl=Number.NEGATIVE_INFINITY;let n=t.length,r=D.fromCartesian(t[0],te);for(let a=1;a<n;a++){let n=D.fromCartesian(t[a],Ct);xt(n,r,e,o,U,i),r=D.clone(n,r)}return xt(D.fromCartesian(t[0],Ct),r,e,o,U,i),i.east-i.west>U.eastOverIdl-U.westOverIdl&&(i.west=U.westOverIdl,i.east=U.eastOverIdl,i.east>l.PI&&(i.east=i.east-l.TWO_PI),i.west>l.PI&&(i.west=i.west-l.TWO_PI)),l.equalsEpsilon(Math.abs(U.northAngle),l.TWO_PI,l.EPSILON10)&&(i.north=l.PI_OVER_TWO,i.east=l.PI,i.west=-l.PI),l.equalsEpsilon(Math.abs(U.southAngle),l.TWO_PI,l.EPSILON10)&&(i.south=-l.PI_OVER_TWO,i.east=l.PI,i.west=-l.PI),i};var ee=new D;function oe(t,e,o){return t.height>=l.PI||t.width>=l.PI?D.fromCartesian(e[0],ee).tangentPlane:K.fromPoints(e,o)}var Nt=new ot;function ne(t,e,o){return(i,n)=>{if(t.height>=l.PI||t.width>=l.PI){if(t.south<0&&t.north>0){P(n)||(n=[]);for(let t=0;t<i.length;++t){let e=o.cartesianToCartographic(i[t],Nt);n[t]=new O(e.longitude/l.PI,e.latitude/l.PI_OVER_TWO)}return n.length=i.length,n}return D.fromCartesianArray(i,n)}return K.fromPoints(e,o).projectPointsOntoPlane(i,n)}}function ie(t,e,o){if(t.height>=l.PI||t.width>=l.PI)return(e,i)=>{if(t.south<0&&t.north>0){let t=o.cartesianToCartographic(e,Nt);return P(i)||(i=new O),i.x=t.longitude/l.PI,i.y=t.latitude/l.PI_OVER_TWO,i}return D.fromCartesian(e,i)};let i=K.fromPoints(e,o);return(t,e)=>i.projectPointsOntoPlane(t,e)}function re(t,e,o,i){return(n,r)=>!i&&(t.height>=l.PI_OVER_TWO||t.width>=2*l.PI_OVER_THREE)?F.splitPolygonsOnEquator(n,e,o,r):n}function se(t,e,o,i){if(e.height>=l.PI||e.width>=l.PI)return dt.fromRectangle(e,void 0,Et);let n=t,r=K.fromPoints(n,o);return F.computeBoundingRectangle(r.plane.normal,r.projectPointOntoPlane.bind(r),n,i,Et)}function ae(t){let e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];let o=t._ellipsoid,i=t._polygonHierarchy.positions,n=t.rectangle;return mt._textureCoordinateRotationPoints(i,e,o,n)}G.createGeometry=function(t){let e=t._vertexFormat,o=t._ellipsoid,i=t._granularity,n=t._stRotation,r=t._polygonHierarchy,a=t._perPositionHeight,s=t._closeTop,c=t._closeBottom,u=t._arcType,h=t._textureCoordinates,p=P(h),g=r.positions;if(g.length<3)return;let m=t.rectangle,d=F.polygonsFromHierarchy(r,p,ne(m,g,o),!a,o,re(m,o,u,a)),f=d.hierarchy,y=d.polygons,_=p?F.polygonsFromHierarchy(h,!0,(function(t){return t}),!1,o).polygons:void 0;if(0===f.length)return;let O,T=f[0].outerRing,b=se(T,m,o,n),w=[],I=t._height,A=t._extrudedHeight,E=t._perPositionHeightExtrude||!l.equalsEpsilon(I,A,0,l.EPSILON2),H={perPositionHeight:a,vertexFormat:e,geometry:void 0,rotationAxis:oe(m,T,o).plane.normal,projectTo2d:ie(m,T,o),boundingRectangle:b,ellipsoid:o,stRotation:n,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:u};if(E)for(H.extrude=!0,H.top=s,H.bottom=c,H.shadowVolume=t._shadowVolume,H.offsetAttribute=t._offsetAttribute,O=0;O<y.length;O++){let t,n=qt(o,y[O],p?_[O]:void 0,i,f[O],a,s,c,e,u);s&&c?(t=n.topAndBottom,H.geometry=F.scaleToGeodeticHeightExtruded(t.geometry,I,A,o,a)):s?(t=n.topAndBottom,t.geometry.attributes.position.values=nt.scaleToGeodeticHeight(t.geometry.attributes.position.values,I,o,!a),H.geometry=t.geometry):c&&(t=n.topAndBottom,t.geometry.attributes.position.values=nt.scaleToGeodeticHeight(t.geometry.attributes.position.values,A,o,!0),H.geometry=t.geometry),(s||c)&&(H.wall=!1,t.geometry=pt(H),w.push(t));let r=n.walls;H.wall=!0;for(let t=0;t<r.length;t++){let e=r[t];H.geometry=F.scaleToGeodeticHeightExtruded(e.geometry,I,A,o,a),e.geometry=pt(H),w.push(e)}}else for(O=0;O<y.length;O++){let n=new st({geometry:F.createGeometryFromPositions(o,y[O],p?_[O]:void 0,i,a,e,u)});if(n.geometry.attributes.position.values=nt.scaleToGeodeticHeight(n.geometry.attributes.position.values,I,o,!a),H.geometry=n.geometry,n.geometry=pt(H),P(t._offsetAttribute)){let e=n.geometry.attributes.position.values.length,o=t._offsetAttribute===ht.NONE?0:1,i=new Uint8Array(e/3).fill(o);n.geometry.attributes.applyOffset=new tt({componentDatatype:$.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}w.push(n)}let N=bt.combineInstances(w)[0];N.attributes.position.values=new Float64Array(N.attributes.position.values),N.indices=lt.createTypedArray(N.attributes.position.values.length/3,N.indices);let v=N.attributes,x=Tt.fromVertices(v.position.values);return e.position||delete v.position,new mt({attributes:v,indices:N.indices,primitiveType:N.primitiveType,boundingSphere:x,offsetAttribute:t._offsetAttribute})},G.createShadowVolume=function(t,e,o){let i=t._granularity,n=t._ellipsoid,r=e(i,n),a=o(i,n);return new G({polygonHierarchy:t._polygonHierarchy,ellipsoid:n,stRotation:t._stRotation,granularity:i,perPositionHeight:!1,extrudedHeight:r,height:a,vertexFormat:Q.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})},Object.defineProperties(G.prototype,{rectangle:{get:function(){if(!P(this._rectangle)){let t=this._polygonHierarchy.positions;this._rectangle=G.computeRectangleFromPositions(t,this._ellipsoid,this._arcType)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return P(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=ae(this)),this._textureCoordinateRotationPoints}}});var Pt=G;function ce(t,e){return P(e)&&(t=Pt.unpack(t,e)),t._ellipsoid=V.clone(t._ellipsoid),Pt.createGeometry(t)}var Xe=ce;export{Xe as default};