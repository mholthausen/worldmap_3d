define(["exports","./Matrix2-860854d4","./RuntimeError-1349fdaf","./when-4bbc8319","./ComponentDatatype-8f55628c"],(function(t,i,e,a,n){"use strict";function s(t,i,e){if(0===t)return i*e;const a=t*t,n=a*a,s=n*a,h=s*a,u=h*a,o=u*a,r=e;return i*((1-a/4-3*n/64-5*s/256-175*h/16384-441*u/65536-4851*o/1048576)*r-(3*a/8+3*n/32+45*s/1024+105*h/4096+2205*u/131072+6237*o/524288)*Math.sin(2*r)+(15*n/256+45*s/1024+525*h/16384+1575*u/65536+155925*o/8388608)*Math.sin(4*r)-(35*s/3072+175*h/12288+3675*u/262144+13475*o/1048576)*Math.sin(6*r)+(315*h/131072+2205*u/524288+43659*o/8388608)*Math.sin(8*r)-(693*u/1310720+6237*o/5242880)*Math.sin(10*r)+1001*o/8388608*Math.sin(12*r))}function h(t,i){if(0===t)return Math.log(Math.tan(.5*(n.CesiumMath.PI_OVER_TWO+i)));const e=t*Math.sin(i);return Math.log(Math.tan(.5*(n.CesiumMath.PI_OVER_TWO+i)))-t/2*Math.log((1+e)/(1-e))}const u=new i.Cartesian3,o=new i.Cartesian3;function r(t,e,a,r){i.Cartesian3.normalize(r.cartographicToCartesian(e,o),u),i.Cartesian3.normalize(r.cartographicToCartesian(a,o),o);const l=r.maximumRadius,d=r.minimumRadius,c=l*l,M=d*d;t._ellipticitySquared=(c-M)/c,t._ellipticity=Math.sqrt(t._ellipticitySquared),t._start=i.Cartographic.clone(e,t._start),t._start.height=0,t._end=i.Cartographic.clone(a,t._end),t._end.height=0,t._heading=function(t,i,e,a,s){const u=h(t._ellipticity,e),o=h(t._ellipticity,s);return Math.atan2(n.CesiumMath.negativePiToPi(a-i),o-u)}(t,e.longitude,e.latitude,a.longitude,a.latitude),t._distance=function(t,i,e,a,h,u,o){const r=t._heading,l=u-a;let d=0;if(n.CesiumMath.equalsEpsilon(Math.abs(r),n.CesiumMath.PI_OVER_TWO,n.CesiumMath.EPSILON8))if(i===e)d=i*Math.cos(h)*n.CesiumMath.negativePiToPi(l);else{const e=Math.sin(h);d=i*Math.cos(h)*n.CesiumMath.negativePiToPi(l)/Math.sqrt(1-t._ellipticitySquared*e*e)}else{const e=s(t._ellipticity,i,h);d=(s(t._ellipticity,i,o)-e)/Math.cos(r)}return Math.abs(d)}(t,r.maximumRadius,r.minimumRadius,e.longitude,e.latitude,a.longitude,a.latitude)}function l(t,e,u,o,r,l){if(0===u)return i.Cartographic.clone(t,l);const d=r*r;let c,M,m;if(Math.abs(n.CesiumMath.PI_OVER_TWO-Math.abs(e))>n.CesiumMath.EPSILON8){M=function(t,i,e){const a=t/e;if(0===i)return a;const n=a*a,s=n*a,h=s*a,u=i*i,o=u*u,r=o*u,l=r*u,d=l*u,c=d*u,M=Math.sin(2*a),m=Math.cos(2*a),g=Math.sin(4*a),_=Math.cos(4*a),p=Math.sin(6*a),f=Math.cos(6*a),C=Math.sin(8*a),P=Math.cos(8*a),O=Math.sin(10*a);return a+a*u/4+7*a*o/64+15*a*r/256+579*a*l/16384+1515*a*d/65536+16837*a*c/1048576+(3*a*o/16+45*a*r/256-a*(32*n-561)*l/4096-a*(232*n-1677)*d/16384+a*(399985-90560*n+512*h)*c/5242880)*m+(21*a*r/256+483*a*l/4096-a*(224*n-1969)*d/16384-a*(33152*n-112599)*c/1048576)*_+(151*a*l/4096+4681*a*d/65536+1479*a*c/16384-453*s*c/32768)*f+(1097*a*d/65536+42783*a*c/1048576)*P+8011*a*c/1048576*Math.cos(10*a)+(3*u/8+3*o/16+213*r/2048-3*n*r/64+255*l/4096-33*n*l/512+20861*d/524288-33*n*d/512+h*d/1024+28273*c/1048576-471*n*c/8192+9*h*c/4096)*M+(21*o/256+21*r/256+533*l/8192-21*n*l/512+197*d/4096-315*n*d/4096+584039*c/16777216-12517*n*c/131072+7*h*c/2048)*g+(151*r/6144+151*l/4096+5019*d/131072-453*n*d/16384+26965*c/786432-8607*n*c/131072)*p+(1097*l/131072+1097*d/65536+225797*c/10485760-1097*n*c/65536)*C+(8011*d/2621440+8011*c/1048576)*O+293393*c/251658240*Math.sin(12*a)}(s(r,o,t.latitude)+u*Math.cos(e),r,o);const i=h(r,t.latitude),a=h(r,M);m=Math.tan(e)*(a-i),c=n.CesiumMath.negativePiToPi(t.longitude+m)}else{let i;if(M=t.latitude,0===r)i=o*Math.cos(t.latitude);else{const e=Math.sin(t.latitude);i=o*Math.cos(t.latitude)/Math.sqrt(1-d*e*e)}m=u/i,c=e>0?n.CesiumMath.negativePiToPi(t.longitude+m):n.CesiumMath.negativePiToPi(t.longitude-m)}return a.defined(l)?(l.longitude=c,l.latitude=M,l.height=0,l):new i.Cartographic(c,M,0)}function d(t,e,n){const s=a.defaultValue(n,i.Ellipsoid.WGS84);this._ellipsoid=s,this._start=new i.Cartographic,this._end=new i.Cartographic,this._heading=void 0,this._distance=void 0,this._ellipticity=void 0,this._ellipticitySquared=void 0,a.defined(t)&&a.defined(e)&&r(this,t,e,s)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},heading:{get:function(){return this._heading}}}),d.fromStartHeadingDistance=function(t,e,s,h,u){const o=a.defaultValue(h,i.Ellipsoid.WGS84),r=o.maximumRadius,c=o.minimumRadius,M=r*r,m=c*c,g=Math.sqrt((M-m)/M),_=l(t,e=n.CesiumMath.negativePiToPi(e),s,o.maximumRadius,g);return!a.defined(u)||a.defined(h)&&!h.equals(u.ellipsoid)?new d(t,_,o):(u.setEndPoints(t,_),u)},d.prototype.setEndPoints=function(t,i){r(this,t,i,this._ellipsoid)},d.prototype.interpolateUsingFraction=function(t,i){return this.interpolateUsingSurfaceDistance(t*this._distance,i)},d.prototype.interpolateUsingSurfaceDistance=function(t,i){return l(this._start,this._heading,t,this._ellipsoid.maximumRadius,this._ellipticity,i)},d.prototype.findIntersectionWithLongitude=function(t,e){const s=this._ellipticity,h=this._heading,u=Math.abs(h),o=this._start;if(t=n.CesiumMath.negativePiToPi(t),n.CesiumMath.equalsEpsilon(Math.abs(t),Math.PI,n.CesiumMath.EPSILON14)&&(t=n.CesiumMath.sign(o.longitude)*Math.PI),a.defined(e)||(e=new i.Cartographic),Math.abs(n.CesiumMath.PI_OVER_TWO-u)<=n.CesiumMath.EPSILON8)return e.longitude=t,e.latitude=o.latitude,e.height=0,e;if(n.CesiumMath.equalsEpsilon(Math.abs(n.CesiumMath.PI_OVER_TWO-u),n.CesiumMath.PI_OVER_TWO,n.CesiumMath.EPSILON8)){if(n.CesiumMath.equalsEpsilon(t,o.longitude,n.CesiumMath.EPSILON12))return;return e.longitude=t,e.latitude=n.CesiumMath.PI_OVER_TWO*n.CesiumMath.sign(n.CesiumMath.PI_OVER_TWO-h),e.height=0,e}const r=o.latitude,l=s*Math.sin(r),d=Math.tan(.5*(n.CesiumMath.PI_OVER_TWO+r))*Math.exp((t-o.longitude)/Math.tan(h)),c=(1+l)/(1-l);let M,m=o.latitude;do{M=m;const t=s*Math.sin(M),i=(1+t)/(1-t);m=2*Math.atan(d*Math.pow(i/c,s/2))-n.CesiumMath.PI_OVER_TWO}while(!n.CesiumMath.equalsEpsilon(m,M,n.CesiumMath.EPSILON12));return e.longitude=t,e.latitude=m,e.height=0,e},d.prototype.findIntersectionWithLatitude=function(t,e){const s=this._ellipticity,u=this._heading,o=this._start;if(n.CesiumMath.equalsEpsilon(Math.abs(u),n.CesiumMath.PI_OVER_TWO,n.CesiumMath.EPSILON8))return;const r=h(s,o.latitude),l=h(s,t),d=Math.tan(u)*(l-r),c=n.CesiumMath.negativePiToPi(o.longitude+d);return a.defined(e)?(e.longitude=c,e.latitude=t,e.height=0,e):new i.Cartographic(c,t,0)},t.EllipsoidRhumbLine=d}));