define(["./defaultValue-0a909f67","./Matrix3-a348023f","./EllipsoidOutlineGeometry-99b2bc1a","./Math-e97915da","./Transforms-01e95659","./Matrix2-7146c9ca","./RuntimeError-06c93819","./combine-ca22a614","./ComponentDatatype-77274976","./WebGLConstants-a8cc3e8c","./GeometryAttribute-f5d71750","./GeometryAttributes-f06a2792","./GeometryOffsetAttribute-04332ce7","./IndexDatatype-2149f06c"],(function(e,i,t,n,r,o,s,a,c,l,d,u,m,p){"use strict";function y(n){const r=e.defaultValue(n.radius,1),o={radii:new i.Cartesian3(r,r,r),stackPartitions:n.stackPartitions,slicePartitions:n.slicePartitions,subdivisions:n.subdivisions};this._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(o),this._workerName="createSphereOutlineGeometry"}y.packedLength=t.EllipsoidOutlineGeometry.packedLength,y.pack=function(e,i,n){return t.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,n)};const G=new t.EllipsoidOutlineGeometry,f={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return y.unpack=function(n,r,o){const s=t.EllipsoidOutlineGeometry.unpack(n,r,G);return f.stackPartitions=s._stackPartitions,f.slicePartitions=s._slicePartitions,f.subdivisions=s._subdivisions,e.defined(o)?(i.Cartesian3.clone(s._radii,f.radii),o._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(f),o):(f.radius=s._radii.x,new y(f))},y.createGeometry=function(e){return t.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=y.unpack(i,t)),y.createGeometry(i)}}));