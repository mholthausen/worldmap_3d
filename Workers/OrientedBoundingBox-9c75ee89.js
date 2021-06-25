define(["exports","./Transforms-d5dbea8d","./Cartesian2-b4b7b0b3","./Check-5e798bbf","./when-208fe5b0","./EllipsoidTangentPlane-7dd3130c","./Math-8386669c","./Plane-06d5a63d"],(function(a,t,e,n,r,i,s,o){"use strict";function C(a,n){this.center=e.Cartesian3.clone(r.defaultValue(a,e.Cartesian3.ZERO)),this.halfAxes=t.Matrix3.clone(r.defaultValue(n,t.Matrix3.ZERO))}C.packedLength=e.Cartesian3.packedLength+t.Matrix3.packedLength,C.pack=function(a,n,i){return i=r.defaultValue(i,0),e.Cartesian3.pack(a.center,n,i),t.Matrix3.pack(a.halfAxes,n,i+e.Cartesian3.packedLength),n},C.unpack=function(a,n,i){return n=r.defaultValue(n,0),r.defined(i)||(i=new C),e.Cartesian3.unpack(a,n,i.center),t.Matrix3.unpack(a,n+e.Cartesian3.packedLength,i.halfAxes),i};var c=new e.Cartesian3,u=new e.Cartesian3,d=new e.Cartesian3,l=new e.Cartesian3,h=new e.Cartesian3,x=new e.Cartesian3,M=new t.Matrix3,m={unitary:new t.Matrix3,diagonal:new t.Matrix3};C.fromPoints=function(a,n){if(r.defined(n)||(n=new C),!r.defined(a)||0===a.length)return n.halfAxes=t.Matrix3.ZERO,n.center=e.Cartesian3.ZERO,n;for(var i=a.length,s=e.Cartesian3.clone(a[0],c),o=1;o<i;o++)e.Cartesian3.add(s,a[o],s);var f=1/i;e.Cartesian3.multiplyByScalar(s,f,s);var p,g=0,w=0,b=0,y=0,O=0,P=0;for(o=0;o<i;o++)g+=(p=e.Cartesian3.subtract(a[o],s,u)).x*p.x,w+=p.x*p.y,b+=p.x*p.z,y+=p.y*p.y,O+=p.y*p.z,P+=p.z*p.z;w*=f,b*=f,y*=f,O*=f,P*=f,(N=M)[0]=g*=f,N[1]=w,N[2]=b,N[3]=w,N[4]=y,N[5]=O,N[6]=b,N[7]=O,N[8]=P;var N=t.Matrix3.computeEigenDecomposition(N,m),A=(N=t.Matrix3.clone(N.unitary,n.halfAxes),t.Matrix3.getColumn(N,0,l)),T=t.Matrix3.getColumn(N,1,h),R=t.Matrix3.getColumn(N,2,x),I=-Number.MAX_VALUE,E=-Number.MAX_VALUE,L=-Number.MAX_VALUE,z=Number.MAX_VALUE,S=Number.MAX_VALUE,U=Number.MAX_VALUE;for(o=0;o<i;o++)p=a[o],I=Math.max(e.Cartesian3.dot(A,p),I),E=Math.max(e.Cartesian3.dot(T,p),E),L=Math.max(e.Cartesian3.dot(R,p),L),z=Math.min(e.Cartesian3.dot(A,p),z),S=Math.min(e.Cartesian3.dot(T,p),S),U=Math.min(e.Cartesian3.dot(R,p),U);return A=e.Cartesian3.multiplyByScalar(A,.5*(z+I),A),T=e.Cartesian3.multiplyByScalar(T,.5*(S+E),T),R=e.Cartesian3.multiplyByScalar(R,.5*(U+L),R),N=e.Cartesian3.add(A,T,n.center),e.Cartesian3.add(N,R,N),(N=d).x=I-z,N.y=E-S,N.z=L-U,e.Cartesian3.multiplyByScalar(N,.5,N),t.Matrix3.multiplyByScale(n.halfAxes,N,n.halfAxes),n};var f=new e.Cartesian3,p=new e.Cartesian3;function g(a,n,i,s,o,c,u,d,l,h,x){var M=(x=r.defined(x)?x:new C).halfAxes;return t.Matrix3.setColumn(M,0,n,M),t.Matrix3.setColumn(M,1,i,M),t.Matrix3.setColumn(M,2,s,M),(i=f).x=(o+c)/2,i.y=(u+d)/2,i.z=(l+h)/2,(s=p).x=(c-o)/2,s.y=(d-u)/2,s.z=(h-l)/2,l=x.center,i=t.Matrix3.multiplyByVector(M,i,i),e.Cartesian3.add(a,i,l),t.Matrix3.multiplyByScale(M,s,M),x}var w=new e.Cartographic,b=new e.Cartesian3,y=new e.Cartographic,O=new e.Cartographic,P=new e.Cartographic,N=new e.Cartographic,A=new e.Cartographic,T=new e.Cartesian3,R=new e.Cartesian3,I=new e.Cartesian3,E=new e.Cartesian3,L=new e.Cartesian3,z=new e.Cartesian2,S=new e.Cartesian2,U=new e.Cartesian2,V=new e.Cartesian2,v=new e.Cartesian2,B=new e.Cartesian3,_=new e.Cartesian3,k=new e.Cartesian3,W=new e.Cartesian3,D=new e.Cartesian2,q=new e.Cartesian3,X=new e.Cartesian3,j=new e.Cartesian3,Z=new o.Plane(e.Cartesian3.UNIT_X,0);C.fromRectangle=function(a,t,n,C,c){if(t=r.defaultValue(t,0),n=r.defaultValue(n,0),C=r.defaultValue(C,e.Ellipsoid.WGS84),a.width<=s.CesiumMath.PI){var u=e.Rectangle.center(a,w),d=C.cartographicToCartesian(u,b),l=new i.EllipsoidTangentPlane(d,C),h=l.plane,x=u.longitude,M=a.south<0&&0<a.north?0:u.latitude,m=e.Cartographic.fromRadians(x,a.north,n,y),f=e.Cartographic.fromRadians(a.west,a.north,n,O),p=e.Cartographic.fromRadians(a.west,M,n,P),G=e.Cartographic.fromRadians(a.west,a.south,n,N),F=e.Cartographic.fromRadians(x,a.south,n,A),Y=C.cartographicToCartesian(m,T),H=C.cartographicToCartesian(f,R),J=C.cartographicToCartesian(p,I);return d=C.cartographicToCartesian(G,E),u=C.cartographicToCartesian(F,L),M=l.projectPointToNearestOnPlane(Y,z),x=l.projectPointToNearestOnPlane(H,S),m=l.projectPointToNearestOnPlane(J,U),p=l.projectPointToNearestOnPlane(d,V),F=l.projectPointToNearestOnPlane(u,v),J=-(Y=Math.min(x.x,m.x,p.x)),u=Math.max(x.y,M.y),m=Math.min(p.y,F.y),f.height=G.height=t,H=C.cartographicToCartesian(f,R),d=C.cartographicToCartesian(G,E),x=Math.min(o.Plane.getPointDistance(h,H),o.Plane.getPointDistance(h,d)),g(l.origin,l.xAxis,l.yAxis,l.zAxis,Y,J,m,u,x,n,c)}return M=0<a.south,p=a.north<0,F=M?a.south:p?a.north:0,f=e.Rectangle.center(a,w).longitude,(G=e.Cartesian3.fromRadians(f,F,n,C,B)).z=0,H=Math.abs(G.x)<s.CesiumMath.EPSILON10&&Math.abs(G.y)<s.CesiumMath.EPSILON10?e.Cartesian3.UNIT_X:e.Cartesian3.normalize(G,_),d=e.Cartesian3.UNIT_Z,l=e.Cartesian3.cross(H,d,k),h=o.Plane.fromPointNormal(G,H,Z),f=e.Cartesian3.fromRadians(f+s.CesiumMath.PI_OVER_TWO,F,n,C,W),Y=-(J=e.Cartesian3.dot(o.Plane.projectPointOntoPlane(h,f,D),l)),u=e.Cartesian3.fromRadians(0,a.north,p?t:n,C,q).z,m=e.Cartesian3.fromRadians(0,a.south,M?t:n,C,X).z,C=e.Cartesian3.fromRadians(a.east,F,n,C,j),g(G,l,d,H,Y,J,m,u,x=o.Plane.getPointDistance(h,C),0,c)},C.clone=function(a,n){if(r.defined(a))return r.defined(n)?(e.Cartesian3.clone(a.center,n.center),t.Matrix3.clone(a.halfAxes,n.halfAxes),n):new C(a.center,a.halfAxes)},C.intersectPlane=function(a,n){var r=a.center,i=n.normal,s=a.halfAxes,o=i.x,C=i.y;return a=i.z,s=Math.abs(o*s[t.Matrix3.COLUMN0ROW0]+C*s[t.Matrix3.COLUMN0ROW1]+a*s[t.Matrix3.COLUMN0ROW2])+Math.abs(o*s[t.Matrix3.COLUMN1ROW0]+C*s[t.Matrix3.COLUMN1ROW1]+a*s[t.Matrix3.COLUMN1ROW2])+Math.abs(o*s[t.Matrix3.COLUMN2ROW0]+C*s[t.Matrix3.COLUMN2ROW1]+a*s[t.Matrix3.COLUMN2ROW2]),(n=e.Cartesian3.dot(i,r)+n.distance)<=-s?t.Intersect.OUTSIDE:s<=n?t.Intersect.INSIDE:t.Intersect.INTERSECTING};var G=new e.Cartesian3,F=new e.Cartesian3,Y=new e.Cartesian3,H=new e.Cartesian3;C.distanceSquaredTo=function(a,n){var r,i=e.Cartesian3.subtract(n,a.center,f),s=a.halfAxes,o=t.Matrix3.getColumn(s,0,G),C=t.Matrix3.getColumn(s,1,F),c=t.Matrix3.getColumn(s,2,Y),u=e.Cartesian3.magnitude(o);return n=e.Cartesian3.magnitude(C),a=e.Cartesian3.magnitude(c),e.Cartesian3.normalize(o,o),e.Cartesian3.normalize(C,C),e.Cartesian3.normalize(c,c),(s=H).x=e.Cartesian3.dot(i,o),s.y=e.Cartesian3.dot(i,C),s.z=e.Cartesian3.dot(i,c),c=0,s.x<-u?c+=(r=s.x+u)*r:s.x>u&&(c+=(r=s.x-u)*r),s.y<-n?c+=(r=s.y+n)*r:s.y>n&&(c+=(r=s.y-n)*r),s.z<-a?c+=(r=s.z+a)*r:s.z>a&&(c+=(r=s.z-a)*r),c};var J=new e.Cartesian3,K=new e.Cartesian3;C.computePlaneDistances=function(a,n,i,s){r.defined(s)||(s=new t.Interval);var o=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,c=a.center,u=a.halfAxes,d=t.Matrix3.getColumn(u,0,G),l=t.Matrix3.getColumn(u,1,F),h=t.Matrix3.getColumn(u,2,Y),x=e.Cartesian3.add(d,l,J);return e.Cartesian3.add(x,h,x),e.Cartesian3.add(x,c,x),a=e.Cartesian3.subtract(x,n,K),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.add(c,d,x),e.Cartesian3.add(x,l,x),e.Cartesian3.subtract(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.add(c,d,x),e.Cartesian3.subtract(x,l,x),e.Cartesian3.add(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.add(c,d,x),e.Cartesian3.subtract(x,l,x),e.Cartesian3.subtract(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.subtract(c,d,x),e.Cartesian3.add(x,l,x),e.Cartesian3.add(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.subtract(c,d,x),e.Cartesian3.add(x,l,x),e.Cartesian3.subtract(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.subtract(c,d,x),e.Cartesian3.subtract(x,l,x),e.Cartesian3.add(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),e.Cartesian3.subtract(c,d,x),e.Cartesian3.subtract(x,l,x),e.Cartesian3.subtract(x,h,x),e.Cartesian3.subtract(x,n,a),u=e.Cartesian3.dot(i,a),o=Math.min(u,o),C=Math.max(u,C),s.start=o,s.stop=C,s};var Q=new t.BoundingSphere;C.isOccluded=function(a,e){return a=t.BoundingSphere.fromOrientedBoundingBox(a,Q),!e.isBoundingSphereVisible(a)},C.prototype.intersectPlane=function(a){return C.intersectPlane(this,a)},C.prototype.distanceSquaredTo=function(a){return C.distanceSquaredTo(this,a)},C.prototype.computePlaneDistances=function(a,t,e){return C.computePlaneDistances(this,a,t,e)},C.prototype.isOccluded=function(a){return C.isOccluded(this,a)},C.equals=function(a,n){return a===n||r.defined(a)&&r.defined(n)&&e.Cartesian3.equals(a.center,n.center)&&t.Matrix3.equals(a.halfAxes,n.halfAxes)},C.prototype.clone=function(a){return C.clone(this,a)},C.prototype.equals=function(a){return C.equals(this,a)},a.OrientedBoundingBox=C}));