define(["./when-ad3237a0","./PrimitivePipeline-3d68cec1","./createTaskProcessorWorker","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryPipeline-3334f964","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c","./IndexDatatype-9504f550","./IntersectionTests-75083888","./Plane-bb88dd7e","./WebMercatorProjection-2bca7e98"],(function(e,r,t,n,a,o,i,c,s,d,u,b,f,m,p,l,y,P,k,C){"use strict";var v={};return t((function(t,n){for(var a=t.subTasks,o=a.length,i=new Array(o),c=0;c<o;c++){var s=a[c],d=s.geometry,u=s.moduleName;e.defined(u)?(u=function(r){var t=v[r];return e.defined(t)||("object"==typeof exports?v[t]=t=require("Workers/"+r):require(["Workers/"+r],(function(e){v[t=e]=e}))),t}(u),i[c]=u(d,s.offset)):i[c]=d}return e.when.all(i,(function(e){return r.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));