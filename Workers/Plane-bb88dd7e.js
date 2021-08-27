define(["exports","./Cartesian2-08065eec","./Transforms-1142ce48","./Check-be2d5acb","./when-ad3237a0","./Math-5ca9b250"],(function(n,e,a,t,r,i){"use strict";function s(n,a){this.normal=e.Cartesian3.clone(n),this.distance=a}s.fromPointNormal=function(n,a,t){return n=-e.Cartesian3.dot(a,n),r.defined(t)?(e.Cartesian3.clone(a,t.normal),t.distance=n,t):new s(a,n)};var o=new e.Cartesian3;s.fromCartesian4=function(n,a){var t=e.Cartesian3.fromCartesian4(n,o);return n=n.w,r.defined(a)?(e.Cartesian3.clone(t,a.normal),a.distance=n,a):new s(t,n)},s.getPointDistance=function(n,a){return e.Cartesian3.dot(n.normal,a)+n.distance};var c=new e.Cartesian3;s.projectPointOntoPlane=function(n,a,t){r.defined(t)||(t=new e.Cartesian3);var i=s.getPointDistance(n,a);return i=e.Cartesian3.multiplyByScalar(n.normal,i,c),e.Cartesian3.subtract(a,i,t)};var l=new a.Matrix4,C=new a.Cartesian4,d=new e.Cartesian3;s.transform=function(n,t,r){var i=n.normal;return n=n.distance,t=a.Matrix4.inverseTranspose(t,l),n=a.Cartesian4.fromElements(i.x,i.y,i.z,n,C),n=a.Matrix4.multiplyByVector(t,n,n),t=e.Cartesian3.fromCartesian4(n,d),n=a.Cartesian4.divideByScalar(n,e.Cartesian3.magnitude(t),n),s.fromCartesian4(n,r)},s.clone=function(n,a){return r.defined(a)?(e.Cartesian3.clone(n.normal,a.normal),a.distance=n.distance,a):new s(n.normal,n.distance)},s.equals=function(n,a){return n.distance===a.distance&&e.Cartesian3.equals(n.normal,a.normal)},s.ORIGIN_XY_PLANE=Object.freeze(new s(e.Cartesian3.UNIT_Z,0)),s.ORIGIN_YZ_PLANE=Object.freeze(new s(e.Cartesian3.UNIT_X,0)),s.ORIGIN_ZX_PLANE=Object.freeze(new s(e.Cartesian3.UNIT_Y,0)),n.Plane=s}));