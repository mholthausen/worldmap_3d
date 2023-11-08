/*! For license information please see chunk-VD6RJEWG.js.LICENSE.txt */
import{a as b}from"./chunk-N52FZRFP.js";import{a as u}from"./chunk-WIRUK4BS.js";import{a as O}from"./chunk-3UAKIC5Y.js";import{b as w,c as h,d as x}from"./chunk-QEWKHB6D.js";import{d}from"./chunk-DV7DPSRL.js";import{a as y}from"./chunk-7XDW3BZW.js";import{a as i}from"./chunk-F33YCXD2.js";import{a as p}from"./chunk-K36PKEJW.js";import{a as z,b as c}from"./chunk-KD2PMTHD.js";import{e as A}from"./chunk-ZUCO5WNM.js";var D=new i;function f(t){let e=(t=p(t,p.EMPTY_OBJECT)).minimum,n=t.maximum;if(c.typeOf.object("min",e),c.typeOf.object("max",n),A(t.offsetAttribute)&&t.offsetAttribute===b.TOP)throw new z("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");let r=p(t.vertexFormat,u.DEFAULT);this._minimum=i.clone(e),this._maximum=i.clone(n),this._vertexFormat=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createBoxGeometry"}f.fromDimensions=function(t){let e=(t=p(t,p.EMPTY_OBJECT)).dimensions;c.typeOf.object("dimensions",e),c.typeOf.number.greaterThanOrEquals("dimensions.x",e.x,0),c.typeOf.number.greaterThanOrEquals("dimensions.y",e.y,0),c.typeOf.number.greaterThanOrEquals("dimensions.z",e.z,0);let n=i.multiplyByScalar(e,.5,new i);return new f({minimum:i.negate(n,new i),maximum:n,vertexFormat:t.vertexFormat,offsetAttribute:t.offsetAttribute})},f.fromAxisAlignedBoundingBox=function(t){return c.typeOf.object("boundingBox",t),new f({minimum:t.minimum,maximum:t.maximum})},f.packedLength=2*i.packedLength+u.packedLength+1,f.pack=function(t,e,n){return c.typeOf.object("value",t),c.defined("array",e),n=p(n,0),i.pack(t._minimum,e,n),i.pack(t._maximum,e,n+i.packedLength),u.pack(t._vertexFormat,e,n+2*i.packedLength),e[n+2*i.packedLength+u.packedLength]=p(t._offsetAttribute,-1),e};var l,_=new i,g=new i,k=new u,F={minimum:_,maximum:g,vertexFormat:k,offsetAttribute:void 0};f.unpack=function(t,e,n){c.defined("array",t),e=p(e,0);let r=i.unpack(t,e,_),o=i.unpack(t,e+i.packedLength,g),a=u.unpack(t,e+2*i.packedLength,k),m=t[e+2*i.packedLength+u.packedLength];return A(n)?(n._minimum=i.clone(r,n._minimum),n._maximum=i.clone(o,n._maximum),n._vertexFormat=u.clone(a,n._vertexFormat),n._offsetAttribute=-1===m?void 0:m,n):(F.offsetAttribute=-1===m?void 0:m,new f(F))},f.createGeometry=function(t){let e=t._minimum,n=t._maximum,r=t._vertexFormat;if(i.equals(e,n))return;let o,a,m=new O;if(r.position&&(r.st||r.normal||r.tangent||r.bitangent)){if(r.position&&(a=new Float64Array(72),a[0]=e.x,a[1]=e.y,a[2]=n.z,a[3]=n.x,a[4]=e.y,a[5]=n.z,a[6]=n.x,a[7]=n.y,a[8]=n.z,a[9]=e.x,a[10]=n.y,a[11]=n.z,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=n.x,a[16]=e.y,a[17]=e.z,a[18]=n.x,a[19]=n.y,a[20]=e.z,a[21]=e.x,a[22]=n.y,a[23]=e.z,a[24]=n.x,a[25]=e.y,a[26]=e.z,a[27]=n.x,a[28]=n.y,a[29]=e.z,a[30]=n.x,a[31]=n.y,a[32]=n.z,a[33]=n.x,a[34]=e.y,a[35]=n.z,a[36]=e.x,a[37]=e.y,a[38]=e.z,a[39]=e.x,a[40]=n.y,a[41]=e.z,a[42]=e.x,a[43]=n.y,a[44]=n.z,a[45]=e.x,a[46]=e.y,a[47]=n.z,a[48]=e.x,a[49]=n.y,a[50]=e.z,a[51]=n.x,a[52]=n.y,a[53]=e.z,a[54]=n.x,a[55]=n.y,a[56]=n.z,a[57]=e.x,a[58]=n.y,a[59]=n.z,a[60]=e.x,a[61]=e.y,a[62]=e.z,a[63]=n.x,a[64]=e.y,a[65]=e.z,a[66]=n.x,a[67]=e.y,a[68]=n.z,a[69]=e.x,a[70]=e.y,a[71]=n.z,m.position=new x({componentDatatype:y.DOUBLE,componentsPerAttribute:3,values:a})),r.normal){let t=new Float32Array(72);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,t[12]=0,t[13]=0,t[14]=-1,t[15]=0,t[16]=0,t[17]=-1,t[18]=0,t[19]=0,t[20]=-1,t[21]=0,t[22]=0,t[23]=-1,t[24]=1,t[25]=0,t[26]=0,t[27]=1,t[28]=0,t[29]=0,t[30]=1,t[31]=0,t[32]=0,t[33]=1,t[34]=0,t[35]=0,t[36]=-1,t[37]=0,t[38]=0,t[39]=-1,t[40]=0,t[41]=0,t[42]=-1,t[43]=0,t[44]=0,t[45]=-1,t[46]=0,t[47]=0,t[48]=0,t[49]=1,t[50]=0,t[51]=0,t[52]=1,t[53]=0,t[54]=0,t[55]=1,t[56]=0,t[57]=0,t[58]=1,t[59]=0,t[60]=0,t[61]=-1,t[62]=0,t[63]=0,t[64]=-1,t[65]=0,t[66]=0,t[67]=-1,t[68]=0,t[69]=0,t[70]=-1,t[71]=0,m.normal=new x({componentDatatype:y.FLOAT,componentsPerAttribute:3,values:t})}if(r.st){let t=new Float32Array(48);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,t[8]=1,t[9]=0,t[10]=0,t[11]=0,t[12]=0,t[13]=1,t[14]=1,t[15]=1,t[16]=0,t[17]=0,t[18]=1,t[19]=0,t[20]=1,t[21]=1,t[22]=0,t[23]=1,t[24]=1,t[25]=0,t[26]=0,t[27]=0,t[28]=0,t[29]=1,t[30]=1,t[31]=1,t[32]=1,t[33]=0,t[34]=0,t[35]=0,t[36]=0,t[37]=1,t[38]=1,t[39]=1,t[40]=0,t[41]=0,t[42]=1,t[43]=0,t[44]=1,t[45]=1,t[46]=0,t[47]=1,m.st=new x({componentDatatype:y.FLOAT,componentsPerAttribute:2,values:t})}if(r.tangent){let t=new Float32Array(72);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,t[12]=-1,t[13]=0,t[14]=0,t[15]=-1,t[16]=0,t[17]=0,t[18]=-1,t[19]=0,t[20]=0,t[21]=-1,t[22]=0,t[23]=0,t[24]=0,t[25]=1,t[26]=0,t[27]=0,t[28]=1,t[29]=0,t[30]=0,t[31]=1,t[32]=0,t[33]=0,t[34]=1,t[35]=0,t[36]=0,t[37]=-1,t[38]=0,t[39]=0,t[40]=-1,t[41]=0,t[42]=0,t[43]=-1,t[44]=0,t[45]=0,t[46]=-1,t[47]=0,t[48]=-1,t[49]=0,t[50]=0,t[51]=-1,t[52]=0,t[53]=0,t[54]=-1,t[55]=0,t[56]=0,t[57]=-1,t[58]=0,t[59]=0,t[60]=1,t[61]=0,t[62]=0,t[63]=1,t[64]=0,t[65]=0,t[66]=1,t[67]=0,t[68]=0,t[69]=1,t[70]=0,t[71]=0,m.tangent=new x({componentDatatype:y.FLOAT,componentsPerAttribute:3,values:t})}if(r.bitangent){let t=new Float32Array(72);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=1,t[14]=0,t[15]=0,t[16]=1,t[17]=0,t[18]=0,t[19]=1,t[20]=0,t[21]=0,t[22]=1,t[23]=0,t[24]=0,t[25]=0,t[26]=1,t[27]=0,t[28]=0,t[29]=1,t[30]=0,t[31]=0,t[32]=1,t[33]=0,t[34]=0,t[35]=1,t[36]=0,t[37]=0,t[38]=1,t[39]=0,t[40]=0,t[41]=1,t[42]=0,t[43]=0,t[44]=1,t[45]=0,t[46]=0,t[47]=1,t[48]=0,t[49]=0,t[50]=1,t[51]=0,t[52]=0,t[53]=1,t[54]=0,t[55]=0,t[56]=1,t[57]=0,t[58]=0,t[59]=1,t[60]=0,t[61]=0,t[62]=1,t[63]=0,t[64]=0,t[65]=1,t[66]=0,t[67]=0,t[68]=1,t[69]=0,t[70]=0,t[71]=1,m.bitangent=new x({componentDatatype:y.FLOAT,componentsPerAttribute:3,values:t})}o=new Uint16Array(36),o[0]=0,o[1]=1,o[2]=2,o[3]=0,o[4]=2,o[5]=3,o[6]=6,o[7]=5,o[8]=4,o[9]=7,o[10]=6,o[11]=4,o[12]=8,o[13]=9,o[14]=10,o[15]=8,o[16]=10,o[17]=11,o[18]=14,o[19]=13,o[20]=12,o[21]=15,o[22]=14,o[23]=12,o[24]=18,o[25]=17,o[26]=16,o[27]=19,o[28]=18,o[29]=16,o[30]=20,o[31]=21,o[32]=22,o[33]=20,o[34]=22,o[35]=23}else a=new Float64Array(24),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=n.x,a[4]=e.y,a[5]=e.z,a[6]=n.x,a[7]=n.y,a[8]=e.z,a[9]=e.x,a[10]=n.y,a[11]=e.z,a[12]=e.x,a[13]=e.y,a[14]=n.z,a[15]=n.x,a[16]=e.y,a[17]=n.z,a[18]=n.x,a[19]=n.y,a[20]=n.z,a[21]=e.x,a[22]=n.y,a[23]=n.z,m.position=new x({componentDatatype:y.DOUBLE,componentsPerAttribute:3,values:a}),o=new Uint16Array(36),o[0]=4,o[1]=5,o[2]=6,o[3]=4,o[4]=6,o[5]=7,o[6]=1,o[7]=0,o[8]=3,o[9]=1,o[10]=3,o[11]=2,o[12]=1,o[13]=6,o[14]=5,o[15]=1,o[16]=2,o[17]=6,o[18]=2,o[19]=3,o[20]=7,o[21]=2,o[22]=7,o[23]=6,o[24]=3,o[25]=0,o[26]=4,o[27]=3,o[28]=4,o[29]=7,o[30]=0,o[31]=1,o[32]=5,o[33]=0,o[34]=5,o[35]=4;let u=i.subtract(n,e,D),s=.5*i.magnitude(u);if(A(t._offsetAttribute)){let e=a.length,n=t._offsetAttribute===b.NONE?0:1,i=new Uint8Array(e/3).fill(n);m.applyOffset=new x({componentDatatype:y.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new h({attributes:m,indices:o,primitiveType:w.TRIANGLES,boundingSphere:new d(i.ZERO,s),offsetAttribute:t._offsetAttribute})},f.getUnitBox=function(){return A(l)||(l=f.createGeometry(f.fromDimensions({dimensions:new i(1,1,1),vertexFormat:u.POSITION_ONLY}))),l};var R=f;export{R as a};