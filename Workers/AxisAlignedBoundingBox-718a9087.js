define(["exports","./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0","./Transforms-1142ce48"],(function(e,n,a,i,t){"use strict";function m(e,a,t){this.minimum=n.Cartesian3.clone(i.defaultValue(e,n.Cartesian3.ZERO)),this.maximum=n.Cartesian3.clone(i.defaultValue(a,n.Cartesian3.ZERO)),t=i.defined(t)?n.Cartesian3.clone(t):n.Cartesian3.midpoint(this.minimum,this.maximum,new n.Cartesian3),this.center=t}m.fromPoints=function(e,a){if(i.defined(a)||(a=new m),!i.defined(e)||0===e.length)return a.minimum=n.Cartesian3.clone(n.Cartesian3.ZERO,a.minimum),a.maximum=n.Cartesian3.clone(n.Cartesian3.ZERO,a.maximum),a.center=n.Cartesian3.clone(n.Cartesian3.ZERO,a.center),a;for(var t=e[0].x,r=e[0].y,s=e[0].z,u=e[0].x,c=e[0].y,o=e[0].z,l=e.length,C=1;C<l;C++){var d=(f=e[C]).x,x=f.y,f=f.z;t=Math.min(d,t),u=Math.max(d,u),r=Math.min(x,r),c=Math.max(x,c),s=Math.min(f,s),o=Math.max(f,o)}var h=a.minimum;h.x=t,h.y=r,h.z=s;var y=a.maximum;return y.x=u,y.y=c,y.z=o,a.center=n.Cartesian3.midpoint(h,y,a.center),a},m.clone=function(e,a){if(i.defined(e))return i.defined(a)?(a.minimum=n.Cartesian3.clone(e.minimum,a.minimum),a.maximum=n.Cartesian3.clone(e.maximum,a.maximum),a.center=n.Cartesian3.clone(e.center,a.center),a):new m(e.minimum,e.maximum,e.center)},m.equals=function(e,a){return e===a||i.defined(e)&&i.defined(a)&&n.Cartesian3.equals(e.center,a.center)&&n.Cartesian3.equals(e.minimum,a.minimum)&&n.Cartesian3.equals(e.maximum,a.maximum)};var r=new n.Cartesian3;m.intersectPlane=function(e,a){r=n.Cartesian3.subtract(e.maximum,e.minimum,r);var i=n.Cartesian3.multiplyByScalar(r,.5,r),m=a.normal;return i=i.x*Math.abs(m.x)+i.y*Math.abs(m.y)+i.z*Math.abs(m.z),0<(a=n.Cartesian3.dot(e.center,m)+a.distance)-i?t.Intersect.INSIDE:a+i<0?t.Intersect.OUTSIDE:t.Intersect.INTERSECTING},m.prototype.clone=function(e){return m.clone(this,e)},m.prototype.intersectPlane=function(e){return m.intersectPlane(this,e)},m.prototype.equals=function(e){return m.equals(this,e)},e.AxisAlignedBoundingBox=m}));