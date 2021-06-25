define(["./when-208fe5b0","./Cartesian2-b4b7b0b3","./ArcType-dc1c5aee","./GeometryOffsetAttribute-3497d4dd","./Transforms-d5dbea8d","./Check-5e798bbf","./ComponentDatatype-ce69354e","./EllipsoidTangentPlane-7dd3130c","./GeometryAttribute-3314089a","./GeometryAttributes-b0b294d8","./GeometryInstance-3ec54139","./GeometryPipeline-cd170892","./IndexDatatype-da7c58eb","./Math-8386669c","./PolygonGeometryLibrary-5fcc0c80","./PolygonPipeline-7bfe45de","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1","./IntersectionTests-eb44dd99","./Plane-06d5a63d","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b","./arrayRemoveDuplicates-3a9a9480","./EllipsoidRhumbLine-73a4e3eb"],(function(e,t,i,r,o,n,a,l,s,y,u,p,d,c,g,f,h,m,b,P,E,A,_,v){"use strict";var G=[],L=[];function T(r){var o,n=r.polygonHierarchy,a=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(r.granularity,c.CesiumMath.RADIANS_PER_DEGREE),s=e.defaultValue(r.perPositionHeight,!1),y=s&&e.defined(r.extrudedHeight),u=e.defaultValue(r.arcType,i.ArcType.GEODESIC),p=e.defaultValue(r.height,0),d=e.defaultValue(r.extrudedHeight,p);y||(o=Math.max(p,d),d=Math.min(p,d),p=o),this._ellipsoid=t.Ellipsoid.clone(a),this._granularity=l,this._height=p,this._extrudedHeight=d,this._arcType=u,this._polygonHierarchy=n,this._perPositionHeight=s,this._perPositionHeightExtrude=y,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(n)+t.Ellipsoid.packedLength+8}T.pack=function(i,r,o){return o=e.defaultValue(o,0),o=g.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,r,o),t.Ellipsoid.pack(i._ellipsoid,r,o),o+=t.Ellipsoid.packedLength,r[o++]=i._height,r[o++]=i._extrudedHeight,r[o++]=i._granularity,r[o++]=i._perPositionHeightExtrude?1:0,r[o++]=i._perPositionHeight?1:0,r[o++]=i._arcType,r[o++]=e.defaultValue(i._offsetAttribute,-1),r[o]=i.packedLength,r};var H=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),C={polygonHierarchy:{}};return T.unpack=function(i,r,o){r=e.defaultValue(r,0);var n=g.PolygonGeometryLibrary.unpackPolygonHierarchy(i,r);r=n.startingIndex,delete n.startingIndex;var a=t.Ellipsoid.unpack(i,r,H);r+=t.Ellipsoid.packedLength;var l=i[r++],s=i[r++],y=i[r++],u=1===i[r++],p=1===i[r++],d=i[r++],c=i[r++];return r=i[r],(o=e.defined(o)?o:new T(C))._polygonHierarchy=n,o._ellipsoid=t.Ellipsoid.clone(a,o._ellipsoid),o._height=l,o._extrudedHeight=s,o._granularity=y,o._perPositionHeight=p,o._perPositionHeightExtrude=u,o._arcType=d,o._offsetAttribute=-1===c?void 0:c,o.packedLength=r,o},T.fromPositions=function(t){return new T({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},T.createGeometry=function(t){var n=t._ellipsoid,h=t._granularity,m=t._polygonHierarchy,b=t._perPositionHeight,P=t._arcType,E=g.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(m,!b,n);if(0!==E.length){var A,_,v,T,H,C,O=[],D=c.CesiumMath.chordLength(h,n.maximumRadius),x=t._height,I=t._extrudedHeight;if(t._perPositionHeightExtrude||!c.CesiumMath.equalsEpsilon(x,I,0,c.CesiumMath.EPSILON2))for(A=0;A<E.length;A++)(T=function(e,t,r,o,n){var p,c=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);f.PolygonPipeline.computeWindingOrder2D(c)===f.WindingOrder.CLOCKWISE&&(c.reverse(),t=t.slice().reverse());var h=t.length,m=new Array(h),b=0;if(o)for(p=new Float64Array(2*h*3*2),O=0;O<h;++O){m[O]=b/3;var P=t[O],E=t[(O+1)%h];p[b++]=P.x,p[b++]=P.y,p[b++]=P.z,p[b++]=E.x,p[b++]=E.y,p[b++]=E.z}else{var A,_=0;if(n===i.ArcType.GEODESIC)for(O=0;O<h;O++)_+=g.PolygonGeometryLibrary.subdivideLineCount(t[O],t[(O+1)%h],r);else if(n===i.ArcType.RHUMB)for(O=0;O<h;O++)_+=g.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[O],t[(O+1)%h],r);for(p=new Float64Array(3*_*2),O=0;O<h;++O){m[O]=b/3,n===i.ArcType.GEODESIC?A=g.PolygonGeometryLibrary.subdivideLine(t[O],t[(O+1)%h],r,L):n===i.ArcType.RHUMB&&(A=g.PolygonGeometryLibrary.subdivideRhumbLine(e,t[O],t[(O+1)%h],r,L));for(var v=A.length,T=0;T<v;++T)p[b++]=A[T]}}h=p.length/6;for(var H=m.length,C=d.IndexDatatype.createTypedArray(h+H,2*(2*h+H)),O=(b=0,0);O<h;++O)C[b++]=O,C[b++]=(O+1)%h,C[b++]=O+h,C[b++]=(O+1)%h+h;for(O=0;O<H;O++){var D=m[O];C[b++]=D,C[b++]=D+h}return new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:C,primitiveType:s.PrimitiveType.LINES})})}(n,E[A],D,b,P)).geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(T.geometry,x,I,n,b),e.defined(t._offsetAttribute)&&(_=T.geometry.attributes.position.values.length/3,v=new Uint8Array(_),v=t._offsetAttribute===r.GeometryOffsetAttribute.TOP?r.arrayFill(v,1,0,_/2):(C=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(v,C)),T.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:v})),O.push(T);else for(A=0;A<E.length;A++)(T=function(e,t,r,o,n){var p,c=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);f.PolygonPipeline.computeWindingOrder2D(c)===f.WindingOrder.CLOCKWISE&&(c.reverse(),t=t.slice().reverse());var h=t.length,m=0;if(o)for(p=new Float64Array(2*h*3),H=0;H<h;H++){var b=t[H],P=t[(H+1)%h];p[m++]=b.x,p[m++]=b.y,p[m++]=b.z,p[m++]=P.x,p[m++]=P.y,p[m++]=P.z}else{var E,A=0;if(n===i.ArcType.GEODESIC)for(H=0;H<h;H++)A+=g.PolygonGeometryLibrary.subdivideLineCount(t[H],t[(H+1)%h],r);else if(n===i.ArcType.RHUMB)for(H=0;H<h;H++)A+=g.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[H],t[(H+1)%h],r);for(p=new Float64Array(3*A),H=0;H<h;H++){n===i.ArcType.GEODESIC?E=g.PolygonGeometryLibrary.subdivideLine(t[H],t[(H+1)%h],r,L):n===i.ArcType.RHUMB&&(E=g.PolygonGeometryLibrary.subdivideRhumbLine(e,t[H],t[(H+1)%h],r,L));for(var _=E.length,v=0;v<_;++v)p[m++]=E[v]}}h=p.length/3;for(var T=d.IndexDatatype.createTypedArray(h,2*h),H=(m=0,0);H<h-1;H++)T[m++]=H,T[m++]=H+1;return T[m++]=h-1,T[m++]=0,new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:T,primitiveType:s.PrimitiveType.LINES})})}(n,E[A],D,b,P)).geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(T.geometry.attributes.position.values,x,n,!b),e.defined(t._offsetAttribute)&&(H=T.geometry.attributes.position.values.length,H=new Uint8Array(H/3),C=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(H,C),T.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:H})),O.push(T);return m=p.GeometryPipeline.combineInstances(O)[0],h=o.BoundingSphere.fromVertices(m.attributes.position.values),new s.Geometry({attributes:m.attributes,indices:m.indices,primitiveType:m.primitiveType,boundingSphere:h,offsetAttribute:t._offsetAttribute})}},function(i,r){return(i=e.defined(r)?T.unpack(i,r):i)._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),T.createGeometry(i)}}));