define(["./arrayRemoveDuplicates-216006b0","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./CoplanarPolygonGeometryLibrary-f7abbc89","./when-54c2dc71","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./GeometryInstance-6d66d24e","./GeometryPipeline-39e647e8","./IndexDatatype-46306178","./PolygonGeometryLibrary-2ed36c92","./Math-44e92d6b","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./OrientedBoundingBox-3669ebd4","./EllipsoidTangentPlane-c4704d0f","./IntersectionTests-6ead8677","./Plane-8f7e53d1","./AttributeCompression-8ecc041c","./EncodedCartesian3-7ff81df8","./ArcType-dc1c5aee","./EllipsoidRhumbLine-9b557f71","./PolygonPipeline-72c97573"],(function(e,t,r,n,o,i,a,y,c,l,p,s,u,d,m,f,g,b,h,P,G,v,L,C,T){"use strict";function E(e){e=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy,this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(e)+1}E.fromPositions=function(e){return new E({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},E.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var k={polygonHierarchy:{}};return E.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);return t=n.startingIndex,delete n.startingIndex,t=e[t],(r=a.defined(r)?r:new E(k))._polygonHierarchy=n,r.packedLength=t,r},E.createGeometry=function(n){var a=n._polygonHierarchy;if(n=a.positions,!((n=e.arrayRemoveDuplicates(n,r.Cartesian3.equalsEpsilon,!0)).length<3)&&i.CoplanarPolygonGeometryLibrary.validOutline(n)){var d=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(a,!1);if(0!==d.length){for(var m=[],f=0;f<d.length;f++){var g=new l.GeometryInstance({geometry:function(e){for(var t=e.length,r=new Float64Array(3*t),n=s.IndexDatatype.createTypedArray(t,2*t),i=0,a=0,l=0;l<t;l++){var p=e[l];r[i++]=p.x,r[i++]=p.y,r[i++]=p.z,n[a++]=l,n[a++]=(l+1)%t}var u=new c.GeometryAttributes({position:new y.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new y.Geometry({attributes:u,indices:n,primitiveType:y.PrimitiveType.LINES})}(d[f])});m.push(g)}return n=p.GeometryPipeline.combineInstances(m)[0],a=t.BoundingSphere.fromPoints(a.positions),new y.Geometry({attributes:n.attributes,indices:n.indices,primitiveType:n.primitiveType,boundingSphere:a})}}},function(e,t){return(e=a.defined(t)?E.unpack(e,t):e)._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),E.createGeometry(e)}}));