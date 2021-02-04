define(["exports","./GeometryOffsetAttribute-d889f085","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./ComponentDatatype-6d99a1ee","./when-54c2dc71","./Check-6c0211bc","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./IndexDatatype-46306178","./Math-44e92d6b","./VertexFormat-7572c785"],(function(t,e,a,i,r,n,o,m,s,u,l,c){"use strict";var f=new i.Cartesian3,d=new i.Cartesian3,C=new i.Cartesian3,p=new i.Cartesian3,y=new i.Cartesian3,_=new i.Cartesian3(1,1,1),h=Math.cos,v=Math.sin;function A(t){t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT);var e=n.defaultValue(t.radii,_),a=n.defaultValue(t.innerRadii,e),r=n.defaultValue(t.minimumClock,0),o=n.defaultValue(t.maximumClock,l.CesiumMath.TWO_PI),m=n.defaultValue(t.minimumCone,0),s=n.defaultValue(t.maximumCone,l.CesiumMath.PI),u=Math.round(n.defaultValue(t.stackPartitions,64)),f=Math.round(n.defaultValue(t.slicePartitions,64)),d=n.defaultValue(t.vertexFormat,c.VertexFormat.DEFAULT);this._radii=i.Cartesian3.clone(e),this._innerRadii=i.Cartesian3.clone(a),this._minimumClock=r,this._maximumClock=o,this._minimumCone=m,this._maximumCone=s,this._stackPartitions=u,this._slicePartitions=f,this._vertexFormat=c.VertexFormat.clone(d),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}A.packedLength=2*i.Cartesian3.packedLength+c.VertexFormat.packedLength+7,A.pack=function(t,e,a){return a=n.defaultValue(a,0),i.Cartesian3.pack(t._radii,e,a),a+=i.Cartesian3.packedLength,i.Cartesian3.pack(t._innerRadii,e,a),a+=i.Cartesian3.packedLength,c.VertexFormat.pack(t._vertexFormat,e,a),a+=c.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=n.defaultValue(t._offsetAttribute,-1),e};var x,b=new i.Cartesian3,k=new i.Cartesian3,w=new c.VertexFormat,F={radii:b,innerRadii:k,vertexFormat:w,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};A.unpack=function(t,e,a){e=n.defaultValue(e,0);var r=i.Cartesian3.unpack(t,e,b);e+=i.Cartesian3.packedLength;var o=i.Cartesian3.unpack(t,e,k);e+=i.Cartesian3.packedLength;var m=c.VertexFormat.unpack(t,e,w);e+=c.VertexFormat.packedLength;var s=t[e++],u=t[e++],l=t[e++],f=t[e++],d=t[e++],C=t[e++];return e=t[e],n.defined(a)?(a._radii=i.Cartesian3.clone(r,a._radii),a._innerRadii=i.Cartesian3.clone(o,a._innerRadii),a._vertexFormat=c.VertexFormat.clone(m,a._vertexFormat),a._minimumClock=s,a._maximumClock=u,a._minimumCone=l,a._maximumCone=f,a._stackPartitions=d,a._slicePartitions=C,a._offsetAttribute=-1===e?void 0:e,a):(F.minimumClock=s,F.maximumClock=u,F.minimumCone=l,F.maximumCone=f,F.stackPartitions=d,F.slicePartitions=C,F.offsetAttribute=-1===e?void 0:e,new A(F))},A.createGeometry=function(t){var o=t._radii;if(!(o.x<=0||o.y<=0||o.z<=0)){var c=t._innerRadii;if(!(c.x<=0||c.y<=0||c.z<=0)){var _=t._minimumClock,A=t._maximumClock,x=t._minimumCone,b=t._maximumCone,k=t._vertexFormat,w=t._slicePartitions+1,F=t._stackPartitions+1;(w=Math.round(w*Math.abs(A-_)/l.CesiumMath.TWO_PI))<2&&(w=2),(F=Math.round(F*Math.abs(b-x)/l.CesiumMath.PI))<2&&(F=2);var P=0,g=[x],V=[_];for(rt=0;rt<F;rt++)g.push(x+rt*(b-x)/(F-1));for(g.push(b),K=0;K<w;K++)V.push(_+K*(A-_)/(w-1));V.push(A);var M=g.length,T=V.length,D=0,G=1,L=c.x!==o.x||c.y!==o.y||c.z!==o.z,O=!1,I=!1,E=!1;L&&(G=2,0<x&&(O=!0,D+=w-1),b<Math.PI&&(I=!0,D+=w-1),(A-_)%l.CesiumMath.TWO_PI?(E=!0,D+=2*(F-1)+1):D+=1);var z=T*M*G,N=new Float64Array(3*z),R=e.arrayFill(new Array(z),!1),U=e.arrayFill(new Array(z),!1),S=w*F*G,B=(D=6*(S+D+1-(w+F)*G),u.IndexDatatype.createTypedArray(S,D)),W=k.normal?new Float32Array(3*z):void 0,Y=k.tangent?new Float32Array(3*z):void 0,J=k.bitangent?new Float32Array(3*z):void 0,X=k.st?new Float32Array(2*z):void 0,Z=new Array(M),j=new Array(M);for(rt=0;rt<M;rt++)Z[rt]=v(g[rt]),j[rt]=h(g[rt]);for(var q=new Array(T),H=new Array(T),K=0;K<T;K++)H[K]=h(V[K]),q[K]=v(V[K]);for(rt=0;rt<M;rt++)for(K=0;K<T;K++)N[P++]=o.x*Z[rt]*H[K],N[P++]=o.y*Z[rt]*q[K],N[P++]=o.z*j[rt];var Q,$,tt,et,at=z/2;if(L)for(rt=0;rt<M;rt++)for(K=0;K<T;K++)N[P++]=c.x*Z[rt]*H[K],N[P++]=c.y*Z[rt]*q[K],N[P++]=c.z*j[rt],R[at]=!0,0<rt&&rt!==M-1&&0!==K&&K!==T-1&&(U[at]=!0),at++;for(P=0,rt=1;rt<M-2;rt++)for(Q=rt*T,$=(rt+1)*T,K=1;K<T-2;K++)B[P++]=$+K,B[P++]=$+K+1,B[P++]=Q+K+1,B[P++]=$+K,B[P++]=Q+K+1,B[P++]=Q+K;if(L)for(var it=M*T,rt=1;rt<M-2;rt++)for(Q=it+rt*T,$=it+(rt+1)*T,K=1;K<T-2;K++)B[P++]=$+K,B[P++]=Q+K,B[P++]=Q+K+1,B[P++]=$+K,B[P++]=Q+K+1,B[P++]=$+K+1;if(L){if(O)for(et=M*T,rt=1;rt<T-2;rt++)B[P++]=rt,B[P++]=rt+1,B[P++]=et+rt+1,B[P++]=rt,B[P++]=et+rt+1,B[P++]=et+rt;if(I)for(tt=M*T-T,et=M*T*G-T,rt=1;rt<T-2;rt++)B[P++]=tt+rt+1,B[P++]=tt+rt,B[P++]=et+rt,B[P++]=tt+rt+1,B[P++]=et+rt,B[P++]=et+rt+1}if(E){for(rt=1;rt<M-2;rt++)et=T*M+T*rt,tt=T*rt,B[P++]=et,B[P++]=tt+T,B[P++]=tt,B[P++]=et,B[P++]=et+T,B[P++]=tt+T;for(rt=1;rt<M-2;rt++)et=T*M+T*(rt+1)-1,tt=T*(rt+1)-1,B[P++]=tt+T,B[P++]=et,B[P++]=tt,B[P++]=tt+T,B[P++]=et+T,B[P++]=et}I=new s.GeometryAttributes,k.position&&(I.position=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:N}));var nt=0,ot=0,mt=0,st=0,ut=z/2,lt=i.Ellipsoid.fromCartesian3(o),ct=i.Ellipsoid.fromCartesian3(c);if(k.st||k.normal||k.tangent||k.bitangent){for(rt=0;rt<z;rt++){Ct=R[rt]?ct:lt;var ft,dt=i.Cartesian3.fromArray(N,3*rt,f),Ct=Ct.geodeticSurfaceNormal(dt,d);U[rt]&&i.Cartesian3.negate(Ct,Ct),k.st&&(ft=i.Cartesian2.negate(Ct,y),X[nt++]=Math.atan2(ft.y,ft.x)/l.CesiumMath.TWO_PI+.5,X[nt++]=Math.asin(Ct.z)/Math.PI+.5),k.normal&&(W[ot++]=Ct.x,W[ot++]=Ct.y,W[ot++]=Ct.z),(k.tangent||k.bitangent)&&(dt=C,ft=0,R[rt]&&(ft=ut),ft=!O&&ft<=rt&&rt<ft+2*T?i.Cartesian3.UNIT_X:i.Cartesian3.UNIT_Z,i.Cartesian3.cross(ft,Ct,dt),i.Cartesian3.normalize(dt,dt),k.tangent&&(Y[mt++]=dt.x,Y[mt++]=dt.y,Y[mt++]=dt.z),k.bitangent&&(dt=i.Cartesian3.cross(Ct,dt,p),i.Cartesian3.normalize(dt,dt),J[st++]=dt.x,J[st++]=dt.y,J[st++]=dt.z))}k.st&&(I.st=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:X})),k.normal&&(I.normal=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:W})),k.tangent&&(I.tangent=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:Y})),k.bitangent&&(I.bitangent=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:J}))}return n.defined(t._offsetAttribute)&&(G=N.length,E=new Uint8Array(G/3),G=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1,e.arrayFill(E,G),I.applyOffset=new m.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:E})),new m.Geometry({attributes:I,indices:B,primitiveType:m.PrimitiveType.TRIANGLES,boundingSphere:a.BoundingSphere.fromEllipsoid(lt),offsetAttribute:t._offsetAttribute})}}},A.getUnitEllipsoid=function(){return x=n.defined(x)?x:A.createGeometry(new A({radii:new i.Cartesian3(1,1,1),vertexFormat:c.VertexFormat.POSITION_ONLY}))},t.EllipsoidGeometry=A}));