/*! For license information please see chunk-L2YBWJCT.js.LICENSE.txt */
import{a as w}from"./chunk-JMWWNZHX.js";var C={computePositions:function(t,o,a,r,n){let s,e=.5*t,i=-e,c=r+r,u=new Float64Array(3*(n?2*c:c)),f=0,h=0,l=n?3*c:0,m=n?3*(c+r):3*r;for(s=0;s<r;s++){let t=s/r*w.TWO_PI,c=Math.cos(t),p=Math.sin(t),M=c*a,W=p*a,C=c*o,P=p*o;u[h+l]=M,u[h+l+1]=W,u[h+l+2]=i,u[h+m]=C,u[h+m+1]=P,u[h+m+2]=e,h+=3,n&&(u[f++]=M,u[f++]=W,u[f++]=i,u[f++]=C,u[f++]=P,u[f++]=e)}return u}},Y=C;export{Y as a};