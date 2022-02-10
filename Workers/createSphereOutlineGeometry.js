define(["./when-4bbc8319","./Matrix2-860854d4","./RuntimeError-1349fdaf","./EllipsoidOutlineGeometry-0c67693b","./ComponentDatatype-8f55628c","./WebGLConstants-508b9636","./GeometryOffsetAttribute-24539cee","./Transforms-0becfc64","./combine-e9466e32","./GeometryAttribute-4590b388","./GeometryAttributes-7827a6c2","./IndexDatatype-1d853600"],(function(e,i,t,n,o,r,s,a,d,l,c,u){"use strict";function m(t){const o=e.defaultValue(t.radius,1),r={radii:new i.Cartesian3(o,o,o),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(r),this._workerName="createSphereOutlineGeometry"}m.packedLength=n.EllipsoidOutlineGeometry.packedLength,m.pack=function(e,i,t){return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};const p=new n.EllipsoidOutlineGeometry,y={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return m.unpack=function(t,o,r){const s=n.EllipsoidOutlineGeometry.unpack(t,o,p);return y.stackPartitions=s._stackPartitions,y.slicePartitions=s._slicePartitions,y.subdivisions=s._subdivisions,e.defined(r)?(i.Cartesian3.clone(s._radii,y.radii),r._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(y),r):(y.radius=s._radii.x,new m(y))},m.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=m.unpack(i,t)),m.createGeometry(i)}}));