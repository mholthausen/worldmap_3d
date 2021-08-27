define(["exports","./Cartesian2-08065eec","./Transforms-1142ce48","./EllipsoidTangentPlane-f8b1fc8b","./Math-5ca9b250","./PolylinePipeline-05927ee2","./when-ad3237a0","./Check-be2d5acb"],(function(e,a,r,n,t,i,s,o){"use strict";var l=Object.freeze({ROUNDED:0,MITERED:1,BEVELED:2}),C={};function c(e,a){s.defined(C[e])||(C[e]=!0,console.warn(s.defaultValue(a,e)))}c.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",c.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",c.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",c.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored";var u=[new a.Cartesian3,new a.Cartesian3],d=new a.Cartesian3,g=new a.Cartesian3,y=new a.Cartesian3,h=new a.Cartesian3,m=new a.Cartesian3,f=new a.Cartesian3,p=new a.Cartesian3,w=new a.Cartesian3,x=new a.Cartesian3,v=new a.Cartesian3,E=new a.Cartesian3,P={},b=new a.Cartographic;function M(e,r,n,t){var i=e[0],s=(e=e[1],e=a.Cartesian3.angleBetween(i,e),Math.ceil(e/t)),o=new Array(s);if(r===n){for(C=0;C<s;C++)o[C]=r;return o.push(n),o}for(var l=(n-r)/s,C=1;C<s;C++)o[C]=r+C*l;return o[0]=r,o.push(n),o}var T=new a.Cartesian3,B=new a.Cartesian3,z=new a.Cartesian3(-1,0,0),S=new r.Matrix4,A=new r.Matrix4,D=new r.Matrix3,R=r.Matrix3.IDENTITY.clone(),O=new a.Cartesian3,I=new r.Cartesian4,V=new a.Cartesian3;function N(e,t,i,s,o,l,C,c){var u=O,d=I;S=r.Transforms.eastNorthUpToFixedFrame(e,o,S),u=r.Matrix4.multiplyByPointAsVector(S,z,u),u=u=a.Cartesian3.normalize(u,u),t=t,e=e,o=o,u=(o=new n.EllipsoidTangentPlane(e,o)).projectPointOntoPlane(a.Cartesian3.add(e,u,T),T),e=o.projectPointOntoPlane(a.Cartesian3.add(e,t,B),B),t=a.Cartesian2.angleBetween(u,e),t=0<=e.x*u.y-e.y*u.x?-t:t,D=r.Matrix3.fromRotationZ(t,D),V.z=l,S=r.Matrix4.multiplyTransformation(S,r.Matrix4.fromRotationTranslation(D,V,A),S);var g=R;g[0]=C;for(var y=0;y<c;y++)for(var h=0;h<i.length;h+=3)d=a.Cartesian3.fromArray(i,h,d),d=r.Matrix3.multiplyByVector(g,d,d),d=r.Matrix4.multiplyByPoint(S,d,d),s.push(d.x,d.y,d.z);return s}var G=new a.Cartesian3;function H(e,r,n,t,i,s,o){for(var l=0;l<e.length;l+=3)t=N(a.Cartesian3.fromArray(e,l,G),r,n,t,i,s[l/3],o,1);return t}function L(e,a){for(var r=e.length,n=new Array(3*r),t=0,i=a.x+a.width/2,s=a.y+a.height/2,o=0;o<r;o++)n[t++]=e[o].x-i,n[t++]=0,n[t++]=e[o].y-s;return n}var j=new r.Quaternion,Q=new a.Cartesian3,q=new r.Matrix3;function F(e,n,i,s,o,C,c,u,d,g){var y,h=a.Cartesian3.angleBetween(a.Cartesian3.subtract(n,e,v),a.Cartesian3.subtract(i,e,E)),m=s===l.BEVELED?0:Math.ceil(h/t.CesiumMath.toRadians(5)),f=o?r.Matrix3.fromQuaternion(r.Quaternion.fromAxisAngle(a.Cartesian3.negate(e,v),h/(m+1),j),q):r.Matrix3.fromQuaternion(r.Quaternion.fromAxisAngle(e,h/(m+1),j),q);if(n=a.Cartesian3.clone(n,Q),0<m)for(var p=g?2:1,w=0;w<m;w++)n=r.Matrix3.multiplyByVector(f,n,n),y=a.Cartesian3.subtract(n,e,v),y=a.Cartesian3.normalize(y,y),o||(y=a.Cartesian3.negate(y,y)),c=N(C.scaleToGeodeticSurface(n,E),y,u,c,C,d,1,p);else y=a.Cartesian3.subtract(n,e,v),y=a.Cartesian3.normalize(y,y),o||(y=a.Cartesian3.negate(y,y)),c=N(C.scaleToGeodeticSurface(n,E),y,u,c,C,d,1,1),i=a.Cartesian3.clone(i,Q),y=a.Cartesian3.subtract(i,e,v),y=a.Cartesian3.normalize(y,y),o||(y=a.Cartesian3.negate(y,y)),c=N(C.scaleToGeodeticSurface(i,E),y,u,c,C,d,1,1);return c}P.removeDuplicatesFromShape=function(e){for(var r=e.length,n=[],t=r-1,i=0;i<r;t=i++){var s=e[t],o=e[i];a.Cartesian2.equals(s,o)||n.push(o)}return n},P.angleIsGreaterThanPi=function(e,r,t,i){return e=(i=new n.EllipsoidTangentPlane(t,i)).projectPointOntoPlane(a.Cartesian3.add(t,e,T),T),0<=(r=i.projectPointOntoPlane(a.Cartesian3.add(t,r,B),B)).x*e.y-r.y*e.x};var U=new a.Cartesian3,_=new a.Cartesian3;P.computePositions=function(e,r,n,s,o){var C=s._ellipsoid,E=function(e,a){for(var r=new Array(e.length),n=0;n<e.length;n++){var t=e[n];b=a.cartesianToCartographic(t,b),r[n]=b.height,e[n]=a.scaleToGeodeticSurface(t,t)}return r}(e,C),T=s._granularity,B=s._cornerType,z=(o?function(e,a){var r=e.length,n=new Array(6*r),t=0,i=a.x+a.width/2,s=a.y+a.height/2,o=e[0];n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s;for(var l=1;l<r;l++){var C=(o=e[l]).x-i,c=o.y-s;n[t++]=C,n[t++]=0,n[t++]=c,n[t++]=C,n[t++]=0,n[t++]=c}return o=e[0],n[t++]=o.x-i,n[t++]=0,n[t++]=o.y-s,n}:L)(r,n),S=(r=o?L(r,n):void 0,n.height/2),A=n.width/2,D=e.length,R=[],O=(n=o?[]:void 0,d),I=g,V=y,G=h,j=m,Q=f,q=p,Z=w,k=x,W=e[0],Y=e[1];G=C.geodeticSurfaceNormal(W,G),O=a.Cartesian3.subtract(Y,W,O),O=a.Cartesian3.normalize(O,O),Z=a.Cartesian3.cross(G,O,Z),Z=a.Cartesian3.normalize(Z,Z);var J,K=E[0],X=E[1];o&&(n=N(W,Z,r,n,C,K+S,1,1)),k=a.Cartesian3.clone(W,k),W=Y,I=a.Cartesian3.negate(O,I);for(var $=1;$<D-1;$++){var ee,ae,re=o?2:1;Y=e[$+1],W.equals(Y)?c("Positions are too close and are considered equivalent with rounding error."):(O=a.Cartesian3.subtract(Y,W,O),O=a.Cartesian3.normalize(O,O),V=a.Cartesian3.add(O,I,V),V=a.Cartesian3.normalize(V,V),G=C.geodeticSurfaceNormal(W,G),ee=a.Cartesian3.multiplyByScalar(G,a.Cartesian3.dot(O,G),U),a.Cartesian3.subtract(O,ee,ee),a.Cartesian3.normalize(ee,ee),ae=a.Cartesian3.multiplyByScalar(G,a.Cartesian3.dot(I,G),_),a.Cartesian3.subtract(I,ae,ae),a.Cartesian3.normalize(ae,ae),t.CesiumMath.equalsEpsilon(Math.abs(a.Cartesian3.dot(ee,ae)),1,t.CesiumMath.EPSILON7)?(R=N(k,Z,z,R,C,K+S,1,1),k=W):(V=a.Cartesian3.cross(V,G,V),V=a.Cartesian3.cross(G,V,V),V=a.Cartesian3.normalize(V,V),ee=1/Math.max(.25,a.Cartesian3.magnitude(a.Cartesian3.cross(V,I,v))),(ae=P.angleIsGreaterThanPi(O,I,W,C))?(j=a.Cartesian3.add(W,a.Cartesian3.multiplyByScalar(V,ee*A,V),j),Q=a.Cartesian3.add(j,a.Cartesian3.multiplyByScalar(Z,A,Q),Q),u[0]=a.Cartesian3.clone(k,u[0]),u[1]=a.Cartesian3.clone(Q,u[1]),J=M(u,K+S,X+S,T),R=H(i.PolylinePipeline.generateArc({positions:u,granularity:T,ellipsoid:C}),Z,z,R,C,J,1),Z=a.Cartesian3.cross(G,O,Z),Z=a.Cartesian3.normalize(Z,Z),q=a.Cartesian3.add(j,a.Cartesian3.multiplyByScalar(Z,A,q),q),B===l.ROUNDED||B===l.BEVELED?F(j,Q,q,B,ae,C,R,z,X+S,o):R=N(W,V=a.Cartesian3.negate(V,V),z,R,C,X+S,ee,re)):(j=a.Cartesian3.add(W,a.Cartesian3.multiplyByScalar(V,ee*A,V),j),Q=a.Cartesian3.add(j,a.Cartesian3.multiplyByScalar(Z,-A,Q),Q),u[0]=a.Cartesian3.clone(k,u[0]),u[1]=a.Cartesian3.clone(Q,u[1]),J=M(u,K+S,X+S,T),R=H(i.PolylinePipeline.generateArc({positions:u,granularity:T,ellipsoid:C}),Z,z,R,C,J,1),Z=a.Cartesian3.cross(G,O,Z),Z=a.Cartesian3.normalize(Z,Z),q=a.Cartesian3.add(j,a.Cartesian3.multiplyByScalar(Z,-A,q),q),B===l.ROUNDED||B===l.BEVELED?F(j,Q,q,B,ae,C,R,z,X+S,o):R=N(W,V,z,R,C,X+S,ee,re)),k=a.Cartesian3.clone(q,k),I=a.Cartesian3.negate(O,I)),K=X,X=E[$+1],W=Y)}return u[0]=a.Cartesian3.clone(k,u[0]),u[1]=a.Cartesian3.clone(W,u[1]),J=M(u,K+S,X+S,T),R=H(i.PolylinePipeline.generateArc({positions:u,granularity:T,ellipsoid:C}),Z,z,R,C,J,1),o&&(n=N(W,Z,r,n,C,X+S,1,1)),D=R.length,r=o?D+n.length:D,(r=new Float64Array(r)).set(R),o&&r.set(n,D),r},e.CornerType=l,e.PolylineVolumeGeometryLibrary=P,e.oneTimeWarning=c}));