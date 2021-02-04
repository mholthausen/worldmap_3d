define(["./GeometryOffsetAttribute-d889f085","./arrayRemoveDuplicates-216006b0","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./PolylineVolumeGeometryLibrary-8f28f929","./CorridorGeometryLibrary-87f97344","./when-54c2dc71","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./IndexDatatype-46306178","./Math-44e92d6b","./PolygonPipeline-72c97573","./VertexFormat-7572c785","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./EllipsoidTangentPlane-c4704d0f","./IntersectionTests-6ead8677","./Plane-8f7e53d1","./PolylinePipeline-eb80587e","./EllipsoidGeodesic-a2d57ae0","./EllipsoidRhumbLine-9b557f71"],(function(t,e,r,a,i,o,n,s,l,d,u,m,y,f,p,c,h,g,C,b,v,A,_){"use strict";var w=new a.Cartesian3,T=new a.Cartesian3,G=new a.Cartesian3,E=new a.Cartesian3,V=new a.Cartesian3,F=new a.Cartesian3,L=new a.Cartesian3,P=new a.Cartesian3;function x(t,e){for(var r=0;r<t.length;r++)t[r]=e.scaleToGeodeticSurface(t[r],t[r]);return t}function N(t,e,r,i,o,n){var l=t.normals,d=t.tangents,u=t.bitangents;t=a.Cartesian3.normalize(a.Cartesian3.cross(r,e,L),L),n.normal&&s.CorridorGeometryLibrary.addAttribute(l,e,i,o),n.tangent&&s.CorridorGeometryLibrary.addAttribute(d,t,i,o),n.bitangent&&s.CorridorGeometryLibrary.addAttribute(u,r,i,o)}function D(t,e,r){var i,n=t.positions,f=t.corners,p=t.endPositions,c=t.lefts,h=t.normals,g=new u.GeometryAttributes,C=0,b=0,v=0;for(j=0;j<n.length;j+=2)C+=i=n[j].length-3,v+=2*i,b+=n[j+1].length-3;for(C+=3,b+=3,j=0;j<f.length;j++){rt=f[j];var A=f[j].leftPositions;l.defined(A)?C+=i=A.length:b+=i=f[j].rightPositions.length,v+=i}var _,V=l.defined(p);V&&(C+=_=p[0].length-3,b+=_,v+=6*(_/=3)),t=C+b;var x,D,M,O,I,S,R=new Float64Array(t),k={normals:e.normal?new Float32Array(t):void 0,tangents:e.tangent?new Float32Array(t):void 0,bitangents:e.bitangent?new Float32Array(t):void 0},H=0,z=t-1,U=w,B=T,Y=_/2,W=m.IndexDatatype.createTypedArray(t/3,v),q=0;if(V){S=G,I=E;for(var J=p[0],j=(U=a.Cartesian3.fromArray(h,0,U),B=a.Cartesian3.fromArray(c,0,B),0);j<Y;j++)S=a.Cartesian3.fromArray(J,3*(Y-1-j),S),I=a.Cartesian3.fromArray(J,3*(Y+j),I),s.CorridorGeometryLibrary.addAttribute(R,I,H),s.CorridorGeometryLibrary.addAttribute(R,S,void 0,z),N(k,U,B,H,z,e),O=1+(D=H/3),M=(x=(z-2)/3)-1,W[q++]=x,W[q++]=D,W[q++]=M,W[q++]=M,W[q++]=D,W[q++]=O,H+=3,z-=3}var K,Q,X=0,Z=0,$=n[X++],tt=n[X++];for(R.set($,H),R.set(tt,z-tt.length+1),B=a.Cartesian3.fromArray(c,Z,B),i=tt.length-3,j=0;j<i;j+=3)K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,j,L),L),Q=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(tt,i-j,P),P),N(k,U=a.Cartesian3.normalize(a.Cartesian3.add(K,Q,U),U),B,H,z,e),O=1+(D=H/3),M=(x=(z-2)/3)-1,W[q++]=x,W[q++]=D,W[q++]=M,W[q++]=M,W[q++]=D,W[q++]=O,H+=3,z-=3;for(K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,i,L),L),Q=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(tt,i,P),P),U=a.Cartesian3.normalize(a.Cartesian3.add(K,Q,U),U),Z+=3,j=0;j<f.length;j++){var et,rt,at,it,ot=(rt=f[j]).leftPositions,nt=rt.rightPositions,st=F,lt=G,dt=E;if(U=a.Cartesian3.fromArray(h,Z,U),l.defined(ot)){for(N(k,U,B,void 0,z,e),z-=3,at=O,it=M,et=0;et<ot.length/3;et++)st=a.Cartesian3.fromArray(ot,3*et,st),W[q++]=at,W[q++]=it-et-1,W[q++]=it-et,s.CorridorGeometryLibrary.addAttribute(R,st,void 0,z),lt=a.Cartesian3.fromArray(R,3*(it-et-1),lt),dt=a.Cartesian3.fromArray(R,3*at,dt),N(k,U,B=a.Cartesian3.normalize(a.Cartesian3.subtract(lt,dt,B),B),void 0,z,e),z-=3;st=a.Cartesian3.fromArray(R,3*at,st),lt=a.Cartesian3.subtract(a.Cartesian3.fromArray(R,3*it,lt),st,lt),dt=a.Cartesian3.subtract(a.Cartesian3.fromArray(R,3*(it-et),dt),st,dt),N(k,U,B=a.Cartesian3.normalize(a.Cartesian3.add(lt,dt,B),B),H,void 0,e),H+=3}else{for(N(k,U,B,H,void 0,e),H+=3,at=M,it=O,et=0;et<nt.length/3;et++)st=a.Cartesian3.fromArray(nt,3*et,st),W[q++]=at,W[q++]=it+et,W[q++]=it+et+1,s.CorridorGeometryLibrary.addAttribute(R,st,H),lt=a.Cartesian3.fromArray(R,3*at,lt),dt=a.Cartesian3.fromArray(R,3*(it+et),dt),N(k,U,B=a.Cartesian3.normalize(a.Cartesian3.subtract(lt,dt,B),B),H,void 0,e),H+=3;st=a.Cartesian3.fromArray(R,3*at,st),lt=a.Cartesian3.subtract(a.Cartesian3.fromArray(R,3*(it+et),lt),st,lt),dt=a.Cartesian3.subtract(a.Cartesian3.fromArray(R,3*it,dt),st,dt),N(k,U,B=a.Cartesian3.normalize(a.Cartesian3.negate(a.Cartesian3.add(dt,lt,B),B),B),void 0,z,e),z-=3}for($=n[X++],tt=n[X++],$.splice(0,3),tt.splice(tt.length-3,3),R.set($,H),R.set(tt,z-tt.length+1),i=tt.length-3,Z+=3,B=a.Cartesian3.fromArray(c,Z,B),et=0;et<tt.length;et+=3)K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,et,L),L),Q=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(tt,i-et,P),P),N(k,U=a.Cartesian3.normalize(a.Cartesian3.add(K,Q,U),U),B,H,z,e),D=(O=H/3)-1,x=1+(M=(z-2)/3),W[q++]=x,W[q++]=D,W[q++]=M,W[q++]=M,W[q++]=D,W[q++]=O,H+=3,z-=3;H-=3,z+=3}if(N(k,U=a.Cartesian3.fromArray(h,h.length-3,U),B,H,z,e),V){H+=3,z-=3,S=G,I=E;var ut=p[1];for(j=0;j<Y;j++)S=a.Cartesian3.fromArray(ut,3*(_-j-1),S),I=a.Cartesian3.fromArray(ut,3*j,I),s.CorridorGeometryLibrary.addAttribute(R,S,void 0,z),s.CorridorGeometryLibrary.addAttribute(R,I,H),N(k,U,B,H,z,e),D=(O=H/3)-1,x=1+(M=(z-2)/3),W[q++]=x,W[q++]=D,W[q++]=M,W[q++]=M,W[q++]=D,W[q++]=O,H+=3,z-=3}if(g.position=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:R}),e.st){var mt=new Float32Array(t/3*2),yt=0;if(V){C/=3,b/=3;var ft,pt=Math.PI/(_+1),ct=1/(C-_+1),ht=1/(b-_+1),gt=_/2;for(j=1+gt;j<_+1;j++)ft=y.CesiumMath.PI_OVER_TWO+pt*j,mt[yt++]=ht*(1+Math.cos(ft)),mt[yt++]=.5*(1+Math.sin(ft));for(j=1;j<b-_+1;j++)mt[yt++]=j*ht,mt[yt++]=0;for(j=_;gt<j;j--)ft=y.CesiumMath.PI_OVER_TWO-j*pt,mt[yt++]=1-ht*(1+Math.cos(ft)),mt[yt++]=.5*(1+Math.sin(ft));for(j=gt;0<j;j--)ft=y.CesiumMath.PI_OVER_TWO-pt*j,mt[yt++]=1-ct*(1+Math.cos(ft)),mt[yt++]=.5*(1+Math.sin(ft));for(j=C-_;0<j;j--)mt[yt++]=j*ct,mt[yt++]=1;for(j=1;j<1+gt;j++)ft=y.CesiumMath.PI_OVER_TWO+pt*j,mt[yt++]=ct*(1+Math.cos(ft)),mt[yt++]=.5*(1+Math.sin(ft))}else{for(ct=1/((C/=3)-1),ht=1/((b/=3)-1),j=0;j<b;j++)mt[yt++]=j*ht,mt[yt++]=0;for(j=C;0<j;j--)mt[yt++]=(j-1)*ct,mt[yt++]=1}g.st=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:mt})}return e.normal&&(g.normal=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k.normals})),e.tangent&&(g.tangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k.tangents})),e.bitangent&&(g.bitangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k.bitangents})),{attributes:g,indices:W}}function M(t,e,r){r[e++]=t[0],r[e++]=t[1],r[e++]=t[2];for(var a=3;a<t.length;a+=3){var i=t[a],o=t[a+1],n=t[a+2];r[e++]=i,r[e++]=o,r[e++]=n,r[e++]=i,r[e++]=o,r[e++]=n}return r[e++]=t[0],r[e++]=t[1],r[e++]=t[2],r}var O=new a.Cartesian3,I=new a.Cartesian3,S=new a.Cartographic;function R(t,e,r,i,o,n){var s=a.Cartesian3.subtract(e,t,O);a.Cartesian3.normalize(s,s);var l=r.geodeticSurfaceNormal(t,I),d=a.Cartesian3.cross(s,l,O);a.Cartesian3.multiplyByScalar(d,i,d);var u=o.latitude,m=o.longitude;e=n.latitude,s=n.longitude,a.Cartesian3.add(t,d,I),r.cartesianToCartographic(I,S),l=S.latitude,i=S.longitude,u=Math.min(u,l),m=Math.min(m,i),e=Math.max(e,l),s=Math.max(s,i),a.Cartesian3.subtract(t,d,I),r.cartesianToCartographic(I,S),l=S.latitude,i=S.longitude,u=Math.min(u,l),m=Math.min(m,i),e=Math.max(e,l),s=Math.max(s,i),o.latitude=u,o.longitude=m,n.latitude=e,n.longitude=s}var k=new a.Cartesian3,H=new a.Cartesian3,z=new a.Cartographic,U=new a.Cartographic;function B(t,r,i,o,s){t=x(t,r);var d=e.arrayRemoveDuplicates(t,a.Cartesian3.equalsEpsilon),u=d.length;if(u<2||i<=0)return new a.Rectangle;var m,y,f=.5*i;z.latitude=Number.POSITIVE_INFINITY,z.longitude=Number.POSITIVE_INFINITY,U.latitude=Number.NEGATIVE_INFINITY,U.longitude=Number.NEGATIVE_INFINITY,o===n.CornerType.ROUNDED&&(c=d[0],a.Cartesian3.subtract(c,d[1],k),a.Cartesian3.normalize(k,k),a.Cartesian3.multiplyByScalar(k,f,k),a.Cartesian3.add(c,k,H),r.cartesianToCartographic(H,S),m=S.latitude,y=S.longitude,z.latitude=Math.min(z.latitude,m),z.longitude=Math.min(z.longitude,y),U.latitude=Math.max(U.latitude,m),U.longitude=Math.max(U.longitude,y));for(var p=0;p<u-1;++p)R(d[p],d[p+1],r,f,z,U);var c=d[u-1];return a.Cartesian3.subtract(c,d[u-2],k),a.Cartesian3.normalize(k,k),a.Cartesian3.multiplyByScalar(k,f,k),a.Cartesian3.add(c,k,H),R(c,H,r,f,z,U),o===n.CornerType.ROUNDED&&(r.cartesianToCartographic(H,S),m=S.latitude,y=S.longitude,z.latitude=Math.min(z.latitude,m),z.longitude=Math.min(z.longitude,y),U.latitude=Math.max(U.latitude,m),U.longitude=Math.max(U.longitude,y)),(s=l.defined(s)?s:new a.Rectangle).north=U.latitude,s.south=z.latitude,s.east=U.longitude,s.west=z.longitude,s}function Y(t){var e=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,r=t.width,i=l.defaultValue(t.height,0),o=l.defaultValue(t.extrudedHeight,i);this._positions=e,this._ellipsoid=a.Ellipsoid.clone(l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84)),this._vertexFormat=p.VertexFormat.clone(l.defaultValue(t.vertexFormat,p.VertexFormat.DEFAULT)),this._width=r,this._height=Math.max(i,o),this._extrudedHeight=Math.min(i,o),this._cornerType=l.defaultValue(t.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(t.granularity,y.CesiumMath.RADIANS_PER_DEGREE),this._shadowVolume=l.defaultValue(t.shadowVolume,!1),this._workerName="createCorridorGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this.packedLength=1+e.length*a.Cartesian3.packedLength+a.Ellipsoid.packedLength+p.VertexFormat.packedLength+7}Y.pack=function(t,e,r){r=l.defaultValue(r,0);var i=t._positions,o=i.length;e[r++]=o;for(var n=0;n<o;++n,r+=a.Cartesian3.packedLength)a.Cartesian3.pack(i[n],e,r);return a.Ellipsoid.pack(t._ellipsoid,e,r),r+=a.Ellipsoid.packedLength,p.VertexFormat.pack(t._vertexFormat,e,r),r+=p.VertexFormat.packedLength,e[r++]=t._width,e[r++]=t._height,e[r++]=t._extrudedHeight,e[r++]=t._cornerType,e[r++]=t._granularity,e[r++]=t._shadowVolume?1:0,e[r]=l.defaultValue(t._offsetAttribute,-1),e};var W=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),q=new p.VertexFormat,J={positions:void 0,ellipsoid:W,vertexFormat:q,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,shadowVolume:void 0,offsetAttribute:void 0};return Y.unpack=function(t,e,r){e=l.defaultValue(e,0);for(var i=t[e++],o=new Array(i),n=0;n<i;++n,e+=a.Cartesian3.packedLength)o[n]=a.Cartesian3.unpack(t,e);var s=a.Ellipsoid.unpack(t,e,W);e+=a.Ellipsoid.packedLength;var d=p.VertexFormat.unpack(t,e,q);e+=p.VertexFormat.packedLength;var u=t[e++],m=t[e++],y=t[e++],f=t[e++],c=t[e++],h=1===t[e++],g=t[e];return l.defined(r)?(r._positions=o,r._ellipsoid=a.Ellipsoid.clone(s,r._ellipsoid),r._vertexFormat=p.VertexFormat.clone(d,r._vertexFormat),r._width=u,r._height=m,r._extrudedHeight=y,r._cornerType=f,r._granularity=c,r._shadowVolume=h,r._offsetAttribute=-1===g?void 0:g,r):(J.positions=o,J.width=u,J.height=m,J.extrudedHeight=y,J.cornerType=f,J.granularity=c,J.shadowVolume=h,J.offsetAttribute=-1===g?void 0:g,new Y(J))},Y.computeRectangle=function(t,e){var r=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,i=t.width;return B(r,l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84),i,l.defaultValue(t.cornerType,n.CornerType.ROUNDED),e)},Y.createGeometry=function(i){var n=i._positions,u=i._width,c=i._ellipsoid,h=(n=x(n,c),e.arrayRemoveDuplicates(n,a.Cartesian3.equalsEpsilon));if(!(h.length<2||u<=0)){var g,C=i._height,b=i._extrudedHeight,v=!y.CesiumMath.equalsEpsilon(C,b,0,y.CesiumMath.EPSILON2);n=i._vertexFormat,u={ellipsoid:c,positions:h,width:u,cornerType:i._cornerType,granularity:i._granularity,saveAttributes:!0},v?(u.height=C,u.extrudedHeight=b,u.shadowVolume=i._shadowVolume,u.offsetAttribute=i._offsetAttribute,g=function(e,r){var i=new p.VertexFormat({position:r.position,normal:r.normal||r.bitangent||e.shadowVolume,tangent:r.tangent,bitangent:r.normal||r.bitangent,st:r.st}),n=e.ellipsoid,u=D(s.CorridorGeometryLibrary.computePositions(e),i,n),y=e.height,c=e.extrudedHeight,h=u.attributes,g=u.indices,C=h.position.values,b=C.length,v=new Float64Array(6*b);(i=new Float64Array(b)).set(C),u=new Float64Array(4*b),u=M(C=f.PolygonPipeline.scaleToGeodeticHeight(C,y,n),0,u),u=M(i=f.PolygonPipeline.scaleToGeodeticHeight(i,c,n),2*b,u),v.set(C),v.set(i,b),v.set(u,2*b),h.position.values=v,h=function(t,e){if(!(e.normal||e.tangent||e.bitangent||e.st))return t;var r,i=t.position.values;(e.normal||e.bitangent)&&(r=t.normal.values,u=t.bitangent.values);var o=t.position.values.length/18,n=3*o,l=2*o,d=2*n;if(e.normal||e.bitangent||e.tangent){for(var u,m=e.normal?new Float32Array(6*n):void 0,y=e.tangent?new Float32Array(6*n):void 0,f=e.bitangent?new Float32Array(6*n):void 0,p=w,c=T,h=G,g=E,C=V,b=F,v=d,A=0;A<n;A+=3){var _=v+d;p=a.Cartesian3.fromArray(i,A,p),c=a.Cartesian3.fromArray(i,A+n,c),h=a.Cartesian3.fromArray(i,(A+3)%n,h),c=a.Cartesian3.subtract(c,p,c),h=a.Cartesian3.subtract(h,p,h),g=a.Cartesian3.normalize(a.Cartesian3.cross(c,h,g),g),e.normal&&(s.CorridorGeometryLibrary.addAttribute(m,g,_),s.CorridorGeometryLibrary.addAttribute(m,g,_+3),s.CorridorGeometryLibrary.addAttribute(m,g,v),s.CorridorGeometryLibrary.addAttribute(m,g,v+3)),(e.tangent||e.bitangent)&&(b=a.Cartesian3.fromArray(r,A,b),e.bitangent&&(s.CorridorGeometryLibrary.addAttribute(f,b,_),s.CorridorGeometryLibrary.addAttribute(f,b,_+3),s.CorridorGeometryLibrary.addAttribute(f,b,v),s.CorridorGeometryLibrary.addAttribute(f,b,v+3)),e.tangent&&(C=a.Cartesian3.normalize(a.Cartesian3.cross(b,g,C),C),s.CorridorGeometryLibrary.addAttribute(y,C,_),s.CorridorGeometryLibrary.addAttribute(y,C,_+3),s.CorridorGeometryLibrary.addAttribute(y,C,v),s.CorridorGeometryLibrary.addAttribute(y,C,v+3))),v+=6}if(e.normal){for(m.set(r),A=0;A<n;A+=3)m[A+n]=-r[A],m[A+n+1]=-r[A+1],m[A+n+2]=-r[A+2];t.normal.values=m}else t.normal=void 0;e.bitangent?(f.set(u),f.set(u,n),t.bitangent.values=f):t.bitangent=void 0,e.tangent&&(u=t.tangent.values,y.set(u),y.set(u,n),t.tangent.values=y)}if(e.st){var L=t.st.values,P=new Float32Array(6*l);P.set(L),P.set(L,l);for(var x=2*l,N=0;N<2;N++){for(P[x++]=L[0],P[x++]=L[1],A=2;A<l;A+=2){var D=L[A],M=L[A+1];P[x++]=D,P[x++]=M,P[x++]=D,P[x++]=M}P[x++]=L[0],P[x++]=L[1]}t.st.values=P}return t}(h,r);var A=b/3;if(e.shadowVolume){for(var _=h.normal.values,L=(b=_.length,u=new Float32Array(6*b),0);L<b;L++)_[L]=-_[L];u.set(_,b),u=M(_,4*b,u),h.extrudeDirection=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:u}),r.normal||(h.normal=void 0)}l.defined(e.offsetAttribute)&&(r=new Uint8Array(6*A),r=e.offsetAttribute===t.GeometryOffsetAttribute.TOP?(r=t.arrayFill(r,1,0,A),t.arrayFill(r,1,2*A,4*A)):(e=e.offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1,t.arrayFill(r,e)),h.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r}));var P=g.length,x=A+A,N=m.IndexDatatype.createTypedArray(v.length/3,2*P+3*x);N.set(g);var O,I,S,R,k=P;for(L=0;L<P;L+=3){var H=g[L],z=g[L+1],U=g[L+2];N[k++]=U+A,N[k++]=z+A,N[k++]=H+A}for(L=0;L<x;L+=2)S=(O=L+x)+1,R=(I=O+x)+1,N[k++]=O,N[k++]=I,N[k++]=S,N[k++]=S,N[k++]=I,N[k++]=R;return{attributes:h,indices:N}}(u,n)):((g=D(s.CorridorGeometryLibrary.computePositions(u),n,c)).attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(g.attributes.position.values,C,c),l.defined(i._offsetAttribute)&&(A=i._offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1,_=g.attributes.position.values.length,_=new Uint8Array(_/3),t.arrayFill(_,A),g.attributes.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})));var A=g.attributes,_=r.BoundingSphere.fromVertices(A.position.values,void 0,3);return n.position||(g.attributes.position.values=void 0),new d.Geometry({attributes:A,indices:g.indices,primitiveType:d.PrimitiveType.TRIANGLES,boundingSphere:_,offsetAttribute:i._offsetAttribute})}},Y.createShadowVolume=function(t,e,r){var a=t._granularity,i=t._ellipsoid;return e=e(a,i),r=r(a,i),new Y({positions:t._positions,width:t._width,cornerType:t._cornerType,ellipsoid:i,granularity:a,extrudedHeight:e,height:r,vertexFormat:p.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(Y.prototype,{rectangle:{get:function(){return l.defined(this._rectangle)||(this._rectangle=B(this._positions,this._ellipsoid,this._width,this._cornerType)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return[0,0,0,1,1,0]}}}),function(t,e){return(t=l.defined(e)?Y.unpack(t,e):t)._ellipsoid=a.Ellipsoid.clone(t._ellipsoid),Y.createGeometry(t)}}));