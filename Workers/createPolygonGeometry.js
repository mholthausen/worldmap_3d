define(["./when-54c2dc71","./Cartesian2-49b1de22","./ArcType-dc1c5aee","./GeometryOffsetAttribute-d889f085","./BoundingRectangle-95b9a92c","./Transforms-e9dbfb40","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./EllipsoidGeodesic-a2d57ae0","./EllipsoidTangentPlane-c4704d0f","./GeometryAttribute-669569db","./GeometryInstance-6d66d24e","./GeometryPipeline-39e647e8","./IndexDatatype-46306178","./Math-44e92d6b","./PolygonGeometryLibrary-2ed36c92","./PolygonPipeline-72c97573","./VertexFormat-7572c785","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./IntersectionTests-6ead8677","./Plane-8f7e53d1","./AttributeCompression-8ecc041c","./EncodedCartesian3-7ff81df8","./arrayRemoveDuplicates-216006b0","./EllipsoidRhumbLine-9b557f71","./GeometryAttributes-4fcfcf40"],(function(e,t,r,o,a,i,n,s,l,u,c,p,y,m,d,g,h,f,b,_,v,P,C,w,x,T,I){"use strict";var A=new t.Cartographic,E=new t.Cartographic,G=new a.BoundingRectangle,O=new t.Cartesian3,V=new t.Cartesian3,F=new t.Cartesian3,D=new t.Cartesian3,L=new t.Cartesian3,N=new t.Cartesian3,H=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3,S=new t.Cartesian2,B=new t.Cartesian2,k=new t.Cartesian3,z=new i.Quaternion,W=new i.Matrix3,Y=new i.Matrix3;function U(r){var a,n=r.vertexFormat,l=r.geometry,u=r.shadowVolume,p=l.attributes.position.values,y=p.length,m=r.wall,g=r.top||m,h=r.bottom||m;if(n.st||n.normal||n.tangent||n.bitangent||u){var f=r.boundingRectangle,b=r.tangentPlane,_=r.ellipsoid,v=r.stRotation,P=r.perPositionHeight,C=S;C.x=f.x,C.y=f.y;var w,x=n.st?new Float32Array(y/3*2):void 0;n.normal&&(w=P&&g&&!m?l.attributes.normal.values:new Float32Array(y));var T,I=n.tangent?new Float32Array(y):void 0,G=n.bitangent?new Float32Array(y):void 0,U=u?new Float32Array(y):void 0,j=0,Q=0,q=V,K=F,Z=D,J=!0,X=W,$=Y;$=0!==v?(T=i.Quaternion.fromAxisAngle(b._plane.normal,v,z),X=i.Matrix3.fromQuaternion(T,X),T=i.Quaternion.fromAxisAngle(b._plane.normal,-v,z),i.Matrix3.fromQuaternion(T,$)):(X=i.Matrix3.clone(i.Matrix3.IDENTITY,X),i.Matrix3.clone(i.Matrix3.IDENTITY,$));var ee=0,te=0;g&&h&&(ee=y/2,te=y/3,y/=2);for(var re=0;re<y;re+=3){var oe,ae,ie,ne,se,le,ue,ce,pe=t.Cartesian3.fromArray(p,re,k);n.st&&(oe=i.Matrix3.multiplyByVector(X,pe,O),oe=_.scaleToGeodeticSurface(oe,oe),ae=b.projectPointOntoPlane(oe,B),t.Cartesian2.subtract(ae,C,ae),ie=d.CesiumMath.clamp(ae.x/f.width,0,1),ne=d.CesiumMath.clamp(ae.y/f.height,0,1),h&&(x[j+te]=ie,x[j+1+te]=ne),g&&(x[j]=ie,x[j+1]=ne),j+=2),(n.normal||n.tangent||n.bitangent||u)&&(se=Q+1,le=Q+2,m?(re+3<y&&(ue=t.Cartesian3.fromArray(p,re+3,L),J&&(ce=t.Cartesian3.fromArray(p,re+y,N),P&&(a=pe,oe=ue,ae=ce,ie=void 0,ie=(ne=_).cartesianToCartographic(a,A).height,(a=ne.cartesianToCartographic(oe,E)).height=ie,ne.cartographicToCartesian(a,oe),(oe=ne.cartesianToCartographic(ae,E)).height=ie-100,ne.cartographicToCartesian(oe,ae)),t.Cartesian3.subtract(ue,pe,ue),t.Cartesian3.subtract(ce,pe,ce),q=t.Cartesian3.normalize(t.Cartesian3.cross(ce,ue,q),q),J=!1),t.Cartesian3.equalsEpsilon(ue,pe,d.CesiumMath.EPSILON10)&&(J=!0)),(n.tangent||n.bitangent)&&(Z=_.geodeticSurfaceNormal(pe,Z),n.tangent&&(K=t.Cartesian3.normalize(t.Cartesian3.cross(Z,q,K),K)))):(q=_.geodeticSurfaceNormal(pe,q),(n.tangent||n.bitangent)&&(P&&(H=t.Cartesian3.fromArray(w,Q,H),R=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,H,R),R=t.Cartesian3.normalize(i.Matrix3.multiplyByVector($,R,R),R),n.bitangent&&(M=t.Cartesian3.normalize(t.Cartesian3.cross(H,R,M),M))),K=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,q,K),K=t.Cartesian3.normalize(i.Matrix3.multiplyByVector($,K,K),K),n.bitangent&&(Z=t.Cartesian3.normalize(t.Cartesian3.cross(q,K,Z),Z)))),n.normal&&(r.wall?(w[Q+ee]=q.x,w[se+ee]=q.y,w[le+ee]=q.z):h&&(w[Q+ee]=-q.x,w[se+ee]=-q.y,w[le+ee]=-q.z),(g&&!P||m)&&(w[Q]=q.x,w[se]=q.y,w[le]=q.z)),u&&(m&&(q=_.geodeticSurfaceNormal(pe,q)),U[Q+ee]=-q.x,U[se+ee]=-q.y,U[le+ee]=-q.z),n.tangent&&(r.wall?(I[Q+ee]=K.x,I[se+ee]=K.y,I[le+ee]=K.z):h&&(I[Q+ee]=-K.x,I[se+ee]=-K.y,I[le+ee]=-K.z),g&&(P?(I[Q]=R.x,I[se]=R.y,I[le]=R.z):(I[Q]=K.x,I[se]=K.y,I[le]=K.z))),n.bitangent&&(h&&(G[Q+ee]=Z.x,G[se+ee]=Z.y,G[le+ee]=Z.z),g&&(P?(G[Q]=M.x,G[se]=M.y,G[le]=M.z):(G[Q]=Z.x,G[se]=Z.y,G[le]=Z.z))),Q+=3)}n.st&&(l.attributes.st=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),n.normal&&(l.attributes.normal=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),n.tangent&&(l.attributes.tangent=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),n.bitangent&&(l.attributes.bitangent=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),u&&(l.attributes.extrudeDirection=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:U}))}return r.extrude&&e.defined(r.offsetAttribute)&&(v=p.length/3,T=new Uint8Array(v),r.offsetAttribute===o.GeometryOffsetAttribute.TOP?g&&h||m?T=o.arrayFill(T,1,0,v/2):g&&(T=o.arrayFill(T,1)):(v=r.offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1,T=o.arrayFill(T,v)),l.attributes.applyOffset=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:T})),l}var j=new t.Cartographic,Q=new t.Cartographic,q={westOverIDL:0,eastOverIDL:0},K=new l.EllipsoidGeodesic;function Z(o,a,i,n,s){if(s=e.defaultValue(s,new t.Rectangle),!e.defined(o)||o.length<3)return s.west=0,s.north=0,s.south=0,s.east=0,s;if(i===r.ArcType.RHUMB)return t.Rectangle.fromCartesianArray(o,a,s);K.ellipsoid.equals(a)||(K=new l.EllipsoidGeodesic(void 0,void 0,a)),s.west=Number.POSITIVE_INFINITY,s.east=Number.NEGATIVE_INFINITY,s.south=Number.POSITIVE_INFINITY,s.north=Number.NEGATIVE_INFINITY,q.westOverIDL=Number.POSITIVE_INFINITY,q.eastOverIDL=Number.NEGATIVE_INFINITY;for(var u,c=1/d.CesiumMath.chordLength(n,a.maximumRadius),p=o.length,y=a.cartesianToCartographic(o[0],Q),m=j,g=1;g<p;g++)u=m,m=y,y=a.cartesianToCartographic(o[g],u),K.setEndPoints(m,y),X(K,c,s,q);return u=m,m=y,y=a.cartesianToCartographic(o[0],u),K.setEndPoints(m,y),X(K,c,s,q),s.east-s.west>q.eastOverIDL-q.westOverIDL&&(s.west=q.westOverIDL,s.east=q.eastOverIDL,s.east>d.CesiumMath.PI&&(s.east=s.east-d.CesiumMath.TWO_PI),s.west>d.CesiumMath.PI&&(s.west=s.west-d.CesiumMath.TWO_PI)),s}var J=new t.Cartographic;function X(e,t,r,o){for(var a=e.surfaceDistance,i=Math.ceil(a*t),n=0<i?a/(i-1):Number.POSITIVE_INFINITY,s=0,l=0;l<i;l++){var u=e.interpolateUsingSurfaceDistance(s,J);s+=n;var c=u.longitude;u=u.latitude,r.west=Math.min(r.west,c),r.east=Math.max(r.east,c),r.south=Math.min(r.south,u),r.north=Math.max(r.north,u),c=0<=c?c:c+d.CesiumMath.TWO_PI,o.westOverIDL=Math.min(o.westOverIDL,c),o.eastOverIDL=Math.max(o.eastOverIDL,c)}}var $=[];function ee(o){var a,i=o.polygonHierarchy,n=e.defaultValue(o.vertexFormat,f.VertexFormat.DEFAULT),s=e.defaultValue(o.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(o.granularity,d.CesiumMath.RADIANS_PER_DEGREE),u=e.defaultValue(o.stRotation,0),c=e.defaultValue(o.perPositionHeight,!1),p=c&&e.defined(o.extrudedHeight),y=e.defaultValue(o.height,0),m=e.defaultValue(o.extrudedHeight,y);p||(a=Math.max(y,m),m=Math.min(y,m),y=a),this._vertexFormat=f.VertexFormat.clone(n),this._ellipsoid=t.Ellipsoid.clone(s),this._granularity=l,this._stRotation=u,this._height=y,this._extrudedHeight=m,this._closeTop=e.defaultValue(o.closeTop,!0),this._closeBottom=e.defaultValue(o.closeBottom,!0),this._polygonHierarchy=i,this._perPositionHeight=c,this._perPositionHeightExtrude=p,this._shadowVolume=e.defaultValue(o.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=o.offsetAttribute,this._arcType=e.defaultValue(o.arcType,r.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(i)+t.Ellipsoid.packedLength+f.VertexFormat.packedLength+12}ee.fromPositions=function(t){return new ee({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType})},ee.pack=function(r,o,a){return a=e.defaultValue(a,0),a=g.PolygonGeometryLibrary.packPolygonHierarchy(r._polygonHierarchy,o,a),t.Ellipsoid.pack(r._ellipsoid,o,a),a+=t.Ellipsoid.packedLength,f.VertexFormat.pack(r._vertexFormat,o,a),a+=f.VertexFormat.packedLength,o[a++]=r._height,o[a++]=r._extrudedHeight,o[a++]=r._granularity,o[a++]=r._stRotation,o[a++]=r._perPositionHeightExtrude?1:0,o[a++]=r._perPositionHeight?1:0,o[a++]=r._closeTop?1:0,o[a++]=r._closeBottom?1:0,o[a++]=r._shadowVolume?1:0,o[a++]=e.defaultValue(r._offsetAttribute,-1),o[a++]=r._arcType,o[a]=r.packedLength,o};var te=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),re=new f.VertexFormat,oe={polygonHierarchy:{}};return ee.unpack=function(r,o,a){o=e.defaultValue(o,0);var i=g.PolygonGeometryLibrary.unpackPolygonHierarchy(r,o);o=i.startingIndex,delete i.startingIndex;var n=t.Ellipsoid.unpack(r,o,te);o+=t.Ellipsoid.packedLength;var s=f.VertexFormat.unpack(r,o,re);o+=f.VertexFormat.packedLength;var l=r[o++],u=r[o++],c=r[o++],p=r[o++],y=1===r[o++],m=1===r[o++],d=1===r[o++],h=1===r[o++],b=1===r[o++],_=r[o++],v=r[o++];return o=r[o],(a=e.defined(a)?a:new ee(oe))._polygonHierarchy=i,a._ellipsoid=t.Ellipsoid.clone(n,a._ellipsoid),a._vertexFormat=f.VertexFormat.clone(s,a._vertexFormat),a._height=l,a._extrudedHeight=u,a._granularity=c,a._stRotation=p,a._perPositionHeightExtrude=y,a._perPositionHeight=m,a._closeTop=d,a._closeBottom=h,a._shadowVolume=b,a._offsetAttribute=-1===_?void 0:_,a._arcType=v,a.packedLength=o,a},ee.computeRectangle=function(o,a){var i=e.defaultValue(o.granularity,d.CesiumMath.RADIANS_PER_DEGREE),n=e.defaultValue(o.arcType,r.ArcType.GEODESIC),s=o.polygonHierarchy;return o=e.defaultValue(o.ellipsoid,t.Ellipsoid.WGS84),Z(s.positions,o,n,i,a)},ee.createGeometry=function(t){var r=t._vertexFormat,a=t._ellipsoid,n=t._granularity,l=t._stRotation,f=t._polygonHierarchy,b=t._perPositionHeight,_=t._closeTop,v=t._closeBottom,P=t._arcType;if(!((I=f.positions).length<3)){var C=u.EllipsoidTangentPlane.fromPoints(I,a),w=(f=g.PolygonGeometryLibrary.polygonsFromHierarchy(f,C.projectPointsOntoPlane.bind(C),!b,a)).hierarchy,x=f.polygons;if(0!==w.length){I=w[0].outerRing;var T,I=g.PolygonGeometryLibrary.computeBoundingRectangle(C.plane.normal,C.projectPointOntoPlane.bind(C),I,l,G),A=[],E=t._height,O=t._extrudedHeight,V={perPositionHeight:b,vertexFormat:r,geometry:void 0,tangentPlane:C,boundingRectangle:I,ellipsoid:a,stRotation:l,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:P};if(t._perPositionHeightExtrude||!d.CesiumMath.equalsEpsilon(E,O,0,d.CesiumMath.EPSILON2))for(V.extrude=!0,V.top=_,V.bottom=v,V.shadowVolume=t._shadowVolume,V.offsetAttribute=t._offsetAttribute,T=0;T<x.length;T++){var F,D=function(e,t,r,o,a,i,n,s,l){var c={walls:[]};if(i||n){t=(x=g.PolygonGeometryLibrary.createGeometryFromPositions(e,t,r,a,s,l)).attributes.position.values;var y=x.indices;if(i&&n){var d,f=(i=t.concat(t)).length/3;(d=m.IndexDatatype.createTypedArray(f,2*y.length)).set(y);for(var b=y.length,_=f/2,v=0;v<b;v+=3){var P=d[v]+_,C=d[v+1]+_,w=d[v+2]+_;d[v+b]=w,d[v+1+b]=C,d[v+2+b]=P}x.attributes.position.values=i,a&&s.normal&&(s=x.attributes.normal.values,x.attributes.normal.values=new Float32Array(i.length),x.attributes.normal.values.set(s)),x.indices=d}else if(n){for(f=t.length/3,d=m.IndexDatatype.createTypedArray(f,y.length),v=0;v<y.length;v+=3)d[v]=y[v+2],d[v+1]=y[v+1],d[v+2]=y[v];x.indices=d}c.topAndBottom=new p.GeometryInstance({geometry:x})}var x=o.outerRing,T=u.EllipsoidTangentPlane.fromPoints(x,e).projectPointsOntoPlane(x,$);h.PolygonPipeline.computeWindingOrder2D(T)===h.WindingOrder.CLOCKWISE&&(x=x.slice().reverse());var I=g.PolygonGeometryLibrary.computeWallGeometry(x,e,r,a,l);c.walls.push(new p.GeometryInstance({geometry:I}));var A=o.holes;for(v=0;v<A.length;v++){var E=A[v];T=u.EllipsoidTangentPlane.fromPoints(E,e).projectPointsOntoPlane(E,$),h.PolygonPipeline.computeWindingOrder2D(T)===h.WindingOrder.COUNTER_CLOCKWISE&&(E=E.slice().reverse()),I=g.PolygonGeometryLibrary.computeWallGeometry(E,e,r,a,l),c.walls.push(new p.GeometryInstance({geometry:I}))}return c}(a,x[T],n,w[T],b,_,v,r,P);_&&v?(F=D.topAndBottom,V.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(F.geometry,E,O,a,b)):_?((F=D.topAndBottom).geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(F.geometry.attributes.position.values,E,a,!b),V.geometry=F.geometry):v&&((F=D.topAndBottom).geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(F.geometry.attributes.position.values,O,a,!0),V.geometry=F.geometry),(_||v)&&(V.wall=!1,F.geometry=U(V),A.push(F));var L=D.walls;V.wall=!0;for(var N=0;N<L.length;N++){var H=L[N];V.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(H.geometry,E,O,a,b),H.geometry=U(V),A.push(H)}}else for(T=0;T<x.length;T++){var R,M,S=new p.GeometryInstance({geometry:g.PolygonGeometryLibrary.createGeometryFromPositions(a,x[T],n,b,r,P)});S.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(S.geometry.attributes.position.values,E,a,!b),V.geometry=S.geometry,S.geometry=U(V),e.defined(t._offsetAttribute)&&(M=S.geometry.attributes.position.values.length,R=new Uint8Array(M/3),M=t._offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1,o.arrayFill(R,M),S.geometry.attributes.applyOffset=new c.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:R})),A.push(S)}return(C=y.GeometryPipeline.combineInstances(A)[0]).attributes.position.values=new Float64Array(C.attributes.position.values),C.indices=m.IndexDatatype.createTypedArray(C.attributes.position.values.length/3,C.indices),I=C.attributes,l=i.BoundingSphere.fromVertices(I.position.values),r.position||delete I.position,new c.Geometry({attributes:I,indices:C.indices,primitiveType:C.primitiveType,boundingSphere:l,offsetAttribute:t._offsetAttribute})}}},ee.createShadowVolume=function(e,t,r){var o=e._granularity,a=e._ellipsoid;return t=t(o,a),r=r(o,a),new ee({polygonHierarchy:e._polygonHierarchy,ellipsoid:a,stRotation:e._stRotation,granularity:o,perPositionHeight:!1,extrudedHeight:t,height:r,vertexFormat:f.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(ee.prototype,{rectangle:{get:function(){var t;return e.defined(this._rectangle)||(t=this._polygonHierarchy.positions,this._rectangle=Z(t,this._ellipsoid,this._arcType,this._granularity)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){var t=-e._stRotation;if(0==t)return[0,0,0,1,1,0];var r=e._ellipsoid,o=e._polygonHierarchy.positions;return e=e.rectangle,c.Geometry._textureCoordinateRotationPoints(o,t,r,e)}(this)),this._textureCoordinateRotationPoints}}}),function(r,o){return(r=e.defined(o)?ee.unpack(r,o):r)._ellipsoid=t.Ellipsoid.clone(r._ellipsoid),ee.createGeometry(r)}}));