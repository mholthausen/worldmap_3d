define(["exports","./Cartesian2-08065eec","./when-ad3237a0","./Check-be2d5acb","./Math-5ca9b250"],(function(e,t,i,a,o){"use strict";function r(e){this._ellipsoid=i.defaultValue(e,t.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(r.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),r.mercatorAngleToGeodeticLatitude=function(e){return o.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},r.geodeticLatitudeToMercatorAngle=function(e){return r.MaximumLatitude<e?e=r.MaximumLatitude:e<-r.MaximumLatitude&&(e=-r.MaximumLatitude),e=Math.sin(e),.5*Math.log((1+e)/(1-e))},r.MaximumLatitude=r.mercatorAngleToGeodeticLatitude(Math.PI),r.prototype.project=function(e,a){var o=this._semimajorAxis,n=e.longitude*o;return o=r.geodeticLatitudeToMercatorAngle(e.latitude)*o,e=e.height,i.defined(a)?(a.x=n,a.y=o,a.z=e,a):new t.Cartesian3(n,o,e)},r.prototype.unproject=function(e,a){var o=this._oneOverSemimajorAxis,n=e.x*o;return o=r.mercatorAngleToGeodeticLatitude(e.y*o),e=e.z,i.defined(a)?(a.longitude=n,a.latitude=o,a.height=e,a):new t.Cartographic(n,o,e)},e.WebMercatorProjection=r}));