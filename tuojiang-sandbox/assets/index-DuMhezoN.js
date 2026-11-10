var oh=Object.defineProperty;var rh=(s,t,e)=>t in s?oh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>rh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="169",ah=0,Ba=1,lh=2,oc=1,rc=2,mn=3,nn=0,De=1,an=2,Le=0,$n=1,io=2,za=3,Ha=4,ac=5,gn=100,ch=101,hh=102,uh=103,dh=104,dr=200,fh=201,ph=202,mh=203,fr=204,pr=205,lc=206,gh=207,cc=208,vh=209,_h=210,xh=211,yh=212,Sh=213,bh=214,mr=0,gr=1,vr=2,Pi=3,_r=4,xr=5,yr=6,Sr=7,hc=0,Mh=1,wh=2,yn=0,Th=1,Eh=2,Ah=3,Rh=4,Ch=5,Ph=6,Lh=7,uc=300,Li=301,Di=302,so=303,br=304,po=306,os=1e3,Yn=1001,Mr=1002,Ee=1003,Dh=1004,ms=1005,Je=1006,Eo=1007,jn=1008,Sn=1009,dc=1010,fc=1011,rs=1012,la=1013,Zn=1014,tn=1015,qe=1016,ca=1017,ha=1018,Kn=1020,pc=35902,mc=1021,gc=1022,en=1023,vc=1024,_c=1025,Ei=1026,Jn=1027,mo=1028,ua=1029,xc=1030,da=1031,fa=1033,Zs=33776,Ks=33777,Js=33778,Qs=33779,wr=35840,Tr=35841,Er=35842,Ar=35843,Rr=36196,Cr=37492,Pr=37496,Lr=37808,Dr=37809,Ir=37810,Ur=37811,Fr=37812,Nr=37813,Or=37814,kr=37815,Br=37816,zr=37817,Hr=37818,Gr=37819,Vr=37820,Wr=37821,to=36492,Xr=36494,qr=36495,yc=36283,Yr=36284,jr=36285,$r=36286,Ih=3200,Uh=3201,pa=0,Fh=1,Ln="",We="srgb",Un="srgb-linear",ma="display-p3",go="display-p3-linear",oo="linear",ue="srgb",ro="rec709",ao="p3",ri=7680,Ga=519,Nh=512,Oh=513,kh=514,Sc=515,Bh=516,zh=517,Hh=518,Gh=519,Zr=35044,Vh=35048,Va="300 es",_n=2e3,lo=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wa=1234567;const Qi=Math.PI/180,as=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function ga(s,t){return(s%t+t)%t}function Wh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Xh(s,t,e){return s!==t?(e-s)/(t-s):0}function ts(s,t,e){return(1-e)*s+e*t}function qh(s,t,e,n){return ts(s,t,1-Math.exp(-e*n))}function Yh(s,t=1){return t-Math.abs(ga(s,t*2)-t)}function jh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $h(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Zh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Kh(s,t){return s+Math.random()*(t-s)}function Jh(s){return s*(.5-Math.random())}function Qh(s){s!==void 0&&(Wa=s);let t=Wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tu(s){return s*Qi}function eu(s){return s*as}function nu(s){return(s&s-1)===0&&s!==0}function iu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function su(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ou(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ie={DEG2RAD:Qi,RAD2DEG:as,generateUUID:ei,clamp:be,euclideanModulo:ga,mapLinear:Wh,inverseLerp:Xh,lerp:ts,damp:qh,pingpong:Yh,smoothstep:jh,smootherstep:$h,randInt:Zh,randFloat:Kh,randFloatSpread:Jh,seededRandom:Qh,degToRad:tu,radToDeg:eu,isPowerOfTwo:nu,ceilPowerOfTwo:iu,floorPowerOfTwo:su,setQuaternionFromProperEuler:ou,normalize:Ce,denormalize:bi};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,o,r,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],f=i[3],m=i[6],b=i[1],_=i[4],y=i[7],R=i[2],E=i[5],T=i[8];return o[0]=r*x+a*b+l*R,o[3]=r*f+a*_+l*E,o[6]=r*m+a*y+l*T,o[1]=c*x+h*b+u*R,o[4]=c*f+h*_+u*E,o[7]=c*m+h*y+u*T,o[2]=d*x+p*b+g*R,o[5]=d*f+p*_+g*E,o[8]=d*m+p*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*o-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new qt;function bc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ru(){const s=co("canvas");return s.style.display="block",s}const Xa={};function eo(s){s in Xa||(Xa[s]=!0,console.warn(s))}function au(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function lu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qa=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ya=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[Un]:{transfer:oo,primaries:ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[We]:{transfer:ue,primaries:ro,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[go]:{transfer:oo,primaries:ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ya),fromReference:s=>s.applyMatrix3(qa)},[ma]:{transfer:ue,primaries:ao,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ya),fromReference:s=>s.applyMatrix3(qa).convertLinearToSRGB()}},hu=new Set([Un,go]),se={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Gi[t].toReference,i=Gi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Gi[s].primaries},getTransfer:function(s){return s===Ln?oo:Gi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Gi[t].luminanceCoefficients)}};function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ai;class uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ai===void 0&&(ai=co("canvas")),ai.width=t.width,ai.height=t.height;const n=ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ai(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let du=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Co(i[r].image)):o.push(Co(i[r]))}else o=Co(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;class Ae extends Fi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Yn,i=Yn,o=Je,r=jn,a=en,l=Sn,c=Ae.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ei(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=uc;Ae.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(p+1)/2,R=(m+1)/2,E=(h+d)/4,T=(u+x)/4,C=(g+f)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=E/n,o=T/n):y>R?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=E/i,o=C/i):R<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(R),n=T/o,i=C/o),this.set(n,i,o,e),this}let b=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fe extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let f=1-a;const m=l*d+c*p+h*g+u*x,b=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const R=Math.sqrt(_),E=Math.atan2(R,m*b);f=Math.sin(f*E)/R,a=Math.sin(a*E)/R}const y=a*b;if(l=l*f+d*y,c=c*f+p*y,h=h*f+g*y,u=u*f+x*y,f===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),d=l(n/2),p=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new N,ja=new Ni;class ni{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,$e):$e.fromBufferAttribute(o,r),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),vs.subVectors(this.max,Vi),li.subVectors(t.a,Vi),ci.subVectors(t.b,Vi),hi.subVectors(t.c,Vi),wn.subVectors(ci,li),Tn.subVectors(hi,ci),Nn.subVectors(li,hi);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-Nn.z,Nn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,Nn.z,0,-Nn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-Nn.y,Nn.x,0];return!Lo(e,li,ci,hi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,li,ci,hi,vs))?!1:(_s.crossVectors(wn,Tn),e=[_s.x,_s.y,_s.z],Lo(e,li,ci,hi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new N,new N,new N,new N,new N,new N,new N,new N],$e=new N,gs=new ni,li=new N,ci=new N,hi=new N,wn=new N,Tn=new N,Nn=new N,Vi=new N,vs=new N,_s=new N,On=new N;function Lo(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){On.fromArray(s,o);const a=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gu=new ni,Wi=new N,Do=new N;class Oi{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(Do)),this.expandByPoint(Wi.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new N,Io=new N,xs=new N,En=new N,Uo=new N,ys=new N,Fo=new N;class va{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Io.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Io);const o=t.distanceTo(e)*.5,r=-this.direction.dot(xs),a=En.dot(this.direction),l=-En.dot(xs),c=En.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Io).addScaledVector(xs,d),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,i,o){Uo.subVectors(e,t),ys.subVectors(n,t),Fo.crossVectors(Uo,ys);let r=this.direction.dot(Fo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;En.subVectors(this.origin,t);const l=a*this.direction.dot(ys.crossVectors(En,ys));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(En));if(c<0||l+c>r)return null;const h=-a*En.dot(Fo);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f)}set(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),o=1/ui.setFromMatrixColumn(t,1).length(),r=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,_u)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),An.crossVectors(n,ke),An.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),An.crossVectors(n,ke)),An.normalize(),Ss.crossVectors(ke,An),i[0]=An.x,i[4]=Ss.x,i[8]=ke.x,i[1]=An.y,i[5]=Ss.y,i[9]=ke.y,i[2]=An.z,i[6]=Ss.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],b=n[3],_=n[7],y=n[11],R=n[15],E=i[0],T=i[4],C=i[8],D=i[12],v=i[1],S=i[5],I=i[9],U=i[13],B=i[2],W=i[6],H=i[10],$=i[14],X=i[3],it=i[7],ht=i[11],ut=i[15];return o[0]=r*E+a*v+l*B+c*X,o[4]=r*T+a*S+l*W+c*it,o[8]=r*C+a*I+l*H+c*ht,o[12]=r*D+a*U+l*$+c*ut,o[1]=h*E+u*v+d*B+p*X,o[5]=h*T+u*S+d*W+p*it,o[9]=h*C+u*I+d*H+p*ht,o[13]=h*D+u*U+d*$+p*ut,o[2]=g*E+x*v+f*B+m*X,o[6]=g*T+x*S+f*W+m*it,o[10]=g*C+x*I+f*H+m*ht,o[14]=g*D+x*U+f*$+m*ut,o[3]=b*E+_*v+y*B+R*X,o[7]=b*T+_*S+y*W+R*it,o[11]=b*C+_*I+y*H+R*ht,o[15]=b*D+_*U+y*$+R*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+o*l*u-i*c*u-o*a*d+n*c*d+i*a*p-n*l*p)+x*(+e*l*p-e*c*d+o*r*d-i*r*p+i*c*h-o*l*h)+f*(+e*c*u-e*a*p-o*r*u+n*r*p+o*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],b=u*f*c-x*d*c+x*l*p-a*f*p-u*l*m+a*d*m,_=g*d*c-h*f*c-g*l*p+r*f*p+h*l*m-r*d*m,y=h*x*c-g*u*c+g*a*p-r*x*p-h*a*m+r*u*m,R=g*u*l-h*x*l-g*a*d+r*x*d+h*a*f-r*u*f,E=e*b+n*_+i*y+o*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=b*T,t[1]=(x*d*o-u*f*o-x*i*p+n*f*p+u*i*m-n*d*m)*T,t[2]=(a*f*o-x*l*o+x*i*c-n*f*c-a*i*m+n*l*m)*T,t[3]=(u*l*o-a*d*o-u*i*c+n*d*c+a*i*p-n*l*p)*T,t[4]=_*T,t[5]=(h*f*o-g*d*o+g*i*p-e*f*p-h*i*m+e*d*m)*T,t[6]=(g*l*o-r*f*o-g*i*c+e*f*c+r*i*m-e*l*m)*T,t[7]=(r*d*o-h*l*o+h*i*c-e*d*c-r*i*p+e*l*p)*T,t[8]=y*T,t[9]=(g*u*o-h*x*o-g*n*p+e*x*p+h*n*m-e*u*m)*T,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*m+e*a*m)*T,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*p-e*a*p)*T,t[12]=R*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*f+e*u*f)*T,t[14]=(g*a*i-r*x*i-g*n*l+e*x*l+r*n*f-e*a*f)*T,t[15]=(r*u*i-h*a*i+h*n*l-e*u*l-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,g=o*u,x=r*h,f=r*u,m=a*u,b=l*c,_=l*h,y=l*u,R=n.x,E=n.y,T=n.z;return i[0]=(1-(x+m))*R,i[1]=(p+y)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(d+m))*E,i[6]=(f+b)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(f-b)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ui.set(i[0],i[1],i[2]).length();const r=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const c=1/o,h=1/r,u=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=_n){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===_n)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===lo)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=_n){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-o),d=(e+t)*c,p=(n+i)*h;let g,x;if(a===_n)g=(r+o)*u,x=-2*u;else if(a===lo)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new N,Ze=new jt,vu=new N(0,0,0),_u=new N(1,1,1),An=new N,Ss=new N,ke=new N,$a=new jt,Za=new Ni;class Ye{constructor(t=0,e=0,n=0,i=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xu=0;const Ka=new N,di=new Ni,dn=new jt,bs=new N,Xi=new N,yu=new N,Su=new Ni,Ja=new N(1,0,0),Qa=new N(0,1,0),tl=new N(0,0,1),el={type:"added"},bu={type:"removed"},fi={type:"childadded",child:null},No={type:"childremoved",child:null};class ce extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new N,e=new Ye,n=new Ni,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Xi,bs,this.up):dn.lookAt(bs,Xi,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(dn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new N(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new N,fn=new N,Oo=new N,pn=new N,pi=new N,mi=new N,nl=new N,ko=new N,Bo=new N,zo=new N,Ho=new de,Go=new de,Vo=new de;class Qe{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ke.subVectors(i,e),fn.subVectors(n,e),Oo.subVectors(t,e);const r=Ke.dot(Ke),a=Ke.dot(fn),l=Ke.dot(Oo),c=fn.dot(fn),h=fn.dot(Oo),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,pn.x),l.addScaledVector(r,pn.y),l.addScaledVector(a,pn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Ho,o.x),r.addScaledVector(Go,o.y),r.addScaledVector(Vo,o.z),r}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),fn.subVectors(t,e),Ke.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ke.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;pi.subVectors(i,n),mi.subVectors(o,n),ko.subVectors(t,n);const l=pi.dot(ko),c=mi.dot(ko);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,i);const h=pi.dot(Bo),u=mi.dot(Bo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(pi,r);zo.subVectors(t,o);const p=pi.dot(zo),g=mi.dot(zo);if(g>=0&&p<=g)return e.copy(o);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(mi,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return nl.subVectors(o,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(nl,a);const m=1/(f+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(pi,r).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Wo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=ga(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Wo(r,o,t+1/3),this.g=Wo(r,o,t),this.b=Wo(r,o,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return se.fromWorkingColorSpace(Te.copy(this),t),Math.round(be(Te.r*255,0,255))*65536+Math.round(be(Te.g*255,0,255))*256+Math.round(be(Te.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,o=Te.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=We){se.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ms);const n=ts(Rn.h,Ms.h,e),i=ts(Rn.s,Ms.s,e),o=ts(Rn.l,Ms.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new mt;mt.NAMES=Tc;let Mu=0;class ii extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=$n,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vo extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new N,ws=new st;class Jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zr,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),o=Ce(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zr&&(t.usage=this.usage),t}}class Ec extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ac extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const Ge=new jt,Xo=new ce,gi=new N,Be=new ni,qi=new ni,Se=new N;class _e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?Ac:Ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Be.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Be.min,qi.min),Be.expandByPoint(Se),Se.addVectors(Be.max,qi.max),Be.expandByPoint(Se)):(Be.expandByPoint(qi.min),Be.expandByPoint(qi.max))}Be.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Se.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(t,c),Se.add(gi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,u=new N,d=new st,p=new st,g=new st,x=new N,f=new N;function m(C,D,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(o,C),p.fromBufferAttribute(o,D),g.fromBufferAttribute(o,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),a[C].add(x),a[D].add(x),a[v].add(x),l[C].add(f),l[D].add(f),l[v].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,D=b.length;C<D;++C){const v=b[C],S=v.start,I=v.count;for(let U=S,B=S+I;U<B;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new N,y=new N,R=new N,E=new N;function T(C){R.fromBufferAttribute(i,C),E.copy(R);const D=a[C];_.copy(D),_.sub(R.multiplyScalar(R.dot(D))).normalize(),y.crossVectors(E,D);const S=y.dot(l[C])<0?-1:1;r.setXYZW(C,_.x,_.y,_.z,S)}for(let C=0,D=b.length;C<D;++C){const v=b[C],S=v.start,I=v.count;for(let U=S,B=S+I;U<B;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new jt,kn=new va,Ts=new Oi,sl=new N,Es=new N,As=new N,Rs=new N,qo=new N,Cs=new N,ol=new N,Ps=new N;class ae extends ce{constructor(t=new _e,e=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Cs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(qo.fromBufferAttribute(u,t),r?Cs.addScaledVector(qo,h):Cs.addScaledVector(qo.sub(e),h))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(o),kn.copy(t.ray).recast(t.near),!(Ts.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ts,sl)===null||kn.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(il.copy(o).invert(),kn.copy(t.ray).applyMatrix4(il),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],b=Math.max(f.start,p.start),_=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let y=b,R=_;y<R;y+=3){const E=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);i=Ls(this,m,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const b=a.getX(f),_=a.getX(f+1),y=a.getX(f+2);i=Ls(this,r,t,n,c,h,u,b,_,y),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],b=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let y=b,R=_;y<R;y+=3){const E=y,T=y+1,C=y+2;i=Ls(this,m,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const b=f,_=f+1,y=f+2;i=Ls(this,r,t,n,c,h,u,b,_,y),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Tu(s,t,e,n,i,o,r,a){let l;if(t.side===De?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===nn,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:s}}function Ls(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,Es),s.getVertexPosition(l,As),s.getVertexPosition(c,Rs);const h=Tu(s,t,e,n,Es,As,Rs,ol);if(h){const u=new N;Qe.getBarycoord(ol,Es,As,Rs,u),i&&(h.uv=Qe.getInterpolatedAttribute(i,a,l,c,u,new st)),o&&(h.uv1=Qe.getInterpolatedAttribute(o,a,l,c,u,new st)),r&&(h.normal=Qe.getInterpolatedAttribute(r,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Qe.getNormal(Es,As,Rs,d.normal),h.face=d,h.barycoord=u}return h}class si extends _e{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(x,f,m,b,_,y,R,E,T,C,D){const v=y/T,S=R/C,I=y/2,U=R/2,B=E/2,W=T+1,H=C+1;let $=0,X=0;const it=new N;for(let ht=0;ht<H;ht++){const ut=ht*S-U;for(let Ft=0;Ft<W;Ft++){const Yt=Ft*v-I;it[x]=Yt*b,it[f]=ut*_,it[m]=B,c.push(it.x,it.y,it.z),it[x]=0,it[f]=0,it[m]=E>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ft/T),u.push(1-ht/C),$+=1}}for(let ht=0;ht<C;ht++)for(let ut=0;ut<T;ut++){const Ft=d+ut+W*ht,Yt=d+ut+W*(ht+1),Z=d+(ut+1)+W*(ht+1),nt=d+(ut+1)+W*ht;l.push(Ft,Yt,nt),l.push(Yt,Z,nt),X+=6}a.addGroup(p,X,D),p+=X,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=Ii(s[e]);for(const i in n)t[i]=n[i]}return t}function Eu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const xn={clone:Ii,merge:Pe};var Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class le extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cc extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new N,rl=new st,al=new st;class ze extends Cc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,rl,al),e.subVectors(al,rl)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,_i=1;class Cu extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(vi,_i,t,e);i.layers=this.layers,this.add(i);const o=new ze(vi,_i,t,e);o.layers=this.layers,this.add(o);const r=new ze(vi,_i,t,e);r.layers=this.layers,this.add(r);const a=new ze(vi,_i,t,e);a.layers=this.layers,this.add(a);const l=new ze(vi,_i,t,e);l.layers=this.layers,this.add(l);const c=new ze(vi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends Ae{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pu extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new si(5,5,5),o=new le({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Le});o.uniforms.tEquirect.value=e;const r=new ae(i,o),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=Je),new Cu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const Yo=new N,Lu=new N,Du=new qt;class Pn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Yo.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),i=this.coplanarPoint(Yo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Oi,Ds=new N;class xa{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,o=new Pn,r=new Pn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],f=i[11],m=i[12],b=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-o,d-c,f-p,y-m).normalize(),n[1].setComponents(l+o,d+c,f+p,y+m).normalize(),n[2].setComponents(l+r,d+h,f+g,y+b).normalize(),n[3].setComponents(l-r,d-h,f-g,y-b).normalize(),n[4].setComponents(l-a,d-u,f-x,y-_).normalize(),e===_n)n[5].setComponents(l+a,d+u,f+x,y+_).normalize();else if(e===lo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ds.x=i.normal.x>0?t.max.x:t.min.x,Ds.y=i.normal.y>0?t.max.y:t.min.y,Ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Iu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class ki extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){const b=m*d-r;for(let _=0;_<c;_++){const y=_*u-o;g.push(y,-b,0),x.push(0,0,1),f.push(_/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const _=b+c*m,y=b+c*(m+1),R=b+1+c*(m+1),E=b+1+c*m;p.push(_,y,E),p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ep=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Uu,alphahash_pars_fragment:Fu,alphamap_fragment:Nu,alphamap_pars_fragment:Ou,alphatest_fragment:ku,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:Hu,batching_pars_vertex:Gu,batching_vertex:Vu,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:Yu,bumpmap_pars_fragment:ju,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:od,displacementmap_pars_vertex:rd,displacementmap_vertex:ad,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:dd,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Ed,envmap_vertex:gd,fog_vertex:vd,fog_pars_vertex:_d,fog_fragment:xd,fog_pars_fragment:yd,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:bd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:wd,lights_pars_begin:Td,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Dd,lights_fragment_begin:Id,lights_fragment_maps:Ud,lights_fragment_end:Fd,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Bd,map_fragment:zd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:jd,morphtarget_pars_vertex:$d,morphtarget_vertex:Zd,normal_fragment_begin:Kd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tf,normal_vertex:ef,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:rf,iridescence_pars_fragment:af,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:df,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:vf,shadowmap_vertex:_f,shadowmask_pars_fragment:xf,skinbase_vertex:yf,skinning_pars_vertex:Sf,skinning_vertex:bf,skinnormal_vertex:Mf,specularmap_fragment:wf,specularmap_pars_fragment:Tf,tonemapping_fragment:Ef,tonemapping_pars_fragment:Af,transmission_fragment:Rf,transmission_pars_fragment:Cf,uv_pars_fragment:Pf,uv_pars_vertex:Lf,uv_vertex:Df,worldpos_vertex:If,background_vert:Uf,background_frag:Ff,backgroundCube_vert:Nf,backgroundCube_frag:Of,cube_vert:kf,cube_frag:Bf,depth_vert:zf,depth_frag:Hf,distanceRGBA_vert:Gf,distanceRGBA_frag:Vf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:jf,meshbasic_frag:$f,meshlambert_vert:Zf,meshlambert_frag:Kf,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:tp,meshnormal_frag:ep,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:sp,meshphysical_frag:op,meshtoon_vert:rp,meshtoon_frag:ap,points_vert:lp,points_frag:cp,shadow_vert:hp,shadow_frag:up,sprite_vert:dp,sprite_frag:fp},gt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},rn={basic:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Pe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Pe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Pe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Pe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Pe([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Pe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Pe([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Pe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Pe([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Pe([gt.common,gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Pe([gt.lights,gt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};rn.physical={uniforms:Pe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Is={r:0,b:0,g:0},zn=new Ye,pp=new jt;function mp(s,t,e,n,i,o,r){const a=new mt(0);let l=o===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function x(b){let _=!1;const y=g(b);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(b,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===po)?(h===void 0&&(h=new ae(new si(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:Ii(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zn.copy(_.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(zn)),h.material.toneMapped=se.getTransfer(y.colorSpace)!==ue,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ae(new ki(2,2),new le({name:"BackgroundMaterial",uniforms:Ii(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=se.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,_){b.getRGB(Is,Rc(s)),n.buffers.color.setClear(Is.r,Is.g,Is.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:f}}function gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(v,S,I,U,B){let W=!1;const H=u(U,I,S);o!==H&&(o=H,c(o.object)),W=p(v,U,I,B),W&&g(v,U,I,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,y(v,S,I,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,S,I){const U=I.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let W=B[S.id];W===void 0&&(W={},B[S.id]=W);let H=W[U];return H===void 0&&(H=d(l()),W[U]=H),H}function d(v){const S=[],I=[],U=[];for(let B=0;B<e;B++)S[B]=0,I[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:U,object:v,attributes:{},index:null}}function p(v,S,I,U){const B=o.attributes,W=S.attributes;let H=0;const $=I.getAttributes();for(const X in $)if($[X].location>=0){const ht=B[X];let ut=W[X];if(ut===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ht===void 0||ht.attribute!==ut||ut&&ht.data!==ut.data)return!0;H++}return o.attributesNum!==H||o.index!==U}function g(v,S,I,U){const B={},W=S.attributes;let H=0;const $=I.getAttributes();for(const X in $)if($[X].location>=0){let ht=W[X];ht===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor));const ut={};ut.attribute=ht,ht&&ht.data&&(ut.data=ht.data),B[X]=ut,H++}o.attributes=B,o.attributesNum=H,o.index=U}function x(){const v=o.newAttributes;for(let S=0,I=v.length;S<I;S++)v[S]=0}function f(v){m(v,0)}function m(v,S){const I=o.newAttributes,U=o.enabledAttributes,B=o.attributeDivisors;I[v]=1,U[v]===0&&(s.enableVertexAttribArray(v),U[v]=1),B[v]!==S&&(s.vertexAttribDivisor(v,S),B[v]=S)}function b(){const v=o.newAttributes,S=o.enabledAttributes;for(let I=0,U=S.length;I<U;I++)S[I]!==v[I]&&(s.disableVertexAttribArray(I),S[I]=0)}function _(v,S,I,U,B,W,H){H===!0?s.vertexAttribIPointer(v,S,I,B,W):s.vertexAttribPointer(v,S,I,U,B,W)}function y(v,S,I,U){x();const B=U.attributes,W=I.getAttributes(),H=S.defaultAttributeValues;for(const $ in W){const X=W[$];if(X.location>=0){let it=B[$];if(it===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const ht=it.normalized,ut=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;const Yt=Ft.buffer,Z=Ft.type,nt=Ft.bytesPerElement,Mt=Z===s.INT||Z===s.UNSIGNED_INT||it.gpuType===la;if(it.isInterleavedBufferAttribute){const lt=it.data,Lt=lt.stride,Pt=it.offset;if(lt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<X.locationSize;Ut++)m(X.location+Ut,lt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ut=0;Ut<X.locationSize;Ut++)f(X.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<X.locationSize;Ut++)_(X.location+Ut,ut/X.locationSize,Z,ht,Lt*nt,(Pt+ut/X.locationSize*Ut)*nt,Mt)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,it.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<X.locationSize;lt++)f(X.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let lt=0;lt<X.locationSize;lt++)_(X.location+lt,ut/X.locationSize,Z,ht,ut*nt,ut/X.locationSize*lt*nt,Mt)}}else if(H!==void 0){const ht=H[$];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(X.location,ht);break;case 3:s.vertexAttrib3fv(X.location,ht);break;case 4:s.vertexAttrib4fv(X.location,ht);break;default:s.vertexAttrib1fv(X.location,ht)}}}}b()}function R(){C();for(const v in n){const S=n[v];for(const I in S){const U=S[I];for(const B in U)h(U[B].object),delete U[B];delete S[I]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const I in S){const U=S[I];for(const B in U)h(U[B].object),delete U[B];delete S[I]}delete n[v.id]}function T(v){for(const S in n){const I=n[S];if(I[v.id]===void 0)continue;const U=I[v.id];for(const B in U)h(U[B].object),delete U[B];delete I[v.id]}}function C(){D(),r=!0,o!==i&&(o=i,c(o.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:b}}function vp(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)e.update(g,n,d[x])}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _p(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==en&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Sn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==tn&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function xp(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Pn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||o&&!f)o?h(null):c();else{const b=o?0:n,_=b*4;let y=m.clippingState||null;l.value=y,y=h(g,d,_,p);for(let R=0;R!==_;++R)y[R]=e[R];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const m=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(u[_]).applyMatrix4(b,a),r.normal.toArray(f,y),f[y+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function yp(s){let t=new WeakMap;function e(r,a){return a===so?r.mapping=Li:a===br&&(r.mapping=Di),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===so||a===br)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Pu(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ya extends Cc{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,ll=[.125,.215,.35,.446,.526,.582],qn=20,jo=new ya,cl=new mt;let $o=null,Zo=0,Ko=0,Jo=!1;const Xn=(1+Math.sqrt(5))/2,xi=1/Xn,hl=[new N(-Xn,xi,0),new N(Xn,xi,0),new N(-xi,0,Xn),new N(xi,0,Xn),new N(0,Xn,-xi),new N(0,Xn,xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Kr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Zo,Ko),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:qe,format:en,colorSpace:Un,depthBuffer:!1},i=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(o)),this._blurMaterial=bp(o,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cl),h.toneMapping=yn,h.autoClear=!1;const p=new vo({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new ae(new si,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(cl),x=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Us(i,b*_,m>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Li||t.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new ae(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=hl[(i-o-1)%hl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ae(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*qn-1),x=o/g,f=isFinite(o)?1+Math.floor(h*x):qn;f>qn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qn}`);const m=[];let b=0;for(let T=0;T<qn;++T){const C=T/x,D=Math.exp(-C*C/2);m.push(D),T===0?b+=D:T<f&&(b+=2*D)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[i],R=3*y*(i>_-Mi?i-_+Mi:0),E=4*(this._cubeSize-y);Us(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(u,jo)}}function Sp(s){const t=[],e=[],n=[];let i=s;const o=s-Mi+1+ll.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-Mi?l=ll[r-s+Mi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,f=2,m=1,b=new Float32Array(x*g*p),_=new Float32Array(f*g*p),y=new Float32Array(m*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,C=E>2?0:-1,D=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];b.set(D,x*g*E),_.set(d,f*g*E);const v=[E,E,E,E,E,E];y.set(v,m*g*E)}const R=new _e;R.setAttribute("position",new Jt(b,x)),R.setAttribute("uv",new Jt(_,f)),R.setAttribute("faceIndex",new Jt(y,m)),t.push(R),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ul(s,t,e){const n=new Fe(s,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bp(s,t,e){const n=new Float32Array(qn),i=new N(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Le,depthTest:!1,depthWrite:!1})}function dl(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Le,depthTest:!1,depthWrite:!1})}function fl(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Le,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===br,h=l===Li||l===Di;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Kr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Kr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function wp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(s,t,e,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}d.removeEventListener("dispose",r),delete i[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let f=0,m=x.length;f<m;f++)t.update(x[f],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let _=0,y=b.length;_<y;_+=3){const R=b[_+0],E=b[_+1],T=b[_+2];d.push(R,E,E,T,T,R)}}else if(g!==void 0){const b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const R=_+0,E=_+1,T=_+2;d.push(R,E,E,T,T,R)}}else return;const f=new(bc(d)?Ac:Ec)(d,1);f.version=x;const m=o.get(u);m&&t.remove(m),o.set(u,f)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ep(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,p){s.drawElements(n,p,o,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function u(d,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/r,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let m=0;for(let b=0;b<g;b++)m+=p[b];for(let b=0;b<x.length;b++)e.update(m,n,x[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ap(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rp(s,t,e){const n=new WeakMap,i=new de;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),f===!0&&(y=3);let R=a.attributes.position.count*y,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*E*4*u),C=new wc(T,R,E,u);C.type=tn,C.needsUpdate=!0;const D=y*4;for(let S=0;S<u;S++){const I=m[S],U=b[S],B=_[S],W=R*E*4*S;for(let H=0;H<I.count;H++){const $=H*D;g===!0&&(i.fromBufferAttribute(I,H),T[W+$+0]=i.x,T[W+$+1]=i.y,T[W+$+2]=i.z,T[W+$+3]=0),x===!0&&(i.fromBufferAttribute(U,H),T[W+$+4]=i.x,T[W+$+5]=i.y,T[W+$+6]=i.z,T[W+$+7]=0),f===!0&&(i.fromBufferAttribute(B,H),T[W+$+8]=i.x,T[W+$+9]=i.y,T[W+$+10]=i.z,T[W+$+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new st(R,E)},n.set(a,d),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function Cp(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class ba extends Ae{constructor(t,e,n,i,o,r,a,l,c,h=Ei){if(h!==Ei&&h!==Jn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Zn),n===void 0&&h===Jn&&(n=Kn),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dc=new Ae,pl=new ba(1,1),Ic=new wc,Uc=new mu,Fc=new Pc,ml=[],gl=[],vl=new Float32Array(16),_l=new Float32Array(9),xl=new Float32Array(4);function Bi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=ml[i];if(o===void 0&&(o=new Float32Array(i),ml[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _o(s,t){let e=gl[t];e===void 0&&(e=new Int32Array(t),gl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;xl.set(n),s.uniformMatrix2fv(this.addr,!1,xl),ye(e,n)}}function Fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;_l.set(n),s.uniformMatrix3fv(this.addr,!1,_l),ye(e,n)}}function Np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;vl.set(n),s.uniformMatrix4fv(this.addr,!1,vl),ye(e,n)}}function Op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Hp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Xp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(pl.compareFunction=Sc,o=pl):o=Dc,e.setTexture2D(t||o,i)}function qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uc,i)}function Yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fc,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ic,i)}function $p(s){switch(s){case 5126:return Pp;case 35664:return Lp;case 35665:return Dp;case 35666:return Ip;case 35674:return Up;case 35675:return Fp;case 35676:return Np;case 5124:case 35670:return Op;case 35667:case 35671:return kp;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Hp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}function Zp(s,t){s.uniform1fv(this.addr,t)}function Kp(s,t){const e=Bi(t,this.size,2);s.uniform2fv(this.addr,e)}function Jp(s,t){const e=Bi(t,this.size,3);s.uniform3fv(this.addr,e)}function Qp(s,t){const e=Bi(t,this.size,4);s.uniform4fv(this.addr,e)}function tm(s,t){const e=Bi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function em(s,t){const e=Bi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function nm(s,t){const e=Bi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function im(s,t){s.uniform1iv(this.addr,t)}function sm(s,t){s.uniform2iv(this.addr,t)}function om(s,t){s.uniform3iv(this.addr,t)}function rm(s,t){s.uniform4iv(this.addr,t)}function am(s,t){s.uniform1uiv(this.addr,t)}function lm(s,t){s.uniform2uiv(this.addr,t)}function cm(s,t){s.uniform3uiv(this.addr,t)}function hm(s,t){s.uniform4uiv(this.addr,t)}function um(s,t,e){const n=this.cache,i=t.length,o=_o(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Dc,o[r])}function dm(s,t,e){const n=this.cache,i=t.length,o=_o(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Uc,o[r])}function fm(s,t,e){const n=this.cache,i=t.length,o=_o(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Fc,o[r])}function pm(s,t,e){const n=this.cache,i=t.length,o=_o(e,i);xe(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ic,o[r])}function mm(s){switch(s){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return Qp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return rm;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function yl(s,t){s.seq.push(t),s.map[t.id]=t}function xm(s,t,e){const n=s.name,i=n.length;for(Qo.lastIndex=0;;){const o=Qo.exec(n),r=Qo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){yl(e,c===void 0?new gm(a,s,t):new vm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _m(a),yl(e,u)),e=u}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);xm(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Sl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ym=37297;let Sm=0;function bm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function Mm(s){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(s);let n;switch(t===e?n="":t===ao&&e===ro?n="LinearDisplayP3ToLinearSRGB":t===ro&&e===ao&&(n="LinearSRGBToLinearDisplayP3"),s){case Un:case go:return[n,"LinearTransferOETF"];case We:case ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function bl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+bm(s.getShaderSource(t),r)}else return i}function wm(s,t){const e=Mm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tm(s,t){let e;switch(t){case Th:e="Linear";break;case Eh:e="Reinhard";break;case Ah:e="Cineon";break;case Rh:e="ACESFilmic";break;case Ph:e="AgX";break;case Lh:e="Neutral";break;case Ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fs=new N;function Em(){se.getLuminanceCoefficients(Fs);const s=Fs.x.toFixed(4),t=Fs.y.toFixed(4),e=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Rm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Ji(s){return s!==""}function Ml(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(s){return s.replace(Pm,Dm)}const Lm=new Map;function Dm(s,t){let e=Xt[t];if(e===void 0){const n=Lm.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jr(e)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tl(s){return s.replace(Im,Um)}function Um(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function El(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Di:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Om(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function km(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case wh:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Fm(e),c=Nm(e),h=Om(e),u=km(e),d=Bm(e),p=Am(e),g=Rm(o),x=i.createProgram();let f,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(f=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[El(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),r=Jr(r),r=Ml(r,e),r=wl(r,e),a=Jr(a),a=Ml(a,e),a=wl(a,e),r=Tl(r),a=Tl(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=b+f+r,y=b+m+a,R=Sl(i,i.VERTEX_SHADER,_),E=Sl(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(S){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(E).trim();let W=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,E);else{const $=bl(i,R,"vertex"),X=bl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+$+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||B==="")&&(H=!1);H&&(S.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:f},fragmentShader:{log:B,prefix:m}})}i.deleteShader(R),i.deleteShader(E),C=new no(i,x),D=Cm(i,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,ym)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}let Hm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vm(t),e.set(t,n)),n}}class Vm{constructor(t){this.id=Hm++,this.code=t,this.usedTimes=0}}function Wm(s,t,e,n,i,o,r){const a=new _a,l=new Gm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,p=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,I,U,B){const W=U.fog,H=B.geometry,$=v.isMeshStandardMaterial?U.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),it=X&&X.mapping===po?X.image.height:null,ht=x[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ft=ut!==void 0?ut.length:0;let Yt=0;H.morphAttributes.position!==void 0&&(Yt=1),H.morphAttributes.normal!==void 0&&(Yt=2),H.morphAttributes.color!==void 0&&(Yt=3);let Z,nt,Mt,lt;if(ht){const Ue=rn[ht];Z=Ue.vertexShader,nt=Ue.fragmentShader}else Z=v.vertexShader,nt=v.fragmentShader,l.update(v),Mt=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const Lt=s.getRenderTarget(),Pt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,Vt=!!v.map,tt=!!v.matcap,L=!!X,dt=!!v.aoMap,ct=!!v.lightMap,ot=!!v.bumpMap,ft=!!v.normalMap,Rt=!!v.displacementMap,yt=!!v.emissiveMap,P=!!v.metalnessMap,w=!!v.roughnessMap,V=v.anisotropy>0,K=v.clearcoat>0,et=v.dispersion>0,J=v.iridescence>0,Et=v.sheen>0,pt=v.transmission>0,_t=V&&!!v.anisotropyMap,Wt=K&&!!v.clearcoatMap,rt=K&&!!v.clearcoatNormalMap,xt=K&&!!v.clearcoatRoughnessMap,Nt=J&&!!v.iridescenceMap,Ot=J&&!!v.iridescenceThicknessMap,Tt=Et&&!!v.sheenColorMap,$t=Et&&!!v.sheenRoughnessMap,zt=!!v.specularMap,Kt=!!v.specularColorMap,O=!!v.specularIntensityMap,vt=pt&&!!v.transmissionMap,j=pt&&!!v.thicknessMap,Q=!!v.gradientMap,St=!!v.alphaMap,wt=v.alphaTest>0,Zt=!!v.alphaHash,ge=!!v.extensions;let Ie=yn;v.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const Qt={shaderID:ht,shaderType:v.type,shaderName:v.name,vertexShader:Z,fragmentShader:nt,defines:v.defines,customVertexShaderID:Mt,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Lt===null?s.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Un,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:tt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:it,aoMap:dt,lightMap:ct,bumpMap:ot,normalMap:ft,displacementMap:p&&Rt,emissiveMap:yt,normalMapObjectSpace:ft&&v.normalMapType===Fh,normalMapTangentSpace:ft&&v.normalMapType===pa,metalnessMap:P,roughnessMap:w,anisotropy:V,anisotropyMap:_t,clearcoat:K,clearcoatMap:Wt,clearcoatNormalMap:rt,clearcoatRoughnessMap:xt,dispersion:et,iridescence:J,iridescenceMap:Nt,iridescenceThicknessMap:Ot,sheen:Et,sheenColorMap:Tt,sheenRoughnessMap:$t,specularMap:zt,specularColorMap:Kt,specularIntensityMap:O,transmission:pt,transmissionMap:vt,thicknessMap:j,gradientMap:Q,opaque:v.transparent===!1&&v.blending===$n&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:wt,alphaHash:Zt,combine:v.combine,mapUv:Vt&&f(v.map.channel),aoMapUv:dt&&f(v.aoMap.channel),lightMapUv:ct&&f(v.lightMap.channel),bumpMapUv:ot&&f(v.bumpMap.channel),normalMapUv:ft&&f(v.normalMap.channel),displacementMapUv:Rt&&f(v.displacementMap.channel),emissiveMapUv:yt&&f(v.emissiveMap.channel),metalnessMapUv:P&&f(v.metalnessMap.channel),roughnessMapUv:w&&f(v.roughnessMap.channel),anisotropyMapUv:_t&&f(v.anisotropyMap.channel),clearcoatMapUv:Wt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:$t&&f(v.sheenRoughnessMap.channel),specularMapUv:zt&&f(v.specularMap.channel),specularColorMapUv:Kt&&f(v.specularColorMap.channel),specularIntensityMapUv:O&&f(v.specularIntensityMap.channel),transmissionMapUv:vt&&f(v.transmissionMap.channel),thicknessMapUv:j&&f(v.thicknessMap.channel),alphaMapUv:St&&f(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ft||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Vt||St),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===De,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function b(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(S,v),y(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const S=x[v.type];let I;if(S){const U=rn[S];I=xn.clone(U.uniforms)}else I=v.uniforms;return I}function E(v,S){let I;for(let U=0,B=h.length;U<B;U++){const W=h[U];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new zm(s,S,v,o),h.push(I)),I}function T(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function C(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:D}}function Xm(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function qm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rl(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,p,g,x,f){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=f),t++,m}function a(u,d,p,g,x,f){const m=r(u,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,d,p,g,x,f){const m=r(u,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||qm),n.length>1&&n.sort(d||Al),i.length>1&&i.sort(d||Al)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function Ym(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Rl,s.set(n,[r])):i>=o.length?(r=new Rl,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function jm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new mt};break;case"SpotLight":e={position:new N,direction:new N,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Zm=0;function Km(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jm(s){const t=new jm,e=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,o=new jt,r=new jt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,b=0,_=0,y=0,R=0,E=0,T=0;c.sort(Km);for(let D=0,v=c.length;D<v;D++){const S=c[D],I=S.color,U=S.intensity,B=S.distance,W=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*U,u+=I.g*U,d+=I.b*U;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],U);T++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,X=e.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=S.shadow.matrix,b++}n.directional[p]=H,p++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(I).multiplyScalar(U),H.distance=B,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[x]=H;const $=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,$.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,S.castShadow){const X=e.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=W,y++}x++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(I).multiplyScalar(U),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=H,f++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const $=S.shadow,X=e.get(S);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=H,g++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(U),H.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[m]=H,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==f||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=T,n.version=Zm++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const f=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const _=c[m];if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(f),u++}else if(_.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(f),p++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),r.identity(),o.copy(_.matrixWorld),o.premultiply(f),r.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function Cl(s){const t=new Jm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Qm(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Cl(s),t.set(i,[a])):o>=r.length?(a=new Cl(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class t0 extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e0 extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s0(s,t,e){let n=new xa;const i=new st,o=new st,r=new de,a=new t0({depthPacking:Uh}),l=new e0,c={},h=e.maxTextureSize,u={[nn]:De,[De]:nn,[an]:an},d=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ae(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let m=this.type;this.render=function(E,T,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const D=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Le),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=m!==mn&&this.type===mn,B=m===mn&&this.type!==mn;for(let W=0,H=E.length;W<H;W++){const $=E[W],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const it=X.getFrameExtents();if(i.multiply(it),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/it.x),i.x=o.x*it.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/it.y),i.y=o.y*it.y,X.mapSize.y=o.y)),X.map===null||U===!0||B===!0){const ut=this.type!==mn?{minFilter:Ee,magFilter:Ee}:{};X.map!==null&&X.map.dispose(),X.map=new Fe(i.x,i.y,ut),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const ht=X.getViewportCount();for(let ut=0;ut<ht;ut++){const Ft=X.getViewport(ut);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),I.viewport(r),X.updateMatrices($,ut),n=X.getFrustum(),y(T,C,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===mn&&b(X,C),X.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(D,v,S)};function b(E,T){const C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fe(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,p,x,null)}function _(E,T,C,D){let v=null;const S=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)v=S;else if(v=C.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,U=T.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let W=B[U];W===void 0&&(W=v.clone(),B[U]=W,T.addEventListener("dispose",R)),v=W}if(v.visible=T.visible,v.wireframe=T.wireframe,D===mn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=s.properties.get(v);I.light=C}return v}function y(E,T,C,D,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const U=t.update(E),B=E.material;if(Array.isArray(B)){const W=U.groups;for(let H=0,$=W.length;H<$;H++){const X=W[H],it=B[X.materialIndex];if(it&&it.visible){const ht=_(E,it,D,v);E.onBeforeShadow(s,E,T,C,U,ht,X),s.renderBufferDirect(C,null,U,ht,E,X),E.onAfterShadow(s,E,T,C,U,ht,X)}}}else if(B.visible){const W=_(E,B,D,v);E.onBeforeShadow(s,E,T,C,U,W,null),s.renderBufferDirect(C,null,U,W,E,null),E.onAfterShadow(s,E,T,C,U,W,null)}}const I=E.children;for(let U=0,B=I.length;U<B;U++)y(I[U],T,C,D,v)}function R(E){E.target.removeEventListener("dispose",R);for(const C in c){const D=c[C],v=E.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}const o0={[mr]:gr,[vr]:yr,[_r]:Sr,[Pi]:xr,[gr]:mr,[yr]:vr,[Sr]:_r,[xr]:Pi};function r0(s){function t(){let O=!1;const vt=new de;let j=null;const Q=new de(0,0,0,0);return{setMask:function(St){j!==St&&!O&&(s.colorMask(St,St,St,St),j=St)},setLocked:function(St){O=St},setClear:function(St,wt,Zt,ge,Ie){Ie===!0&&(St*=ge,wt*=ge,Zt*=ge),vt.set(St,wt,Zt,ge),Q.equals(vt)===!1&&(s.clearColor(St,wt,Zt,ge),Q.copy(vt))},reset:function(){O=!1,j=null,Q.set(-1,0,0,0)}}}function e(){let O=!1,vt=!1,j=null,Q=null,St=null;return{setReversed:function(wt){vt=wt},setTest:function(wt){wt?Mt(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(wt){j!==wt&&!O&&(s.depthMask(wt),j=wt)},setFunc:function(wt){if(vt&&(wt=o0[wt]),Q!==wt){switch(wt){case mr:s.depthFunc(s.NEVER);break;case gr:s.depthFunc(s.ALWAYS);break;case vr:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case _r:s.depthFunc(s.EQUAL);break;case xr:s.depthFunc(s.GEQUAL);break;case yr:s.depthFunc(s.GREATER);break;case Sr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=wt}},setLocked:function(wt){O=wt},setClear:function(wt){St!==wt&&(s.clearDepth(wt),St=wt)},reset:function(){O=!1,j=null,Q=null,St=null}}}function n(){let O=!1,vt=null,j=null,Q=null,St=null,wt=null,Zt=null,ge=null,Ie=null;return{setTest:function(Qt){O||(Qt?Mt(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(Qt){vt!==Qt&&!O&&(s.stencilMask(Qt),vt=Qt)},setFunc:function(Qt,Ue,cn){(j!==Qt||Q!==Ue||St!==cn)&&(s.stencilFunc(Qt,Ue,cn),j=Qt,Q=Ue,St=cn)},setOp:function(Qt,Ue,cn){(wt!==Qt||Zt!==Ue||ge!==cn)&&(s.stencilOp(Qt,Ue,cn),wt=Qt,Zt=Ue,ge=cn)},setLocked:function(Qt){O=Qt},setClear:function(Qt){Ie!==Qt&&(s.clearStencil(Qt),Ie=Qt)},reset:function(){O=!1,vt=null,j=null,Q=null,St=null,wt=null,Zt=null,ge=null,Ie=null}}}const i=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,f=null,m=null,b=null,_=null,y=null,R=null,E=new mt(0,0,0),T=0,C=!1,D=null,v=null,S=null,I=null,U=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),W=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=H>=2);let X=null,it={};const ht=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),Ft=new de().fromArray(ht),Yt=new de().fromArray(ut);function Z(O,vt,j,Q){const St=new Uint8Array(4),wt=s.createTexture();s.bindTexture(O,wt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<j;Zt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(vt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return wt}const nt={};nt[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Mt(s.DEPTH_TEST),o.setFunc(Pi),ct(!1),ot(Ba),Mt(s.CULL_FACE),L(Le);function Mt(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function lt(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Lt(O,vt){return h[O]!==vt?(s.bindFramebuffer(O,vt),h[O]=vt,O===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=vt),O===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function Pt(O,vt){let j=d,Q=!1;if(O){j=u.get(vt),j===void 0&&(j=[],u.set(vt,j));const St=O.textures;if(j.length!==St.length||j[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,Zt=St.length;wt<Zt;wt++)j[wt]=s.COLOR_ATTACHMENT0+wt;j.length=St.length,Q=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Q=!0);Q&&s.drawBuffers(j)}function Ut(O){return p!==O?(s.useProgram(O),p=O,!0):!1}const Vt={[gn]:s.FUNC_ADD,[ch]:s.FUNC_SUBTRACT,[hh]:s.FUNC_REVERSE_SUBTRACT};Vt[uh]=s.MIN,Vt[dh]=s.MAX;const tt={[dr]:s.ZERO,[fh]:s.ONE,[ph]:s.SRC_COLOR,[fr]:s.SRC_ALPHA,[_h]:s.SRC_ALPHA_SATURATE,[cc]:s.DST_COLOR,[lc]:s.DST_ALPHA,[mh]:s.ONE_MINUS_SRC_COLOR,[pr]:s.ONE_MINUS_SRC_ALPHA,[vh]:s.ONE_MINUS_DST_COLOR,[gh]:s.ONE_MINUS_DST_ALPHA,[xh]:s.CONSTANT_COLOR,[yh]:s.ONE_MINUS_CONSTANT_COLOR,[Sh]:s.CONSTANT_ALPHA,[bh]:s.ONE_MINUS_CONSTANT_ALPHA};function L(O,vt,j,Q,St,wt,Zt,ge,Ie,Qt){if(O===Le){g===!0&&(lt(s.BLEND),g=!1);return}if(g===!1&&(Mt(s.BLEND),g=!0),O!==ac){if(O!==x||Qt!==C){if((f!==gn||_!==gn)&&(s.blendEquation(s.FUNC_ADD),f=gn,_=gn),Qt)switch(O){case $n:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case io:s.blendFunc(s.ONE,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case $n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case io:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,b=null,y=null,R=null,E.set(0,0,0),T=0,x=O,C=Qt}return}St=St||vt,wt=wt||j,Zt=Zt||Q,(vt!==f||St!==_)&&(s.blendEquationSeparate(Vt[vt],Vt[St]),f=vt,_=St),(j!==m||Q!==b||wt!==y||Zt!==R)&&(s.blendFuncSeparate(tt[j],tt[Q],tt[wt],tt[Zt]),m=j,b=Q,y=wt,R=Zt),(ge.equals(E)===!1||Ie!==T)&&(s.blendColor(ge.r,ge.g,ge.b,Ie),E.copy(ge),T=Ie),x=O,C=!1}function dt(O,vt){O.side===an?lt(s.CULL_FACE):Mt(s.CULL_FACE);let j=O.side===De;vt&&(j=!j),ct(j),O.blending===$n&&O.transparent===!1?L(Le):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),i.setMask(O.colorWrite);const Q=O.stencilWrite;r.setTest(Q),Q&&(r.setMask(O.stencilWriteMask),r.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),r.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){D!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),D=O)}function ot(O){O!==ah?(Mt(s.CULL_FACE),O!==v&&(O===Ba?s.cullFace(s.BACK):O===lh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),v=O}function ft(O){O!==S&&(W&&s.lineWidth(O),S=O)}function Rt(O,vt,j){O?(Mt(s.POLYGON_OFFSET_FILL),(I!==vt||U!==j)&&(s.polygonOffset(vt,j),I=vt,U=j)):lt(s.POLYGON_OFFSET_FILL)}function yt(O){O?Mt(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function P(O){O===void 0&&(O=s.TEXTURE0+B-1),X!==O&&(s.activeTexture(O),X=O)}function w(O,vt,j){j===void 0&&(X===null?j=s.TEXTURE0+B-1:j=X);let Q=it[j];Q===void 0&&(Q={type:void 0,texture:void 0},it[j]=Q),(Q.type!==O||Q.texture!==vt)&&(X!==j&&(s.activeTexture(j),X=j),s.bindTexture(O,vt||nt[O]),Q.type=O,Q.texture=vt)}function V(){const O=it[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(O){Ft.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ft.copy(O))}function Tt(O){Yt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Yt.copy(O))}function $t(O,vt){let j=l.get(vt);j===void 0&&(j=new WeakMap,l.set(vt,j));let Q=j.get(O);Q===void 0&&(Q=s.getUniformBlockIndex(vt,O.name),j.set(O,Q))}function zt(O,vt){const Q=l.get(vt).get(O);a.get(vt)!==Q&&(s.uniformBlockBinding(vt,Q,O.__bindingPointIndex),a.set(vt,Q))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,it={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,f=null,m=null,b=null,_=null,y=null,R=null,E=new mt(0,0,0),T=0,C=!1,D=null,v=null,S=null,I=null,U=null,Ft.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),o.reset(),r.reset()}return{buffers:{color:i,depth:o,stencil:r},enable:Mt,disable:lt,bindFramebuffer:Lt,drawBuffers:Pt,useProgram:Ut,setBlending:L,setMaterial:dt,setFlipSided:ct,setCullFace:ot,setLineWidth:ft,setPolygonOffset:Rt,setScissorTest:yt,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:xt,texImage3D:Nt,updateUBOMapping:$t,uniformBlockBinding:zt,texStorage2D:Wt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:_t,scissor:Ot,viewport:Tt,reset:Kt}}function Pl(s,t,e,n){const i=a0(n);switch(e){case mc:return s*t;case vc:return s*t;case _c:return s*t*2;case mo:return s*t/i.components*i.byteLength;case ua:return s*t/i.components*i.byteLength;case xc:return s*t*2/i.components*i.byteLength;case da:return s*t*2/i.components*i.byteLength;case gc:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case fa:return s*t*4/i.components*i.byteLength;case Zs:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tr:case Ar:return Math.max(s,16)*Math.max(t,8)/4;case wr:case Er:return Math.max(s,8)*Math.max(t,8)/2;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case to:case Xr:case qr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yc:case Yr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jr:case $r:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(s){switch(s){case Sn:case dc:return{byteLength:1,components:1};case rs:case fc:case qe:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case Zn:case la:case tn:return{byteLength:4,components:1};case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function l0(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):co("canvas")}function x(P,w,V){let K=1;const et=yt(P);if((et.width>V||et.height>V)&&(K=V/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(K*et.width),Et=Math.floor(K*et.height);u===void 0&&(u=g(J,Et));const pt=w?g(J,Et):u;return pt.width=J,pt.height=Et,pt.getContext("2d").drawImage(P,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Et+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Ee&&P.minFilter!==Je}function m(P){s.generateMipmap(P)}function b(P,w,V,K,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),w===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),w===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){const Et=et?oo:se.getTransfer(K);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Et===ue?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(P,w){let V;return P?w===null||w===Zn||w===Kn?V=s.DEPTH24_STENCIL8:w===tn?V=s.DEPTH32F_STENCIL8:w===rs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zn||w===Kn?V=s.DEPTH_COMPONENT24:w===tn?V=s.DEPTH_COMPONENT32F:w===rs&&(V=s.DEPTH_COMPONENT16),V}function y(P,w){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ee&&P.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&h.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),D(w)}function T(P){const w=n.get(P);if(w.__webglInit===void 0)return;const V=P.source,K=d.get(V);if(K){const et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&C(P),Object.keys(K).length===0&&d.delete(V)}n.remove(P)}function C(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const V=P.source,K=d.get(V);delete K[w.__cacheKey],r.memory.textures--}function D(P){const w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let et=0;et<w.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[K][et]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let K=0,et=V.length;K<et;K++){const J=n.get(V[K]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(V[K])}n.remove(P)}let v=0;function S(){v=0}function I(){const P=v;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),v+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function B(P,w){const V=n.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(V,P,w);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function W(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Yt(V,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function H(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Yt(V,P,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function $(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}const X={[os]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Mr]:s.MIRRORED_REPEAT},it={[Ee]:s.NEAREST,[Dh]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Eo]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},ht={[Nh]:s.NEVER,[Gh]:s.ALWAYS,[Oh]:s.LESS,[Sc]:s.LEQUAL,[kh]:s.EQUAL,[Hh]:s.GEQUAL,[Bh]:s.GREATER,[zh]:s.NOTEQUAL};function ut(P,w){if(w.type===tn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Je||w.magFilter===Eo||w.magFilter===ms||w.magFilter===jn||w.minFilter===Je||w.minFilter===Eo||w.minFilter===ms||w.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,X[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,X[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,X[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,it[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ht[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ee||w.minFilter!==ms&&w.minFilter!==jn||w.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ft(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const K=w.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const J=U(w);if(J!==P.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,V=!0),et[J].usedTimes++;const Et=et[P.__cacheKey];Et!==void 0&&(et[P.__cacheKey].usedTimes--,Et.usedTimes===0&&C(w)),P.__cacheKey=J,P.__webglTexture=et[J].texture}return V}function Yt(P,w,V){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);const et=Ft(P,w),J=w.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+V);const Et=n.get(J);if(J.version!==Et.__version||et===!0){e.activeTexture(s.TEXTURE0+V);const pt=se.getPrimaries(se.workingColorSpace),_t=w.colorSpace===Ln?null:se.getPrimaries(w.colorSpace),Wt=w.colorSpace===Ln||pt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let rt=x(w.image,!1,i.maxTextureSize);rt=Rt(w,rt);const xt=o.convert(w.format,w.colorSpace),Nt=o.convert(w.type);let Ot=b(w.internalFormat,xt,Nt,w.colorSpace,w.isVideoTexture);ut(K,w);let Tt;const $t=w.mipmaps,zt=w.isVideoTexture!==!0,Kt=Et.__version===void 0||et===!0,O=J.dataReady,vt=y(w,rt);if(w.isDepthTexture)Ot=_(w.format===Jn,w.type),Kt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,rt.width,rt.height,0,xt,Nt,null));else if(w.isDataTexture)if($t.length>0){zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,vt,Ot,$t[0].width,$t[0].height);for(let j=0,Q=$t.length;j<Q;j++)Tt=$t[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,xt,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,j,Ot,Tt.width,Tt.height,0,xt,Nt,Tt.data);w.generateMipmaps=!1}else zt?(Kt&&e.texStorage2D(s.TEXTURE_2D,vt,Ot,rt.width,rt.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Nt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,rt.width,rt.height,0,xt,Nt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){zt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Ot,$t[0].width,$t[0].height,rt.depth);for(let j=0,Q=$t.length;j<Q;j++)if(Tt=$t[j],w.format!==en)if(xt!==null)if(zt){if(O)if(w.layerUpdates.size>0){const St=Pl(Tt.width,Tt.height,w.format,w.type);for(const wt of w.layerUpdates){const Zt=Tt.data.subarray(wt*St/Tt.data.BYTES_PER_ELEMENT,(wt+1)*St/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,wt,Tt.width,Tt.height,1,xt,Zt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,rt.depth,xt,Tt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ot,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,rt.depth,xt,Nt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Ot,Tt.width,Tt.height,rt.depth,0,xt,Nt,Tt.data)}else{zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,vt,Ot,$t[0].width,$t[0].height);for(let j=0,Q=$t.length;j<Q;j++)Tt=$t[j],w.format!==en?xt!==null?zt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,xt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,xt,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,j,Ot,Tt.width,Tt.height,0,xt,Nt,Tt.data)}else if(w.isDataArrayTexture)if(zt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,Ot,rt.width,rt.height,rt.depth),O)if(w.layerUpdates.size>0){const j=Pl(rt.width,rt.height,w.format,w.type);for(const Q of w.layerUpdates){const St=rt.data.subarray(Q*j/rt.data.BYTES_PER_ELEMENT,(Q+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,xt,Nt,St)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(w.isData3DTexture)zt?(Kt&&e.texStorage3D(s.TEXTURE_3D,vt,Ot,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Nt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,xt,Nt,rt.data);else if(w.isFramebufferTexture){if(Kt)if(zt)e.texStorage2D(s.TEXTURE_2D,vt,Ot,rt.width,rt.height);else{let j=rt.width,Q=rt.height;for(let St=0;St<vt;St++)e.texImage2D(s.TEXTURE_2D,St,Ot,j,Q,0,xt,Nt,null),j>>=1,Q>>=1}}else if($t.length>0){if(zt&&Kt){const j=yt($t[0]);e.texStorage2D(s.TEXTURE_2D,vt,Ot,j.width,j.height)}for(let j=0,Q=$t.length;j<Q;j++)Tt=$t[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,xt,Nt,Tt):e.texImage2D(s.TEXTURE_2D,j,Ot,xt,Nt,Tt);w.generateMipmaps=!1}else if(zt){if(Kt){const j=yt(rt);e.texStorage2D(s.TEXTURE_2D,vt,Ot,j.width,j.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Nt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,xt,Nt,rt);f(w)&&m(K),Et.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Z(P,w,V){if(w.image.length!==6)return;const K=Ft(P,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(s.TEXTURE0+V);const Et=se.getPrimaries(se.workingColorSpace),pt=w.colorSpace===Ln?null:se.getPrimaries(w.colorSpace),_t=w.colorSpace===Ln||Et===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Wt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Wt&&!rt?xt[Q]=x(w.image[Q],!0,i.maxCubemapSize):xt[Q]=rt?w.image[Q].image:w.image[Q],xt[Q]=Rt(w,xt[Q]);const Nt=xt[0],Ot=o.convert(w.format,w.colorSpace),Tt=o.convert(w.type),$t=b(w.internalFormat,Ot,Tt,w.colorSpace),zt=w.isVideoTexture!==!0,Kt=J.__version===void 0||K===!0,O=et.dataReady;let vt=y(w,Nt);ut(s.TEXTURE_CUBE_MAP,w);let j;if(Wt){zt&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,$t,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){j=xt[Q].mipmaps;for(let St=0;St<j.length;St++){const wt=j[St];w.format!==en?Ot!==null?zt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,wt.width,wt.height,Ot,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,$t,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,wt.width,wt.height,Ot,Tt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,$t,wt.width,wt.height,0,Ot,Tt,wt.data)}}}else{if(j=w.mipmaps,zt&&Kt){j.length>0&&vt++;const Q=yt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){zt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ot,Tt,xt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,xt[Q].width,xt[Q].height,0,Ot,Tt,xt[Q].data);for(let St=0;St<j.length;St++){const Zt=j[St].image[Q].image;zt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,Zt.width,Zt.height,Ot,Tt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,$t,Zt.width,Zt.height,0,Ot,Tt,Zt.data)}}else{zt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,Tt,xt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Ot,Tt,xt[Q]);for(let St=0;St<j.length;St++){const wt=j[St];zt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,Ot,Tt,wt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,$t,Ot,Tt,wt.image[Q])}}}f(w)&&m(s.TEXTURE_CUBE_MAP),J.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function nt(P,w,V,K,et,J){const Et=o.convert(V.format,V.colorSpace),pt=o.convert(V.type),_t=b(V.internalFormat,Et,pt,V.colorSpace);if(!n.get(w).__hasExternalTextures){const rt=Math.max(1,w.width>>J),xt=Math.max(1,w.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,_t,rt,xt,w.depth,0,Et,pt,null):e.texImage2D(et,J,_t,rt,xt,0,Et,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ot(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,n.get(V).__webglTexture,0,ct(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,n.get(V).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const K=w.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=_(w.stencilBuffer,et),Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=ct(w);ot(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,J,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,P)}else{const K=w.textures;for(let et=0;et<K.length;et++){const J=K[et],Et=o.convert(J.format,J.colorSpace),pt=o.convert(J.type),_t=b(J.internalFormat,Et,pt,J.colorSpace),Wt=ct(w);V&&ot(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,_t,w.width,w.height):ot(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,_t,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_t,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const K=n.get(w.depthTexture).__webglTexture,et=ct(w);if(w.depthTexture.format===Ei)ot(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(w.depthTexture.format===Jn)ot(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const w=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=K}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");lt(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),Mt(w.__webglDepthbuffer[K],P,!1);else{const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Mt(w.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,w,V){const K=n.get(P);w!==void 0&&nt(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Lt(P)}function Ut(P){const w=P.texture,V=n.get(P),K=n.get(w);P.addEventListener("dispose",E);const et=P.textures,J=P.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,r.memory.textures++),J){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let _t=0;_t<w.mipmaps.length;_t++)V.__webglFramebuffer[pt][_t]=s.createFramebuffer()}else V.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)V.__webglFramebuffer[pt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Et)for(let pt=0,_t=et.length;pt<_t;pt++){const Wt=n.get(et[pt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&ot(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const _t=et[pt];V.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const Wt=o.convert(_t.format,_t.colorSpace),rt=o.convert(_t.type),xt=b(_t.internalFormat,Wt,rt,_t.colorSpace,P.isXRRenderTarget===!0),Nt=ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,xt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ut(s.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)nt(V.__webglFramebuffer[pt][_t],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_t);else nt(V.__webglFramebuffer[pt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);f(w)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,_t=et.length;pt<_t;pt++){const Wt=et[pt],rt=n.get(Wt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),ut(s.TEXTURE_2D,Wt),nt(V.__webglFramebuffer,P,Wt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),f(Wt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),ut(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)nt(V.__webglFramebuffer[_t],P,w,s.COLOR_ATTACHMENT0,pt,_t);else nt(V.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,pt,0);f(w)&&m(pt),e.unbindTexture()}P.depthBuffer&&Lt(P)}function Vt(P){const w=P.textures;for(let V=0,K=w.length;V<K;V++){const et=w[V];if(f(et)){const J=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=n.get(et).__webglTexture;e.bindTexture(J,Et),m(J),e.unbindTexture()}}}const tt=[],L=[];function dt(P){if(P.samples>0){if(ot(P)===!1){const w=P.textures,V=P.width,K=P.height;let et=s.COLOR_BUFFER_BIT;const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),pt=w.length>1;if(pt)for(let _t=0;_t<w.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<w.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Wt=n.get(w[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,et,s.NEAREST),l===!0&&(tt.length=0,L.length=0,tt.push(s.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tt.push(J),L.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let _t=0;_t<w.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Wt=n.get(w[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ct(P){return Math.min(i.maxSamples,P.samples)}function ot(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(P){const w=r.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Rt(P,w){const V=P.colorSpace,K=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Un&&V!==Ln&&(se.getTransfer(V)===ue?(K!==en||et!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Pt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=ot}function c0(s,t){function e(n,i=Ln){let o;const r=se.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===ca)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return s.BYTE;if(n===fc)return s.SHORT;if(n===rs)return s.UNSIGNED_SHORT;if(n===la)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===qe)return s.HALF_FLOAT;if(n===mc)return s.ALPHA;if(n===gc)return s.RGB;if(n===en)return s.RGBA;if(n===vc)return s.LUMINANCE;if(n===_c)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Jn)return s.DEPTH_STENCIL;if(n===mo)return s.RED;if(n===ua)return s.RED_INTEGER;if(n===xc)return s.RG;if(n===da)return s.RG_INTEGER;if(n===fa)return s.RGBA_INTEGER;if(n===Zs||n===Ks||n===Js||n===Qs)if(r===ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wr||n===Tr||n===Er||n===Ar)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===wr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Er)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ar)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Cr||n===Pr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rr||n===Cr)return r===ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Pr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lr||n===Dr||n===Ir||n===Ur||n===Fr||n===Nr||n===Or||n===kr||n===Br||n===zr||n===Hr||n===Gr||n===Vr||n===Wr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Lr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ir)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ur)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return r===ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===Xr||n===qr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===to)return r===ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===Yr||n===jr||n===$r)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===to)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kn?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class h0 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xe extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(c,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new le({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m0 extends Fi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new p0,f=e.getContextAttributes();let m=null,b=null;const _=[],y=[],R=new st;let E=null;const T=new ze;T.layers.enable(1),T.viewport=new de;const C=new ze;C.layers.enable(2),C.viewport=new de;const D=[T,C],v=new h0;v.layers.enable(1),v.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=_[Z];return nt===void 0&&(nt=new tr,_[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=_[Z];return nt===void 0&&(nt=new tr,_[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=_[Z];return nt===void 0&&(nt=new tr,_[Z]=nt),nt.getHandSpace()};function U(Z){const nt=y.indexOf(Z.inputSource);if(nt===-1)return;const Mt=_[nt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||r),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<_.length;Z++){const nt=y[Z];nt!==null&&(y[Z]=null,_[Z].disconnect(nt))}S=null,I=null,x.reset(),t.setRenderTarget(m),p=null,d=null,u=null,i=null,b=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Fe(p.framebufferWidth,p.framebufferHeight,{format:en,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let nt=null,Mt=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?Jn:Ei,Mt=f.stencil?Kn:Zn);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:o};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Fe(d.textureWidth,d.textureHeight,{format:en,type:Sn,depthTexture:new ba(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Z){for(let nt=0;nt<Z.removed.length;nt++){const Mt=Z.removed[nt],lt=y.indexOf(Mt);lt>=0&&(y[lt]=null,_[lt].disconnect(Mt))}for(let nt=0;nt<Z.added.length;nt++){const Mt=Z.added[nt];let lt=y.indexOf(Mt);if(lt===-1){for(let Pt=0;Pt<_.length;Pt++)if(Pt>=y.length){y.push(Mt),lt=Pt;break}else if(y[Pt]===null){y[Pt]=Mt,lt=Pt;break}if(lt===-1)break}const Lt=_[lt];Lt&&Lt.connect(Mt)}}const H=new N,$=new N;function X(Z,nt,Mt){H.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(Mt.matrixWorld);const lt=H.distanceTo($),Lt=nt.projectionMatrix.elements,Pt=Mt.projectionMatrix.elements,Ut=Lt[14]/(Lt[10]-1),Vt=Lt[14]/(Lt[10]+1),tt=(Lt[9]+1)/Lt[5],L=(Lt[9]-1)/Lt[5],dt=(Lt[8]-1)/Lt[0],ct=(Pt[8]+1)/Pt[0],ot=Ut*dt,ft=Ut*ct,Rt=lt/(-dt+ct),yt=Rt*-dt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Lt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const P=Ut+Rt,w=Vt+Rt,V=ot-yt,K=ft+(lt-yt),et=tt*Vt/w*P,J=L*Vt/w*P;Z.projectionMatrix.makePerspective(V,K,et,J,P,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let nt=Z.near,Mt=Z.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),v.near=C.near=T.near=nt,v.far=C.far=T.far=Mt,(S!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,I=v.far);const lt=Z.parent,Lt=v.cameras;it(v,lt);for(let Pt=0;Pt<Lt.length;Pt++)it(Lt[Pt],lt);Lt.length===2?X(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),ht(Z,v,lt)};function ht(Z,nt,Mt){Mt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=as*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ut=null;function Ft(Z,nt){if(h=nt.getViewerPose(c||r),g=nt,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let lt=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Pt=0;Pt<Mt.length;Pt++){const Ut=Mt[Pt];let Vt=null;if(p!==null)Vt=p.getViewport(Ut);else{const L=u.getViewSubImage(d,Ut);Vt=L.viewport,Pt===0&&(t.setRenderTargetTextures(b,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(b))}let tt=D[Pt];tt===void 0&&(tt=new ze,tt.layers.enable(Pt),tt.viewport=new de,D[Pt]=tt),tt.matrix.fromArray(Ut.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ut.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Pt===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(tt)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Pt=u.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,i.renderState)}}for(let Mt=0;Mt<_.length;Mt++){const lt=y[Mt],Lt=_[Mt];lt!==null&&Lt!==void 0&&Lt.update(lt,nt,c||r)}ut&&ut(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Yt=new Lc;Yt.setAnimationLoop(Ft),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}}const Hn=new Ye,g0=new jt;function v0(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Rc(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,b,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),u(f,m)):m.isMeshPhongMaterial?(o(f,m),h(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,y)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),x(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,b,_):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===De&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===De&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=t.get(m),_=b.envMap,y=b.envMapRotation;_&&(f.envMap.value=_,Hn.copy(y),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),f.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Hn)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=_*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const b=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _0(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",f));const R=_.program;n.updateUBOMapping(b,R);const E=t.render.frame;o[b.id]!==E&&(d(b),o[b.id]=E)}function h(b){const _=u();b.__bindingPointIndex=_;const y=s.createBuffer(),R=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=i[b.id],y=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=y.length;E<T;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let D=0,v=C.length;D<v;D++){const S=C[D];if(p(S,E,D,R)===!0){const I=S.__offset,U=Array.isArray(S.value)?S.value:[S.value];let B=0;for(let W=0;W<U.length;W++){const H=U[W],$=x(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,I+B,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,_,y,R){const E=b.value,T=_+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const C=R[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(b){const _=b.uniforms;let y=0;const R=16;for(let T=0,C=_.length;T<C;T++){const D=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,S=D.length;v<S;v++){const I=D[v],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=U.length;B<W;B++){const H=U[B],$=x(H),X=y%R,it=X%$.boundary,ht=X+it;y+=it,ht!==0&&R-ht<$.storage&&(y+=R-ht),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=$.storage}}}const E=y%R;return E>0&&(y+=R-E),b.__size=y,b.__cache={},this}function x(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(b){const _=b.target;_.removeEventListener("dispose",f);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:l,update:c,dispose:m}}class x0{constructor(t={}){const{canvas:e=ru(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=yn,this.toneMappingExposure=1;const _=this;let y=!1,R=0,E=0,T=null,C=-1,D=null;const v=new de,S=new de;let I=null;const U=new mt(0);let B=0,W=e.width,H=e.height,$=1,X=null,it=null;const ht=new de(0,0,W,H),ut=new de(0,0,W,H);let Ft=!1;const Yt=new xa;let Z=!1,nt=!1;const Mt=new jt,lt=new jt,Lt=new N,Pt=new de,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function tt(){return T===null?$:1}let L=n;function dt(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),L===null){const k="webgl2";if(L=dt(k,A),L===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,ot,ft,Rt,yt,P,w,V,K,et,J,Et,pt,_t,Wt,rt,xt,Nt,Ot,Tt,$t,zt,Kt,O;function vt(){ct=new wp(L),ct.init(),zt=new c0(L,ct),ot=new _p(L,ct,t,zt),ft=new r0(L),ot.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Rt=new Ap(L),yt=new Xm,P=new l0(L,ct,ft,yt,ot,zt,Rt),w=new yp(_),V=new Mp(_),K=new Iu(L),Kt=new gp(L,K),et=new Tp(L,K,Rt,Kt),J=new Cp(L,et,K,Rt),Ot=new Rp(L,ot,P),rt=new xp(yt),Et=new Wm(_,w,V,ct,ot,Kt,rt),pt=new v0(_,yt),_t=new Ym,Wt=new Qm(ct),Nt=new mp(_,w,V,ft,J,d,l),xt=new s0(_,J,ot),O=new _0(L,Rt,ot,ft),Tt=new vp(L,ct,Rt),$t=new Ep(L,ct,Rt),Rt.programs=Et.programs,_.capabilities=ot,_.extensions=ct,_.properties=yt,_.renderLists=_t,_.shadowMap=xt,_.state=ft,_.info=Rt}vt();const j=new m0(_,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(W,H,!1))},this.getSize=function(A){return A.set(W,H)},this.setSize=function(A,k,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,H=k,e.width=Math.floor(A*$),e.height=Math.floor(k*$),q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*$,H*$).floor()},this.setDrawingBufferSize=function(A,k,q){W=A,H=k,$=q,e.width=Math.floor(A*q),e.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(ht)},this.setViewport=function(A,k,q,Y){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,k,q,Y),ft.viewport(v.copy(ht).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,k,q,Y){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,k,q,Y),ft.scissor(S.copy(ut).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){ft.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,k=!0,q=!0){let Y=0;if(A){let G=!1;if(T!==null){const at=T.texture.format;G=at===fa||at===da||at===ua}if(G){const at=T.texture.type,bt=at===Sn||at===Zn||at===rs||at===Kn||at===ca||at===ha,At=Nt.getClearColor(),Ct=Nt.getClearAlpha(),kt=At.r,Bt=At.g,Dt=At.b;bt?(p[0]=kt,p[1]=Bt,p[2]=Dt,p[3]=Ct,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=kt,g[1]=Bt,g[2]=Dt,g[3]=Ct,L.clearBufferiv(L.COLOR,0,g))}else Y|=L.COLOR_BUFFER_BIT}k&&(Y|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),_t.dispose(),Wt.dispose(),yt.dispose(),w.dispose(),V.dispose(),J.dispose(),Kt.dispose(),O.dispose(),Et.dispose(),j.dispose(),j.removeEventListener("sessionstart",La),j.removeEventListener("sessionend",Da),Fn.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Rt.autoReset,k=xt.enabled,q=xt.autoUpdate,Y=xt.needsUpdate,G=xt.type;vt(),Rt.autoReset=A,xt.enabled=k,xt.autoUpdate=q,xt.needsUpdate=Y,xt.type=G}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){const k=A.target;k.removeEventListener("dispose",Zt),ge(k)}function ge(A){Ie(A),yt.remove(A)}function Ie(A){const k=yt.get(A).programs;k!==void 0&&(k.forEach(function(q){Et.releaseProgram(q)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,Y,G,at){k===null&&(k=Ut);const bt=G.isMesh&&G.matrixWorld.determinant()<0,At=eh(A,k,q,Y,G);ft.setMaterial(Y,bt);let Ct=q.index,kt=1;if(Y.wireframe===!0){if(Ct=et.getWireframeAttribute(q),Ct===void 0)return;kt=2}const Bt=q.drawRange,Dt=q.attributes.position;let oe=Bt.start*kt,he=(Bt.start+Bt.count)*kt;at!==null&&(oe=Math.max(oe,at.start*kt),he=Math.min(he,(at.start+at.count)*kt)),Ct!==null?(oe=Math.max(oe,0),he=Math.min(he,Ct.count)):Dt!=null&&(oe=Math.max(oe,0),he=Math.min(he,Dt.count));const pe=he-oe;if(pe<0||pe===1/0)return;Kt.setup(G,Y,At,q,Ct);let Ne,te=Tt;if(Ct!==null&&(Ne=K.get(Ct),te=$t,te.setIndex(Ne)),G.isMesh)Y.wireframe===!0?(ft.setLineWidth(Y.wireframeLinewidth*tt()),te.setMode(L.LINES)):te.setMode(L.TRIANGLES);else if(G.isLine){let It=Y.linewidth;It===void 0&&(It=1),ft.setLineWidth(It*tt()),G.isLineSegments?te.setMode(L.LINES):G.isLineLoop?te.setMode(L.LINE_LOOP):te.setMode(L.LINE_STRIP)}else G.isPoints?te.setMode(L.POINTS):G.isSprite&&te.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)te.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const It=G._multiDrawStarts,Me=G._multiDrawCounts,ee=G._multiDrawCount,je=Ct?K.get(Ct).bytesPerElement:1,oi=yt.get(Y).currentProgram.getUniforms();for(let Oe=0;Oe<ee;Oe++)oi.setValue(L,"_gl_DrawID",Oe),te.render(It[Oe]/je,Me[Oe])}else if(G.isInstancedMesh)te.renderInstances(oe,pe,G.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Me=Math.min(q.instanceCount,It);te.renderInstances(oe,pe,Me)}else te.render(oe,pe)};function Qt(A,k,q){A.transparent===!0&&A.side===an&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,ps(A,k,q),A.side=nn,A.needsUpdate=!0,ps(A,k,q),A.side=an):ps(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),f=Wt.get(q),f.init(k),b.push(f),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Y=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const at=G.material;if(at)if(Array.isArray(at))for(let bt=0;bt<at.length;bt++){const At=at[bt];Qt(At,q,G),Y.add(At)}else Qt(at,q,G),Y.add(at)}),b.pop(),f=null,Y},this.compileAsync=function(A,k,q=null){const Y=this.compile(A,k,q);return new Promise(G=>{function at(){if(Y.forEach(function(bt){yt.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){G(A);return}setTimeout(at,10)}ct.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ue=null;function cn(A){Ue&&Ue(A)}function La(){Fn.stop()}function Da(){Fn.start()}const Fn=new Lc;Fn.setAnimationLoop(cn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){Ue=A,j.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},j.addEventListener("sessionstart",La),j.addEventListener("sessionend",Da),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,T),f=Wt.get(A,b.length),f.init(k),b.push(f),lt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Yt.setFromProjectionMatrix(lt),nt=this.localClippingEnabled,Z=rt.init(this.clippingPlanes,nt),x=_t.get(A,m.length),x.init(),m.push(x),j.enabled===!0&&j.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&bo(at,k,-1/0,_.sortObjects)}bo(A,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,it),Vt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Vt&&Nt.addToRenderList(x,A),this.info.render.frame++,Z===!0&&rt.beginShadows();const q=f.state.shadowsArray;xt.render(q,A,k),Z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,G=x.transmissive;if(f.setupLights(),k.isArrayCamera){const at=k.cameras;if(G.length>0)for(let bt=0,At=at.length;bt<At;bt++){const Ct=at[bt];Ua(Y,G,A,Ct)}Vt&&Nt.render(A);for(let bt=0,At=at.length;bt<At;bt++){const Ct=at[bt];Ia(x,A,Ct,Ct.viewport)}}else G.length>0&&Ua(Y,G,A,k),Vt&&Nt.render(A),Ia(x,A,k);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,k),Kt.resetDefaultState(),C=-1,D=null,b.pop(),b.length>0?(f=b[b.length-1],Z===!0&&rt.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function bo(A,k,q,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Yt.intersectsSprite(A)){Y&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const bt=J.update(A),At=A.material;At.visible&&x.push(A,bt,At,q,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Yt.intersectsObject(A))){const bt=J.update(A),At=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(At)){const Ct=bt.groups;for(let kt=0,Bt=Ct.length;kt<Bt;kt++){const Dt=Ct[kt],oe=At[Dt.materialIndex];oe&&oe.visible&&x.push(A,bt,oe,q,Pt.z,Dt)}}else At.visible&&x.push(A,bt,At,q,Pt.z,null)}}const at=A.children;for(let bt=0,At=at.length;bt<At;bt++)bo(at[bt],k,q,Y)}function Ia(A,k,q,Y){const G=A.opaque,at=A.transmissive,bt=A.transparent;f.setupLightsView(q),Z===!0&&rt.setGlobalState(_.clippingPlanes,q),Y&&ft.viewport(v.copy(Y)),G.length>0&&fs(G,k,q),at.length>0&&fs(at,k,q),bt.length>0&&fs(bt,k,q),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Ua(A,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Fe(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?qe:Sn,minFilter:jn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const at=f.state.transmissionRenderTarget[Y.id],bt=Y.viewport||v;at.setSize(bt.z,bt.w);const At=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(U),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Vt&&Nt.render(q);const Ct=_.toneMapping;_.toneMapping=yn;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),Z===!0&&rt.setGlobalState(_.clippingPlanes,Y),fs(A,q,Y),P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Dt=0,oe=k.length;Dt<oe;Dt++){const he=k[Dt],pe=he.object,Ne=he.geometry,te=he.material,It=he.group;if(te.side===an&&pe.layers.test(Y.layers)){const Me=te.side;te.side=De,te.needsUpdate=!0,Fa(pe,q,Y,Ne,te,It),te.side=Me,te.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(at),P.updateRenderTargetMipmap(at))}_.setRenderTarget(At),_.setClearColor(U,B),kt!==void 0&&(Y.viewport=kt),_.toneMapping=Ct}function fs(A,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,at=A.length;G<at;G++){const bt=A[G],At=bt.object,Ct=bt.geometry,kt=Y===null?bt.material:Y,Bt=bt.group;At.layers.test(q.layers)&&Fa(At,k,q,Ct,kt,Bt)}}function Fa(A,k,q,Y,G,at){A.onBeforeRender(_,k,q,Y,G,at),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,k,q,Y,A,at),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=De,G.needsUpdate=!0,_.renderBufferDirect(q,k,Y,G,A,at),G.side=nn,G.needsUpdate=!0,_.renderBufferDirect(q,k,Y,G,A,at),G.side=an):_.renderBufferDirect(q,k,Y,G,A,at),A.onAfterRender(_,k,q,Y,G,at)}function ps(A,k,q){k.isScene!==!0&&(k=Ut);const Y=yt.get(A),G=f.state.lights,at=f.state.shadowsArray,bt=G.state.version,At=Et.getParameters(A,G.state,at,k,q),Ct=Et.getProgramCacheKey(At);let kt=Y.programs;Y.environment=A.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Zt),kt=new Map,Y.programs=kt);let Bt=kt.get(Ct);if(Bt!==void 0){if(Y.currentProgram===Bt&&Y.lightsStateVersion===bt)return Oa(A,At),Bt}else At.uniforms=Et.getUniforms(A),A.onBeforeCompile(At,_),Bt=Et.acquireProgram(At,Ct),kt.set(Ct,Bt),Y.uniforms=At.uniforms;const Dt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),Oa(A,At),Y.needsLights=ih(A),Y.lightsStateVersion=bt,Y.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMap.value=G.state.directionalShadowMap,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotShadowMap.value=G.state.spotShadowMap,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMap.value=G.state.pointShadowMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Bt,Y.uniformsList=null,Bt}function Na(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=no.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Oa(A,k){const q=yt.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function eh(A,k,q,Y,G){k.isScene!==!0&&(k=Ut),P.resetTextureUnits();const at=k.fog,bt=Y.isMeshStandardMaterial?k.environment:null,At=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Un,Ct=(Y.isMeshStandardMaterial?V:w).get(Y.envMap||bt),kt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,he=!!q.morphAttributes.color;let pe=yn;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pe=_.toneMapping);const Ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=Ne!==void 0?Ne.length:0,It=yt.get(Y),Me=f.state.lights;if(Z===!0&&(nt===!0||A!==D)){const He=A===D&&Y.id===C;rt.setState(Y,A,He)}let ee=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Me.state.version||It.outputColorSpace!==At||G.isBatchedMesh&&It.batching===!1||!G.isBatchedMesh&&It.batching===!0||G.isBatchedMesh&&It.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&It.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&It.instancing===!1||!G.isInstancedMesh&&It.instancing===!0||G.isSkinnedMesh&&It.skinning===!1||!G.isSkinnedMesh&&It.skinning===!0||G.isInstancedMesh&&It.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&It.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&It.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&It.instancingMorph===!1&&G.morphTexture!==null||It.envMap!==Ct||Y.fog===!0&&It.fog!==at||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==Bt||It.morphTargets!==Dt||It.morphNormals!==oe||It.morphColors!==he||It.toneMapping!==pe||It.morphTargetsCount!==te)&&(ee=!0):(ee=!0,It.__version=Y.version);let je=It.currentProgram;ee===!0&&(je=ps(Y,k,G));let oi=!1,Oe=!1,Mo=!1;const me=je.getUniforms(),Mn=It.uniforms;if(ft.useProgram(je.program)&&(oi=!0,Oe=!0,Mo=!0),Y.id!==C&&(C=Y.id,Oe=!0),oi||D!==A){ot.reverseDepthBuffer?(Mt.copy(A.projectionMatrix),lu(Mt),cu(Mt),me.setValue(L,"projectionMatrix",Mt)):me.setValue(L,"projectionMatrix",A.projectionMatrix),me.setValue(L,"viewMatrix",A.matrixWorldInverse);const He=me.map.cameraPosition;He!==void 0&&He.setValue(L,Lt.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Oe=!0,Mo=!0)}if(G.isSkinnedMesh){me.setOptional(L,G,"bindMatrix"),me.setOptional(L,G,"bindMatrixInverse");const He=G.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),me.setValue(L,"boneTexture",He.boneTexture,P))}G.isBatchedMesh&&(me.setOptional(L,G,"batchingTexture"),me.setValue(L,"batchingTexture",G._matricesTexture,P),me.setOptional(L,G,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",G._indirectTexture,P),me.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",G._colorsTexture,P));const wo=q.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&Ot.update(G,q,je),(Oe||It.receiveShadow!==G.receiveShadow)&&(It.receiveShadow=G.receiveShadow,me.setValue(L,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=Ct,Mn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),Oe&&(me.setValue(L,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&nh(Mn,Mo),at&&Y.fog===!0&&pt.refreshFogUniforms(Mn,at),pt.refreshMaterialUniforms(Mn,Y,$,H,f.state.transmissionRenderTarget[A.id]),no.upload(L,Na(It),Mn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(no.upload(L,Na(It),Mn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&me.setValue(L,"center",G.center),me.setValue(L,"modelViewMatrix",G.modelViewMatrix),me.setValue(L,"normalMatrix",G.normalMatrix),me.setValue(L,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const He=Y.uniformsGroups;for(let To=0,sh=He.length;To<sh;To++){const ka=He[To];O.update(ka,je),O.bind(ka,je)}}return je}function nh(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ih(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,k,q){yt.get(A.texture).__webglTexture=k,yt.get(A.depthTexture).__webglTexture=q;const Y=yt.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const q=yt.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,q=0){T=A,R=k,E=q;let Y=!0,G=null,at=!1,bt=!1;if(A){const Ct=yt.get(A);if(Ct.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Ct.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ct.__hasExternalTextures)P.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(Ct.__boundDepthTexture!==Dt){if(Dt!==null&&yt.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);const Bt=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?G=Bt[k][q]:G=Bt[k],at=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?G=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?G=Bt[q]:G=Bt,v.copy(A.viewport),S.copy(A.scissor),I=A.scissorTest}else v.copy(ht).multiplyScalar($).floor(),S.copy(ut).multiplyScalar($).floor(),I=Ft;if(ft.bindFramebuffer(L.FRAMEBUFFER,G)&&Y&&ft.drawBuffers(A,G),ft.viewport(v),ft.scissor(S),ft.setScissorTest(I),at){const Ct=yt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,q)}else if(bt){const Ct=yt.get(A.texture),kt=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,q||0,kt)}C=-1},this.readRenderTargetPixels=function(A,k,q,Y,G,at,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){ft.bindFramebuffer(L.FRAMEBUFFER,At);try{const Ct=A.texture,kt=Ct.format,Bt=Ct.type;if(!ot.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&q>=0&&q<=A.height-G&&L.readPixels(k,q,Y,G,zt.convert(kt),zt.convert(Bt),at)}finally{const Ct=T!==null?yt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,Y,G,at,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){const Ct=A.texture,kt=Ct.format,Bt=Ct.type;if(!ot.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-Y&&q>=0&&q<=A.height-G){ft.bindFramebuffer(L.FRAMEBUFFER,At);const Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(k,q,Y,G,zt.convert(kt),zt.convert(Bt),0);const oe=T!==null?yt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,oe);const he=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await au(L,he,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(Dt),L.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,q=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(A.image.width*Y),at=Math.floor(A.image.height*Y),bt=k!==null?k.x:0,At=k!==null?k.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,bt,At,G,at),ft.unbindTexture()},this.copyTextureToTexture=function(A,k,q=null,Y=null,G=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],k=arguments[2],G=arguments[3]||0,q=null);let at,bt,At,Ct,kt,Bt;q!==null?(at=q.max.x-q.min.x,bt=q.max.y-q.min.y,At=q.min.x,Ct=q.min.y):(at=A.image.width,bt=A.image.height,At=0,Ct=0),Y!==null?(kt=Y.x,Bt=Y.y):(kt=0,Bt=0);const Dt=zt.convert(k.format),oe=zt.convert(k.type);P.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const he=L.getParameter(L.UNPACK_ROW_LENGTH),pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ne=L.getParameter(L.UNPACK_SKIP_PIXELS),te=L.getParameter(L.UNPACK_SKIP_ROWS),It=L.getParameter(L.UNPACK_SKIP_IMAGES),Me=A.isCompressedTexture?A.mipmaps[G]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,kt,Bt,at,bt,Dt,oe,Me.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,kt,Bt,Me.width,Me.height,Dt,Me.data):L.texSubImage2D(L.TEXTURE_2D,G,kt,Bt,at,bt,Dt,oe,Me),L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It),G===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q=null,Y=null,G=0){A.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],k=arguments[3],G=arguments[4]||0);let at,bt,At,Ct,kt,Bt,Dt,oe,he;const pe=A.isCompressedTexture?A.mipmaps[G]:A.image;q!==null?(at=q.max.x-q.min.x,bt=q.max.y-q.min.y,At=q.max.z-q.min.z,Ct=q.min.x,kt=q.min.y,Bt=q.min.z):(at=pe.width,bt=pe.height,At=pe.depth,Ct=0,kt=0,Bt=0),Y!==null?(Dt=Y.x,oe=Y.y,he=Y.z):(Dt=0,oe=0,he=0);const Ne=zt.convert(k.format),te=zt.convert(k.type);let It;if(k.isData3DTexture)P.setTexture3D(k,0),It=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)P.setTexture2DArray(k,0),It=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=L.getParameter(L.UNPACK_ROW_LENGTH),ee=L.getParameter(L.UNPACK_IMAGE_HEIGHT),je=L.getParameter(L.UNPACK_SKIP_PIXELS),oi=L.getParameter(L.UNPACK_SKIP_ROWS),Oe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(It,G,Dt,oe,he,at,bt,At,Ne,te,pe.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(It,G,Dt,oe,he,at,bt,At,Ne,pe.data):L.texSubImage3D(It,G,Dt,oe,he,at,bt,At,Ne,te,pe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Me),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,oi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),G===0&&k.generateMipmaps&&L.generateMipmap(It),ft.unbindTexture()},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ft.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ma?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===go?"display-p3":"srgb"}}class ho{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(t),this.density=e}clone(){return new ho(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y0 extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nc extends Ae{constructor(t=null,e=1,n=1,i,o,r,a,l,c=Ee,h=Ee,u,d){super(null,r,a,l,c,h,i,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new jt,Ll=new jt,Ns=[],Dl=new ni,S0=new jt,Yi=new ae,ji=new Oi;class bn extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),Dl.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(Dl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),ji.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,yi),Ll.multiplyMatrices(n,yi),Yi.matrixWorld=Ll,Yi.raycast(t,Ns);for(let r=0,a=Ns.length;r<a;r++){const l=Ns[r];l.instanceId=o,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nc(new Float32Array(i*this.count),i,this.count,mo,tn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class b0 extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Il=new jt,ta=new va,Os=new Oi,ks=new N;class Oc extends ce{constructor(t=new _e,e=new b0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=o,t.ray.intersectsSphere(Os)===!1)return;Il.copy(i).invert(),ta.copy(t.ray).applyMatrix4(Il);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,x=p;g<x;g++){const f=c.getX(g);ks.fromBufferAttribute(u,f),Ul(ks,f,l,i,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,x=p;g<x;g++)ks.fromBufferAttribute(u,g),Ul(ks,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ul(s,t,e,n,i,o,r){const a=ta.distanceSqToPoint(s);if(a<e){const l=new N;ta.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class M0 extends Ae{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,p=(r-h)/d;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new st:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,l=new jt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}r[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos(be(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ma extends ln{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class w0 extends Ma{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function wa(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,p*=h,i(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Bs=new N,er=new wa,nr=new wa,ir=new wa;class kc extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(Bs.subVectors(i[0],i[1]).add(i[0]),c=Bs);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Bs.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),er.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,f),nr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,f),ir.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(er.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ir.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(er.calc(l),nr.calc(l),ir.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fl(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function T0(s,t){const e=1-s;return e*e*t}function E0(s,t){return 2*(1-s)*s*t}function A0(s,t){return s*s*t}function es(s,t,e,n){return T0(s,t)+E0(s,e)+A0(s,n)}function R0(s,t){const e=1-s;return e*e*e*t}function C0(s,t){const e=1-s;return 3*e*e*s*t}function P0(s,t){return 3*(1-s)*s*s*t}function L0(s,t){return s*s*s*t}function ns(s,t,e,n,i){return R0(s,t)+C0(s,e)+P0(s,n)+L0(s,i)}class Bc extends ln{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ns(t,i.x,o.x,r.x,a.x),ns(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class D0 extends ln{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ns(t,i.x,o.x,r.x,a.x),ns(t,i.y,o.y,r.y,a.y),ns(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zc extends ln{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hc extends ln{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(es(t,i.x,o.x,r.x),es(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U0 extends ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(es(t,i.x,o.x,r.x),es(t,i.y,o.y,r.y),es(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Fl(a,l.x,c.x,h.x,u.x),Fl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:w0,CatmullRomCurve3:kc,CubicBezierCurve:Bc,CubicBezierCurve3:D0,EllipseCurve:Ma,LineCurve:zc,LineCurve3:I0,QuadraticBezierCurve:Hc,QuadraticBezierCurve3:U0,SplineCurve:Gc});class F0 extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ea[i.type]().fromJSON(i))}return this}}class na extends F0{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zc(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Hc(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Bc(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new Ma(t,e,n,i,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ds extends _e{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0;const x=[],f=n/2;let m=0;b(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(p,2));function b(){const y=new N,R=new N;let E=0;const T=(e-t)/n;for(let C=0;C<=o;C++){const D=[],v=C/o,S=v*(e-t)+t;for(let I=0;I<=i;I++){const U=I/i,B=U*l+a,W=Math.sin(B),H=Math.cos(B);R.x=S*W,R.y=-v*n+f,R.z=S*H,u.push(R.x,R.y,R.z),y.set(W,T,H).normalize(),d.push(y.x,y.y,y.z),p.push(U,1-v),D.push(g++)}x.push(D)}for(let C=0;C<i;C++)for(let D=0;D<o;D++){const v=x[D][C],S=x[D+1][C],I=x[D+1][C+1],U=x[D][C+1];t>0&&(h.push(v,S,U),E+=3),e>0&&(h.push(S,I,U),E+=3)}c.addGroup(m,E,0),m+=E}function _(y){const R=g,E=new st,T=new N;let C=0;const D=y===!0?t:e,v=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;const S=g;for(let I=0;I<=i;I++){const B=I/i*l+a,W=Math.cos(B),H=Math.sin(B);T.x=D*H,T.y=f*v,T.z=D*W,u.push(T.x,T.y,T.z),d.push(0,v,0),E.x=W*.5+.5,E.y=H*.5*v+.5,p.push(E.x,E.y),g++}for(let I=0;I<i;I++){const U=R+I,B=S+I;y===!0?h.push(B,B+1,U):h.push(B+1,B,U),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends na{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new na().fromJSON(i))}return this}}const N0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Wc(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,p;if(n&&(o=H0(s,t,o,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return ls(o,r,e,a,l,p,0),r}};function Wc(s,t,e,n,i){let o,r;if(i===J0(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Nl(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Nl(o,s[o],s[o+1],r);return r&&xo(r,r.next)&&(hs(r),r=r.next),r}function Qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||fe(e.prev,e,e.next)===0)){if(hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ls(s,t,e,n,i,o,r){if(!s)return;!r&&o&&q0(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?k0(s,n,i,o):O0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),hs(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=B0(Qn(s),t,e),ls(s,t,e,n,i,o,2)):r===2&&z0(s,t,e,n,i,o):ls(Qn(s),t,e,n,i,o,1);break}}}function O0(s){const t=s.prev,e=s,n=s.next;if(fe(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=i>o?i>r?i:r:o>r?o:r,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&wi(i,a,o,l,r,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function k0(s,t,e,n){const i=s.prev,o=s,r=s.next;if(fe(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,d=r.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,m=ia(p,g,t,e,n),b=ia(x,f,t,e,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=m&&y&&y.z<=b;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&wi(a,h,l,u,c,d,_.x,_.y)&&fe(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=f&&y!==i&&y!==r&&wi(a,h,l,u,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&wi(a,h,l,u,c,d,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=f&&y!==i&&y!==r&&wi(a,h,l,u,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function B0(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!xo(i,o)&&Xc(i,n,n.next,o)&&cs(i,o)&&cs(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),hs(n),hs(n.next),n=s=o),n=n.next}while(n!==s);return Qn(n)}function z0(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&$0(r,a)){let l=qc(r,a);r=Qn(r,r.next),l=Qn(l,l.next),ls(r,t,e,n,i,o,0),ls(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function H0(s,t,e,n){const i=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=Wc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(j0(c));for(i.sort(G0),o=0;o<i.length;o++)e=V0(i[o],e);return e}function G0(s,t){return s.x-t.x}function V0(s,t){const e=W0(s,t);if(!e)return t;const n=qc(e,s);return Qn(n,n.next),Qn(e,e.next)}function W0(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=l&&o!==e.x&&wi(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),cs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&X0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function X0(s,t){return fe(s.prev,s,t.prev)<0&&fe(t.next,s,s.next)<0}function q0(s,t,e,n){let i=s;do i.z===0&&(i.z=ia(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y0(i)}function Y0(s){let t,e,n,i,o,r,a,l,c=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,c*=2}while(r>1);return s}function ia(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function j0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function wi(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function $0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Z0(s,t)&&(cs(s,t)&&cs(t,s)&&K0(s,t)&&(fe(s.prev,s,t.prev)||fe(s,t.prev,t))||xo(s,t)&&fe(s.prev,s,s.next)>0&&fe(t.prev,t,t.next)>0)}function fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xo(s,t){return s.x===t.x&&s.y===t.y}function Xc(s,t,e,n){const i=Hs(fe(s,t,e)),o=Hs(fe(s,t,n)),r=Hs(fe(e,n,s)),a=Hs(fe(e,n,t));return!!(i!==o&&r!==a||i===0&&zs(s,e,t)||o===0&&zs(s,n,t)||r===0&&zs(e,s,n)||a===0&&zs(e,t,n))}function zs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Hs(s){return s>0?1:s<0?-1:0}function Z0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Xc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function cs(s,t){return fe(s.prev,s,s.next)<0?fe(s,t,s.next)>=0&&fe(s,s.prev,t)>=0:fe(s,t,s.prev)<0||fe(s,s.next,t)<0}function K0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function qc(s,t){const e=new sa(s.i,s.x,s.y),n=new sa(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Nl(s,t,e,n){const i=new sa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function hs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J0(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class is{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return is.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ol(t),kl(n,t);let r=t.length;e.forEach(Ol);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,kl(n,e[l]);const a=N0.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Ol(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function kl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ta extends _e{constructor(t=new Vc([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Q0;let _,y=!1,R,E,T,C;m&&(_=m.getSpacedPoints(h),y=!0,d=!1,R=m.computeFrenetFrames(h,!1),E=new N,T=new N,C=new N),d||(f=0,p=0,g=0,x=0);const D=a.extractPoints(c);let v=D.shape;const S=D.holes;if(!is.isClockWise(v)){v=v.reverse();for(let tt=0,L=S.length;tt<L;tt++){const dt=S[tt];is.isClockWise(dt)&&(S[tt]=dt.reverse())}}const U=is.triangulateShape(v,S),B=v;for(let tt=0,L=S.length;tt<L;tt++){const dt=S[tt];v=v.concat(dt)}function W(tt,L,dt){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(L,dt)}const H=v.length,$=U.length;function X(tt,L,dt){let ct,ot,ft;const Rt=tt.x-L.x,yt=tt.y-L.y,P=dt.x-tt.x,w=dt.y-tt.y,V=Rt*Rt+yt*yt,K=Rt*w-yt*P;if(Math.abs(K)>Number.EPSILON){const et=Math.sqrt(V),J=Math.sqrt(P*P+w*w),Et=L.x-yt/et,pt=L.y+Rt/et,_t=dt.x-w/J,Wt=dt.y+P/J,rt=((_t-Et)*w-(Wt-pt)*P)/(Rt*w-yt*P);ct=Et+Rt*rt-tt.x,ot=pt+yt*rt-tt.y;const xt=ct*ct+ot*ot;if(xt<=2)return new st(ct,ot);ft=Math.sqrt(xt/2)}else{let et=!1;Rt>Number.EPSILON?P>Number.EPSILON&&(et=!0):Rt<-Number.EPSILON?P<-Number.EPSILON&&(et=!0):Math.sign(yt)===Math.sign(w)&&(et=!0),et?(ct=-yt,ot=Rt,ft=Math.sqrt(V)):(ct=Rt,ot=yt,ft=Math.sqrt(V/2))}return new st(ct/ft,ot/ft)}const it=[];for(let tt=0,L=B.length,dt=L-1,ct=tt+1;tt<L;tt++,dt++,ct++)dt===L&&(dt=0),ct===L&&(ct=0),it[tt]=X(B[tt],B[dt],B[ct]);const ht=[];let ut,Ft=it.concat();for(let tt=0,L=S.length;tt<L;tt++){const dt=S[tt];ut=[];for(let ct=0,ot=dt.length,ft=ot-1,Rt=ct+1;ct<ot;ct++,ft++,Rt++)ft===ot&&(ft=0),Rt===ot&&(Rt=0),ut[ct]=X(dt[ct],dt[ft],dt[Rt]);ht.push(ut),Ft=Ft.concat(ut)}for(let tt=0;tt<f;tt++){const L=tt/f,dt=p*Math.cos(L*Math.PI/2),ct=g*Math.sin(L*Math.PI/2)+x;for(let ot=0,ft=B.length;ot<ft;ot++){const Rt=W(B[ot],it[ot],ct);lt(Rt.x,Rt.y,-dt)}for(let ot=0,ft=S.length;ot<ft;ot++){const Rt=S[ot];ut=ht[ot];for(let yt=0,P=Rt.length;yt<P;yt++){const w=W(Rt[yt],ut[yt],ct);lt(w.x,w.y,-dt)}}}const Yt=g+x;for(let tt=0;tt<H;tt++){const L=d?W(v[tt],Ft[tt],Yt):v[tt];y?(T.copy(R.normals[0]).multiplyScalar(L.x),E.copy(R.binormals[0]).multiplyScalar(L.y),C.copy(_[0]).add(T).add(E),lt(C.x,C.y,C.z)):lt(L.x,L.y,0)}for(let tt=1;tt<=h;tt++)for(let L=0;L<H;L++){const dt=d?W(v[L],Ft[L],Yt):v[L];y?(T.copy(R.normals[tt]).multiplyScalar(dt.x),E.copy(R.binormals[tt]).multiplyScalar(dt.y),C.copy(_[tt]).add(T).add(E),lt(C.x,C.y,C.z)):lt(dt.x,dt.y,u/h*tt)}for(let tt=f-1;tt>=0;tt--){const L=tt/f,dt=p*Math.cos(L*Math.PI/2),ct=g*Math.sin(L*Math.PI/2)+x;for(let ot=0,ft=B.length;ot<ft;ot++){const Rt=W(B[ot],it[ot],ct);lt(Rt.x,Rt.y,u+dt)}for(let ot=0,ft=S.length;ot<ft;ot++){const Rt=S[ot];ut=ht[ot];for(let yt=0,P=Rt.length;yt<P;yt++){const w=W(Rt[yt],ut[yt],ct);y?lt(w.x,w.y+_[h-1].y,_[h-1].x+dt):lt(w.x,w.y,u+dt)}}}Z(),nt();function Z(){const tt=i.length/3;if(d){let L=0,dt=H*L;for(let ct=0;ct<$;ct++){const ot=U[ct];Lt(ot[2]+dt,ot[1]+dt,ot[0]+dt)}L=h+f*2,dt=H*L;for(let ct=0;ct<$;ct++){const ot=U[ct];Lt(ot[0]+dt,ot[1]+dt,ot[2]+dt)}}else{for(let L=0;L<$;L++){const dt=U[L];Lt(dt[2],dt[1],dt[0])}for(let L=0;L<$;L++){const dt=U[L];Lt(dt[0]+H*h,dt[1]+H*h,dt[2]+H*h)}}n.addGroup(tt,i.length/3-tt,0)}function nt(){const tt=i.length/3;let L=0;Mt(B,L),L+=B.length;for(let dt=0,ct=S.length;dt<ct;dt++){const ot=S[dt];Mt(ot,L),L+=ot.length}n.addGroup(tt,i.length/3-tt,1)}function Mt(tt,L){let dt=tt.length;for(;--dt>=0;){const ct=dt;let ot=dt-1;ot<0&&(ot=tt.length-1);for(let ft=0,Rt=h+f*2;ft<Rt;ft++){const yt=H*ft,P=H*(ft+1),w=L+ct+yt,V=L+ot+yt,K=L+ot+P,et=L+ct+P;Pt(w,V,K,et)}}}function lt(tt,L,dt){l.push(tt),l.push(L),l.push(dt)}function Lt(tt,L,dt){Ut(tt),Ut(L),Ut(dt);const ct=i.length/3,ot=b.generateTopUV(n,i,ct-3,ct-2,ct-1);Vt(ot[0]),Vt(ot[1]),Vt(ot[2])}function Pt(tt,L,dt,ct){Ut(tt),Ut(L),Ut(ct),Ut(L),Ut(dt),Ut(ct);const ot=i.length/3,ft=b.generateSideWallUV(n,i,ot-6,ot-3,ot-2,ot-1);Vt(ft[0]),Vt(ft[1]),Vt(ft[3]),Vt(ft[1]),Vt(ft[2]),Vt(ft[3])}function Ut(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function Vt(tt){o.push(tt.x),o.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tg(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ea[i.type]().fromJSON(i)),new Ta(n,t.options)}}const Q0={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(o,r),new st(a,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],g=t[i*3+2],x=t[o*3],f=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new st(r,1-l),new st(c,1-u),new st(d,1-g),new st(x,1-m)]:[new st(a,1-l),new st(h,1-u),new st(p,1-g),new st(f,1-m)]}};function tg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zi extends _e{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const b=[],_=m/n;let y=0;m===0&&r===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(E+y,1-_),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const _=h[m][b+1],y=h[m][b],R=h[m+1][b],E=h[m+1][b+1];(m!==0||r>0)&&p.push(_,y,E),(m!==n-1||l<Math.PI)&&p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ri extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eg extends Ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ng extends ii{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ea extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ig extends Ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sr=new jt,Bl=new N,zl=new N;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zl),e.updateMatrixWorld(),sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class og extends sg{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class or extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rg extends Ea{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ag{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hl(){return performance.now()}const Gl=new jt;class lg{constructor(t,e,n=0,i=1/0){this.ray=new va(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,n=[]){return oa(t,this,n,e),n.sort(Vl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)oa(t[i],this,n,e);return n.sort(Vl),n}}function Vl(s,t){return s.distance-t.distance}function oa(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)oa(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const $i=new N;function Ve(s,t,e,n,i,o){const r=2*Math.PI*i/4,a=Math.max(o-2*i,0),l=Math.PI/4;$i.copy(t),$i[n]=0,$i.normalize();const c=.5*r/(r+a),h=1-$i.angleTo(s)/l;return Math.sign($i[e])===1?h*c:a/(r+a)+c+c*(1-h)}class ra extends si{constructor(t=1,e=1,n=1,i=2,o=.1){if(i=i*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,i,i,i),i===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new N,l=new N,c=new N(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new N,x=.5/i;for(let f=0,m=0;f<h.length;f+=3,m+=2)switch(a.fromArray(h,f),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[f+0]=c.x*Math.sign(a.x)+l.x*o,h[f+1]=c.y*Math.sign(a.y)+l.y*o,h[f+2]=c.z*Math.sign(a.z)+l.z*o,u[f+0]=l.x,u[f+1]=l.y,u[f+2]=l.z,Math.floor(f/p)){case 0:g.set(1,0,0),d[m+0]=Ve(g,l,"z","y",o,n),d[m+1]=1-Ve(g,l,"y","z",o,e);break;case 1:g.set(-1,0,0),d[m+0]=1-Ve(g,l,"z","y",o,n),d[m+1]=1-Ve(g,l,"y","z",o,e);break;case 2:g.set(0,1,0),d[m+0]=1-Ve(g,l,"x","z",o,t),d[m+1]=Ve(g,l,"z","x",o,n);break;case 3:g.set(0,-1,0),d[m+0]=1-Ve(g,l,"x","z",o,t),d[m+1]=1-Ve(g,l,"z","x",o,n);break;case 4:g.set(0,0,1),d[m+0]=1-Ve(g,l,"x","y",o,t),d[m+1]=1-Ve(g,l,"y","x",o,e);break;case 5:g.set(0,0,-1),d[m+0]=Ve(g,l,"x","y",o,t),d[m+1]=1-Ve(g,l,"y","x",o,e);break}}}const Ht={width:40,depth:30,top:.36,bottom:-7.44,get height(){return this.top-this.bottom},radius:.68,bevelSegments:6},cg={halfWidth:4.65},ne={fovDesktop:43,near:.5,minDistance:18,maxDistance:70,defaultAzimuth:-1.2,defaultPolar:.92,minPolar:.20943951023931953,maxPolar:1.3089969389957472,target:[-1,0,1]},Zi={maxDegrees:3,dampingRatio:.6,rebound:.25};function hg(){const s=window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent),t=navigator.hardwareConcurrency||6,e=navigator.deviceMemory??8;return s&&(t<=4||e<=4)?{tier:"low",isMobile:s,maxPixelRatio:1.45,waterAlong:128,waterAcross:86,terrainCols:112,terrainRows:84,shadowMap:1024,bloomScale:.55,ssao:!1,mistLayers:2,dustCount:70,pebbleCount:54,antialias:!1}:s?{tier:"medium",isMobile:s,maxPixelRatio:1.7,waterAlong:160,waterAcross:100,terrainCols:124,terrainRows:92,shadowMap:1024,bloomScale:.6,ssao:!1,mistLayers:3,dustCount:80,pebbleCount:64,antialias:!1}:{tier:"high",isMobile:s,maxPixelRatio:2,waterAlong:256,waterAcross:176,terrainCols:196,terrainRows:146,shadowMap:2048,bloomScale:1,ssao:!0,mistLayers:3,dustCount:56,pebbleCount:96,antialias:!0}}function Gt(s,t,e){return Math.min(e,Math.max(t,s))}function sn(s,t,e){const n=Gt((e-s)/(t-s),0,1);return n*n*(3-2*n)}function Gs(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Yc(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,o=t-n,r=i*i*(3-2*i),a=o*o*(3-2*o),l=Gs(e,n),c=Gs(e+1,n),h=Gs(e,n+1),u=Gs(e+1,n+1);return(l*(1-r)+c*r)*(1-a)+(h*(1-r)+u*r)*a}function Gn(s,t,e=4,n=2,i=.5){let o=0,r=.5,a=1,l=0;for(let c=0;c<e;c+=1)o+=Yc(s*a,t*a)*r,l+=r,r*=i,a*=n;return o/l}function ug(s,t,e=4){let n=0,i=.55,o=1,r=0;for(let a=0;a<e;a+=1){const l=Yc(s*o,t*o);n+=(1-Math.abs(l*2-1))*i,r+=i,i*=.5,o*=2.03}return n/r}function ti(s){let t=s>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function dg(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}const Aa=["skyTop","skyMid","skyBottom","skyGlow","fog","sun","hemiSky","hemiGround","rim","waterShallow","waterDeep","waterSky","waterRim","waterFoam","jelly","jellyRim","jellyDeep","terrainMoss","terrainDry","terrainStone","terrainWet","terrainBed","strataSoil","strataSand","strataClay","strataPebble","strataBedrock","wood","pebble","dust","mist"],fg=["exposure","bloomStrength","bloomRadius","fogDensity","mistOpacity","sunIntensity","hemiIntensity","rimIntensity","envIntensity","shadowOpacity"],Dn={dawn:{id:"dawn",label:"晨雾青绿",labelEn:"MORNING MIST",note:"雾浓，江慢，檐角还挂着昨夜的水。",isDark:!1,colors:{skyTop:15591387,skyMid:13949387,skyBottom:11519413,skyGlow:16774108,fog:13162440,sun:16770235,hemiSky:13295574,hemiGround:11046511,rim:12574931,waterShallow:6728088,waterDeep:1198659,waterSky:11127997,waterRim:14221296,waterFoam:15794168,jelly:6007188,jellyRim:14221296,jellyDeep:2053710,terrainMoss:5401410,terrainDry:9732951,terrainStone:8288872,terrainWet:3364941,terrainBed:5593151,strataSoil:4078118,strataSand:11836003,strataClay:8212020,strataPebble:7829862,strataBedrock:2506553,wood:4008731,pebble:8288358,dust:16770232,mist:14411482},values:{exposure:.98,bloomStrength:.3,bloomRadius:.55,fogDensity:.0085,mistOpacity:.04,sunIntensity:1.85,hemiIntensity:.42,rimIntensity:.55,envIntensity:.24,shadowOpacity:.3}},dusk:{id:"dusk",label:"黄昏赭金",labelEn:"OCHRE DUSK",note:"瓦面先亮，江面后亮，光在屋脊上多停一会儿。",isDark:!1,colors:{skyTop:15916994,skyMid:14663058,skyBottom:10980461,skyGlow:16765067,fog:13612432,sun:16760181,hemiSky:14665123,hemiGround:8671279,rim:15647889,waterShallow:9612151,waterDeep:3758921,waterSky:14926216,waterRim:16768938,waterFoam:16246991,jelly:7902572,jellyRim:16770731,jellyDeep:3491892,terrainMoss:7173447,terrainDry:10914646,terrainStone:10125922,terrainWet:5004616,terrainBed:6970432,strataSoil:4076063,strataSand:12097891,strataClay:8212785,strataPebble:8417111,strataBedrock:3095854,wood:3745558,pebble:9271643,dust:16766619,mist:15126450},values:{exposure:.98,bloomStrength:.36,bloomRadius:.62,fogDensity:.0125,mistOpacity:.11,sunIntensity:1.55,hemiIntensity:.58,rimIntensity:.65,envIntensity:.34,shadowOpacity:.26}},night:{id:"night",label:"夜灯朱砂",labelEn:"LANTERN NIGHT",note:"灯一盏一盏亮起，江面把整座城又看了一遍。",isDark:!0,colors:{skyTop:461587,skyMid:1120288,skyBottom:2631210,skyGlow:7027236,fog:1316892,sun:16765857,hemiSky:5794420,hemiGround:1512207,rim:10467012,waterShallow:3359551,waterDeep:462865,waterSky:1778724,waterRim:16758904,waterFoam:13222576,jelly:4613210,jellyRim:16758904,jellyDeep:660755,terrainMoss:4147768,terrainDry:6048827,terrainStone:5524032,terrainWet:3093552,terrainBed:3881518,strataSoil:1840914,strataSand:5326132,strataClay:4796966,strataPebble:5063737,strataBedrock:1579543,wood:2826264,pebble:6707274,dust:16762250,mist:9675936},values:{exposure:1.02,bloomStrength:.6,bloomRadius:.7,fogDensity:.012,mistOpacity:.07,sunIntensity:.78,hemiIntensity:.78,rimIntensity:.9,envIntensity:.42,shadowOpacity:.38}}},rr=["dawn","dusk","night"];function Vs(s){const t={};for(const e of Aa)t[e]=new mt(s.colors[e]);return{id:s.id,definition:s,color:t,value:{...s.values}}}const ar=.6;class pg{constructor(t="dawn"){M(this,"current");M(this,"target");M(this,"from");M(this,"elapsed",ar);M(this,"duration",ar);M(this,"targetId","dawn");this.current=Vs(Dn[t]),this.target=Vs(Dn[t]),this.from=Vs(Dn[t]),this.targetId=t}get id(){return this.targetId}get isTransitioning(){return this.elapsed<this.duration}set(t,e=ar){return t===this.targetId?!1:(this.from=Wl(this.current),this.target=Vs(Dn[t]),this.targetId=t,this.duration=Math.max(.01,e),this.elapsed=0,!0)}update(t){if(this.elapsed>=this.duration)return!1;this.elapsed=Math.min(this.duration,this.elapsed+t);const e=this.elapsed/this.duration,n=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;for(const i of Aa)this.current.color[i].lerpColors(this.from.color[i],this.target.color[i],n);for(const i of fg)this.current.value[i]=ie.lerp(this.from.value[i],this.target.value[i],n);return this.elapsed>=this.duration&&(this.current=Wl(this.target)),!0}}function Wl(s){return{id:s.id,definition:s.definition,color:Object.fromEntries(Aa.map(t=>[t,s.color[t].clone()])),value:{...s.value}}}const Vn=["spring","summer","autumn","winter"],Ti={spring:{id:"spring",label:"春",labelEn:"SPRING",note:"新绿沿江铺开，檐角挂着浅浅的花色。",colors:{grass:8364890,dry:11573859,stone:9603959,foliage:9422445,blossom:15774893,snow:15331566,waterTint:12180932,mist:14280919},values:{snowAmount:0,blossomAmount:.8,waterCool:.1,mistBias:.18,sunWarmth:.04}},summer:{id:"summer",label:"夏",labelEn:"SUMMER",note:"深绿压低了屋檐，水面亮得像一层薄釉。",colors:{grass:5210693,dry:11901535,stone:8749421,foliage:5214019,blossom:15254142,snow:15331566,waterTint:13429203,mist:13624022},values:{snowAmount:0,blossomAmount:0,waterCool:0,mistBias:.02,sunWarmth:.08}},autumn:{id:"autumn",label:"秋",labelEn:"AUTUMN",note:"赭金从树梢落进江里，屋檐也慢一点。",colors:{grass:9141067,dry:12620889,stone:10060908,foliage:13273152,blossom:14460507,snow:15331566,waterTint:15060656,mist:14665902},values:{snowAmount:0,blossomAmount:0,waterCool:-.04,mistBias:.26,sunWarmth:.16}},winter:{id:"winter",label:"冬",labelEn:"WINTER",note:"薄雪停在瓦上，江声更清，灯火更暖。",colors:{grass:9147789,dry:11184283,stone:9410194,foliage:7306097,blossom:14145999,snow:15068395,waterTint:13031646,mist:13819612},values:{snowAmount:.82,blossomAmount:0,waterCool:.2,mistBias:.34,sunWarmth:-.03}}};function Ws(s){const t={};for(const e of Object.keys(s.colors))t[e]=new mt(s.colors[e]);return{id:s.id,definition:s,color:t,value:{...s.values}}}const Si=2.2;class mg{constructor(t="spring"){M(this,"current");M(this,"target");M(this,"from");M(this,"elapsed",Si);M(this,"targetId");this.current=Ws(Ti[t]),this.target=Ws(Ti[t]),this.from=Ws(Ti[t]),this.targetId=t}get id(){return this.targetId}get isTransitioning(){return this.elapsed<Si}set(t){return t===this.targetId?!1:(this.from=Xl(this.current),this.target=Ws(Ti[t]),this.targetId=t,this.elapsed=0,!0)}update(t){if(this.elapsed>=Si)return!1;this.elapsed=Math.min(Si,this.elapsed+t);const e=this.elapsed/Si,n=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;for(const i of Object.keys(this.current.color))this.current.color[i].lerpColors(this.from.color[i],this.target.color[i],n);for(const i of Object.keys(this.current.value))this.current.value[i]=ie.lerp(this.from.value[i],this.target.value[i],n);return this.elapsed>=Si&&(this.current=Xl(this.target)),!0}}function Xl(s){const t={};for(const e of Object.keys(s.color))t[e]=s.color[e].clone();return{id:s.id,definition:s.definition,color:t,value:{...s.value}}}class gg{constructor(t){M(this,"camera");M(this,"target",new N(...ne.target));M(this,"azimuth",ne.defaultAzimuth);M(this,"polar",ne.defaultPolar);M(this,"distance",56);M(this,"azimuthTarget",ne.defaultAzimuth);M(this,"polarTarget",ne.defaultPolar);M(this,"distanceTarget",56);M(this,"azimuthVelocity",0);M(this,"polarVelocity",0);M(this,"dragging",!1);M(this,"pinchStart",0);M(this,"pinchRadius",56);this.camera=t,this.camera.up.set(0,0,1),this.applyImmediately()}get currentAzimuth(){return this.azimuth}get currentPolar(){return this.polar}get currentDistance(){return this.distance}get isDragging(){return this.dragging}setView(t,e=!1){this.azimuthTarget=t.azimuth,this.polarTarget=Gt(t.polar,ne.minPolar,ne.maxPolar),this.distanceTarget=Gt(t.distance,ne.minDistance,ne.maxDistance),this.azimuthVelocity=0,this.polarVelocity=0,e&&(this.azimuth=this.azimuthTarget,this.polar=this.polarTarget,this.distance=this.distanceTarget,this.applyToCamera())}startDrag(){this.dragging=!0,this.azimuthVelocity=0,this.polarVelocity=0}rotateBy(t,e,n){if(!this.dragging)return;const i=Math.PI*1.15/Math.max(640,n),o=t*i,r=e*i*.82;this.azimuthTarget+=o,this.polarTarget=Gt(this.polarTarget+r,ne.minPolar,ne.maxPolar),this.azimuthVelocity=o*58,this.polarVelocity=r*46}endDrag(){this.dragging=!1,this.azimuthVelocity=Gt(this.azimuthVelocity,-2.2,2.2),this.polarVelocity=Gt(this.polarVelocity,-1.2,1.2)}zoomBy(t){const e=Math.exp(t*.0011);this.distanceTarget=Gt(this.distanceTarget*e,ne.minDistance,ne.maxDistance)}beginPinch(t){this.dragging=!1,this.azimuthVelocity=0,this.polarVelocity=0,this.pinchStart=t,this.pinchRadius=this.distanceTarget}pinchTo(t){if(this.pinchStart<=0)return;const e=this.pinchStart/Math.max(40,t);this.distanceTarget=Gt(this.pinchRadius*e,ne.minDistance,ne.maxDistance)}nudge(t,e){this.azimuthTarget+=t,this.polarTarget=Gt(this.polarTarget+e,ne.minPolar,ne.maxPolar)}setResponsiveFraming(t,e){t?(this.distanceTarget=Gt(64+Math.max(0,380-e)*.035,64,70),this.polarTarget=.88):(this.distanceTarget=e<1100?58:55,this.polarTarget=ne.defaultPolar)}reset(t=!1){this.azimuthTarget=ne.defaultAzimuth,this.polarTarget=ne.defaultPolar,this.distanceTarget=66,this.azimuthVelocity=0,this.polarVelocity=0,t&&(this.azimuth=this.azimuthTarget,this.polar=this.polarTarget,this.distance=this.distanceTarget,this.applyToCamera())}update(t){if(!this.dragging){this.azimuthTarget+=this.azimuthVelocity*t,this.polarTarget=Gt(this.polarTarget+this.polarVelocity*t,ne.minPolar,ne.maxPolar);const n=Math.exp(-t*4.4);this.azimuthVelocity*=n,this.polarVelocity*=n,Math.abs(this.azimuthVelocity)<.001&&(this.azimuthVelocity=0),Math.abs(this.polarVelocity)<.001&&(this.polarVelocity=0)}const e=1-Math.exp(-t*13);this.azimuth+=dg(this.azimuth,this.azimuthTarget)*e,this.polar+=(this.polarTarget-this.polar)*e,this.distance+=(this.distanceTarget-this.distance)*(1-Math.exp(-t*8)),this.applyToCamera()}applyToCamera(){const t=Math.sin(this.polar),e=this.target.x+this.distance*t*Math.sin(this.azimuth),n=this.target.y-this.distance*t*Math.cos(this.azimuth),i=this.target.z+this.distance*Math.cos(this.polar);this.camera.position.set(e,n,i),this.camera.up.set(0,0,1),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}applyImmediately(){this.azimuth=this.azimuthTarget,this.polar=this.polarTarget,this.distance=this.distanceTarget,this.applyToCamera()}}const vg=[[-25,-16],[-20.5,-12.8],[-18,-9.4],[-14,-6.6],[-9.8,-4.2],[-5.2,-1.9],[0,0],[4.4,1.25],[7.4,3.5],[7.8,6.8],[5.9,9.25],[7.5,11.7],[12.2,13.7],[18.5,16.2],[24,18.6]];class _g{constructor(t=260){M(this,"curve");M(this,"samples");M(this,"length");this.curve=new kc(vg.map(([e,n])=>new N(e,n,0)),!1,"centripetal",.5),this.length=this.curve.getLength(),this.samples=[];for(let e=0;e<=t;e+=1){const n=e/t;this.samples.push(this.sampleAt(n))}}widthAt(t){return cg.halfWidth+Math.sin(t*Math.PI*2.05+.6)*.34+Math.sin(t*Math.PI*5.2+1.1)*.16}sampleAt(t){const e=this.curve.getPointAt(Gt(t,0,1)),n=this.curve.getTangentAt(Gt(t,0,1)).normalize(),i=this.widthAt(t);return{x:e.x,y:e.y,tx:n.x,ty:n.y,nx:n.y,ny:-n.x,width:i,t}}pointAt(t){const e=this.sampleAt(Gt(t,0,1));return new st(e.x,e.y)}nearest(t,e){let n=1/0,i=0;for(let h=0;h<this.samples.length;h+=1){const u=this.samples[h],d=t-u.x,p=e-u.y,g=d*d+p*p;g<n&&(n=g,i=h)}let o=null;for(const h of[i-1,i]){const u=this.samples[h],d=this.samples[h+1];if(!u||!d)continue;const p=d.x-u.x,g=d.y-u.y,x=p*p+g*g||1,f=Gt(((t-u.x)*p+(e-u.y)*g)/x,0,1),m=u.x+p*f,b=u.y+g*f,_=t-m,y=e-b,R=_*_+y*y;(!o||R<o.d2)&&(o={x:m,y:b,t:u.t+(d.t-u.t)*f,d2:R})}const r=o??{x:this.samples[i].x,y:this.samples[i].y,t:this.samples[i].t,d2:n},a=this.sampleAt(r.t),l=Math.sqrt(r.d2),c=(t-r.x)*a.nx+(e-r.y)*a.ny>=0?1:-1;return{x:r.x,y:r.y,distance:l,halfWidth:a.width,t:r.t,tx:a.tx,ty:a.ty,nx:a.nx,ny:a.ny,side:c}}isWater(t,e,n=0){if(Math.abs(t)>Ht.width*.5-.05||Math.abs(e)>Ht.depth*.5-.05)return!1;const i=this.nearest(t,e);return i.distance<=i.halfWidth+n}bankPoint(t,e,n=0){const i=this.sampleAt(t),o=i.width;return{x:i.x+i.nx*e*(o+n),y:i.y+i.ny*e*(o+n),nx:i.nx,ny:i.ny,width:o}}makeRibbonGeometry(t,e,n=1,i=0,o=!1){const r=[],a=[],l=[],c=[],h=[],u=[],d=[],p=(f,m)=>{const b=Math.abs(f)-(Ht.width*.5-Ht.radius),_=Math.abs(m)-(Ht.depth*.5-Ht.radius),y=Math.max(b,0),R=Math.max(_,0);return Math.hypot(y,R)+Math.min(Math.max(b,_),0)-Ht.radius<-.06};for(let f=0;f<=t;f+=1){const m=f/t,b=this.sampleAt(m),_=b.width*n;for(let y=0;y<=e;y+=1){const R=y/e,E=(R*2-1)*_,T=b.x+b.nx*E,C=b.y+b.ny*E;r.push(T,C,i),a.push(0,0,1),l.push(R,m),c.push(Math.abs(R*2-1)),h.push(m),u.push(!o||p(T,C))}}const g=e+1;for(let f=0;f<t;f+=1)for(let m=0;m<e;m+=1){const b=f*g+m,_=b+1,y=b+g,R=y+1;o&&!(u[b]&&u[_]&&u[y]&&u[R])||d.push(b,_,y,_,R,y)}const x=new _e;return x.setAttribute("position",new re(r,3)),x.setAttribute("normal",new re(a,3)),x.setAttribute("uv",new re(l,2)),x.setAttribute("aEdge",new re(c,1)),x.setAttribute("aRiverT",new re(h,1)),x.setIndex(d),x.computeBoundingSphere(),x}makeBankWallGeometry(t,e=220){const n=[],i=[],o=[],r=[],a=[],l=[];for(let d=0;d<=e;d+=1){const p=d/e,g=this.sampleAt(p),x=g.width+.14;l.push(.83+Math.sin(p*Math.PI*3.2)*.045);for(let f=0;f<4;f+=1){const m=f/3,b=x+m*.88,_=g.x+g.nx*t*b,y=g.y+g.ny*t*b,R=m===0?-1.05+(l[d]- -1.05)*.42:m===1?l[d]+.12:l[d]-.18+m*.3;n.push(_,y,R),i.push(g.nx*t,g.ny*t,0),o.push(m,p*4.6),r.push(m)}}for(let d=0;d<e;d+=1)for(let p=0;p<3;p+=1){const g=d*4+p,x=g+1,f=g+4,m=f+1;t>0?a.push(g,x,f,x,m,f):a.push(g,f,x,x,f,m)}const u=new _e;return u.setAttribute("position",new re(n,3)),u.setAttribute("normal",new re(i,3)),u.setAttribute("uv",new re(o,2)),u.setAttribute("aEdge",new re(r,1)),u.setIndex(a),u.computeVertexNormals(),u.computeBoundingSphere(),u}}function yo(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=ql(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let x=0;x<r[h].length;++x)p.push(r[h][x][d]);const g=ql(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ql(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Jt(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const xg=`
  attribute float aMoss;
  attribute float aDry;
  attribute float aStone;
  attribute float aWet;
  attribute float aBed;
  attribute float aShade;
  attribute float aSun;
  attribute float aPath;
  varying float vMoss;
  varying float vDry;
  varying float vStone;
  varying float vWet;
  varying float vBed;
  varying float vShade;
  varying float vSun;
  varying float vPath;
  varying vec3 vFHWorldPos;
  varying vec3 vFHNormal;
`,yg=`
  varying float vMoss;
  varying float vDry;
  varying float vStone;
  varying float vWet;
  varying float vBed;
  varying float vShade;
  varying float vSun;
  varying float vPath;
  varying vec3 vFHWorldPos;
  varying vec3 vFHNormal;
  uniform vec3 uMoss;
  uniform vec3 uDry;
  uniform vec3 uStone;
  uniform vec3 uWet;
  uniform vec3 uBed;
  uniform vec3 uSnowColor;
  uniform float uSnow;
  uniform float uTime;
  uniform float uCaustic;

  float fhHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float fhNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(fhHash(i), fhHash(i + vec2(1.0, 0.0)), u.x),
      mix(fhHash(i + vec2(0.0, 1.0)), fhHash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fhFbm(vec2 p) {
    float value = 0.0;
    float amp = 0.55;
    for (int i = 0; i < 4; i++) {
      value += fhNoise(p) * amp;
      p = p * 2.03 + vec2(7.2, 3.7);
      amp *= 0.5;
    }
    return value;
  }
`,Sg=`
  attribute float aEdge;
  varying float vBankEdge;
  varying vec2 vFHUv;
  varying vec3 vFHBankWorld;
`,bg=`
  varying float vBankEdge;
  varying vec2 vFHUv;
  varying vec3 vFHBankWorld;
  uniform vec3 uStone;
  uniform vec3 uWet;
  uniform vec3 uDry;
  float fhHash2(vec2 p) {
    return fract(sin(dot(p, vec2(41.7, 289.3))) * 43758.5453123);
  }
`;class Mg{constructor(t,e,n){M(this,"group",new Xe);M(this,"mesh");M(this,"heightAt");M(this,"uniforms");M(this,"pebbles");M(this,"embankments");M(this,"embankmentUniforms");M(this,"river");this.river=t,this.group.name="terrain";const i=new Float32Array(e.terrainCols*e.terrainRows);this.heightAt=(a,l)=>this.computeHeight(a,l);const o=this.buildTerrainGeometry(e,i);this.uniforms={moss:{value:n.color.terrainMoss.clone()},dry:{value:n.color.terrainDry.clone()},stone:{value:n.color.terrainStone.clone()},wet:{value:n.color.terrainWet.clone()},bed:{value:n.color.terrainBed.clone()},snowColor:{value:new mt(14937323)},snow:{value:0},time:{value:0},caustic:{value:.18}};const r=new Ri({color:16777215,roughness:.84,metalness:0,envMapIntensity:n.value.envIntensity*.75,dithering:!0});r.shadowSide=nn,r.onBeforeCompile=a=>{a.uniforms.uMoss=this.uniforms.moss,a.uniforms.uDry=this.uniforms.dry,a.uniforms.uStone=this.uniforms.stone,a.uniforms.uWet=this.uniforms.wet,a.uniforms.uBed=this.uniforms.bed,a.uniforms.uSnowColor=this.uniforms.snowColor,a.uniforms.uSnow=this.uniforms.snow,a.uniforms.uTime=this.uniforms.time,a.uniforms.uCaustic=this.uniforms.caustic,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${xg}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vMoss = aMoss;
          vDry = aDry;
          vStone = aStone;
          vWet = aWet;
          vBed = aBed;
          vShade = aShade;
          vSun = aSun;
          vPath = aPath;
          vFHWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
          vFHNormal = normalize(mat3(modelMatrix) * normal);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${yg}`).replace("#include <color_fragment>",`#include <color_fragment>
          float macro = fhFbm(vFHWorldPos.xy * 0.23 + vec2(9.2, 3.4));
          float micro = fhNoise(vFHWorldPos.xy * 3.1);
          float grain = fhNoise(vFHWorldPos.xy * 11.0);

          float mossW = max(vMoss, 0.0);
          float dryW = max(vDry, 0.0);
          float stoneW = max(vStone, 0.0);
          float wSum = max(0.001, mossW + dryW + stoneW);
          vec3 surface = (uMoss * mossW + uDry * dryW + uStone * stoneW) / wSum;
          surface *= 0.70 + macro * 0.54;
          surface += (micro - 0.5) * 0.03;
          surface *= 0.94 + grain * 0.1;
          surface = mix(surface, surface * vec3(0.72, 0.8, 0.62), smoothstep(0.58, 0.82, micro) * 0.2);
          float dryField = fhFbm(vFHWorldPos.xy * 0.48 + vec2(5.2, 13.7));
          float rockField = fhFbm(vFHWorldPos.xy * 0.92 - vec2(8.4, 2.1));
          surface = mix(surface, uDry * (0.9 + grain * 0.16), smoothstep(0.53, 0.8, dryField) * 0.34);
          surface = mix(surface, uStone * 0.92, smoothstep(0.62, 0.84, rockField) * 0.22);
          vec3 pathColor = mix(uDry * 1.02, uStone * 1.05, 0.38 + grain * 0.16);
          surface = mix(surface, pathColor, clamp(vPath, 0.0, 1.0) * 0.68);

          float wetMask = clamp(vWet, 0.0, 1.0);
          surface = mix(surface, uWet * (0.78 + micro * 0.28), wetMask * 0.84);

          if (vBed > 0.001) {
            float silt = fhNoise(vFHWorldPos.xy * 1.65);
            vec3 bedCol = uBed * (0.68 + silt * 0.42);
            surface = mix(surface, bedCol, clamp(vBed, 0.0, 1.0) * 0.94);
          }

          float snowNoise = fhFbm(vFHWorldPos.xy * 2.2 + vec2(4.1, 8.7));
          float snowMask = uSnow *
            smoothstep(0.25, 0.75, normalize(vFHNormal).z) *
            (0.6 + 0.4 * snowNoise) *
            (1.0 - clamp(vBed, 0.0, 1.0)) *
            (1.0 - clamp(vWet, 0.0, 1.0) * 0.6);
          surface = mix(surface, uSnowColor, snowMask * 0.55);

          float edgeLift = smoothstep(0.0, 0.8, abs(vShade - 0.72));
          surface *= mix(0.56, 1.0, clamp(vShade, 0.0, 1.0));
          surface *= mix(0.44, 1.0, clamp(vSun, 0.0, 1.0));
          surface *= 1.0 + edgeLift * 0.02;
          diffuseColor.rgb = surface;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          float snx = fhNoise(vFHWorldPos.xy * 1.8 + 13.0) - 0.5;
          float sny = fhNoise(vFHWorldPos.xy * 1.8 - 7.0) - 0.5;
          float normalAmount = 0.12 + clamp(vWet, 0.0, 1.0) * 0.08;
          normal = normalize(normal + vec3(snx, sny, 0.0) * normalAmount);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, 0.34, clamp(vWet, 0.0, 1.0) * 0.42);
          roughnessFactor = mix(roughnessFactor, 0.72, clamp(vBed, 0.0, 1.0) * 0.55);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          if (vBed > 0.02) {
            vec2 cp = vFHWorldPos.xy * 0.62;
            float waveA = fhFbm(cp + vec2(uTime * 0.055, -uTime * 0.038));
            float waveB = fhFbm(cp * 1.19 + vec2(-uTime * 0.032, uTime * 0.047));
            float threads = abs(waveA - waveB);
            float caustic = 1.0 - smoothstep(0.015, 0.11, threads);
            caustic *= smoothstep(0.2, 0.9, fhNoise(vFHWorldPos.xy * 2.3 + uTime * 0.03));
            totalEmissiveRadiance += vec3(0.12, 0.28, 0.23) * caustic * vBed * uCaustic;
          }`)},r.customProgramCacheKey=()=>"fh-terrain-v1",this.mesh=new ae(o,r),this.mesh.name="terrain-surface",this.mesh.receiveShadow=!0,this.mesh.castShadow=e.tier==="high",this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix(),this.group.add(this.mesh),this.embankmentUniforms={stone:{value:n.color.terrainStone.clone()},wet:{value:n.color.terrainWet.clone()},dry:{value:n.color.terrainDry.clone()}},this.embankments=this.buildEmbankments(n),this.group.add(this.embankments),this.pebbles=this.buildPebbles(e.pebbleCount,n),this.group.add(this.pebbles),this.setPalette(n)}setPalette(t){this.uniforms.moss.value.copy(t.color.terrainMoss),this.uniforms.dry.value.copy(t.color.terrainDry),this.uniforms.stone.value.copy(t.color.terrainStone),this.uniforms.wet.value.copy(t.color.terrainWet),this.uniforms.bed.value.copy(t.color.terrainBed),this.embankmentUniforms.stone.value.copy(t.color.terrainStone),this.embankmentUniforms.wet.value.copy(t.color.terrainWet),this.embankmentUniforms.dry.value.copy(t.color.terrainDry);const e=this.pebbles.material;e.color.copy(t.color.pebble),e.envMapIntensity=t.value.envIntensity;const n=this.mesh.material;n.envMapIntensity=t.value.envIntensity*.75;const i=this.embankments.material;i.envMapIntensity=t.value.envIntensity*.55}setSeason(t,e){this.uniforms.moss.value.copy(e.color.terrainMoss).lerp(t.color.grass,.55),this.uniforms.dry.value.copy(e.color.terrainDry).lerp(t.color.dry,.55),this.uniforms.stone.value.copy(e.color.terrainStone).lerp(t.color.stone,.55*.7),this.uniforms.snowColor.value.copy(t.color.snow),this.uniforms.snow.value=t.value.snowAmount,this.embankmentUniforms.stone.value.copy(this.uniforms.stone.value),this.embankmentUniforms.dry.value.copy(this.uniforms.dry.value),this.pebbles.material.color.copy(e.color.pebble).lerp(t.color.stone,.25)}tick(t){this.uniforms.time.value=t}computeHeight(t,e,n=this.river.nearest(t,e)){const i=n.distance-n.halfWidth,o=Math.min(Ht.width*.5-Math.abs(t),Ht.depth*.5-Math.abs(e)),r=sn(.05,1.85,o);if(i<0){const p=sn(0,n.halfWidth*.92,-i),g=Gn(t*.42+4.1,e*.42-2.7,3),x=Gn(t*1.3-8,e*1.3+1.9,2);let f=ie.lerp(-1.06,-1.38,p);return f+=(g-.5)*.2+(x-.5)*.08,Math.max(-1.62,f)}const a=Gn(t*.15+7.3,e*.15-3.1,5),l=ug(t*.2-2.6,e*.2+5.8,4),c=Gn(t*.52-2.4,e*.52+5.8,3),h=sn(0,4.2,i),u=sn(4.5,17.5,i);let d=.62+a*.26+c*.08;return d+=h*(.2+a*.16),d+=u*(.34+l*.9+a*.34),d-=u*(1-l)*.18,d+=.32*Math.exp(-((t-11.5)**2+(e-7.5)**2)/(2*6.2**2)),d+=.24*Math.exp(-((t+12)**2+(e-9)**2)/(2*4.8**2)),d+=.16*Math.exp(-((t-2.5)**2+(e+9)**2)/(2*3.6**2)),d=Math.min(d,2.78),i<.7&&(d=ie.lerp(.48,d,sn(.05,.7,i))),ie.lerp(.345,d,Math.pow(r,.72))}buildTerrainGeometry(t,e){const n=t.terrainCols,i=t.terrainRows,o=new Float32Array(n*i*3),r=new Float32Array(n*i),a=new Float32Array(n*i),l=new Float32Array(n*i),c=new Float32Array(n*i),h=new Float32Array(n*i),u=new Float32Array(n*i),d=new Float32Array(n*i),p=new Float32Array(n*i);for(let R=0;R<i;R+=1)for(let E=0;E<n;E+=1){const T=R*n+E,C=E/(n-1),D=R/(i-1),v=(C-.5)*(Ht.width-.16),S=(D-.5)*(Ht.depth-.16),I=this.river.nearest(v,S),U=this.computeHeight(v,S,I);e[T]=U,o[T*3]=v,o[T*3+1]=S,o[T*3+2]=U;const B=I.distance-I.halfWidth,W=sn(.12,-.18,B),H=Gt((1-sn(.1,2.4,Math.max(0,B)))*(1-sn(.95,2.05,U))*(1-W),0,1),$=Gn(v*.24+3.7,S*.24-1.2,4),X=Gn(v*1.25-8.2,S*1.25+2.4,3),it=Gt(.46+$*.64-H*.24+(X-.5)*.2,0,1),ht=Gt(.16+(1-$)*.28+(X-.5)*.18-H*.12,0,1),ut=Gt(.1+(1-X)*.14+H*.62,0,1),Ft=it+ht+ut||1;r[T]=it/Ft,a[T]=ht/Ft,l[T]=ut/Ft,c[T]=H,h[T]=W;const Yt=3.1+($-.5)*1.35,Z=Gn(v*.8-4.1,S*.8+9.2,2),nt=Math.abs(B-Yt);p[T]=Gt((1-sn(.28,.9,nt))*sn(1.1,2.1,B)*(1-W)*(.7+Z*.3),0,1)}for(let R=0;R<i;R+=1)for(let E=0;E<n;E+=1){const T=R*n+E,C=e[T];let D=0,v=0;for(let U=-1;U<=1;U+=1)for(let B=-1;B<=1;B+=1){if(B===0&&U===0)continue;const W=Gt(E+B,0,n-1),H=Gt(R+U,0,i-1);D+=e[H*n+W],v+=1}const S=D/v,I=(C-S)/.42;u[T]=Gt(.62+I*.58,.48,1)}const g=-.89,x=-.46,f=.82,m=(R,E)=>{const T=Gt((R/(Ht.width-.16)+.5)*(n-1),0,n-1.001),C=Gt((E/(Ht.depth-.16)+.5)*(i-1),0,i-1.001),D=Math.floor(T),v=Math.floor(C),S=T-D,I=C-v,U=v*n+D,B=U+1,W=U+n,H=W+1;return e[U]*(1-S)*(1-I)+e[B]*S*(1-I)+e[W]*(1-S)*I+e[H]*S*I};for(let R=0;R<i;R+=1)for(let E=0;E<n;E+=1){const T=R*n+E,C=o[T*3],D=o[T*3+1],v=e[T],S=.37;let I=0,U=0;for(let W=1;W<=16;W+=1){const H=W*S,$=C+g*H,X=D+x*H;if(Math.abs($)>Ht.width*.5-.2||Math.abs(X)>Ht.depth*.5-.2)break;const it=v+.04+H*f,ht=m($,X),ut=1-(W-1)/18;U+=ut,ht>it&&(I+=ut)}const B=U>0?I/U:0;d[T]=Gt(1-B*.95,0,1)}const b=new Uint32Array((n-1)*(i-1)*6);let _=0;for(let R=0;R<i-1;R+=1)for(let E=0;E<n-1;E+=1){const T=R*n+E,C=T+1,D=T+n,v=D+1;b[_++]=T,b[_++]=C,b[_++]=D,b[_++]=C,b[_++]=v,b[_++]=D}const y=new _e;return y.setAttribute("position",new Jt(o,3)),y.setIndex(new Jt(b,1)),y.setAttribute("aMoss",new Jt(r,1)),y.setAttribute("aDry",new Jt(a,1)),y.setAttribute("aStone",new Jt(l,1)),y.setAttribute("aWet",new Jt(c,1)),y.setAttribute("aBed",new Jt(h,1)),y.setAttribute("aShade",new Jt(u,1)),y.setAttribute("aSun",new Jt(d,1)),y.setAttribute("aPath",new Jt(p,1)),y.computeVertexNormals(),y.computeBoundingSphere(),y}buildEmbankments(t){const e=this.river.makeBankWallGeometry(1,190),n=this.river.makeBankWallGeometry(-1,190),i=yo([e,n],!1);if(e.dispose(),n.dispose(),!i)throw new Error("Unable to merge embankment geometry");const o=new Ri({color:16777215,roughness:.78,metalness:0,envMapIntensity:t.value.envIntensity*.55,dithering:!0});o.onBeforeCompile=a=>{a.uniforms.uStone=this.embankmentUniforms.stone,a.uniforms.uWet=this.embankmentUniforms.wet,a.uniforms.uDry=this.embankmentUniforms.dry,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Sg}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vBankEdge = aEdge;
          vFHUv = uv;
          vFHBankWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${bg}`).replace("#include <color_fragment>",`#include <color_fragment>
          float courseScale = 28.0;
          float rowN = floor(vFHUv.y * courseScale);
          vec2 stoneUv = vec2(vFHUv.x * 3.4 + rowN * 0.37, vFHUv.y * courseScale);
          vec2 f = fract(stoneUv);
          vec2 stoneNoise = vec2(fhHash2(floor(stoneUv)), fhHash2(floor(stoneUv) + 17.2));
          float mortarX = smoothstep(0.02, 0.085, min(f.x, 1.0 - f.x));
          float mortarY = smoothstep(0.015, 0.10, min(f.y, 1.0 - f.y));
          float face = mortarX * mortarY;
          float grain = fhHash2(floor(stoneUv * 2.0) + 8.0);
          vec3 stoneCol = mix(uStone * 0.72, uStone * 1.08, face);
          stoneCol *= 0.9 + stoneNoise.x * 0.16 + grain * 0.04;
          float wetLip = 1.0 - smoothstep(0.2, 0.95, vBankEdge);
          stoneCol = mix(stoneCol, uWet * 0.82, wetLip * 0.76);
          float dark = 1.0 - smoothstep(0.0, 0.08, min(f.x, 1.0 - f.x));
          dark = max(dark, (1.0 - smoothstep(0.0, 0.06, min(f.y, 1.0 - f.y))) * 0.7);
          stoneCol *= 1.0 - dark * 0.08;
          if (abs(vFHBankWorld.x) > 19.72 || abs(vFHBankWorld.y) > 14.72) discard;
          diffuseColor.rgb = stoneCol;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(0.86, 0.38, (1.0 - smoothstep(0.1, 0.9, vBankEdge)));`)},o.customProgramCacheKey=()=>"fh-bank-v1";const r=new ae(i,o);return r.name="stone-embankments",r.castShadow=!0,r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.updateMatrix(),r}buildPebbles(t,e){const n=ti(1592642302),i=new zi(1,10,7),o=new Ri({color:e.color.pebble.clone(),roughness:.63,metalness:0,envMapIntensity:e.value.envIntensity,dithering:!0}),r=new bn(i,o,t);r.name="bank-pebbles",r.castShadow=!0,r.receiveShadow=!0,r.instanceMatrix.setUsage(Zr);const a=new ce;for(let l=0;l<t;l+=1){const c=.04+n()*.92,h=n()>.5?1:-1,u=this.river.sampleAt(c),d=u.width+.25+n()*2.4,p=u.x+u.nx*h*d+(n()-.5)*.9,g=u.y+u.ny*h*d+(n()-.5)*.9,x=this.computeHeight(p,g),f=.05+Math.pow(n(),2.3)*.5;a.position.set(p,g,x+f*.34),a.rotation.set(n()*.22,n()*Math.PI*2,n()*.3),a.scale.set(f*(.75+n()*.6),f,f*(.7+n()*.5)),a.updateMatrix(),r.setMatrixAt(l,a.matrix)}return r.instanceMatrix.needsUpdate=!0,r.visible=!1,r}}const Ci=8,wg=`
  attribute float aEdge;
  uniform float uFhTime;
  uniform float uFhTide;
  uniform float uFhFirmness;
  uniform float uFhDamping;
  uniform vec2 uFhSlosh;
  uniform vec3 uFhHover;
  uniform float uFhReflectionActive;
  uniform mat4 uFhReflectionMatrix;
  uniform vec4 uFhRipples[${Ci}];

  varying float vFhEdge;
  varying float vFhRipple;
  varying float vFhCrest;
  varying vec3 vFhLocalPos;
  varying vec4 vFhReflectionCoord;

  float fhBreathe(vec2 p, float t) {
    float slow = sin(6.28318530718 * t / 7.3 + p.x * 0.16 + p.y * 0.11);
    float slower = sin(6.28318530718 * t / 11.0 - p.x * 0.08 + p.y * 0.14);
    return (slow * 0.022 + slower * 0.012);
  }

  void fhGerstner(vec2 p, float t, out float height, out vec2 gradient, out float ripple) {
    height = fhBreathe(p, t);
    gradient = vec2(0.0);
    ripple = 0.0;

    float amplitude = mix(0.026, 0.042, uFhFirmness);
    float speed = mix(0.58, 1.18, uFhFirmness);
    vec2 d0 = normalize(vec2(0.84, 0.54));
    vec2 d1 = normalize(vec2(-0.64, 0.77));
    vec2 d2 = normalize(vec2(0.38, -0.93));
    vec2 d3 = normalize(vec2(-0.91, -0.41));
    float k0 = 6.28318530718 / 5.4;
    float k1 = 6.28318530718 / 3.8;
    float k2 = 6.28318530718 / 2.7;
    float k3 = 6.28318530718 / 1.9;
    float a0 = amplitude * 0.82;
    float a1 = amplitude * 0.64;
    float a2 = amplitude * 0.42;
    float a3 = amplitude * 0.25;

    float p0 = dot(p, d0) * k0 + t * speed * 0.72;
    float p1 = dot(p, d1) * k1 + t * speed * 0.94 + 1.7;
    float p2 = dot(p, d2) * k2 + t * speed * 1.22 + 3.1;
    float p3 = dot(p, d3) * k3 + t * speed * 1.54 + 4.6;

    height += sin(p0) * a0 + sin(p1) * a1 + sin(p2) * a2 + sin(p3) * a3;
    gradient += d0 * cos(p0) * k0 * a0;
    gradient += d1 * cos(p1) * k1 * a1;
    gradient += d2 * cos(p2) * k2 * a2;
    gradient += d3 * cos(p3) * k3 * a3;

    float ringK = mix(1.75, 3.65, uFhFirmness);
    float ringSpeed = mix(0.75, 2.4, uFhFirmness);
    float ringDecay = mix(0.16, 0.62, uFhDamping);
    float ringFade = mix(0.2, 1.05, uFhDamping);

    for (int i = 0; i < ${Ci}; i++) {
      vec4 r = uFhRipples[i];
      if (r.w <= 0.001) continue;
      float age = t - r.z;
      if (age <= 0.0 || age > 9.0) continue;
      float dist = distance(p, r.xy);
      float phase = ringK * (dist - age * ringSpeed);
      float envelope = exp(-dist * ringDecay) * exp(-age * ringFade);
      envelope *= smoothstep(0.0, 0.24, age);
      float ring = sin(phase) * envelope;
      float ringAmp = 0.2 * mix(1.1, 0.82, uFhFirmness) * r.w;
      height += ring * ringAmp;
      ripple += max(0.0, ring) * envelope;
    }
  }

  float fhWaterHeight(vec2 p) {
    float height;
    vec2 grad;
    float ripple;
    fhGerstner(p, uFhTime, height, grad, ripple);
    height += uFhTide + dot(uFhSlosh, p);
    if (uFhHover.z > 0.001) {
      float d = distance(p, uFhHover.xy);
      height -= uFhHover.z * 0.09 * exp(-d * d * 2.2);
    }
    return height;
  }
`,Tg=`
  uniform vec3 uFhRim;
  uniform vec3 uFhFoam;
  uniform vec3 uFhSeasonTint;
  uniform float uFhSeasonSnow;
  uniform vec3 uFhTowerGlow;
  uniform float uFhTime;
  uniform sampler2D tFhReflection;
  uniform float uFhReflectionStrength;
  uniform float uFhReflectionActive;
  uniform vec4 uFhRipples[${Ci}];
  varying float vFhEdge;
  varying float vFhRipple;
  varying float vFhCrest;
  varying vec3 vFhLocalPos;
  varying vec4 vFhReflectionCoord;

  float fhRoundedRectSdf(vec2 p) {
    vec2 q = abs(p) - (vec2(20.0, 15.0) - vec2(0.68));
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.68;
  }

  float fhHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float fhNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(fhHash(i), fhHash(i + vec2(1.0, 0.0)), u.x),
      mix(fhHash(i + vec2(0.0, 1.0)), fhHash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
`;class Eg{constructor(t,e,n,i=0){M(this,"mesh");M(this,"material");M(this,"uniforms");M(this,"river");M(this,"ripples");M(this,"rippleCursor",0);this.river=t,this.ripples=new Array(Ci).fill(null).map(()=>new de(0,0,-100,0)),this.uniforms={uFhTime:{value:0},uFhTide:{value:i},uFhFirmness:{value:.55},uFhDamping:{value:.5},uFhSlosh:{value:new st(0,0)},uFhHover:{value:new N(0,0,0)},uFhRipples:{value:this.ripples},uFhRim:{value:n.color.waterRim.clone()},uFhFoam:{value:n.color.waterFoam.clone()},uFhSeasonTint:{value:new mt(16777215)},uFhSeasonSnow:{value:0},uFhTowerGlow:{value:new N(0,0,0)},uFhReflectionTexture:{value:null},uFhReflectionMatrix:{value:new jt},uFhReflectionStrength:{value:.24},uFhReflectionActive:{value:0}},this.material=new eg({color:n.color.waterDeep.clone(),roughness:.16,metalness:.02,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25,ior:1.33,transparent:!0,opacity:.83,depthWrite:!1,side:nn,fog:!0,dithering:!0}),this.material.onBeforeCompile=o=>{o.uniforms.uFhTime=this.uniforms.uFhTime,o.uniforms.uFhTide=this.uniforms.uFhTide,o.uniforms.uFhFirmness=this.uniforms.uFhFirmness,o.uniforms.uFhDamping=this.uniforms.uFhDamping,o.uniforms.uFhSlosh=this.uniforms.uFhSlosh,o.uniforms.uFhHover=this.uniforms.uFhHover,o.uniforms.uFhRipples=this.uniforms.uFhRipples,o.uniforms.uFhRim=this.uniforms.uFhRim,o.uniforms.uFhFoam=this.uniforms.uFhFoam,o.uniforms.uFhSeasonTint=this.uniforms.uFhSeasonTint,o.uniforms.uFhSeasonSnow=this.uniforms.uFhSeasonSnow,o.uniforms.uFhTowerGlow=this.uniforms.uFhTowerGlow,o.uniforms.tFhReflection=this.uniforms.uFhReflectionTexture,o.uniforms.uFhReflectionStrength=this.uniforms.uFhReflectionStrength,o.uniforms.uFhReflectionActive=this.uniforms.uFhReflectionActive,o.uniforms.uFhReflectionMatrix=this.uniforms.uFhReflectionMatrix,o.uniforms.uFhTime=this.uniforms.uFhTime,o.uniforms.uFhRipples=this.uniforms.uFhRipples,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
${wg}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          {
            float eps = 0.08;
            float h0 = fhWaterHeight(position.xy);
            float hx = fhWaterHeight(position.xy + vec2(eps, 0.0));
            float hy = fhWaterHeight(position.xy + vec2(0.0, eps));
            objectNormal = normalize(vec3(
              -(hx - h0) / eps,
              -(hy - h0) / eps,
              1.0
            ));
          }`).replace("#include <begin_vertex>",`#include <begin_vertex>
          {
            vec2 fhP = position.xy;
            float fhHeight;
            vec2 fhGradient;
            float fhRipple;
            fhGerstner(fhP, uFhTime, fhHeight, fhGradient, fhRipple);
            fhHeight += uFhTide + dot(uFhSlosh, fhP);
            if (uFhHover.z > 0.001) {
              float hd = distance(fhP, uFhHover.xy);
              fhHeight -= uFhHover.z * 0.09 * exp(-hd * hd * 2.2);
            }
            transformed.z += fhHeight;
            vFhEdge = aEdge;
            vFhRipple = fhRipple;
            vFhCrest = fhHeight;
            vFhLocalPos = position;
            vFhReflectionCoord = uFhReflectionMatrix * vec4(position, 1.0);
          }`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${Tg}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          if (fhRoundedRectSdf(vFhLocalPos.xy) > -0.08) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
          float fhEdgeMask = smoothstep(0.82, 1.0, vFhEdge);
          float fhRippleFoam = 0.0;
          for (int i = 0; i < ${Ci}; i++) {
            vec4 r = uFhRipples[i];
            if (r.w <= 0.001) continue;
            float age = uFhTime - r.z;
            if (age <= 0.0 || age > 9.0) continue;
            float dist = distance(vFhLocalPos.xy, r.xy);
            float phase = 2.8 * (dist - age * 1.65);
            float ring = max(0.0, sin(phase));
            ring *= exp(-dist * 0.2) * exp(-age * 0.3) * smoothstep(0.0, 0.2, age);
            fhRippleFoam += smoothstep(0.22, 0.82, ring) * r.w;
          }
          fhRippleFoam = clamp(fhRippleFoam, 0.0, 1.5);
          diffuseColor.rgb *= uFhSeasonTint;
          diffuseColor.rgb = mix(
            diffuseColor.rgb,
            vec3(0.82, 0.9, 0.91),
            fhEdgeMask * uFhSeasonSnow * 0.28
          );
          diffuseColor.rgb = mix(
            diffuseColor.rgb,
            uFhFoam,
            fhEdgeMask * 0.035 + fhRippleFoam * 0.28
          );`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, 0.08, clamp(vFhRipple, 0.0, 1.0) * 0.25);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          float fhSurfaceNoise = fhNoise(vFhLocalPos.xy * 17.0 + vec2(uFhTime * 0.24, -uFhTime * 0.19));
          float fhSparkle = smoothstep(0.84, 0.99, fhSurfaceNoise);
          float fhGlint = fhSparkle * smoothstep(0.2, 0.0, vFhEdge);
          float fhEdgeGlow = pow(smoothstep(0.82, 1.0, vFhEdge), 5.0);
          totalEmissiveRadiance += uFhRim * (
            clamp(vFhRipple, 0.0, 1.2) * 0.24 +
            fhRippleFoam * 0.5 +
            fhGlint * 0.4 +
            fhEdgeGlow * 0.1
          );
          if (uFhTowerGlow.z > 0.001) {
            float towerDist = distance(vFhLocalPos.xy, uFhTowerGlow.xy);
            float pool = exp(-towerDist * towerDist * 0.11);
            float shimmer = pow(max(0.0, sin(towerDist * 6.2 - uFhTime * 1.5)), 5.0);
            totalEmissiveRadiance += vec3(1.0, 0.58, 0.24) *
              uFhTowerGlow.z * (pool * 0.42 + shimmer * exp(-towerDist * 0.25) * 0.2);
          }
          if (uFhReflectionActive > 0.5 && vFhReflectionCoord.w > 0.0) {
            vec2 ruv = vFhReflectionCoord.xy / max(vFhReflectionCoord.w, 0.0001);
            ruv += vec2(
              sin(vFhLocalPos.y * 3.2 + uFhTime * 1.05),
              cos(vFhLocalPos.x * 2.7 - uFhTime * 0.92)
            ) * 0.013;
            vec3 refl = texture2D(tFhReflection, clamp(ruv, vec2(0.002), vec2(0.998))).rgb;
            totalEmissiveRadiance += refl * uFhReflectionStrength * mix(0.35, 1.0, 1.0 - vFhEdge);
          }`)},this.material.customProgramCacheKey=()=>"fh-water-physical-v1",this.mesh=new ae(this.river.makeRibbonGeometry(e.waterAlong,e.waterAcross,1,0,!0),this.material),this.mesh.name="jelly-water",this.mesh.renderOrder=4,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.castShadow=!1,this.setPalette(n)}setPalette(t){this.material.color.copy(t.color.waterShallow).multiplyScalar(.9),this.material.opacity=t.definition.isDark?.66:.57,this.material.roughness=t.definition.isDark?.12:.1,this.material.envMapIntensity=1.15+t.value.envIntensity*2.1,this.material.emissive.copy(t.color.waterDeep).multiplyScalar(.18),this.material.emissiveIntensity=t.definition.isDark?.3:.16,this.uniforms.uFhRim.value.copy(t.color.waterRim),this.uniforms.uFhFoam.value.copy(t.color.waterFoam)}setFirmness(t){this.uniforms.uFhFirmness.value=t}setDamping(t){this.uniforms.uFhDamping.value=t}setTide(t){this.uniforms.uFhTide.value=t}get tide(){return this.uniforms.uFhTide.value}setSlosh(t,e){this.uniforms.uFhSlosh.value.set(t,e)}setHover(t,e,n){this.uniforms.uFhHover.value.set(t,e,n)}setSeason(t){const e=new mt(16777215).lerp(t.color.waterTint,.35);this.uniforms.uFhSeasonTint.value.copy(e),this.uniforms.uFhSeasonSnow.value=t.value.snowAmount}setTowerGlow(t,e,n){this.uniforms.uFhTowerGlow.value.set(t,e,Math.max(0,n))}sampleHeight(t,e,n){const i=Math.sin(Math.PI*2*n/7.3+t*.16+e*.11)*.022+Math.sin(Math.PI*2*n/11-t*.08+e*.14)*.012,o=this.uniforms.uFhFirmness.value,r=ie.lerp(.026,.042,o),a=ie.lerp(.58,1.18,o),l=[[.84,.54,5.4,.82],[-.64,.77,3.8,.64],[.38,-.93,2.7,.42],[-.91,-.41,1.9,.25]];let c=i;for(let g=0;g<l.length;g+=1){const[x,f,m,b]=l[g],_=Math.hypot(x,f)||1,y=Math.PI*2/m,R=(t*x+e*f)/_*y+n*a*(.72+g*.18)+g*1.55;c+=Math.sin(R)*r*b}const h=ie.lerp(1.75,3.65,o),u=ie.lerp(.75,2.4,o),d=ie.lerp(.16,.62,this.uniforms.uFhDamping.value),p=ie.lerp(.2,1.05,this.uniforms.uFhDamping.value);for(const g of this.ripples){if(g.w<=.001)continue;const x=n-g.z;if(x<=0||x>9)continue;const f=Math.hypot(t-g.x,e-g.y),m=Math.exp(-f*d)*Math.exp(-x*p)*ie.smoothstep(x,0,.24);c+=Math.sin(h*(f-x*u))*m*.2*g.w}return c+this.tide+this.uniforms.uFhSlosh.value.x*t+this.uniforms.uFhSlosh.value.y*e}samplePush(t,e,n,i){i.set(0,0);const o=this.uniforms.uFhFirmness.value,r=ie.lerp(1.75,3.65,o),a=ie.lerp(.75,2.4,o),l=ie.lerp(.16,.62,this.uniforms.uFhDamping.value),c=ie.lerp(.2,1.05,this.uniforms.uFhDamping.value);for(const h of this.ripples){if(h.w<=.001)continue;const u=n-h.z;if(u<=0||u>9)continue;const d=t-h.x,p=e-h.y,g=Math.hypot(d,p)||.001,x=Math.sin(r*(g-u*a))*Math.exp(-g*l)*Math.exp(-u*c)*ie.smoothstep(u,0,.24),f=Math.max(0,x)*Math.min(1,h.w)*.75;i.x+=d/g*f,i.y+=p/g*f}i.x+=this.uniforms.uFhSlosh.value.x*.35,i.y+=this.uniforms.uFhSlosh.value.y*.35}setReflection(t,e,n){this.uniforms.uFhReflectionTexture.value=t,this.uniforms.uFhReflectionMatrix.value.copy(e),this.uniforms.uFhReflectionActive.value=n}setReflectionActive(t){this.uniforms.uFhReflectionActive.value=t?1:0}addRipple(t,e,n,i=1){this.ripples[this.rippleCursor].set(t,e,n,ie.clamp(i,.18,1.8)),this.rippleCursor=(this.rippleCursor+1)%Ci}clearRipples(){for(const t of this.ripples)t.set(0,0,-100,0)}tick(t){this.uniforms.uFhTime.value=t}setQuality(t,e){const n=this.mesh.geometry;this.mesh.geometry=this.river.makeRibbonGeometry(t.waterAlong,t.waterAcross,1,0,!0),n.dispose(),e&&this.setPalette(e)}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const Ag=`
  varying vec3 vLocalPos;
  varying vec3 vLocalNormal;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;

  void main() {
    vLocalPos = position;
    vLocalNormal = normal;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Rg=`
  uniform float uTime;
  uniform float uTop;
  uniform float uBottom;
  uniform vec3 uJelly;
  uniform vec3 uRim;
  uniform vec3 uDeep;
  uniform vec3 uFogColor;
  uniform float uOpacity;

  varying vec3 vLocalPos;
  varying vec3 vLocalNormal;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;

  void main() {
    if (vLocalNormal.z > 0.18 && vLocalPos.z > uTop - 0.55) discard;

    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 N = normalize(vWorldNormal);
    float facing = abs(dot(N, V));
    float fresnel = pow(1.0 - facing, 2.25);
    float height = clamp((vLocalPos.z - uBottom) / (uTop - uBottom), 0.0, 1.0);

    float causticA = sin(vWorldPos.x * 0.72 + uTime * 0.22 + sin(vWorldPos.y * 0.55) * 1.2);
    float causticB = sin(vWorldPos.y * 0.9 - uTime * 0.17 + sin(vWorldPos.x * 0.36) * 1.7);
    float veins = smoothstep(0.72, 1.0, causticA * causticB) * 0.5;

    float topEdge = smoothstep(0.80, 0.995, height);
    float bottomEdge = 1.0 - smoothstep(0.0, 0.18, height);
    float waterLine = exp(-pow((vLocalPos.z - 0.02) * 8.5, 2.0));

    vec3 body = mix(uDeep, uJelly, 0.18 + height * 0.58);
    body = mix(body, uRim, fresnel * 0.6);
    body += uRim * veins * 0.055;
    body += uRim * (topEdge * 0.2 + bottomEdge * 0.09 + waterLine * 0.11);
    body = mix(body, uFogColor, 0.025 + (1.0 - facing) * 0.02);

    float alpha = mix(0.18, 0.58, fresnel) + 0.08;
    alpha += topEdge * 0.08 + veins * 0.025;
    alpha *= uOpacity;

    gl_FragColor = vec4(body, clamp(alpha, 0.0, 0.82));
  }
`,Cg=`
  varying vec3 vLocalPos;
  varying vec3 vLocalNormal;
  varying vec3 vWorldPos;

  void main() {
    vLocalPos = position;
    vLocalNormal = normal;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Pg=`
  uniform vec3 uSoil;
  uniform vec3 uSand;
  uniform vec3 uClay;
  uniform vec3 uPebble;
  uniform vec3 uBedrock;
  uniform vec3 uWood;
  uniform vec3 uWet;
  uniform float uTop;
  uniform float uBottom;
  uniform float uTime;

  varying vec3 vLocalPos;
  varying vec3 vLocalNormal;
  varying vec3 vWorldPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.52;
    for (int i = 0; i < 4; i++) {
      v += noise(p) * a;
      p = p * 2.03 + vec2(3.1, 8.4);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float h = clamp((vLocalPos.z - uBottom) / (uTop - uBottom), 0.0, 1.0);
    float warp = (fbm(vLocalPos.xy * 0.12 + vec2(3.2, 7.7)) - 0.5) * 0.035;
    float layer = h + warp;

    vec3 col = uBedrock;
    col = mix(col, uPebble, smoothstep(0.18, 0.31, layer));
    col = mix(col, uClay, smoothstep(0.40, 0.51, layer));
    col = mix(col, uSand, smoothstep(0.61, 0.71, layer));
    col = mix(col, uSoil, smoothstep(0.84, 0.94, layer));
    col = mix(col, uWet * 1.05, smoothstep(0.94, 1.0, layer) * 0.7);

    float coarse = fbm(vLocalPos.xy * 0.33 + vLocalPos.z * 0.4);
    col *= 0.78 + coarse * 0.36;

    // Embedded pebble lenses in the middle strata.
    vec2 grainUv = vec2((vLocalPos.x + vLocalPos.y) * 1.55, vLocalPos.z * 2.25);
    vec2 f = fract(grainUv) - 0.5;
    vec2 id = floor(grainUv);
    float pebbleMask = smoothstep(0.37, 0.26, length(f * vec2(1.0, 0.66)));
    float pebbleRand = step(0.40, hash(id));
    float bandMask = smoothstep(0.27, 0.34, layer) * (1.0 - smoothstep(0.45, 0.51, layer));
    float pebble = pebbleMask * pebbleRand * bandMask;
    vec3 pebbleTint = uPebble * (0.8 + hash(id + 5.1) * 0.55);
    col = mix(col, pebbleTint, pebble * 0.55);

    // Thin, seaweed-like roots running down from the upper bank into the cut.
    float u = vLocalPos.x * 0.73 + vLocalPos.y * 0.97;
    float wave = sin(vLocalPos.z * 2.0 + u * 0.35) * 0.2;
    float root = pow(abs(sin(u * 0.43 + wave)), 24.0);
    root *= smoothstep(0.97, 0.86, layer) * smoothstep(0.47, 0.6, layer);
    root *= 0.25 + noise(vec2(u * 1.7, 9.0)) * 0.75;
    col = mix(col, uWood * 0.62, root * 0.72);
    col += uWood * pow(abs(sin(u * 0.21 - 1.3)), 30.0) * bandMask * 0.1;

    // Sedimentary hairlines.
    float lamin = sin(h * 96.0 + fbm(vLocalPos.xy * 1.2) * 3.2);
    col *= 1.0 + lamin * 0.024;

    vec3 N = normalize(vLocalNormal);
    float key = max(dot(N, normalize(vec3(-0.55, -0.62, 0.56))), 0.0);
    float cool = max(dot(N, normalize(vec3(0.42, 0.76, 0.2))), 0.0);
    col *= 0.76 + key * 0.22;
    col += vec3(0.05, 0.11, 0.09) * cool * 0.11;

    float bottomShade = smoothstep(0.0, 0.18, h);
    col *= mix(0.66, 1.0, bottomShade);

    gl_FragColor = vec4(col, 1.0);
  }
`,Lg=`
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  void main() {
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Dg=`
  uniform vec3 uTint;
  uniform vec3 uHighlight;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;

  void main() {
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 N = normalize(vWorldNormal);
    float rim = pow(1.0 - abs(dot(N, V)), 2.1);
    vec3 R = reflect(-V, N);
    float spec = pow(max(dot(R, normalize(vec3(0.45, 0.45, 0.8))), 0.0), 24.0);
    vec3 col = mix(uTint, uHighlight, clamp(rim * 1.2 + spec * 1.6, 0.0, 1.0));
    float alpha = 0.08 + rim * 0.46 + spec * 0.4;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.7));
  }
`;class Ig{constructor(t){M(this,"group",new Xe);M(this,"shell");M(this,"core");M(this,"piles");M(this,"bubbles");M(this,"bubbleUniforms");M(this,"shellUniforms");M(this,"coreUniforms");this.group.name="jelly-base";const e=Ht.top,n=Ht.bottom,i=e-n,o=new ra(Ht.width,Ht.depth,i,Ht.bevelSegments,Ht.radius);o.translate(0,0,(e+n)*.5),this.shellUniforms={time:{value:0},top:{value:e},bottom:{value:n},jelly:{value:t.color.jelly.clone()},rim:{value:t.color.jellyRim.clone()},deep:{value:t.color.jellyDeep.clone()},fogColor:{value:t.color.fog.clone()},opacity:{value:1}};const r=new le({uniforms:{uTime:this.shellUniforms.time,uTop:this.shellUniforms.top,uBottom:this.shellUniforms.bottom,uJelly:this.shellUniforms.jelly,uRim:this.shellUniforms.rim,uDeep:this.shellUniforms.deep,uFogColor:this.shellUniforms.fogColor,uOpacity:this.shellUniforms.opacity},vertexShader:Ag,fragmentShader:Rg,transparent:!0,depthWrite:!1,side:nn});this.shell=new ae(o,r),this.shell.name="jelly-shell",this.shell.renderOrder=20,this.shell.frustumCulled=!1,this.group.add(this.shell);const a=-1.78,l=n+.14,c=a-l,h=new ra(Ht.width-.8,Ht.depth-.8,c,3,.26);h.translate(0,0,(a+l)*.5),this.coreUniforms={top:{value:a},bottom:{value:l},soil:{value:t.color.strataSoil.clone()},sand:{value:t.color.strataSand.clone()},clay:{value:t.color.strataClay.clone()},pebble:{value:t.color.strataPebble.clone()},bedrock:{value:t.color.strataBedrock.clone()},wood:{value:t.color.wood.clone()},wet:{value:t.color.terrainWet.clone()},time:{value:0}};const u=new le({uniforms:{uSoil:this.coreUniforms.soil,uSand:this.coreUniforms.sand,uClay:this.coreUniforms.clay,uPebble:this.coreUniforms.pebble,uBedrock:this.coreUniforms.bedrock,uWood:this.coreUniforms.wood,uWet:this.coreUniforms.wet,uTop:this.coreUniforms.top,uBottom:this.coreUniforms.bottom,uTime:this.coreUniforms.time},vertexShader:Cg,fragmentShader:Pg});this.core=new ae(h,u),this.core.name="strata-core",this.core.castShadow=!1,this.core.receiveShadow=!1,this.core.renderOrder=1,this.group.add(this.core),this.piles=this.buildPiles(t),this.group.add(this.piles),this.bubbleUniforms={tint:{value:t.color.jelly.clone().multiplyScalar(1.2)},highlight:{value:t.color.jellyRim.clone()}},this.bubbles=this.buildBubbles(),this.group.add(this.bubbles),this.setPalette(t)}setPalette(t){this.shellUniforms.jelly.value.copy(t.color.jelly),this.shellUniforms.rim.value.copy(t.color.jellyRim),this.shellUniforms.deep.value.copy(t.color.jellyDeep),this.shellUniforms.fogColor.value.copy(t.color.fog),this.coreUniforms.soil.value.copy(t.color.strataSoil),this.coreUniforms.sand.value.copy(t.color.strataSand),this.coreUniforms.clay.value.copy(t.color.strataClay),this.coreUniforms.pebble.value.copy(t.color.strataPebble),this.coreUniforms.bedrock.value.copy(t.color.strataBedrock),this.coreUniforms.wood.value.copy(t.color.wood),this.coreUniforms.wet.value.copy(t.color.terrainWet),this.piles.material.color.copy(t.color.wood),this.bubbleUniforms.tint.value.copy(t.color.jelly).multiplyScalar(1.25),this.bubbleUniforms.highlight.value.copy(t.color.jellyRim)}tick(t){this.shellUniforms.time.value=t,this.coreUniforms.time.value=t}buildBubbles(){const t=ti(185315813),e=36,n=new zi(1,12,8),i=new le({uniforms:{uTint:this.bubbleUniforms.tint,uHighlight:this.bubbleUniforms.highlight},vertexShader:Lg,fragmentShader:Dg,transparent:!0,depthWrite:!1}),o=new bn(n,i,e);o.name="jelly-bubbles",o.renderOrder=3,o.frustumCulled=!1;const r=new ce;for(let a=0;a<e;a+=1){const l=Math.floor(t()*4),c=(t()-.5)*33,h=.16+t()*.18,u=-.34-Math.pow(t(),1.35)*1.3,d=.095+Math.pow(t(),1.55)*.19;l===0?r.position.set(c,-30*.5+h,u):l===1?r.position.set(Ht.width*.5-h,c,u):l===2?r.position.set(c,Ht.depth*.5-h,u):r.position.set(-40*.5+h,c,u),r.rotation.set(t()*3,t()*3,t()*3),r.scale.set(d*(.75+t()*.8),d,d),r.updateMatrix(),o.setMatrixAt(a,r.matrix)}return o.instanceMatrix.needsUpdate=!0,o}buildPiles(t){const e=ti(4027432687),n=[];for(let l=0;l<6;l+=1)n.push([-14+l*5.1+(e()-.5)*1.2,-30*.5+.38]),n.push([Ht.width*.5-.38,-9+l*4.3+(e()-.5)*1.1]);for(let l=0;l<5;l+=1)n.push([-11+l*5.3,Ht.depth*.5-.38]),n.push([-40*.5+.38,-7+l*6.1]);const i=new ds(.085,.14,1,7,1);i.translate(0,.5,0),i.rotateX(Math.PI*.5);const o=new Ri({color:t.color.wood.clone(),roughness:.82,metalness:0,envMapIntensity:.2}),r=new bn(i,o,n.length);r.name="cutaway-pile-roots",r.castShadow=!1,r.receiveShadow=!1,r.renderOrder=2;const a=new ce;for(let l=0;l<n.length;l+=1){const[c,h]=n[l],u=1.05+e()*1.3;a.position.set(c,h,-2.95-e()*.45),a.rotation.set((e()-.5)*.12,(e()-.5)*.12,(e()-.5)*.22),a.scale.set(1.35+e()*.7,1.35+e()*.7,u),a.updateMatrix(),r.setMatrixAt(l,a.matrix)}return r.instanceMatrix.needsUpdate=!0,r}}const Ug=`
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uBottom;
  uniform vec3 uGlow;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uDark;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    float y = uv.y;

    vec3 col = mix(uBottom, uMid, smoothstep(0.0, 0.58, y));
    col = mix(col, uTop, smoothstep(0.48, 1.04, y));

    vec2 p = (uv - vec2(0.52, 0.55)) * vec2(uResolution.x / uResolution.y, 1.0);
    float halo = 1.0 - smoothstep(0.05, 0.88, length(p));
    col = mix(col, uGlow, halo * (0.24 - uDark * 0.08));

    if (uDark > 0.5) {
      vec2 starCell = floor(uv * uResolution * 0.72);
      float star = step(0.9972, hash(starCell));
      float twinkle = 0.55 + 0.45 * sin(uTime * 1.6 + hash(starCell + 4.0) * 31.0);
      col += vec3(0.72, 0.82, 1.0) * star * twinkle * 0.7;
      vec2 moonP = (uv - vec2(0.78, 0.76)) * vec2(uResolution.x / uResolution.y, 1.0);
      float moonDisc = 1.0 - smoothstep(0.035, 0.055, length(moonP));
      float moonHalo = exp(-dot(moonP, moonP) * 16.0);
      col += vec3(1.0, 0.76, 0.48) * (moonDisc * 0.36 + moonHalo * 0.1);
    }

    float band = sin(uv.y * 13.0 + sin(uv.x * 7.0) * 0.45 + uTime * 0.012);
    col += uGlow * band * 0.006;

    float edge = smoothstep(0.25, 1.18, length((uv - 0.5) * vec2(1.12, 0.92)));
    col *= 1.0 - edge * (0.17 - uDark * 0.06);

    gl_FragColor = vec4(col, 1.0);
  }
`,Fg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,Ng=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,Og=`
  uniform vec3 uColor;
  uniform vec3 uGlow;
  uniform float uOpacity;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  void main() {
    vec2 q = (vUv - 0.5) * vec2(1.07, 1.0);
    float d = length(q);
    float n = noise(vUv * 8.5) * 0.06 + noise(vUv * 24.0) * 0.025;
    float soft = 1.0 - smoothstep(0.03, 0.48 + n, d);
    float core = 1.0 - smoothstep(0.0, 0.25 + n, d);
    float alpha = soft * 0.52 + core * 0.18;
    alpha *= uOpacity;
    float bounce = smoothstep(0.34, 0.06, d) * (0.3 + n * 1.5);
    vec3 col = mix(uColor, uGlow, bounce * 0.38);
    gl_FragColor = vec4(col, alpha);
  }
`,kg=`
  attribute float aEdge;
  attribute float aSeed;
  varying vec2 vUv;
  varying float vEdge;
  varying float vSeed;
  varying vec3 vWorldPos;
  varying vec3 vLocalPos;
  void main() {
    vUv = uv;
    vEdge = aEdge;
    vSeed = aSeed;
    vLocalPos = position;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Bg=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vEdge;
  varying float vSeed;
  varying vec3 vWorldPos;
  varying vec3 vLocalPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 4; i++) {
      v += noise(p) * a;
      p = p * 2.06 + vec2(5.1, 2.3);
      a *= 0.48;
    }
    return v;
  }

  void main() {
    vec2 q = abs(vLocalPos.xy) - (vec2(20.0, 15.0) - vec2(0.68));
    float sdf = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.68;
    if (sdf > -0.15) discard;
    vec2 drift = vec2(uTime * 0.012, -uTime * 0.008) * vSeed;
    vec2 p = vec2(vUv.x * 4.2, vUv.y * 11.0) * (0.8 + vSeed * 0.35);
    float cloudA = fbm(p + drift + vec2(vSeed * 18.7, 0.0));
    float cloudB = fbm(p * 2.1 - drift * 1.6 + vec2(2.4, 8.8));
    float cloud = smoothstep(0.34, 0.8, cloudA * 0.7 + cloudB * 0.3);
    float bankFade = smoothstep(0.0, 0.14, vUv.x) * (1.0 - smoothstep(0.86, 1.0, vUv.x));
    float endFade = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.92, 1.0, vUv.y));
    float alpha = cloud * bankFade * endFade * uOpacity * 0.72;
    if (alpha < 0.002) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`,zg=`
  uniform float uTime;
  attribute float aSeed;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float t = uTime * (0.12 + aSeed * 0.09);
    p.x += sin(t + aSeed * 31.7) * 0.42;
    p.y += cos(t * 0.82 + aSeed * 17.3) * 0.5;
    p.z += sin(t * 0.46 + aSeed * 12.2) * 0.2;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp((1.1 + aSeed * 2.6) * (135.0 / max(1.0, -mv.z)), 0.5, 4.2);
    vAlpha = 0.12 + aSeed * 0.38;
  }
`,Hg=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.08, d) * vAlpha * uOpacity;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;class Gg{constructor(t,e,n){M(this,"group",new Xe);M(this,"backdrop");M(this,"shadow");M(this,"mist");M(this,"dust");M(this,"backdropUniforms");M(this,"shadowUniforms");M(this,"mistLayers",[]);M(this,"dustUniforms");this.group.name="atmosphere";const i=new zi(220,32,20);this.backdropUniforms={top:{value:n.color.skyTop.clone()},mid:{value:n.color.skyMid.clone()},bottom:{value:n.color.skyBottom.clone()},glow:{value:n.color.skyGlow.clone()},resolution:{value:new st(1,1)},time:{value:0},dark:{value:n.definition.isDark?1:0}};const o=new le({uniforms:{uTop:this.backdropUniforms.top,uMid:this.backdropUniforms.mid,uBottom:this.backdropUniforms.bottom,uGlow:this.backdropUniforms.glow,uResolution:this.backdropUniforms.resolution,uTime:this.backdropUniforms.time,uDark:this.backdropUniforms.dark},vertexShader:Fg,fragmentShader:Ug,side:De,depthWrite:!1,depthTest:!1});this.backdrop=new ae(i,o),this.backdrop.name="studio-backdrop",this.backdrop.renderOrder=-1e3,this.backdrop.frustumCulled=!1,this.group.add(this.backdrop);const r=new ki(64,52);this.shadowUniforms={color:{value:n.color.fog.clone().multiplyScalar(.42)},glow:{value:n.color.jelly.clone()},opacity:{value:n.value.shadowOpacity}};const a=new le({uniforms:{uColor:this.shadowUniforms.color,uGlow:this.shadowUniforms.glow,uOpacity:this.shadowUniforms.opacity},vertexShader:Ng,fragmentShader:Og,transparent:!0,depthWrite:!1,depthTest:!0});this.shadow=new ae(r,a),this.shadow.name="contact-shadow",this.shadow.position.set(.8,-1,Ht.bottom-1.32),this.shadow.renderOrder=-10,this.group.add(this.shadow),this.initMist(t,e,n),this.initDust(e,n)}setPalette(t){this.backdropUniforms.top.value.copy(t.color.skyTop),this.backdropUniforms.mid.value.copy(t.color.skyMid),this.backdropUniforms.bottom.value.copy(t.color.skyBottom),this.backdropUniforms.glow.value.copy(t.color.skyGlow),this.backdropUniforms.dark.value=t.definition.isDark?1:0,this.shadowUniforms.color.value.copy(t.color.fog).multiplyScalar(.42),this.shadowUniforms.glow.value.copy(t.color.jelly),this.shadowUniforms.opacity.value=t.value.shadowOpacity;for(const e of this.mistLayers){const n=e.material.uniforms;n.uColor.value.copy(t.color.mist),n.uOpacity.value=t.value.mistOpacity}this.dustUniforms.color.value.copy(t.color.dust),this.dustUniforms.opacity.value=t.definition.isDark?.45:.3}resize(t,e){this.backdropUniforms.resolution.value.set(t,e)}tick(t,e=0){this.backdropUniforms.time.value=t;for(const n of this.mistLayers)n.material.uniforms.uTime.value=t,n.mesh.position.z=n.baseZ+e*.8;this.dustUniforms.time.value=t}initMist(t,e,n){this.mist=new Xe,this.mist.name="river-mist";const i=e.mistLayers,o=[];for(let c=0;c<i;c+=1){const h=t.makeRibbonGeometry(120,28,1.16+c*.07,0);h.translate(0,0,.12+c*.23);const u=h.getAttribute("position").count,d=new Float32Array(u);d.fill(.6+c*.7),h.setAttribute("aSeed",new Jt(d,1)),o.push(h)}const r=yo(o,!1);if(!r)throw new Error("Unable to merge mist layers");for(const c of o)c.dispose();const a=new le({uniforms:{uTime:{value:0},uColor:{value:n.color.mist.clone()},uOpacity:{value:n.value.mistOpacity}},vertexShader:kg,fragmentShader:Bg,transparent:!0,depthWrite:!1,side:an}),l=new ae(r,a);l.name="mist-layers-merged",l.renderOrder=8,l.frustumCulled=!1,this.mist.add(l),this.mistLayers.push({mesh:l,material:a,phase:0,baseZ:0}),this.group.add(this.mist)}initDust(t,e){const n=ti(1372479213),i=t.dustCount,o=new Float32Array(i*3),r=new Float32Array(i);for(let c=0;c<i;c+=1)o[c*3]=(n()-.5)*37,o[c*3+1]=(n()-.5)*27,o[c*3+2]=.6+Math.pow(n(),1.6)*7.2,r[c]=n();const a=new _e;a.setAttribute("position",new Jt(o,3)),a.setAttribute("aSeed",new Jt(r,1)),this.dustUniforms={time:{value:0},color:{value:e.color.dust.clone()},opacity:{value:e.definition.isDark?.45:.3}};const l=new le({uniforms:{uTime:this.dustUniforms.time,uColor:this.dustUniforms.color,uOpacity:this.dustUniforms.opacity},vertexShader:zg,fragmentShader:Hg,transparent:!0,depthWrite:!1,blending:io});this.dust=new Oc(a,l),this.dust.name="drifting-dust",this.dust.frustumCulled=!1,this.dust.renderOrder=30,this.group.add(this.dust)}}const z={stone:0,wood:1,roof:2,plaster:3,window:4,lantern:5,brick:6,trim:7,gold:8,moss:9,cloth:10,wetStone:11},Vg=`
  attribute float aMat;
  attribute float aGlow;
  attribute float aStory;
  attribute float aStone;
  attribute vec2 aSway;
  uniform float uStoneLift[32];
  uniform vec2 uArchWind;
  uniform float uArchWindStrength;
  uniform float uArchTime;
  varying vec3 vArchWorld;
  varying vec3 vArchNormal;
  varying float vArchMat;
  varying float vArchGlow;
  varying float vArchStory;
  varying float vArchStone;
`,Wg=`
  uniform vec3 uArchWindowColor;
  uniform vec3 uArchLanternColor;
  uniform float uArchWindowStrength;
  uniform float uArchTime;
  uniform vec3 uArchTint;
  uniform float uStoneHover;
  uniform float uTowerFloors[7];
  uniform vec3 uSeasonFoliage;
  uniform vec3 uSeasonBlossom;
  uniform vec3 uSeasonSnowColor;
  uniform float uSeasonSnow;
  uniform float uSeasonBlossomAmount;
  uniform vec3 uSeasonTint;
  uniform float uArchDetail;
  varying vec3 vArchWorld;
  varying vec3 vArchNormal;
  varying float vArchMat;
  varying float vArchGlow;
  varying float vArchStory;
  varying float vArchStone;

  float archHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float archNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(archHash(i), archHash(i + vec2(1.0, 0.0)), u.x),
      mix(archHash(i + vec2(0.0, 1.0)), archHash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
`;class Xg{constructor(t){M(this,"material");M(this,"uniforms");this.uniforms={windowColor:{value:new mt(16764556)},lanternColor:{value:new mt(16750425)},windowStrength:{value:.08},time:{value:0},tint:{value:new mt(16777215)},stoneLift:{value:new Float32Array(32)},stoneHover:{value:-1},towerFloors:{value:new Float32Array(7)},seasonFoliage:{value:new mt(5930825)},seasonBlossom:{value:new mt(15316653)},seasonSnowColor:{value:new mt(14937323)},seasonSnow:{value:0},seasonBlossomAmount:{value:0},seasonTint:{value:new mt(16777215)},detail:{value:.25},wind:{value:new st(.7,.15)},windStrength:{value:.4}};const e=new Ri({color:16777215,roughness:.78,metalness:.015,envMapIntensity:t.value.envIntensity*.8,vertexColors:!0,dithering:!0});this.material=e,e.onBeforeCompile=n=>{n.uniforms.uArchWindowColor=this.uniforms.windowColor,n.uniforms.uArchLanternColor=this.uniforms.lanternColor,n.uniforms.uArchWindowStrength=this.uniforms.windowStrength,n.uniforms.uArchTime=this.uniforms.time,n.uniforms.uArchTint=this.uniforms.tint,n.uniforms.uStoneLift=this.uniforms.stoneLift,n.uniforms.uStoneHover=this.uniforms.stoneHover,n.uniforms.uTowerFloors=this.uniforms.towerFloors,n.uniforms.uSeasonFoliage=this.uniforms.seasonFoliage,n.uniforms.uSeasonBlossom=this.uniforms.seasonBlossom,n.uniforms.uSeasonSnowColor=this.uniforms.seasonSnowColor,n.uniforms.uSeasonSnow=this.uniforms.seasonSnow,n.uniforms.uSeasonBlossomAmount=this.uniforms.seasonBlossomAmount,n.uniforms.uSeasonTint=this.uniforms.seasonTint,n.uniforms.uArchDetail=this.uniforms.detail,n.uniforms.uArchWind=this.uniforms.wind,n.uniforms.uArchWindStrength=this.uniforms.windStrength,n.uniforms.uArchTime=this.uniforms.time,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
${Vg}`).replace("#include <begin_vertex>",`#include <begin_vertex>
          {
            if (aStone >= 0.0) {
              transformed.z += uStoneLift[int(aStone)];
            }
            float stiltBend = smoothstep(0.0, -2.2, transformed.z);
            transformed.x += aSway.x * stiltBend * 0.55;
            transformed.y += aSway.y * stiltBend * 0.55;
            float faFoliage = 1.0 - smoothstep(0.38, 0.62, abs(aMat - 9.0));
            float faCloth = 1.0 - smoothstep(0.38, 0.62, abs(aMat - 10.0));
            float windMask = clamp(faFoliage + faCloth * 0.65, 0.0, 1.0);
            float windWave = sin(uArchTime * 1.35 + transformed.x * 0.42 +
              transformed.y * 0.31 + transformed.z * 0.8);
            float windLift = smoothstep(0.0, 3.0, transformed.z);
            transformed.x += uArchWind.x * uArchWindStrength * windMask *
              windLift * (0.055 + windWave * 0.04);
            transformed.y += uArchWind.y * uArchWindStrength * windMask *
              windLift * (0.045 + windWave * 0.035);
            vec4 fhArchPos = vec4(transformed, 1.0);
            vec3 fhArchNormal = objectNormal;
            #ifdef USE_INSTANCING
              fhArchPos = instanceMatrix * fhArchPos;
              fhArchNormal = mat3(instanceMatrix) * fhArchNormal;
            #endif
            vArchWorld = (modelMatrix * fhArchPos).xyz;
            vArchNormal = normalize(mat3(modelMatrix) * fhArchNormal);
            vArchMat = aMat;
            vArchGlow = aGlow;
            vArchStory = aStory;
            vArchStone = aStone;
          }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
${Wg}`).replace("#include <color_fragment>",`#include <color_fragment>
          float faStone = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 0.0));
          float faBrick = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 6.0));
          float faWood = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 1.0));
          float faRoof = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 2.0));
          float faPlaster = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 3.0));
          float faGlass = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 4.0));
          float faTrim = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 7.0));
          float faMoss = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 9.0));
          float faWetStone = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 11.0));

          vec3 an = normalize(vArchNormal);
          vec2 pp = abs(an.z) > 0.62
            ? vArchWorld.xy
            : (abs(an.x) > abs(an.y) ? vArchWorld.yz : vArchWorld.xz);

          float stoneMask = clamp(faStone + faBrick, 0.0, 1.0);
          float courseHeight = mix(0.24, 0.105, faBrick);
          float brickWidth = mix(0.52, 0.2, faBrick);
          float row = floor(pp.y / courseHeight);
          vec2 brickUv = vec2(
            pp.x / brickWidth + mod(row, 2.0) * 0.5,
            pp.y / courseHeight
          );
          vec2 bf = fract(brickUv);
          vec2 edge = min(bf, 1.0 - bf);
          float mortar = 1.0 - smoothstep(0.018, 0.062, min(edge.x, edge.y));
          float stoneNoise = archNoise(pp * 5.0);
          diffuseColor.rgb *= 1.0 - mortar * 0.105 * stoneMask;
          diffuseColor.rgb *= 0.88 + stoneNoise * 0.16 * stoneMask;
          diffuseColor.rgb *= 1.0 + (archHash(floor(brickUv) + 14.0) - 0.5) * 0.08 * stoneMask;

          float woodGrain = archNoise(vec2(pp.x * 3.0 + pp.y * 1.7, pp.y * 22.0));
          float grainMask = smoothstep(0.28, 0.72, woodGrain);
          diffuseColor.rgb *= 1.0 - grainMask * 0.1 * faWood;
          diffuseColor.rgb *= 1.0 + (woodGrain - 0.5) * 0.12 * faWood;

          float roofRib = sin(pp.x * 56.0 + archNoise(pp * 6.0) * 2.0) * 0.5 + 0.5;
          diffuseColor.rgb *= 1.0 - smoothstep(0.72, 1.0, roofRib) * 0.11 * faRoof;
          diffuseColor.rgb *= 1.0 + (archNoise(pp * 3.1) - 0.5) * 0.08 * (faRoof + faPlaster);

          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.8, 1.02, 0.78), faMoss * 0.26);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.012, 0.026, 0.024), faGlass * 0.72);

          float seasonNoise = archNoise(vArchWorld.xy * 3.2 + vArchWorld.z * 1.7);
          float blossomMask = faMoss * uSeasonBlossomAmount *
            smoothstep(0.56, 0.86, archNoise(vArchWorld.xy * 5.6 + 11.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, uSeasonFoliage, faMoss * 0.62);
          diffuseColor.rgb = mix(diffuseColor.rgb, uSeasonBlossom, blossomMask * 0.7);

          float snowMask = uSeasonSnow *
            smoothstep(0.35, 0.8, an.z) *
            (0.58 + 0.42 * archNoise(vArchWorld.xy * 8.0 + 17.0)) *
            clamp(faRoof + faStone + faPlaster + faTrim + faBrick, 0.0, 1.0) *
            (1.0 - faGlass);
          diffuseColor.rgb = mix(diffuseColor.rgb, uSeasonSnowColor, snowMask * 0.55);

          float detailMask = clamp(faWood + faRoof + faPlaster + faTrim, 0.0, 1.0) * uArchDetail;
          float boardLine = smoothstep(0.86, 1.0, sin(pp.y * 46.0) * 0.5 + 0.5);
          float tileLine = smoothstep(0.90, 1.0, sin(pp.x * 92.0 + archNoise(pp * 4.0) * 2.0) * 0.5 + 0.5);
          diffuseColor.rgb *= 1.0 - (boardLine * faWood + tileLine * faRoof) * detailMask * 0.055;
          float mullion = smoothstep(0.96, 1.0, abs(sin(pp.x * 17.0))) * smoothstep(0.96, 1.0, abs(sin(pp.y * 17.0)));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.22, mullion * faGlass * uArchDetail * 0.5);

          float wetBand = 1.0 - smoothstep(0.06, 0.62, vArchWorld.z);
          float wetStone = clamp(faStone + faBrick + faWetStone, 0.0, 1.0);
          diffuseColor.rgb = mix(
            diffuseColor.rgb,
            diffuseColor.rgb * vec3(0.64, 0.78, 0.7),
            wetBand * wetStone * 0.52
          );
          float stoneHovered = step(0.0, vArchStone) * (1.0 - smoothstep(0.0, 0.6, abs(vArchStone - uStoneHover)));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.25, 1.13, 0.84), stoneHovered * 0.38);
          diffuseColor.rgb *= uSeasonTint * uArchTint;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, 0.88, faBrick);
          roughnessFactor = mix(roughnessFactor, 0.84, faStone);
          roughnessFactor = mix(roughnessFactor, 0.68, faWood);
          roughnessFactor = mix(roughnessFactor, 0.54, faRoof);
          roughnessFactor = mix(roughnessFactor, 0.82, faPlaster);
          roughnessFactor = mix(roughnessFactor, 0.22, faGlass);
          roughnessFactor = mix(roughnessFactor, 0.48, faTrim);
          roughnessFactor = mix(roughnessFactor, 0.3, faWetStone);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          float faWindow = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 4.0));
          float faLantern = 1.0 - smoothstep(0.38, 0.62, abs(vArchMat - 5.0));
          float lanternFlicker = 0.84 + 0.16 * sin(uArchTime * 3.4 + vArchWorld.x * 9.0 + vArchWorld.z * 13.0);
          totalEmissiveRadiance += uArchWindowColor * faWindow * vArchGlow * uArchWindowStrength * 1.35;
          totalEmissiveRadiance += uArchLanternColor * faLantern * vArchGlow * (0.04 + uArchWindowStrength * 1.05) * 1.35 * lanternFlicker;
          float floorLight = 0.0;
          for (int i = 0; i < 7; i++) {
            if (abs(vArchStory - float(i)) < 0.5) floorLight = uTowerFloors[i];
          }
          totalEmissiveRadiance += vec3(1.0, 0.76, 0.43) * floorLight * max(faWindow, faLantern) * 1.1;
          float stoneHoveredLight = step(0.0, vArchStone) *
            (1.0 - smoothstep(0.0, 0.6, abs(vArchStone - uStoneHover)));
          totalEmissiveRadiance += vec3(1.0, 0.79, 0.48) * stoneHoveredLight * 0.16;
          // A trace of diffuse bounce keeps deep eaves and timber walls from
          // collapsing into black at the miniature's viewing distance.
          totalEmissiveRadiance += diffuseColor.rgb * 0.03;`)},e.customProgramCacheKey=()=>"fh-architecture-v1",this.setPalette(t)}setPalette(t){const e=t.id;this.uniforms.windowStrength.value=e==="night"?1:e==="dusk"?.48:.055,this.uniforms.windowColor.value.set(e==="night"?16761983:e==="dusk"?16764301:13623506),this.uniforms.lanternColor.value.set(e==="night"?16750164:16756846),this.uniforms.tint.value.set(e==="night"?15917008:e==="dusk"?16770759:16777215),this.material.envMapIntensity=t.value.envIntensity*.8}setSeason(t){this.uniforms.seasonFoliage.value.copy(t.color.foliage),this.uniforms.seasonBlossom.value.copy(t.color.blossom),this.uniforms.seasonSnowColor.value.copy(t.color.snow),this.uniforms.seasonSnow.value=t.value.snowAmount,this.uniforms.seasonBlossomAmount.value=t.value.blossomAmount,this.uniforms.seasonTint.value.set(t.id==="winter"?15397361:t.id==="autumn"?16773594:t.id==="spring"?16056305:16777215)}setDetail(t){this.uniforms.detail.value=ie.clamp(t,0,1)}setWind(t,e,n){this.uniforms.wind.value.set(t,e),this.uniforms.windStrength.value=ie.clamp(n,0,1)}tick(t){this.uniforms.time.value=t}}new N(0,0,1);class In{constructor(){M(this,"parts",[]);M(this,"triangles",0);M(this,"story",-1);M(this,"stone",-1)}get triangleCount(){return this.triangles}setStory(t){this.story=t}setStone(t){this.stone=t}box(t,e,n,i,o,r,a=0){const l=new si(t,e,n);this.addWithTransform(l,o,i,r)}cylinder(t,e,n,i,o,r,a){const l=new ds(t,e,n,i);l.rotateX(Math.PI*.5),this.addWithTransform(l,r,o,a)}sphere(t,e,n,i){const o=new zi(t,10,7);this.addWithTransform(o,n,e,void 0,i??[1,1,1])}rawColored(t,e,n,i){this.addWithTransform(t,e,n,i)}coloredSurface(t,e,n,i,o=0){const r=new _e;r.setAttribute("position",new re(t,3)),r.setAttribute("color",new re(e,3)),r.setIndex(n),r.computeVertexNormals(),this.addPrepared(r,i,o)}build(t){const e=yo(this.parts,!1);if(!e)throw new Error(`Unable to merge architecture geometry for ${t}`);e.name=`${t}-geometry`,e.computeBoundingSphere();for(const n of this.parts)n.dispose();return this.parts=[],e}addWithTransform(t,e,n,i,o){const r=new jt,a=n instanceof N?n:new N(...n??[0,0,0]),l=new Ni().setFromEuler(new Ye(...i??[0,0,0]));r.compose(a,l,new N(...o??[1,1,1])),t.applyMatrix4(r);const c=t.index?t.toNonIndexed():t;c!==t&&t.dispose(),c.deleteAttribute("uv"),c.deleteAttribute("uv1"),c.deleteAttribute("uv2"),c.deleteAttribute("tangent"),c.getAttribute("normal")||c.computeVertexNormals(),this.addPrepared(c,e.mat,e.glow??0,e.color)}addPrepared(t,e,n,i){let o=t;o.index&&(o=o.toNonIndexed(),t.dispose());const r=o.getAttribute("position").count;if(o.getAttribute("normal")||o.computeVertexNormals(),i!==void 0){const u=new mt(i),d=new Float32Array(r*3);for(let p=0;p<r;p+=1)d[p*3]=u.r,d[p*3+1]=u.g,d[p*3+2]=u.b;o.setAttribute("color",new Jt(d,3))}if(!o.getAttribute("color"))throw new Error("Architecture geometry is missing vertex colours");const a=new Float32Array(r);a.fill(e);const l=new Float32Array(r);l.fill(n),o.setAttribute("aMat",new Jt(a,1)),o.setAttribute("aGlow",new Jt(l,1));const c=new Float32Array(r);c.fill(this.story);const h=new Float32Array(r);h.fill(this.stone),o.setAttribute("aStory",new Jt(c,1)),o.setAttribute("aStone",new Jt(h,1)),o.clearGroups(),this.triangles+=r/3,this.parts.push(o)}}const F={roof:5794660,roofLight:8031364,roofDark:4149579,roofEdge:3228478,ridge:2701877,wood:10514248,woodDark:6834223,woodLight:13476468,woodPale:14201990,red:11161912,redDark:8075307,plaster:15129800,paper:16116179,stone:13024682,stoneDark:9932669,stoneLight:14669250,stoneCold:11448480,brick:10264208,brickDark:8489082,trim:14866627,blue:4287607,window:3163197,lantern:13590840,gold:10715975,moss:6519118,cloth:12156242,green:5467210};function Ra(s,t,e){return new mt(s).lerp(new mt(t),Math.max(0,Math.min(1,e)))}function Ca(s,t,e,n,i,o,r=0){const a=[];for(let h=0;h<i-1;h+=1)for(let u=0;u<n-1;u+=1){const d=h*n+u,p=d+1,g=d+n,x=g+1;a.push(d,p,g,p,x,g)}let l=0,c=0;for(let h=0;h+2<a.length&&c<8;h+=3){const u=a[h]*3,d=a[h+1]*3,p=a[h+2]*3,g=t[u],x=t[u+1],f=t[u+2],m=t[d]-g,b=t[d+1]-x;t[d+2]-f;const _=t[p]-g,y=t[p+1]-x;t[p+2]-f;const R=m*y-b*_;Math.abs(m)+Math.abs(b)+Math.abs(_)+Math.abs(y)>1e-7&&(l+=R,c+=1)}if(l<0)for(let h=0;h<a.length;h+=3){const u=a[h+1];a[h+1]=a[h+2],a[h+2]=u}s.coloredSurface(t,e,a,o,r)}function us(s,t){const{width:e,depth:n,eaveZ:i,ridgeZ:o,centerY:r=0,upturn:a=.24,flare:l=.08,tileSpacing:c=.23,tileAmplitude:h=.016,rows:u=5,color:d=F.roof,edgeColor:p=F.roofEdge,gableColor:g=F.plaster,gableMat:x=z.plaster,ridgeColor:f=F.ridge}=t,m=Math.max(10,Math.ceil(e/(c*.62))+1),b=e*.5,_=n*.5;for(const y of[-1,1]){const R=[],E=[];for(let T=0;T<u;T+=1){const C=T/(u-1);for(let D=0;D<m;D+=1){const v=D/(m-1)*2-1,S=v*b,I=Math.pow(Math.abs(v),2.7),U=r+y*_*C+y*l*I*Math.pow(C,3.2),B=a*I*Math.pow(Math.max(0,(C-.54)/.46),2.1),W=.5+.5*Math.sin(S/c*Math.PI*2+.4),H=h*Math.pow(W,1.5),$=o-(o-i)*Math.pow(C,.72)+B+H*(.35+C*.65);R.push(S,U,$);const X=Ra(d,F.roofLight,W*.48);X.lerp(new mt(F.roofDark),(1-W)*.1+Math.pow(1-C,2)*.18),X.lerp(new mt(p),Math.pow(C,9)*.12),E.push(X.r,X.g,X.b)}}Ca(s,R,E,m,u,z.roof)}for(const y of[-1,1]){s.box(e,.045,.055,[0,r+y*(_+l*.28),i+a*.22],{color:p,mat:z.roof});for(const R of[-1,1])s.box(.14,.045,.055,[R*(b+.02),r+y*_,i+a],{color:p,mat:z.roof},[.1*y,0,-R*.22])}s.box(e+.18,.06,.11,[0,r,o+.035],{color:f,mat:z.roof});for(const y of[-1,1])s.box(.1,.15,.1,[y*(b+.11),r,o+.08],{color:f,mat:z.roof},[0,0,y*.22]);for(const y of[-1,1]){const R=y*(b+.015),E=i+a*.9,T=[R,r-_,E,R,r+_,E,R,r,o-.02],C=new mt(g),D=[C.r,C.g,C.b,C.r,C.g,C.b,C.r,C.g,C.b],v=y>0?[0,1,2]:[0,2,1];s.coloredSurface(T,D,v,x)}}function Yl(s,t){const{width:e,depth:n,centerX:i=0,eaveZ:o,ridgeZ:r,centerY:a=0,upturn:l=.28,tileSpacing:c=.22,tileAmplitude:h=.012,color:u=F.roof,edgeColor:d=F.roofEdge}=t,p=e*.5,g=n*.5,x=Math.max(8,Math.ceil(Math.max(e,n)/(c*.7))+1),f=5,m=[[-p,g],[p,g],[p,-g],[-p,-g]];for(let b=0;b<4;b+=1){const _=m[b],y=m[(b+1)%4],R=[],E=[];for(let T=0;T<f;T+=1){const C=T/(f-1);for(let D=0;D<x;D+=1){const v=D/(x-1),S=ie.lerp(_[0],y[0],v),I=ie.lerp(_[1],y[1],v),U=Math.min(v,1-v)*2,B=1-ie.smoothstep(U,0,.28),W=.5+.5*Math.sin((S+I)/c*Math.PI*2),H=ie.lerp(r,o,Math.pow(C,.72))+l*B*Math.pow(C,3.2)+h*W*C;R.push(i+S*C,a+I*C,H);const $=Ra(u,F.roofLight,W*.32);$.lerp(new mt(F.roofDark),Math.pow(1-C,2)*.22),E.push($.r,$.g,$.b)}}Ca(s,R,E,x,f,z.roof)}for(let b=0;b<4;b+=1){const _=m[b],y=m[(b+1)%4],R=(_[0]+y[0])*.5,E=(_[1]+y[1])*.5,T=Math.atan2(y[1]-_[1],y[0]-_[0]),C=Math.hypot(y[0]-_[0],y[1]-_[1]);s.box(C+.12,.045,.055,[i+R,a+E,o+l*.45],{color:d,mat:z.roof},[0,0,T])}s.cylinder(.075,.11,.28,6,[i,a,r+.1],{color:F.gold,mat:z.gold}),s.sphere(.095,[i,a,r+.29],{color:F.gold,mat:z.gold});for(const[b,_]of m)s.box(.16,.08,.16,[i+b,a+_,o+l+.04],{color:d,mat:z.roof},[0,0,Math.atan2(_,b)*.2],.02)}function lr(s,t){const{innerRadius:e,outerRadius:n,baseZ:i,drop:o=.1,upturn:r=.11,thickness:a=.075,color:l=F.roof,edgeColor:c=F.roofEdge,glow:h=0,rim:u=!0,rimColor:d=F.roofEdge}=t,p=30,g=3,x=p+1,f=T=>{const C=(T%(Math.PI/3)+Math.PI/3)%(Math.PI/3),D=Math.abs(C-Math.PI/6);return Math.PI/6-D},m=(T,C)=>{const v=(T%(Math.PI/3)+Math.PI/3)%(Math.PI/3)-Math.PI/6;return C/Math.max(.62,Math.cos(v))},b=[],_=[],y=[],R=[];for(let T=0;T<g;T+=1){const C=T/(g-1);for(let D=0;D<=p;D+=1){const v=D/p*Math.PI*2,S=f(v),I=1-ie.smoothstep(S,0,.16),U=e+(n-e)*C,B=m(v,U)+I*.035*C,W=i-o*Math.pow(C,.86)+r*I*Math.pow(C,2.2),H=Math.cos(v)*B,$=Math.sin(v)*B;b.push(H,$,W),y.push(H,$,W-a*(1-.22*C));const X=Ra(l,F.roofLight,.25*(1-C)+.06);X.lerp(new mt(F.roofDark),.08+C*.2),X.lerp(new mt(F.roofLight),I*.2*C),_.push(X.r,X.g,X.b);const it=new mt(F.woodDark).lerp(new mt(F.stoneDark),.42);R.push(it.r,it.g,it.b)}}Ca(s,b,_,x,g,z.roof,h);const E=[];for(let T=0;T<g-1;T+=1)for(let C=0;C<p;C+=1){const D=T*x+C,v=D+1,S=D+x,I=S+1;E.push(D,v,S,v,I,S)}if(s.coloredSurface(y,R,E,z.roof,h),u){const T=2*n*Math.tan(Math.PI/6)*1.04,C=new mt(d).lerp(new mt(F.stoneDark),.24).getHex();for(let D=0;D<6;D+=1){const v=D*Math.PI/3+Math.PI/6,S=m(v,n)+.03;s.box(T,.026,.05,[Math.cos(v)*S,Math.sin(v)*S,i-o*.55],{color:C,mat:z.roof},[0,0,v+Math.PI*.5])}}}function qg(s,t=24e3){const e=new In,n=14.4,i=n*.5,o=3.9,r=3.42,a=3.28,l=-1.35,c=.82,h=[{x:-4.5,radius:1.28},{x:0,radius:1.78},{x:4.5,radius:1.28}],u=new Vc;u.moveTo(-i-.2,l),u.lineTo(i+.2,l),u.lineTo(i+.2,a),u.lineTo(-i-.2,a),u.lineTo(-i-.2,l);for(const D of h){const v=new na,S=D.x-D.radius,I=D.x+D.radius,U=l+.35;v.moveTo(S,U),v.lineTo(S,c);const B=22;for(let W=0;W<=B;W+=1){const H=Math.PI-W/B*Math.PI;v.lineTo(D.x+Math.cos(H)*D.radius,c+Math.sin(H)*D.radius)}v.lineTo(I,U),v.lineTo(S,U),u.holes.push(v)}const d=new Ta(u,{depth:o,bevelEnabled:!0,bevelSegments:2,bevelSize:.035,bevelThickness:.035,curveSegments:1,steps:1});d.rotateX(Math.PI*.5),d.translate(0,o*.5,0),e.rawColored(d,{color:F.stone,mat:z.stone});for(const D of[-1,1])for(let v=0;v<h.length;v+=1){const S=h[v],I=v===1?17:13;for(let U=0;U<I;U+=1){const B=U/I*Math.PI,W=S.radius+.14,H=[S.x+Math.cos(B)*W,D*(o*.5+.015),c+Math.sin(B)*W];e.box(Math.PI*S.radius/I+.04,.2,.28,H,{color:U%3===0?F.stoneLight:F.stone,mat:z.stone},[0,B+Math.PI*.5,0],.025),U===Math.floor(I/2)&&e.box(.38,.24,.34,[S.x,D*(o*.5+.04),c+S.radius+.1],{color:F.stoneLight,mat:z.stone},void 0,.035)}}for(const D of[-2.5,2.5])for(const v of[-1,1])Yg(e,D,v);e.box(n+.5,o+.2,.34,[0,0,r-.17],{color:F.stoneLight,mat:z.stone},void 0,.055),e.box(n+.22,o+.32,.18,[0,0,r-.43],{color:F.stoneDark,mat:z.stone},void 0,.04);for(const D of[-1,1])for(let v=0;v<6;v+=1){const I=D*(i+.18+v*.34),U=3.1-v*.32;e.box(.34+.03,o-.2,U,[I,0,l+U*.5],{color:v%2===0?F.stone:F.stoneDark,mat:z.stone},void 0,.035)}for(const D of[-1,1])e.box(13.6,.22,.55,[0,D*(o*.5+.06),r+.28],{color:F.stone,mat:z.stone},void 0,.03);const p=3.25,g=p*.5-.12,x=r+.55,f=x+1.9,m=f+.16,b=m+1.72;e.box(13.8,p+.35,.16,[0,0,x-.06],{color:F.woodDark,mat:z.wood},void 0,.035);const _=12,y=12.8/_;for(const D of[-1,1]){e.box(13.1,.15,.18,[0,D*g,x+.24],{color:F.woodDark,mat:z.wood},void 0,.02),e.box(13.2,.13,.22,[0,D*g,f-.12],{color:F.redDark,mat:z.wood},void 0,.02),e.box(13.2,.1,.14,[0,D*(g+.06),f+.06],{color:F.red,mat:z.wood});for(let S=0;S<=_;S+=1){const I=-6.4+S*y;e.cylinder(.055,.065,f-x,7,[I,D*g,(f+x)*.5],{color:F.red,mat:z.wood}),e.box(.17,.17,.22,[I,D*g,x+.11],{color:F.stone,mat:z.stone},void 0,.02),e.box(.18,.18,.14,[I,D*g,f-.06],{color:F.redDark,mat:z.wood},void 0,.02)}const v=x+.92;e.box(12.8,.075,.075,[0,D*(g+.08),v],{color:F.woodDark,mat:z.wood}),e.box(12.8,.055,.055,[0,D*(g+.08),x+.48],{color:F.woodDark,mat:z.wood});for(let S=0;S<_;S+=1){const I=-6.4+(S+.5)*y;for(let U=0;U<3;U+=1)e.box(.035,.04,.44,[I-y*.28+U*y*.28,D*(g+.09),x+.68],{color:F.redDark,mat:z.wood});S%2===0?Xs(e,I,D*(g+.1),x+1.45,y*.62,.72,D,.35+(S*7+(D>0?3:0))%5*.14):e.box(y*.66,.08,.95,[I,D*(g+.04),x+1.42],{color:F.wood,mat:z.wood},void 0,.025)}}for(const D of[-1,1])e.box(.42,3.45,.34,[D*6.62,0,x+.18],{color:F.stoneDark,mat:z.stone},void 0,.03);for(const D of[-1,1])us(e,{width:13.75,depth:1.08,centerY:D*1.85,eaveZ:f+.02,ridgeZ:f+.28,upturn:.22,flare:.06,tileSpacing:.2,tileAmplitude:.012,rows:4,color:F.roof,edgeColor:F.roofEdge,gableColor:F.roofDark,gableMat:z.roof});e.box(13.55,p+.2,.16,[0,0,m-.02],{color:F.woodDark,mat:z.wood},void 0,.035);for(const D of[-1,1]){const v=D*(g-.05);e.box(12.95,.15,.2,[0,v,m+.22],{color:F.woodDark,mat:z.wood},void 0,.02),e.box(13.05,.12,.24,[0,v,b-.11],{color:F.redDark,mat:z.wood},void 0,.02);for(let S=0;S<=10;S+=1){const I=-6.1+S*1.22;e.cylinder(.05,.058,b-m,7,[I,v,(b+m)*.5],{color:F.red,mat:z.wood}),e.box(.16,.15,.13,[I,v,b-.05],{color:F.redDark,mat:z.wood},void 0,.02)}for(let S=0;S<10;S+=1){const I=-6.1+(S+.5)*1.22;S%2===0?Xs(e,I,D*(g+.02),m+.88,12.2/10*.58,.7,D,.28+(S*3+(D>0?2:0))%5*.15):e.box(12.2/10*.6,.06,.86,[I,D*(g+.02),m+.87],{color:F.wood,mat:z.wood})}e.box(13,.06,.06,[0,v,m+.47],{color:F.redDark,mat:z.wood});for(let S=0;S<=34;S+=1)e.box(.028,.035,.28,[-6.2+S/34*12.4,v+.06,m+.31],{color:F.redDark,mat:z.wood})}us(e,{width:14.2,depth:4.15,eaveZ:b+.06,ridgeZ:b+1.38,upturn:.72,flare:.2,tileSpacing:.21,tileAmplitude:.034,rows:6,color:F.roof,edgeColor:F.roofEdge,gableColor:F.roofDark,gableMat:z.roof,ridgeColor:F.ridge});for(const D of[-1,1])Yl(e,{width:2.9,depth:4.3,centerX:D*5.55,eaveZ:b+.7,ridgeZ:b+2,upturn:.38,tileSpacing:.2,tileAmplitude:.012,color:F.roof,edgeColor:F.roofEdge});const R=b+.5;for(const D of[-.8,.8])for(const v of[-.95,.95])e.cylinder(.06,.07,1.1,7,[D,v,R+.44],{color:F.red,mat:z.wood});e.box(2.2,2.35,.16,[0,0,R+.02],{color:F.woodDark,mat:z.wood},void 0,.03),e.box(2.1,.07,.07,[0,0,R+.48],{color:F.redDark,mat:z.wood}),Xs(e,0,.94,R+.5,1.6,.7,1,.8),Xs(e,0,-.94,R+.5,1.6,.7,-1,.8),Yl(e,{width:2.9,depth:3.1,centerY:0,eaveZ:R+1.12,ridgeZ:R+2.05,upturn:.38,tileSpacing:.18,tileAmplitude:.012,color:F.roof,edgeColor:F.roofEdge});for(const D of[-1,1])for(let v=0;v<4;v+=1){const S=-4.2+v*2.8;cr(e,S,D*1.93,b-.12),cr(e,S+.7,D*1.9,f+.02)}cr(e,0,0,R+.54,.2);const E=e.build("hongqiao"),T=e.triangleCount,C=new ae(E,s.material);return C.name="hongqiao",C.castShadow=!0,C.receiveShadow=!0,C.userData.triangles=T,{mesh:C,triangles:T}}function Xs(s,t,e,n,i,o,r,a,l=!1,c=1){const u=l?.045:i,d=l?i:.045,p=l?t+c*.02:t,g=l?e:e+r*.01;s.box(u,d,o,[p,g,n],{color:F.window,mat:z.window,glow:a});const x=F.woodDark;if(l){s.box(.06,i+.08,.06,[p+c*.015,e,n+o*.52],{color:x,mat:z.wood}),s.box(.06,i+.08,.06,[p+c*.015,e,n-o*.52],{color:x,mat:z.wood});for(let f=1;f<4;f+=1)s.box(.035,.035,o,[p+c*.01,e-i*.5+f/4*i,n],{color:F.wood,mat:z.wood})}else{s.box(i+.1,.055,.055,[t,e+r*.015,n+o*.52],{color:x,mat:z.wood}),s.box(i+.1,.055,.055,[t,e+r*.015,n-o*.52],{color:x,mat:z.wood});for(let f=1;f<4;f+=1)s.box(.035,.035,o,[t-i*.5+f/4*i,e+r*.012,n],{color:F.wood,mat:z.wood});s.box(i,.035,.035,[t,e+r*.012,n],{color:F.wood,mat:z.wood})}}function cr(s,t,e,n,i=.08){s.cylinder(i*.85,i,i*1.25,8,[t,e,n],{color:F.lantern,mat:z.lantern,glow:1}),s.cylinder(i*.62,i*.62,.025,8,[t,e,n+i*.68],{color:F.gold,mat:z.gold}),s.cylinder(.012,.012,i*.45,4,[t,e,n-i*.8],{color:F.redDark,mat:z.trim})}function Yg(s,t,e){const n=e*1.93,i=e*(3.9*.5+.38),o=-.85,r=2.2,a=.36;jl(s,[t-a,n,o],[t,i,o],[t,i,r],[t-a,n,r],F.stoneDark),jl(s,[t,i,o],[t+a,n,o],[t+a,n,r],[t,i,r],F.stoneDark),jg(s,[t-a,n,r],[t,i,r],[t+a,n,r],F.stone)}function jl(s,t,e,n,i,o){const r=[...t,...e,...n,...i,...t,...e,...n,...i],a=new mt(o),l=[];for(let c=0;c<8;c+=1)l.push(a.r,a.g,a.b);s.coloredSurface(r,l,[0,1,2,0,2,3,4,6,5,4,7,6],z.stone)}function jg(s,t,e,n,i){const o=[...t,...e,...n,...t,...e,...n],r=new mt(i),a=[];for(let l=0;l<6;l+=1)a.push(r.r,r.g,r.b);s.coloredSurface(o,a,[0,1,2,3,5,4],z.stone)}function $g(s,t=24301){const e=new In,n=.42;Wn(e,2.52,2.38,.38,-.48,F.stoneDark,z.stone),Wn(e,2.25,2.15,.28,-.12,F.stoneDark,z.stone),Wn(e,2,1.92,.32,.02,F.stone,z.stone),Wn(e,1.78,1.68,.2,n-.12,F.stoneLight,z.stone);let i=n;const o=[];let r=t;const a=()=>(r=r*1664525+1013904223>>>0,r/4294967296);for(let _=0;_<7;_+=1){const y=1.45*Math.pow(.948,_),R=y*.955,E=_===0?1.5:1.02-_*.024,T=i+E;o.push({bottom:i,top:T,radiusBottom:y,radiusTop:R}),e.setStory(_);const C=_%2===0?F.brick:F.brickDark;Wn(e,y,R,E,i,C,z.brick),e.cylinder(R*.87,y*.87,E-.02,6,[0,0,i+E*.5],{color:F.woodDark,mat:z.wood}),Wn(e,R*1.016,R*1.012,.055,T-.085,_===0?F.blue:F.trim,z.trim);for(let S=0;S<6;S+=1){const I=S/6*Math.PI*2,U=R*.995;e.box(.085,.085,E-.02,[Math.cos(I)*U,Math.sin(I)*U,i+E*.5],{color:F.woodDark,mat:z.wood},[0,0,I])}const D=_===0?[2,4]:[0,3];for(const S of D){const I=S*Math.PI/3+Math.PI/6,B=(y+R)*.5*Math.cos(Math.PI/6),W=i+E*(_===0?.58:.48),H=_===0?.46:.29,$=_===0?.82:.47;Zg(e,I,B+.02,W,H,$,a()*.8+.2),_>0&&Kg(e,I,B+.025,W+$*.82,H*.78,.13,_%2===0?F.blue:F.trim)}lr(e,{innerRadius:R+.02,outerRadius:R+.58,baseZ:T+.1,drop:.32,upturn:.2,thickness:.075,color:F.roof,edgeColor:F.roofEdge,glow:0,rim:!0,rimColor:F.roofEdge}),lr(e,{innerRadius:R+.01,outerRadius:R+.42,baseZ:T-.02,drop:.06,upturn:.07,thickness:.035,color:F.roofDark,edgeColor:F.roofEdge,glow:0,rim:!1}),lr(e,{innerRadius:R+.01,outerRadius:R+.31,baseZ:T-.09,drop:.04,upturn:.04,thickness:.03,color:F.roofDark,edgeColor:F.roofEdge,glow:0,rim:!1});const v=(R+.58)/Math.cos(Math.PI/6);for(let S=0;S<6;S+=1){const I=S/6*Math.PI*2,U=Math.cos(I)*v,B=Math.sin(I)*v,W=T-.1;e.cylinder(.045,.018,.16,5,[U,B,W],{color:F.gold,mat:z.gold}),e.sphere(.04,[U,B,W-.11],{color:F.gold,mat:z.gold})}for(let S=0;S<6;S+=1){const I=S*Math.PI/3+Math.PI/6,U=R*Math.cos(Math.PI/6),B=Math.cos(I)*(U+.12),W=Math.sin(I)*(U+.12);e.box(.4,.24,.075,[B,W,T-.035],{color:F.stoneDark,mat:z.stone},[0,0,I+Math.PI*.5]),e.box(.22,.13,.1,[Math.cos(I)*(U+.035),Math.sin(I)*(U+.035),T-.12],{color:F.woodDark,mat:z.wood},[0,0,I+Math.PI*.5])}i=T+.25}e.setStory(-1);const c=o[0].radiusBottom*Math.cos(Math.PI/6);e.box(.72,.04,1.08,[0,c+.03,n+.58],{color:F.woodDark,mat:z.wood},void 0,.025),e.box(.64,.035,.86,[0,c+.055,n+.56],{color:F.window,mat:z.window,glow:.55}),e.box(.5,.06,.14,[0,c+.08,n+1.12],{color:F.blue,mat:z.trim},void 0,.015),e.box(.88,.12,.22,[0,c+.15,n+1.35],{color:F.redDark,mat:z.wood},void 0,.02);for(const _ of[-1,1])Jg(e,_*.9,1.45,n+1);const u=o[o.length-1].radiusTop,d=i-.16,p=.9,g=u+.62;e.cylinder(.055,g,p,6,[0,0,d+p*.5],{color:F.roof,mat:z.roof}),e.cylinder(g*1.02,g*1.02,.055,6,[0,0,d+.02],{color:F.roofEdge,mat:z.roof});const x=i+.7;Wn(e,.46,.34,.28,x,F.roofDark,z.roof),e.cylinder(.24,.32,.2,6,[0,0,x+.2],{color:F.stoneLight,mat:z.stone}),e.cylinder(.08,.09,1.25,6,[0,0,x+.85],{color:F.gold,mat:z.gold});for(let _=0;_<5;_+=1){const y=.3-_*.045;e.cylinder(y,y,.055,10,[0,0,x+.55+_*.16],{color:_%2===0?F.gold:F.stoneLight,mat:z.gold})}e.sphere(.15,[0,0,x+1.58],{color:F.gold,mat:z.gold}),e.sphere(.07,[0,0,x+1.72],{color:F.gold,mat:z.gold});const f=e.build("wanmingta"),m=e.triangleCount,b=new ae(f,s.material);return b.name="wanmingta",b.castShadow=!0,b.receiveShadow=!0,b.userData.triangles=m,b.userData.height=x+1.75,{mesh:b,triangles:m,height:x+1.75}}function Wn(s,t,e,n,i,o,r){for(let a=0;a<6;a+=1){const l=a/6*Math.PI*2,c=(a+1)/6*Math.PI*2,h=Math.cos(l)*t,u=Math.sin(l)*t,d=Math.cos(c)*t,p=Math.sin(c)*t,g=Math.cos(l)*e,x=Math.sin(l)*e,f=Math.cos(c)*e,m=Math.sin(c)*e,b=.93+(a*7+3)%5*.018,_=new mt(o).multiplyScalar(b),y=[h,u,i,d,p,i,f,m,i+n,g,x,i+n],R=[_.r,_.g,_.b,_.r,_.g,_.b,_.r,_.g,_.b,_.r,_.g,_.b];s.coloredSurface(y,R,[0,1,2,0,2,3],r)}}function Zg(s,t,e,n,i,o,r){const a=Math.cos(t)*e,l=Math.sin(t)*e,c=[0,0,t+Math.PI*.5];s.box(i+.08,.03,o+.08,[a,l,n],{color:F.stoneDark,mat:z.trim},c),s.box(i,.045,o,[a+Math.cos(t)*.018,l+Math.sin(t)*.018,n],{color:F.window,mat:z.window,glow:r},c);for(let h=-1;h<=1;h+=1)s.box(.14,.035,.16,[a+Math.cos(t)*.025,l+Math.sin(t)*.025,n+o*.5+.11+Math.abs(h)*.022],{color:F.stoneDark,mat:z.trim},c)}function Kg(s,t,e,n,i,o,r){const a=[0,0,t+Math.PI*.5];s.box(i,.03,o,[Math.cos(t)*(e+.02),Math.sin(t)*(e+.02),n],{color:r,mat:z.trim},a)}function Jg(s,t,e,n){s.cylinder(.07,.09,.18,7,[t,e,n],{color:F.lantern,mat:z.lantern,glow:1}),s.cylinder(.05,.05,.03,7,[t,e,n+.11],{color:F.gold,mat:z.gold})}const Qg=1.3,tv=[{id:"H1_A",stories:1,bays:2,seed:11},{id:"H1_B",stories:1,bays:3,seed:17},{id:"H2_A",stories:2,bays:2,seed:23},{id:"H2_B",stories:2,bays:3,seed:31},{id:"H3_A",stories:3,bays:2,seed:41},{id:"H3_B",stories:3,bays:3,seed:53}];function ev(s){return tv.map(t=>nv(t))}function nv(s){const t=new In,e=s.bays*Qg,n=2.45+s.stories*.14+(s.bays-2)*.12,i=1.02+s.stories*.02,o=e*.5,r=n*.5,a=e/s.bays,l=.12;let c=s.seed;const h=()=>(c=c*1664525+1013904223>>>0,c/4294967296),u=s.bays+2,d=s.bays+1,p=-2.05,x=.02-p,f=.065+h()*.025;for(let E=0;E<u;E+=1){const T=-o+E/(u-1)*e,C=r+.05;t.box(.12,.12,x,[T,C,p+x*.5],{color:F.woodDark,mat:z.wood},[f,0,(h()-.5)*.035]);const D=C-Math.sin(f)*x*.5;t.box(.24,.22,.12,[T,D,.04],{color:F.stoneDark,mat:z.stone}),t.box(.15,.15,.08,[T,C+Math.sin(f)*x*.5,-.02],{color:F.stoneCold,mat:z.wetStone})}for(let E=0;E<d;E+=1){const T=-o+.18+E/Math.max(1,d-1)*(e-.36),C=-r-.04;t.box(.12,.12,x*.78,[T,C,p+x*.78*.5],{color:F.woodDark,mat:z.wood},[f*.75,0,.015*(h()-.5)])}t.box(e+.42,.11,.12,[0,r-.1,-.13],{color:F.woodDark,mat:z.wood}),t.box(e+.3,.1,.1,[0,-r+.08,-.12],{color:F.woodDark,mat:z.wood});for(const E of[-1,1])t.box(.08,.08,2.1,[E*(o-.08),r-.05,-1],{color:F.woodDark,mat:z.wood},[.08,0,-E*.25]);t.box(e*.84,.38,.55,[0,-r+.2,-.2],{color:F.stoneDark,mat:z.stone},void 0,.025),t.box(e+.5,n+.55,.14,[0,.08,-.02],{color:F.woodDark,mat:z.wood},void 0,.03);for(let E=0;E<=5;E+=1)t.box(.06,n+.4,.07,[-o-.16+E/5*(e+.32),.08,-.14],{color:F.wood,mat:z.wood});let m=l;for(let E=0;E<s.stories;E+=1){const T=E===s.stories-1,C=(E+s.bays)%3===0?F.wood:F.woodDark;E>0&&t.box(e+.38,n+.34,.13,[0,.04,m],{color:F.woodDark,mat:z.wood},void 0,.025),t.box(e-.12,.07,i-.04,[0,r+.01,m+i*.5],{color:C,mat:z.wood}),t.box(e-.18,.07,i-.04,[0,-r-.01,m+i*.5],{color:F.woodDark,mat:z.wood});for(const D of[-1,1]){t.box(.08,n-.05,i-.04,[D*(o+.01),0,m+i*.5],{color:E===0?F.plaster:C,mat:z.plaster});for(let v=0;v<3;v+=1)t.box(.1,.1,i+.06,[D*(o+.065),-r+.16+v/2*(n-.32),m+i*.5],{color:F.woodDark,mat:z.wood});t.box(.08,n+.06,.09,[D*(o+.06),0,m+.14],{color:F.woodDark,mat:z.wood}),t.box(.08,n+.06,.09,[D*(o+.06),0,m+i-.08],{color:F.woodDark,mat:z.wood})}for(let D=0;D<s.bays;D+=1){const v=-o+(D+.5)*a;if(E===0&&D===Math.floor(s.bays/2))iv(t,v,r+.05,m,a*.58);else{const S=.2+h()*.72;$l(t,v,r+.055,m+i*(E===0?.62:.58),a*.64,i*.47,S)}(D+E)%2===0&&$l(t,v,-r-.04,m+i*.6,a*.5,i*.34,.06,!0)}for(let D=0;D<=s.bays;D+=1){const v=-o+D*a;for(const S of[-1,1])t.box(.1,.11,i+.08,[v,S*(r+.06),m+i*.5],{color:F.woodDark,mat:z.wood},void 0,.012)}for(const D of[-1,1])t.box(e+.16,.13,.12,[0,D*(r+.05),m+i+.04],{color:F.redDark,mat:z.wood},void 0,.015),t.box(e+.1,.1,.11,[0,D*(r+.05),m+.12],{color:F.woodDark,mat:z.wood},void 0,.012);if(E>0){t.box(e+.4,.43,.12,[0,r+.24,m-.02],{color:F.wood,mat:z.wood},void 0,.025);const D=r+.43;t.box(e+.42,.06,.07,[0,D,m+.42],{color:F.redDark,mat:z.wood}),t.box(e+.42,.05,.05,[0,D,m+.12],{color:F.redDark,mat:z.wood});for(let v=0;v<=18;v+=1)t.box(.035,.04,.34,[-o-.12+v/18*(e+.24),D,m+.26],{color:F.redDark,mat:z.wood});if(s.bays===3&&E===s.stories-1){t.box(e*.7,.035,.035,[.1,D+.04,m+1.02],{color:F.woodPale,mat:z.wood});const v=[F.cloth,F.blue,F.paper];for(let S=0;S<2;S+=1)t.box(.34,.025,.34+S*.1,[-.22+S*.58,D+.01,m+.85-S*.05],{color:v[S%v.length],mat:z.cloth})}}T||us(t,{width:e+.62,depth:1,centerY:r+.12,eaveZ:m+i+.08,ridgeZ:m+i+.32,upturn:.18,flare:.04,tileSpacing:.2,tileAmplitude:.018,rows:4,color:F.roof,edgeColor:F.roofEdge,gableColor:F.woodDark,gableMat:z.wood}),m+=i}const b=m+.12,_=m+1.02+s.stories*.05;us(t,{width:e+.86,depth:n+1,eaveZ:b,ridgeZ:_,upturn:.35,flare:.14,tileSpacing:.2,tileAmplitude:.024,rows:5,color:F.roof,edgeColor:F.roofEdge,gableColor:F.woodDark,gableMat:z.wood,ridgeColor:F.ridge});for(const E of[-1,1])Zl(t,E*e*.24,r+.54,b-.16,.075);Zl(t,0,r+.68,b-.2,.09),t.box(.9,.45,.16,[0,r+.46,-.1],{color:F.stoneDark,mat:z.stone},void 0,.02);const y=t.build(s.id),R=t.triangleCount;return{id:s.id,stories:s.stories,bays:s.bays,width:e,depth:n,height:_,geometry:y,triangles:R}}function $l(s,t,e,n,i,o,r,a=!1){const c=a?-1:1;s.box(i+.12,.05,o+.12,[t,e+c*.012,n],{color:F.trim,mat:z.trim}),s.box(i,.045,o,[t,e+c*.03,n],{color:F.window,mat:z.window,glow:r});for(let h=1;h<4;h+=1)s.box(.032,.035,o,[t-i*.5+h/4*i,e+c*.055,n],{color:F.woodDark,mat:z.wood});s.box(i,.032,.035,[t,e+c*.055,n+o*.18],{color:F.woodDark,mat:z.wood}),s.box(i+.08,.04,.04,[t,e+c*.02,n+o*.55],{color:F.woodDark,mat:z.wood}),s.box(i+.08,.04,.04,[t,e+c*.02,n-o*.55],{color:F.woodDark,mat:z.wood})}function iv(s,t,e,n,i){s.box(i+.16,.08,.88+.18,[t,e+.035,n+.88*.5],{color:F.woodDark,mat:z.wood}),s.box(i,.045,.88,[t,e+.06,n+.88*.48],{color:F.window,mat:z.window,glow:.22});for(let r=1;r<5;r+=1)s.box(.028,.035,.88*.9,[t-i*.5+r/5*i,e+.08,n+.88*.46],{color:F.wood,mat:z.wood});s.box(i*.72,.09,.13,[t,e+.08,n+1.05],{color:F.blue,mat:z.trim})}function Zl(s,t,e,n,i){s.cylinder(i*.85,i,i*1.28,8,[t,e,n],{color:F.lantern,mat:z.lantern,glow:1}),s.cylinder(i*.62,i*.62,.02,8,[t,e,n+i*.7],{color:F.gold,mat:z.gold}),s.cylinder(.012,.012,i*.44,4,[t,e,n-i*.72],{color:F.redDark,mat:z.trim})}function sv(s){const t=new In,e=3.35,n=2.45,i=e*.5,o=n*.5,r=1.08,a=.08;for(const h of[-1,1]){const u=h*o;for(let d=0;d<4;d+=1){const p=-i+.28+d/3*(e-.56);t.box(.12,.12,2,[p,u+h*.08,-1],{color:F.woodDark,mat:z.wood},[.06,0,0])}}t.box(e+.35,n+.4,.14,[0,0,-.04],{color:F.woodDark,mat:z.wood}),t.box(e-.1,n-.1,.2,[0,0,-.28],{color:F.stoneDark,mat:z.stone});for(let h=0;h<2;h+=1){const u=a+h*r,d=h===0?F.wood:F.woodDark;t.box(e-.08,.07,r-.04,[0,o,u+r*.5],{color:d,mat:z.wood}),t.box(e-.08,.07,r-.04,[0,-o,u+r*.5],{color:F.woodDark,mat:z.wood});for(const p of[-1,1])t.box(.07,n-.05,r-.04,[p*i,0,u+r*.5],{color:h===0?F.plaster:d,mat:z.plaster}),t.box(.1,.1,r+.05,[p*(i+.04),-o+.08,u+r*.5],{color:F.woodDark,mat:z.wood}),t.box(.1,.1,r+.05,[p*(i+.04),o-.08,u+r*.5],{color:F.woodDark,mat:z.wood});for(let p=0;p<2;p+=1){const g=-e*.24+p*e*.48;t.box(e*.33,.04,.5,[g,o+.05,u+r*.58],{color:F.window,mat:z.window,glow:.45+h*.2}),t.box(e*.36,.035,.05,[g,o+.07,u+r*.84],{color:F.woodDark,mat:z.wood})}if(t.box(e+.1,.1,.1,[0,o+.04,u+.12],{color:F.redDark,mat:z.wood}),h>0){t.box(e+.32,.36,.1,[0,o+.18,u-.02],{color:F.wood,mat:z.wood}),t.box(e+.3,.045,.045,[0,o+.36,u+.36],{color:F.redDark,mat:z.wood});for(let p=0;p<7;p+=1)t.box(.03,.035,.26,[-i-.08+p/6*(e+.16),o+.36,u+.2],{color:F.redDark,mat:z.wood})}}const l=a+2*r+.08;us(t,{width:e+.8,depth:n+.8,eaveZ:l,ridgeZ:l+.92,upturn:.28,flare:.1,tileSpacing:.28,tileAmplitude:.018,rows:4,color:F.roof,edgeColor:F.roofEdge,gableColor:F.woodDark,gableMat:z.wood});for(const h of[-1,1])t.cylinder(.06,.075,.16,6,[h*e*.23,o+.46,l-.28],{color:F.lantern,mat:z.lantern,glow:1.5});return{geometry:t.build("stilt-lod"),triangles:t.triangleCount,height:l+.92}}function ov(s,t,e,n){const i=new In,o=rv(334462),r=2.9;for(const c of[-1,1]){let h=[],u=[],d=0,p=0;const g=()=>{if(d>1){const f=[];for(let m=0;m<d-1;m+=1){const b=m*2,_=b+1,y=b+2,R=y+1;c>0?f.push(b,_,y,_,R,y):f.push(b,y,_,_,y,R)}i.coloredSurface(h,u,f,z.stone)}h=[],u=[],d=0};for(let x=.1;x<.895;x+=.0125){if(x>e-.052&&x<e+.052){g();continue}if(c===1&&x>n-.052&&x<n+.052){g();continue}const f=s.sampleAt(x),m=r+Math.sin(x*Math.PI*3.1+c)*.18,b=f.x+f.nx*c*(f.width+m),_=f.y+f.ny*c*(f.width+m),y=b-f.nx*c*.66,R=_-f.ny*c*.66,E=b+f.nx*c*.66,T=_+f.ny*c*.66,C=t(y,R),D=t(E,T);if(Math.abs(b)>16.4||Math.abs(_)>12||C<.18||D<.18||C>2.55||D>2.55){g();continue}h.push(y,R,C+.045),h.push(E,T,D+.045);const v=new mt(d%4===0?7498846:8485481),S=.9+d*7%5*.02;if(v.multiplyScalar(S),u.push(v.r,v.g,v.b,v.r,v.g,v.b),d+=1,d%4===0&&i.box(.085,1.28,.025,[b,_,Math.max(C,D)+.065],{color:5526856,mat:z.stone},[0,0,Math.atan2(f.ty,f.tx)]),d%8===0&&i.box(.72,.12,.08,[E,T,Math.max(C,D)+.08],{color:F.stoneDark,mat:z.stone},[0,0,Math.atan2(f.ty,f.tx)]),d%16===9&&p<8&&Math.abs(b)<16.6&&Math.abs(_)<12.3&&Math.max(C,D)<2.2){const I=b-f.nx*c*.72,U=_-f.ny*c*.72,B=Math.max(C,D);i.cylinder(.035,.045,1.05,5,[I,U,B+.55],{color:F.woodDark,mat:z.wood}),i.box(.18,.18,.24,[I,U,B+1.12],{color:F.lantern,mat:z.lantern,glow:.72}),p+=1}}g()}const a=[];for(let c=0;c<80&&a.length<26;c+=1){const h=.07+o()*.86;if(h>e-.06&&h<e+.06||h>n-.05&&h<n+.05)continue;const u=o()>.45?1:-1,d=s.sampleAt(h),p=d.width+6.6+o()*5.4,g=d.x+d.nx*u*p,x=d.y+d.ny*u*p;if(Math.abs(g)>15.5||Math.abs(x)>11)continue;const f=t(g,x);if(f<.9||a.some(([b,_])=>Math.hypot(b-g,_-x)<2.2))continue;a.push([g,x]);const m=.75+o()*.6;i.cylinder(.055*m,.11*m,1.25*m,5,[g,x,f+.62*m],{color:F.woodDark,mat:z.wood}),i.sphere(.55*m,[g,x,f+1.35*m],{color:F.green,mat:z.moss},[1,.95,1.25]),i.sphere(.45*m,[g,x,f+1.78*m],{color:F.green,mat:z.moss},[1.15,.85,1]),i.sphere(.3*m,[g,x,f+2.08*m],{color:F.moss,mat:z.moss})}for(let c=0;c<6;c+=1){const h=.16+o()*.66,u=o()>.5?1:-1,d=s.sampleAt(h),p=d.width+.22+o()*.38,g=d.x+d.nx*u*p,x=d.y+d.ny*u*p;if(Math.abs(g)>18.2||Math.abs(x)>13.2)continue;const f=t(g,x);if(f<.22||f>1.4)continue;const m=.16+o()*.18;i.sphere(m,[g,x,f+m*.42],{color:F.stoneCold,mat:z.wetStone},[1.25,.85,1])}return{geometry:i.build("town-scenery"),triangles:i.triangleCount}}function rv(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function av(s,t,e,n=15){const i=new In,o=s.sampleAt(t),r=ti(465418),a=[],l=o.width-.3,c=l*2/(n-1),h=.7,u=Math.atan2(o.ty,o.tx);for(let x=0;x<2;x+=1){const f=x===0?-1:1;for(let m=0;m<n;m+=1){const b=-l+m*c+(r()-.5)*.055,_=o.x+o.nx*b+o.tx*h*f,y=o.y+o.ny*b+o.ty*h*f,R=.25+(r()-.5)*.1,E=-.72,T=R-E,C=u+(r()-.5)*.16,D=(r()-.5)*.025,v=(r()-.5)*.025;i.setStone(a.length),i.box(.36,.44,T,[_,y,E+T*.5],{color:m%3===0?F.stoneDark:9278340,mat:z.stone},[D,v,C]),i.box(.3,.36,.035,[_,y,R+.018],{color:m%2===0?6253408:5397844,mat:z.wetStone},[D,v,C]),i.box(.33,.055,.018,[_-Math.sin(C)*.12,y+Math.cos(C)*.12,R+.035],{color:F.stoneLight,mat:z.wetStone},[0,0,C]),a.push({x:_,y,top:R,row:x,index:m})}}i.setStone(-1);const d=i.build("tiaoyan"),p=i.triangleCount,g=new ae(d,e.material);return g.name="tiaoyan",g.castShadow=!0,g.receiveShadow=!0,g.userData.triangles=p,g.userData.stones=a,{mesh:g,stones:a,triangles:p}}const lv=[2,4,5,1,3,0,4,2,5,1,3,0],cv=[1,3,0,4,2,1,5,3,0,4,2,3];class hv{constructor(t){M(this,"group",new Xe);M(this,"material");M(this,"bridge");M(this,"tower");M(this,"tiaoyan");M(this,"landmarkMesh");M(this,"houses",[]);M(this,"lodMesh");M(this,"lodPlacements",[]);M(this,"prototypes");M(this,"housePlacements",[]);M(this,"stats");M(this,"tBridge");M(this,"tTower");M(this,"tTiaoyan");M(this,"towerWorldTop");M(this,"tiaoyanStones");M(this,"onTowerBell");M(this,"onTowerGlow");M(this,"onStoneToggle");M(this,"onHouseSway");M(this,"river");M(this,"heightAt");M(this,"random",ti(4276219917));M(this,"towerFloors",new Float32Array(7));M(this,"towerLit",new Array(7).fill(!1));M(this,"towerLightElapsed",-1);M(this,"stoneLift",new Float32Array(32));M(this,"stoneTargets",new Float32Array(32));M(this,"stoneRaised",new Array(30).fill(!1));M(this,"swayState",null);this.river=t.river,this.heightAt=t.heightAt,this.material=new Xg(t.palette),this.group.name="architecture-town";const e=this.river.nearest(0,0);this.tBridge=Gt(e.t-.055,.34,.48),this.tTower=Gt(this.tBridge+.22,.24,.88),this.tTiaoyan=Gt(this.tBridge-.11,.08,this.tBridge-.06);const n=qg(this.material);this.bridge=n.mesh;const i=this.river.sampleAt(this.tBridge);this.bridge.position.set(i.x,i.y,0),this.bridge.rotation.z=Math.atan2(-i.tx,i.ty),this.group.add(this.bridge);const o=this.findTowerSpot();this.tTower=o.t;const r=$g(this.material);this.tower=r.mesh,this.tower.position.set(o.x,o.y,o.z),this.tower.rotation.z=o.yaw,this.towerWorldTop=o.z+r.height,this.group.add(this.tower),this.tTiaoyan=Gt(this.tBridge-.11,.08,this.tBridge-.06);const a=av(this.river,this.tTiaoyan,this.material);this.tiaoyan=a.mesh,this.tiaoyanStones=a.stones,this.group.add(this.tiaoyan);const l=[];for(const _ of[this.bridge,this.tower,this.tiaoyan]){_.updateMatrix();const y=_.geometry.clone();y.applyMatrix4(_.matrix),l.push(y)}const c=ov(this.river,this.heightAt,this.tBridge,this.tTower);l.push(c.geometry);const h=yo(l,!1);if(!h)throw new Error("Unable to merge landmark geometry");for(const _ of l)_.dispose();h.name="landmarks-merged",h.computeBoundingSphere(),this.landmarkMesh=new ae(h,this.material.material),this.landmarkMesh.name="landmarks-merged",this.landmarkMesh.castShadow=!0,this.landmarkMesh.receiveShadow=!0,this.group.add(this.landmarkMesh);for(const _ of[this.bridge,this.tower,this.tiaoyan])_.visible=!1;this.prototypes=ev(this.material);const u=this.prototypes.map(()=>[]),d=this.prototypes.map(()=>[]),p=new ce;for(const _ of[-1,1]){const y=_===1?lv:cv,R=this.placeHouseRow(_,y);for(const E of R){const T=this.prototypes.findIndex(C=>C.id===E.prototypeId);T<0||(p.position.set(E.x,E.y,E.z),p.rotation.set(0,0,E.yaw),p.scale.setScalar(E.scale),p.updateMatrix(),u[T].push(p.matrix.clone()),d[T].push(E),this.housePlacements.push(E))}}let g=0;for(let _=0;_<this.prototypes.length;_+=1){const y=this.prototypes[_],R=u[_].length;if(R===0)continue;const E=new bn(y.geometry,this.material.material,R);E.name=`stilt-houses-${y.id}`,E.castShadow=!0,E.receiveShadow=!0,E.frustumCulled=!1;for(let C=0;C<R;C+=1)E.setMatrixAt(C,u[_][C]);E.instanceMatrix.needsUpdate=!0,E.computeBoundingSphere(),E.userData.prototype=y.id,E.userData.placements=d[_];const T=new Qr(new Float32Array(R*2),2);T.setUsage(Vh),y.geometry.setAttribute("aSway",T),this.houses.push(E),this.group.add(E),g+=y.triangles*R}const x=sv(this.material);this.lodPlacements=this.placeLodHouses();const f=new bn(x.geometry,this.material.material,Math.max(1,this.lodPlacements.length));f.name="stilt-houses-lod",f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!1;const m=new ce;this.lodPlacements.forEach((_,y)=>{m.position.set(_.x,_.y,_.z),m.rotation.set(0,0,_.yaw),m.scale.setScalar(_.scale),m.updateMatrix(),f.setMatrixAt(y,m.matrix)}),f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),this.lodMesh=f,this.group.add(f);const b={};for(const _ of this.prototypes)b[_.id]=Math.round(_.triangles);this.stats={bridge:n.triangles,tower:r.triangles,tiaoyan:a.triangles,houses:Math.round(g),total:Math.round(n.triangles+r.triangles+a.triangles+g),houseInstances:this.housePlacements.length,prototypeTriangles:b},this.group.traverse(_=>{_ instanceof ae&&(_.castShadow=!0,_.receiveShadow=!0)}),this.lodMesh.castShadow=!1}setPalette(t){this.material.setPalette(t)}setSeason(t){this.material.setSeason(t)}setDetail(t){this.material.setDetail(t)}tick(t,e){this.material.tick(t),this.updateTower(e),this.updateStones(e),this.updateHouseSway(e)}lightTower(){var t;this.towerFloors.fill(0),this.towerLit.fill(!1),this.towerLightElapsed=0,this.material.uniforms.towerFloors.value.set(this.towerFloors),(t=this.onTowerGlow)==null||t.call(this,0)}setStoneHover(t){this.material.uniforms.stoneHover.value=t}toggleStone(t){var n;if(t<0||t>=this.stoneTargets.length)return;const e=!this.stoneRaised[t];this.stoneRaised[t]=e,this.stoneTargets[t]=e?.52:0,(n=this.onStoneToggle)==null||n.call(this,t,e)}getStoneLift(t){return this.stoneLift[t]??0}beginHouseSway(t,e){var o;const n=new jt;t.getMatrixAt(e,n);const i=t.geometry.getAttribute("aSway");i&&(this.swayState={mesh:t,index:e,base:n,x:0,z:0,vx:0,vz:0,targetX:0,targetZ:0,holding:!0,sway:i},(o=this.onHouseSway)==null||o.call(this,!0))}dragHouseSway(t,e){this.swayState&&(this.swayState.targetZ=Gt(t*.0023,-.052,.052),this.swayState.targetX=Gt(-e*.0019,-.045,.045))}endHouseSway(){var t;this.swayState&&(this.swayState.holding=!1,this.swayState.targetX=0,this.swayState.targetZ=0,(t=this.onHouseSway)==null||t.call(this,!1))}updateTower(t){var n,i;if(this.towerLightElapsed<0)return;this.towerLightElapsed+=t;for(let o=0;o<7;o+=1){const r=Gt((this.towerLightElapsed-o*.15)/.18,0,1);this.towerFloors[o]=r,r>.55&&!this.towerLit[o]&&(this.towerLit[o]=!0,(n=this.onTowerBell)==null||n.call(this,o))}this.material.uniforms.towerFloors.value.set(this.towerFloors);let e=0;for(let o=0;o<7;o+=1)e=Math.max(e,this.towerFloors[o]);(i=this.onTowerGlow)==null||i.call(this,e),this.towerLightElapsed>7*.15+1.2&&(this.towerLightElapsed=-1)}updateStones(t){let e=!1;for(let n=0;n<this.stoneTargets.length;n+=1){const i=this.stoneTargets[n]-this.stoneLift[n];Math.abs(i)<2e-4||(this.stoneLift[n]+=i*(1-Math.exp(-t*11)),Math.abs(this.stoneTargets[n]-this.stoneLift[n])<5e-4&&(this.stoneLift[n]=this.stoneTargets[n]),e=!0)}e&&this.material.uniforms.stoneLift.value.set(this.stoneLift)}updateHouseSway(t){const e=this.swayState;if(!e)return;const n=70;e.vx+=(e.targetX-e.x)*n*t,e.vz+=(e.targetZ-e.z)*n*t,e.vx*=Math.exp(-10*t),e.vz*=Math.exp(-10*t),e.x+=e.vx*t,e.z+=e.vz*t;const i=e.base.clone().multiply(new jt().makeRotationFromEuler(new Ye(e.x,0,e.z,"XYZ")));e.mesh.setMatrixAt(e.index,i),e.mesh.instanceMatrix.needsUpdate=!0,e.sway.setXY(e.index,e.z,-e.x),e.sway.needsUpdate=!0,!e.holding&&Math.abs(e.x)<1e-4&&Math.abs(e.z)<1e-4&&Math.abs(e.vx)<1e-4&&Math.abs(e.vz)<1e-4&&e.targetX===0&&e.targetZ===0&&(this.swayState=null)}findTowerSpot(){for(let o=.33;o>=.11;o-=.01){const r=Gt(this.tBridge+o,.22,.9),a=this.river.sampleAt(r),l=Math.atan2(a.ty,a.tx);for(const c of[2.45,2.15,1.85,1.55]){if(c<1.55)continue;const h=a.width+c,u=a.x+a.nx*-1*h,d=a.y+a.ny*-1*h;if(!this.insideBlock(u,d,2.1))continue;const p=this.heightAt(u,d);if(p<.4)continue;const g=[this.heightAt(u+1.75,d),this.heightAt(u-1.75,d),this.heightAt(u,d+1.75),this.heightAt(u,d-1.75)];if(!(Math.min(...g)<.12))return{x:u,y:d,z:Math.max(.4,p-.08),yaw:l,t:r}}}const n=this.river.sampleAt(this.tBridge+.13),i=n.width+2;return{x:n.x+n.nx*-1*i,y:n.y+n.ny*-1*i,z:Math.max(.4,this.heightAt(n.x+n.nx*-1*i,n.y+n.ny*-1*i)-.08),yaw:Math.atan2(n.ty,n.tx),t:this.tBridge+.13}}placeHouseRow(t,e){const n=[],i=t===1?11:9,o=.058,r=.06;let a=t===1?.105:.12,l=0,c=0;const h=2.95;for(;a<.9&&n.length<i&&c<80;){c+=1;const u=this.prototypes[e[l%e.length]],d=(u.width+.2)/this.river.length,p=Math.max(d*.5,.018);if(a>this.tBridge-o-p&&a<this.tBridge+o+p){a=this.tBridge+o+p;continue}if(t===-1&&a>this.tTower-r-p&&a<this.tTower+r+p){a=this.tTower+r+p;continue}const g=this.river.sampleAt(a),x=t===1?Math.atan2(g.ty,g.tx):Math.atan2(g.ty,g.tx)+Math.PI,f=g.width+1.1+(this.random()-.5)*.14,m=g.x+g.nx*t*f,b=g.y+g.ny*t*f;if(!this.insideBlock(m,b,2.2)){a+=Math.max(.032,d);continue}const _=m-Math.sin(x)*(u.depth*.46),y=b+Math.cos(x)*(u.depth*.46),R=this.heightAt(_,y),E=this.heightAt(m,b);if(E<.18){a+=Math.max(.032,d);continue}const T=Gt(Math.max(E,R+.15)+.55,.95,2.1)+(this.random()-.5)*.06,C=(t===1?.96:.93)+this.random()*.09;n.push({id:`house-${t===1?"N":"S"}-${n.length+1}-${u.id}`,prototypeId:u.id,t:a,side:t,x:m,y:b,z:T,yaw:x,scale:C}),l+=1,a+=Math.max(d,h/this.river.length)+.0025+this.random()*.008}return n}insideBlock(t,e,n){const i=Ht.width*.5-n,o=Ht.depth*.5-n,r=Math.max(.2,Ht.radius-n*.18),a=Math.abs(t)-(i-r),l=Math.abs(e)-(o-r);return Math.hypot(Math.max(a,0),Math.max(l,0))+Math.min(Math.max(a,l),0)-r<0}placeLodHouses(){const t=[];for(const e of[-1,1]){let n=e===1?.115:.14,i=0,o=0;for(;n<.885&&i<90&&t.length<30;){i+=1;const r=.036+this.random()*.012;if(n>this.tBridge-.06&&n<this.tBridge+.06){n=this.tBridge+.07;continue}if(e===-1&&n>this.tTower-.055&&n<this.tTower+.055){n=this.tTower+.06;continue}const a=this.river.sampleAt(n),l=e===1?Math.atan2(a.ty,a.tx):Math.atan2(a.ty,a.tx)+Math.PI,c=a.width+4+this.random()*2.4,h=a.x+a.nx*e*c,u=a.y+a.ny*e*c;if(!this.insideBlock(h,u,1.3)){n+=r;continue}const d=this.heightAt(h,u);if(d<.22){n+=r;continue}const p=.76+this.random()*.26;t.push({id:`lod-${e===1?"N":"S"}-${o+1}`,prototypeId:"LOD",t:n,side:e,x:h,y:u,z:d+.42+this.random()*.22,yaw:l,scale:p}),o+=1,n+=r}}for(const e of[-1,1]){let n=e===1?.16:.19,i=0,o=0;for(;n<.86&&i<80&&t.length<38;){i+=1;const r=.044+this.random()*.015;if(n>this.tBridge-.065&&n<this.tBridge+.065){n=this.tBridge+.075;continue}if(e===-1&&n>this.tTower-.06&&n<this.tTower+.06){n=this.tTower+.07;continue}const a=this.river.sampleAt(n),l=a.width+7.3+this.random()*2.2,c=a.x+a.nx*e*l,h=a.y+a.ny*e*l;if(!this.insideBlock(c,h,1.1)){n+=r;continue}const u=this.heightAt(c,h);if(u<.42){n+=r;continue}const d=e===1?Math.atan2(a.ty,a.tx):Math.atan2(a.ty,a.tx)+Math.PI;t.push({id:`lod-far-${e===1?"N":"S"}-${o+1}`,prototypeId:"LOD",t:n,side:e,x:c,y:h,z:u+.32+this.random()*.18,yaw:d,scale:.58+this.random()*.2}),o+=1,n+=r}}return t}}class uv{constructor(t,e,n){M(this,"group",new Xe);M(this,"lanternMesh");M(this,"boatMesh");M(this,"lanterns",[]);M(this,"boats",[]);M(this,"onSplash");M(this,"onBoatMoved");M(this,"river");M(this,"water");M(this,"dummy",new ce);M(this,"push",new st);M(this,"wakeClock",0);M(this,"boatTriangles",0);M(this,"lastTickTime",0);this.river=t,this.water=e,this.group.name="river-life";const i=new In;i.box(.5,.5,.06,[0,0,.02],{color:F.woodDark,mat:z.wood});for(let u=0;u<8;u+=1){const d=u/8*Math.PI*2;i.box(.18,.08,.34,[Math.cos(d)*.23,Math.sin(d)*.23,.1],{color:u%2===0?14125939:12807255,mat:z.cloth},[.18,0,d])}i.cylinder(.12,.17,.24,8,[0,0,.28],{color:F.lantern,mat:z.lantern,glow:2.6}),i.cylinder(.1,.1,.035,8,[0,0,.42],{color:F.gold,mat:z.gold}),i.sphere(.055,[0,0,.37],{color:16766874,mat:z.lantern,glow:3.2});const o=i.build("river-lantern"),r=new In;r.box(2.75,.92,.26,[0,0,.18],{color:F.woodDark,mat:z.wood}),r.box(2.95,.12,.34,[0,.46,.31],{color:F.wood,mat:z.wood}),r.box(2.95,.12,.34,[0,-.46,.31],{color:F.wood,mat:z.wood});for(const u of[-1.36,1.36])r.box(.28,.92,.26,[u,0,.24],{color:F.wood,mat:z.wood});const a=new ds(.55,.55,2.15,8,1,!0,0,Math.PI);a.rotateZ(Math.PI*.5),a.rotateX(Math.PI),a.translate(0,0,.83),r.rawColored(a,{color:F.roofDark,mat:z.roof});for(const u of[-.85,0,.85])r.box(.07,.9,.07,[u,.4,.52],{color:F.woodDark,mat:z.wood}),r.box(.07,.9,.07,[u,-.4,.52],{color:F.woodDark,mat:z.wood});for(const u of[-1,1])r.box(2.2,.055,.055,[.2,u*1.05,.3],{color:F.woodLight,mat:z.wood},[.1,0,.05]);r.cylinder(.065,.085,.18,7,[.9,0,1.18],{color:F.lantern,mat:z.lantern,glow:2.4});const l=r.build("ferry-boat");this.boatTriangles=r.triangleCount,this.lanternMesh=new bn(o,n.material,3),this.lanternMesh.name="river-lanterns",this.lanternMesh.castShadow=!1,this.lanternMesh.receiveShadow=!0,this.lanternMesh.frustumCulled=!1,this.group.add(this.lanternMesh),this.boatMesh=new bn(l,n.material,4),this.boatMesh.name="ferry-boats",this.boatMesh.castShadow=!1,this.boatMesh.receiveShadow=!0,this.boatMesh.frustumCulled=!1,this.group.add(this.boatMesh);const c=[{t:.3,lane:-.8},{t:.52,lane:1.15},{t:.73,lane:-.45}];for(let u=0;u<3;u+=1){const d=c[u],p=this.river.sampleAt(d.t);this.lanterns.push({x:p.x+p.nx*d.lane,y:p.y+p.ny*d.lane,z:.06,vx:0,vy:0,vz:0,mode:"float",spin:u/3*Math.PI*2,phase:u*1.8,sink:0,sinkVel:0,drift:0})}const h=[{t:.5,lane:-1.3,speed:.0036,phase:.3},{t:.6,lane:.9,speed:.0042,phase:2.1},{t:.7,lane:-.35,speed:.0031,phase:4.2},{t:.8,lane:1.45,speed:.0038,phase:5.4}];for(const u of h)this.boats.push({...u,boost:0,drift:0,driftV:0,fade:1});this.syncInstances(0)}get boatTriangleCount(){return this.boatTriangles}pickLantern(t){const e=t.intersectObject(this.lanternMesh,!1);return e.length===0||e[0].instanceId===void 0?null:{index:e[0].instanceId,point:e[0].point.clone(),distance:e[0].distance}}pickBoat(t){const e=t.intersectObject(this.boatMesh,!1);return e.length===0||e[0].instanceId===void 0?null:{index:e[0].instanceId,point:e[0].point.clone(),distance:e[0].distance}}beginLanternDrag(t){const e=this.lanterns[t];e&&(e.mode="held",e.vx=0,e.vy=0,e.vz=0,e.sink=0,e.sinkVel=0)}dragLantern(t,e,n){const i=this.lanterns[t];!i||i.mode!=="held"||(i.x=e,i.y=n,i.z=this.water.tide+.38,i.sink=0,i.sinkVel=0)}releaseLantern(t,e,n){var r;const i=this.lanterns[t];if(!i)return;const o=Math.hypot(e,n);if(o<.35){i.mode="float",i.z=this.water.sampleHeight(i.x,i.y,this.lastTickTime)+.04,i.vx=0,i.vy=0,i.vz=0,i.sink=-.035,i.sinkVel=.28,(r=this.onSplash)==null||r.call(this,t);return}i.mode="fly",i.vx=e,i.vy=n,i.vz=1.8+Math.min(1.3,o*.22),i.sink=0,i.sinkVel=0}dispatchBoat(t){var n;const e=this.boats[t];return e?(e.boost=6,e.speed=.016,e.fade=Math.max(e.fade,.55),(n=this.onBoatMoved)==null||n.call(this,t),!0):!1}surfaceZ(t,e,n){return this.water.sampleHeight(t,e,n)}tick(t,e){var n;this.lastTickTime=t;for(let i=0;i<this.lanterns.length;i+=1){const o=this.lanterns[i];if(o.mode==="fly"){o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.vz-=9.2*e;const r=this.surfaceZ(o.x,o.y,t);if(o.z<=r){if(!this.river.isWater(o.x,o.y,.18)){const a=this.river.nearest(o.x,o.y),l=this.river.sampleAt(a.t);o.x=l.x+l.nx*.8,o.y=l.y+l.ny*.8}o.z=r+.02,o.mode="float",o.vx=0,o.vy=0,o.vz=0,o.sink=-.065,o.sinkVel=.36,this.water.addRipple(o.x,o.y,t,.7),(n=this.onSplash)==null||n.call(this,i)}}else if(o.mode==="float"){const r=this.river.nearest(o.x,o.y),a=this.river.sampleAt(r.t),l=.075+Math.min(.12,Math.abs(this.push.x)*.8);if(o.x+=a.tx*l*e,o.y+=a.ty*l*e,this.water.samplePush(o.x,o.y,t,this.push),o.x+=this.push.x*e*2.2,o.y+=this.push.y*e*2.2,!this.river.isWater(o.x,o.y,.1)){const c=this.river.nearest(o.x,o.y),h=this.river.sampleAt(c.t);o.x=h.x+h.nx*.8,o.y=h.y+h.ny*.8}o.sinkVel+=(-o.sink*46-o.sinkVel*7.5)*e,o.sink+=o.sinkVel*e,Math.abs(o.sink)<2e-4&&Math.abs(o.sinkVel)<2e-4&&(o.sink=0,o.sinkVel=0),o.z=this.surfaceZ(o.x,o.y,t)+.035+o.sink,o.spin+=e*.14}}for(let i=0;i<this.boats.length;i+=1){const o=this.boats[i];o.t+=o.speed*e,o.t>.82&&(o.fade=Math.min(o.fade,1-(o.t-.82)/.06)),o.t>.88&&(o.t=.44,o.fade=0),o.fade=Math.min(1,o.fade+e*2.4),o.boost>0&&(o.boost-=e,o.boost<=0&&(o.speed=.0031+i%4*35e-5)),this.water.samplePush(this.boatPosition(o,t).x,this.boatPosition(o,t).y,t,this.push),o.driftV+=this.push.x*1.8-o.drift*8,o.driftV*=Math.exp(-e*2.2),o.drift+=o.driftV*e,o.drift=ie.clamp(o.drift,-.3,.3)}if(this.syncInstances(t),this.wakeClock+=e,this.wakeClock>1.25){this.wakeClock=0;for(let i=0;i<this.boats.length;i+=1){const o=this.boatPosition(this.boats[i],t);this.water.addRipple(o.x,o.y,t,.14)}}}syncInstances(t){for(let e=0;e<this.lanterns.length;e+=1){const n=this.lanterns[e],i=n.mode==="float"?Math.sin(t*1.3+n.phase)*.018:0;this.dummy.position.set(n.x,n.y,n.z+i),this.dummy.rotation.set(0,0,n.spin+Math.sin(t*.7+n.phase)*.16),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),this.lanternMesh.setMatrixAt(e,this.dummy.matrix)}this.lanternMesh.instanceMatrix.needsUpdate=!0;for(let e=0;e<this.boats.length;e+=1){const n=this.boats[e],i=this.boatPosition(n,t),o=this.river.sampleAt(n.t);this.dummy.position.set(i.x,i.y,i.z+Math.sin(t*1.1+n.phase)*.022),this.dummy.rotation.set(0,0,Math.atan2(o.ty,o.tx)),this.dummy.scale.setScalar(Math.max(.001,n.fade)),this.dummy.updateMatrix(),this.boatMesh.setMatrixAt(e,this.dummy.matrix)}this.boatMesh.instanceMatrix.needsUpdate=!0}boatPosition(t,e){const n=this.river.sampleAt(t.t),i=n.x+n.nx*(t.lane+t.drift),o=n.y+n.ny*(t.lane+t.drift);return{x:i,y:o,z:this.surfaceZ(i,o,e)}}}class So extends ae{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new ze;const n=this,i=e.color!==void 0?new mt(e.color):new mt(8355711),o=e.textureWidth||512,r=e.textureHeight||512,a=e.clipBias||0,l=e.shader||So.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Pn,u=new N,d=new N,p=new N,g=new jt,x=new N(0,0,-1),f=new de,m=new N,b=new N,_=new de,y=new jt,R=this.camera,E=new Fe(o,r,{samples:c,type:qe}),T=new le({name:l.name!==void 0?l.name:"unspecified",uniforms:xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(C,D,v){if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(d,p),m.dot(u)>0)return;m.reflect(u).negate(),m.add(d),g.extractRotation(v.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),b.subVectors(d,x),b.reflect(u).negate(),b.add(d),R.position.copy(m),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(u),R.lookAt(b),R.far=v.far,R.updateMatrixWorld(),R.projectionMatrix.copy(v.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(R.projectionMatrix),y.multiply(R.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),f.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const S=R.projectionMatrix;_.x=(Math.sign(f.x)+S.elements[8])/S.elements[0],_.y=(Math.sign(f.y)+S.elements[9])/S.elements[5],_.z=-1,_.w=(1+S.elements[10])/S.elements[14],f.multiplyScalar(2/f.dot(_)),S.elements[2]=f.x,S.elements[6]=f.y,S.elements[10]=f.z+1-a,S.elements[14]=f.w,n.visible=!1;const I=C.getRenderTarget(),U=C.xr.enabled,B=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(D,R),C.xr.enabled=U,C.shadowMap.autoUpdate=B,C.setRenderTarget(I);const W=v.viewport;W!==void 0&&C.state.viewport(W),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}So.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class dv{constructor(t,e){M(this,"reflector");M(this,"water");M(this,"worldRoot");M(this,"texture");var i;this.worldRoot=t,this.water=e,this.reflector=new So(new ki(Ht.width+.2,Ht.depth+.2),{textureWidth:512,textureHeight:256,clipBias:.0025,multisample:0,color:16052712}),this.reflector.name="water-planar-reflector",this.reflector.position.set(0,0,0),this.reflector.visible=!1,this.reflector.matrixAutoUpdate=!1,this.reflector.matrixWorld.copy(t.matrixWorld),this.reflector.updateMatrixWorld(!0);const n=this.reflector.getRenderTarget();if(this.texture=n.texture,this.texture){const o=this.reflector.material.uniforms;this.water.setReflection(this.texture,((i=o.textureMatrix)==null?void 0:i.value)??new jt,0)}}update(t,e,n){if(!this.texture)return;const i=this.water.mesh.visible;this.water.mesh.visible=!1,this.worldRoot.updateMatrixWorld(!0),this.reflector.matrixWorld.copy(this.worldRoot.matrixWorld);const o=this.reflector.onBeforeRender;if(o){o.call(this.reflector,t,e,n),this.reflector.visible=!1;const r=this.reflector.material.uniforms;r.textureMatrix&&this.water.setReflection(this.texture,r.textureMatrix.value,1)}this.water.mesh.visible=i}disable(){this.water.setReflectionActive(!1)}}const fv=`
  uniform float uTime;
  uniform float uSnow;
  uniform float uWindStrength;
  uniform vec2 uWind;
  uniform float uPixelRatio;
  uniform float uOpacity;

  attribute float aSeed;
  varying float vAlpha;
  varying float vSnow;
  varying float vSlant;

  void main() {
    float speed = mix(10.0, 1.8, uSnow);
    float span = 26.0;
    float z = mod(position.z - uTime * speed + aSeed * 41.0, span) + 2.0;
    float drop = 28.0 - z;
    float wind = uWindStrength * mix(0.36, 1.0, uSnow);
    vec3 p = position;
    p.x += uWind.x * wind * drop * 0.16;
    p.y += uWind.y * wind * drop * 0.16;
    p.z = z + sin(uTime * 0.62 + aSeed * 19.0) * mix(0.12, 0.9, uSnow);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float size = mix(1.5, 1.9, uSnow);
    gl_PointSize = clamp(size * uPixelRatio * (240.0 / max(1.0, -mv.z)), 1.4, 14.0);

    float edge = smoothstep(0.0, 2.4, z) * (1.0 - smoothstep(24.0, 28.0, z));
    vAlpha = (0.42 + aSeed * 0.44) * edge * uOpacity;
    vSnow = uSnow;
    vSlant = uWind.x * 0.75 + uWind.y * 0.22;
  }
`,pv=`
  uniform vec3 uRainColor;
  uniform vec3 uSnowColor;
  varying float vAlpha;
  varying float vSnow;
  varying float vSlant;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float c = cos(vSlant);
    float s = sin(vSlant);
    vec2 r = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

    float streak = smoothstep(0.18, 0.02, abs(r.x)) *
      smoothstep(0.52, 0.08, abs(r.y));
    float flake = smoothstep(0.5, 0.12, length(uv));
    float shape = mix(streak * 0.78, flake, vSnow);
    float alpha = shape * vAlpha;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(mix(uRainColor, uSnowColor, vSnow), alpha);
  }
`;class mv{constructor(t){M(this,"group",new Xe);M(this,"points");M(this,"material");M(this,"uniforms");M(this,"targetSnow",0);M(this,"targetOpacity",.68);const e=t.tier==="high"?1e3:t.tier==="medium"?720:500,n=ti(2047983838),i=new Float32Array(e*3),o=new Float32Array(e);for(let a=0;a<e;a+=1)i[a*3]=(n()*2-1)*25,i[a*3+1]=(n()*2-1)*19,i[a*3+2]=2+n()*26,o[a]=n();const r=new _e;r.setAttribute("position",new Jt(i,3)),r.setAttribute("aSeed",new Jt(o,1)),this.uniforms={uTime:{value:0},uSnow:{value:0},uWind:{value:new st(.7,.1)},uWindStrength:{value:.5},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uOpacity:{value:.68},uRainColor:{value:new mt(8366509)},uSnowColor:{value:new mt(16054775)}},this.material=new le({uniforms:this.uniforms,vertexShader:fv,fragmentShader:pv,transparent:!0,depthWrite:!1,depthTest:!0,blending:$n}),this.points=new Oc(r,this.material),this.points.name="weather-rain-snow",this.points.frustumCulled=!1,this.points.renderOrder=8,this.group.name="weather",this.group.add(this.points)}get snow(){return this.uniforms.uSnow.value}get isRaining(){return this.uniforms.uSnow.value<.55}setSeason(t){this.targetSnow=t.value.snowAmount>.4?1:0,this.targetOpacity=this.targetSnow>.5?.8:.68}setWind(t,e,n){this.uniforms.uWind.value.set(t,e),this.uniforms.uWindStrength.value=ie.clamp(n,.1,1.2)}setPixelRatio(t){this.uniforms.uPixelRatio.value=Math.min(t,2)}tick(t,e){const n=1-Math.exp(-Math.max(0,e)*1.8);this.uniforms.uSnow.value+=(this.targetSnow-this.uniforms.uSnow.value)*n,this.uniforms.uOpacity.value+=(this.targetOpacity-this.uniforms.uOpacity.value)*n,this.uniforms.uTime.value=t}}class gv{constructor(t,e,n){M(this,"sun");M(this,"hemi");M(this,"rim");M(this,"fill");M(this,"ambient");M(this,"sunTarget",new ce);M(this,"rimTarget",new ce);M(this,"fillTarget",new ce);this.sun=new or(n.color.sun.clone(),n.value.sunIntensity),this.sun.name="warm-key",this.sun.position.set(-31,-16,28),this.sun.target=this.sunTarget,this.sunTarget.position.set(0,0,0),t.add(this.sunTarget),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(e.shadowMap,e.shadowMap),this.sun.shadow.camera.left=-31,this.sun.shadow.camera.right=31,this.sun.shadow.camera.top=27,this.sun.shadow.camera.bottom=-24,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=110,this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.025,this.sun.shadow.radius=e.tier==="high"?4.2:3,this.sun.shadow.blurSamples=e.tier==="high"?12:8,t.add(this.sun),this.hemi=new ig(n.color.hemiSky.clone(),n.color.hemiGround.clone(),n.value.hemiIntensity),this.hemi.name="soft-hemisphere",t.add(this.hemi),this.rim=new or(n.color.rim.clone(),n.value.rimIntensity),this.rim.name="cool-rim",this.rim.position.set(26,28,18),this.rim.target=this.rimTarget,this.rimTarget.position.set(0,-2,1),t.add(this.rimTarget),this.rim.castShadow=!1,t.add(this.rim),this.fill=new or(n.color.hemiSky.clone(),n.value.hemiIntensity*.62),this.fill.name="front-fill",this.fill.position.set(21,-27,16),this.fill.target=this.fillTarget,this.fillTarget.position.set(0,0,2.5),t.add(this.fillTarget),this.fill.castShadow=!1,t.add(this.fill),this.ambient=new rg(16777215,.15),this.ambient.name="ambient-lift",t.add(this.ambient)}setPalette(t){this.sun.color.copy(t.color.sun),this.sun.intensity=t.value.sunIntensity,this.hemi.color.copy(t.color.hemiSky),this.hemi.groundColor.copy(t.color.hemiGround),this.hemi.intensity=t.value.hemiIntensity,this.rim.color.copy(t.color.rim),this.rim.intensity=t.value.rimIntensity,this.fill.color.copy(t.color.hemiSky).lerp(t.color.sun,.24),this.fill.intensity=t.value.hemiIntensity*(t.definition.isDark?.5:.74),this.ambient.intensity=t.definition.isDark?.2:.17}}function vv(s){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");if(!e)throw new Error("2D canvas unavailable");const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#e8f3ee"),n.addColorStop(.32,"#f7f1e3"),n.addColorStop(.58,"#d9d1bf"),n.addColorStop(.78,"#9d8a6d"),n.addColorStop(1,"#5d5548"),e.fillStyle=n,e.fillRect(0,0,512,256);const i=e.createRadialGradient(160,70,4,160,70,160);i.addColorStop(0,"rgba(255, 252, 241, 0.98)"),i.addColorStop(.35,"rgba(255, 245, 222, 0.5)"),i.addColorStop(1,"rgba(255, 245, 222, 0)"),e.fillStyle=i,e.fillRect(0,0,512,256);const o=e.createRadialGradient(400,108,3,400,108,90);o.addColorStop(0,"rgba(210, 241, 235, 0.45)"),o.addColorStop(1,"rgba(210, 241, 235, 0)"),e.fillStyle=o,e.fillRect(0,0,512,256);const r=new M0(t);r.mapping=so,r.colorSpace=We;const a=new Kr(s);a.compileEquirectangularShader();const l=a.fromEquirectangular(r);return r.dispose(),a.dispose(),l.texture}const ss={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _v=new ya(-1,1,1,-1,0,1);class xv extends _e{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const yv=new xv;class Pa{constructor(t){this._mesh=new ae(yv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_v)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class jc extends Hi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xn.clone(t.uniforms),this.material=new le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kl extends Hi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Sv extends Hi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class bv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jc(ss),this.copyPass.material.blending=Le,this.clock=new ag}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kl!==void 0&&(r instanceof Kl?n=!0:r instanceof Sv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Mv extends Hi{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const wv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ui extends Hi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(o,r,{type:qe}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Fe(o,r,{type:qe});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Fe(o,r,{type:qe});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=wv;this.highPassUniforms=xn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new st(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ss;this.copyUniforms=xn.clone(h.uniforms),this.blendMaterial=new le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:io,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new mt,this.oldClearAlpha=1,this.basic=new vo,this.fsQuad=new Pa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new st(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ui.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ui.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ui.BlurDirectionX=new st(1,0);Ui.BlurDirectionY=new st(0,1);class Tv{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,o){return t[0]*e+t[1]*n+t[2]*i+t[3]*o}noise(t,e){let n,i,o;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,g=t-d,x=e-p;let f,m;g>x?(f=1,m=0):(f=0,m=1);const b=g-f+h,_=x-m+h,y=g-1+2*h,R=x-1+2*h,E=l&255,T=c&255,C=this.perm[E+this.perm[T]]%12,D=this.perm[E+f+this.perm[T+m]]%12,v=this.perm[E+1+this.perm[T+1]]%12;let S=.5-g*g-x*x;S<0?n=0:(S*=S,n=S*S*this.dot(this.grad3[C],g,x));let I=.5-b*b-_*_;I<0?i=0:(I*=I,i=I*I*this.dot(this.grad3[D],b,_));let U=.5-y*y-R*R;return U<0?o=0:(U*=U,o=U*U*this.dot(this.grad3[v],y,R)),70*(n+i+o)}noise3d(t,e,n){let i,o,r,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),p=1/6,g=(h+u+d)*p,x=h-g,f=u-g,m=d-g,b=t-x,_=e-f,y=n-m;let R,E,T,C,D,v;b>=_?_>=y?(R=1,E=0,T=0,C=1,D=1,v=0):b>=y?(R=1,E=0,T=0,C=1,D=0,v=1):(R=0,E=0,T=1,C=1,D=0,v=1):_<y?(R=0,E=0,T=1,C=0,D=1,v=1):b<y?(R=0,E=1,T=0,C=0,D=1,v=1):(R=0,E=1,T=0,C=1,D=1,v=0);const S=b-R+p,I=_-E+p,U=y-T+p,B=b-C+2*p,W=_-D+2*p,H=y-v+2*p,$=b-1+3*p,X=_-1+3*p,it=y-1+3*p,ht=h&255,ut=u&255,Ft=d&255,Yt=this.perm[ht+this.perm[ut+this.perm[Ft]]]%12,Z=this.perm[ht+R+this.perm[ut+E+this.perm[Ft+T]]]%12,nt=this.perm[ht+C+this.perm[ut+D+this.perm[Ft+v]]]%12,Mt=this.perm[ht+1+this.perm[ut+1+this.perm[Ft+1]]]%12;let lt=.6-b*b-_*_-y*y;lt<0?i=0:(lt*=lt,i=lt*lt*this.dot3(this.grad3[Yt],b,_,y));let Lt=.6-S*S-I*I-U*U;Lt<0?o=0:(Lt*=Lt,o=Lt*Lt*this.dot3(this.grad3[Z],S,I,U));let Pt=.6-B*B-W*W-H*H;Pt<0?r=0:(Pt*=Pt,r=Pt*Pt*this.dot3(this.grad3[nt],B,W,H));let Ut=.6-$*$-X*X-it*it;return Ut<0?a=0:(Ut*=Ut,a=Ut*Ut*this.dot3(this.grad3[Mt],$,X,it)),32*(i+o+r+a)}noise4d(t,e,n,i){const o=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,p,g;const x=(t+e+n+i)*l,f=Math.floor(t+x),m=Math.floor(e+x),b=Math.floor(n+x),_=Math.floor(i+x),y=(f+m+b+_)*c,R=f-y,E=m-y,T=b-y,C=_-y,D=t-R,v=e-E,S=n-T,I=i-C,U=D>v?32:0,B=D>S?16:0,W=v>S?8:0,H=D>I?4:0,$=v>I?2:0,X=S>I?1:0,it=U+B+W+H+$+X,ht=r[it][0]>=3?1:0,ut=r[it][1]>=3?1:0,Ft=r[it][2]>=3?1:0,Yt=r[it][3]>=3?1:0,Z=r[it][0]>=2?1:0,nt=r[it][1]>=2?1:0,Mt=r[it][2]>=2?1:0,lt=r[it][3]>=2?1:0,Lt=r[it][0]>=1?1:0,Pt=r[it][1]>=1?1:0,Ut=r[it][2]>=1?1:0,Vt=r[it][3]>=1?1:0,tt=D-ht+c,L=v-ut+c,dt=S-Ft+c,ct=I-Yt+c,ot=D-Z+2*c,ft=v-nt+2*c,Rt=S-Mt+2*c,yt=I-lt+2*c,P=D-Lt+3*c,w=v-Pt+3*c,V=S-Ut+3*c,K=I-Vt+3*c,et=D-1+4*c,J=v-1+4*c,Et=S-1+4*c,pt=I-1+4*c,_t=f&255,Wt=m&255,rt=b&255,xt=_&255,Nt=a[_t+a[Wt+a[rt+a[xt]]]]%32,Ot=a[_t+ht+a[Wt+ut+a[rt+Ft+a[xt+Yt]]]]%32,Tt=a[_t+Z+a[Wt+nt+a[rt+Mt+a[xt+lt]]]]%32,$t=a[_t+Lt+a[Wt+Pt+a[rt+Ut+a[xt+Vt]]]]%32,zt=a[_t+1+a[Wt+1+a[rt+1+a[xt+1]]]]%32;let Kt=.6-D*D-v*v-S*S-I*I;Kt<0?h=0:(Kt*=Kt,h=Kt*Kt*this.dot4(o[Nt],D,v,S,I));let O=.6-tt*tt-L*L-dt*dt-ct*ct;O<0?u=0:(O*=O,u=O*O*this.dot4(o[Ot],tt,L,dt,ct));let vt=.6-ot*ot-ft*ft-Rt*Rt-yt*yt;vt<0?d=0:(vt*=vt,d=vt*vt*this.dot4(o[Tt],ot,ft,Rt,yt));let j=.6-P*P-w*w-V*V-K*K;j<0?p=0:(j*=j,p=j*j*this.dot4(o[$t],P,w,V,K));let Q=.6-et*et-J*J-Et*Et-pt*pt;return Q<0?g=0:(Q*=Q,g=Q*Q*this.dot4(o[zt],et,J,Et,pt)),27*(h+u+d+p+g)}}const qs={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new st},cameraProjectionMatrix:{value:new jt},cameraInverseProjectionMatrix:{value:new jt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Ys={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},js={uniforms:{tDiffuse:{value:null},resolution:{value:new st}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class vn extends Hi{constructor(t,e,n,i,o=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(o),this.generateRandomKernelRotations();const r=new ba;r.format=Jn,r.type=Kn,this.normalRenderTarget=new Fe(this.width,this.height,{minFilter:Ee,magFilter:Ee,type:qe,depthTexture:r}),this.ssaoRenderTarget=new Fe(this.width,this.height,{type:qe}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new le({defines:Object.assign({},qs.defines),uniforms:xn.clone(qs.uniforms),vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,blending:Le}),this.ssaoMaterial.defines.KERNEL_SIZE=o,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new ng,this.normalMaterial.blending=Le,this.blurMaterial=new le({defines:Object.assign({},js.defines),uniforms:xn.clone(js.uniforms),vertexShader:js.vertexShader,fragmentShader:js.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new le({defines:Object.assign({},Ys.defines),uniforms:xn.clone(Ys.uniforms),vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader,blending:Le}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new le({uniforms:xn.clone(ss.uniforms),vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:cc,blendDst:dr,blendEquation:gn,blendSrcAlpha:lc,blendDstAlpha:dr,blendEquationAlpha:gn}),this.fsQuad=new Pa(null),this.originalClearColor=new mt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case vn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Le,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case vn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Le,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case vn.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case vn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Le,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case vn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ac,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,i,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(o||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,n,i,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,o=e.clearAlpha||o,i!=null&&(t.setClearColor(i),t.setClearAlpha(o||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const i=new N;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let o=n/t;o=ie.lerp(.1,1,o*o),i.multiplyScalar(o),e.push(i)}}generateRandomKernelRotations(){const n=new Tv,i=4*4,o=new Float32Array(i);for(let r=0;r<i;r++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;o[r]=n.noise3d(a,l,c)}this.noiseTexture=new Nc(o,4,4,mo,tn),this.noiseTexture.wrapS=os,this.noiseTexture.wrapT=os,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const i=e.get(n);n.visible=i}),e.clear()}}vn.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Ev={uniforms:{tDiffuse:{value:null},uExposure:{value:1},uTime:{value:0},uVignette:{value:.3},uGrain:{value:.035},uResolution:{value:new st(1,1)},uWarm:{value:new mt(16773333)},uCool:{value:new mt(12179660)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uTime;
    uniform float uVignette;
    uniform float uGrain;
    uniform vec2 uResolution;
    uniform vec3 uWarm;
    uniform vec3 uCool;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7)) + uTime * 0.37) * 43758.5453123);
    }

    vec3 acesFilm(vec3 x) {
      float a = 2.51;
      float b = 0.03;
      float c = 2.43;
      float d = 0.59;
      float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    vec3 linearToSRGB(vec3 c) {
      vec3 lo = c * 12.92;
      vec3 hi = 1.055 * pow(max(c, vec3(0.0031308)), vec3(1.0 / 2.4)) - 0.055;
      return mix(lo, hi, step(vec3(0.0031308), c));
    }

    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb * uExposure;
      color = acesFilm(color);

      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color += uWarm * smoothstep(0.42, 1.0, luma) * 0.018;
      color -= uCool * (1.0 - smoothstep(0.0, 0.45, luma)) * 0.012;

      // Product-photo grade: a little more colour and tooth than a neutral
      // render so the jelly never fades into the paper backdrop.
      color = mix(vec3(luma), color, 1.16);
      color = (color - 0.5) * 1.055 + 0.5;
      color = max(color, vec3(0.0));

      float d = distance(vUv, vec2(0.5, 0.48));
      float vignette = smoothstep(0.28, 0.85, d * 1.24);
      color *= 1.0 - vignette * uVignette;

      float grain = hash(vUv * uResolution + vec2(uTime * 21.0, -uTime * 13.0)) - 0.5;
      color += grain * uGrain;

      color = linearToSRGB(color);
      color = clamp(color, 0.0, 1.0);
      gl_FragColor = vec4(color, 1.0);
    }
  `};class Av{constructor(t,e,n,i,o,r){M(this,"composer");M(this,"bloom");M(this,"finish");M(this,"ssao");if(this.composer=new bv(t),this.composer.setSize(i.width,i.height),this.composer.addPass(new Mv(e,n)),this.ssao=null,r&&o.ssao){const a=new vn(e,n,i.width/2,i.height/2);a.kernelRadius=6,a.minDistance=.0015,a.maxDistance=.06,a.output=vn.OUTPUT.Default,this.composer.addPass(a),this.ssao=a}this.bloom=new Ui(new st(i.width,i.height),.35,.7,.8),this.composer.addPass(this.bloom),this.finish=new jc(Ev),this.finish.material.uniforms.uResolution.value.set(i.width,i.height),this.composer.addPass(this.finish)}setPalette(t){this.finish.material.uniforms.uExposure.value=t.value.exposure*.96,this.bloom.strength=t.value.bloomStrength,this.bloom.radius=t.value.bloomRadius,this.bloom.threshold=t.definition.isDark?.68:.82,this.finish.material.uniforms.uWarm.value.copy(t.color.sun),this.finish.material.uniforms.uCool.value.copy(t.color.hemiSky),this.finish.material.uniforms.uVignette.value=t.definition.isDark?.46:.28,this.finish.material.uniforms.uGrain.value=t.definition.isDark?.026:.036}setTime(t){this.finish.material.uniforms.uTime.value=t}setSSAOEnabled(t){this.ssao&&(this.ssao.enabled=t)}get ssaoAvailable(){return!!this.ssao}resize(t,e){var n;this.composer.setSize(t,e),this.bloom.resolution.set(t,e),this.finish.material.uniforms.uResolution.value.set(t,e),(n=this.ssao)==null||n.setSize(t/2,e/2)}render(t){this.composer.render(t)}}class Rv{constructor(){M(this,"context",null);M(this,"master",null);M(this,"noise",null);M(this,"enabled",!1)}get isEnabled(){return this.enabled}setEnabled(t){this.enabled=t,t?this.start():this.stop()}async start(){try{if(this.context||this.createGraph(),!this.context||!this.master)return;this.context.state==="suspended"&&await this.context.resume();const t=this.context.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(this.master.gain.value,t),this.master.gain.linearRampToValueAtTime(.13,t+1.8)}catch{this.enabled=!1}}stop(){if(!this.context||!this.master)return;const t=this.context.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(this.master.gain.value,t),this.master.gain.linearRampToValueAtTime(1e-4,t+.8)}playBell(t=0){const e=this.context,n=this.master;if(!e||!n||!this.enabled)return;e.resume();const i=e.currentTime+.01,o=[523.25,587.33,659.25,783.99,880,987.77,1174.66][t%7];for(const[r,a]of[[1,.12],[2.01,.045],[2.98,.018]]){const l=e.createOscillator(),c=e.createGain();l.type="sine",l.frequency.setValueAtTime(o*r,i),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(a,i+.012),c.gain.exponentialRampToValueAtTime(1e-4,i+1.7),l.connect(c),c.connect(n),l.start(i),l.stop(i+1.8)}}playBoatSong(){const t=this.context,e=this.master;if(!t||!e||!this.enabled)return;t.resume();const n=t.currentTime+.03,i=[[220,.42],[261.63,.36],[293.66,.5],[329.63,.32],[392,.62],[349.23,.34],[329.63,.4],[293.66,.72]];let o=0;for(const[r,a]of i){const l=t.createOscillator(),c=t.createGain(),h=t.createOscillator(),u=t.createGain();l.type="triangle",l.frequency.setValueAtTime(r,n+o),l.frequency.exponentialRampToValueAtTime(r*.985,n+o+a),h.frequency.value=5.2,u.gain.value=2.2,h.connect(u),u.connect(l.frequency),c.gain.setValueAtTime(1e-4,n+o),c.gain.exponentialRampToValueAtTime(.055,n+o+.08),c.gain.exponentialRampToValueAtTime(1e-4,n+o+a),l.connect(c),c.connect(e),l.start(n+o),l.stop(n+o+a+.03),h.start(n+o),h.stop(n+o+a),o+=a+.06}}playSplash(){const t=this.context,e=this.master;if(!t||!e||!this.enabled)return;t.resume();const i=t.createBuffer(1,Math.ceil(t.sampleRate*.22),t.sampleRate),o=i.getChannelData(0);for(let l=0;l<o.length;l+=1){const c=l/o.length;o[l]=(Math.random()*2-1)*Math.exp(-c*6)*.16}const r=t.createBufferSource();r.buffer=i;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=1250,a.Q.value=.55,r.connect(a),a.connect(e),r.start()}playCreak(){const t=this.context,e=this.master;if(!t||!e||!this.enabled)return;t.resume();const n=t.currentTime,i=t.createOscillator(),o=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(105,n),i.frequency.exponentialRampToValueAtTime(67,n+.35),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.018,n+.04),o.gain.exponentialRampToValueAtTime(1e-4,n+.48);const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=420,i.connect(r),r.connect(o),o.connect(e),i.start(n),i.stop(n+.5)}createGraph(){const t=window.AudioContext||window.webkitAudioContext;if(!t)throw new Error("WebAudio unavailable");const e=new t;this.context=e;const n=e.createGain();n.gain.value=1e-4,n.connect(e.destination),this.master=n;const o=e.createBuffer(1,e.sampleRate*5,e.sampleRate),r=o.getChannelData(0);let a=0;for(let f=0;f<r.length;f+=1){const m=Math.random()*2-1;a=a*.986+m*.014,r[f]=a*7.5}const l=e.createBufferSource();l.buffer=o,l.loop=!0;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=640,c.Q.value=.38;const h=e.createBiquadFilter();h.type="highpass",h.frequency.value=90;const u=e.createGain();u.gain.value=.5;const d=e.createOscillator();d.frequency.value=.075;const p=e.createGain();p.gain.value=120,d.connect(p),p.connect(c.frequency);const g=e.createOscillator();g.type="sine",g.frequency.value=54;const x=e.createGain();x.gain.value=.012,l.connect(h),h.connect(c),c.connect(u),u.connect(n),g.connect(x),x.connect(n),l.start(),d.start(),g.start(),this.noise=l}dispose(){var t,e;try{(t=this.noise)==null||t.stop(),(e=this.context)==null||e.close()}catch{}this.noise=null,this.master=null,this.context=null}}const Cv="./assets/01_wuhou-BkbVuNKS.jpg",Pv="./assets/02_dixi-Coyl0r-y.jpg",Lv="./assets/03_hanlu_school-DYcHVG9J.jpg",Dv="./assets/04_hanlu_market-DENUlT1A.jpg",Iv="./assets/05_hanlu_oldstreet-BnNUTGs-.jpg",Uv="./assets/06_tunzhen-D8LrCooe.jpg",Fv="./assets/07_tunzhen_morning-Bh4qRBFq.jpg",Nv="./assets/08_shanji-IAik9_ol.jpg",Ov="./assets/09_era_road-DSJBz1Vu.jpg",kv="./assets/10_warm_morning-BMtnGd3F.jpg",Bv="./assets/11_liqiu_hall-KIGRTMCB.jpg",zv="./assets/12_oldstreet_series-DR4llxjw.jpg",Hv="./assets/13_biancheng-BDYSYIxy.jpg",Gv="./assets/14_biancheng2-8y867HJa.jpg",Vv="./assets/15_huangni-DGudN7O2.jpg",Wv="./assets/01_wuhou-k_x_G0hz.jpg",Xv="./assets/02_dixi-CP85a7zy.jpg",qv="./assets/03_hanlu_school-B7urcqCS.jpg",Yv="./assets/04_hanlu_market-jHUFE9vx.jpg",jv="./assets/05_hanlu_oldstreet-Db6EUzYq.jpg",$v="./assets/06_tunzhen-wynHOfM7.jpg",Zv="./assets/07_tunzhen_morning-DYdi_J_L.jpg",Kv="./assets/08_shanji-CCCX9RnJ.jpg",Jv="./assets/09_era_road-CklV8VMa.jpg",Qv="./assets/10_warm_morning-C2bWOr35.jpg",t_="./assets/11_liqiu_hall-BkYsYJSR.jpg",e_="./assets/12_oldstreet_series-CjnIPIr1.jpg",n_="./assets/13_biancheng-CRq6jTw0.jpg",i_="./assets/14_biancheng2-DEUv0QDQ.jpg",s_="./assets/15_huangni-CXH3hmq_.jpg",o_=Object.assign({"../assets/album/01_wuhou.jpg":Cv,"../assets/album/02_dixi.jpg":Pv,"../assets/album/03_hanlu_school.jpg":Lv,"../assets/album/04_hanlu_market.jpg":Dv,"../assets/album/05_hanlu_oldstreet.jpg":Iv,"../assets/album/06_tunzhen.jpg":Uv,"../assets/album/07_tunzhen_morning.jpg":Fv,"../assets/album/08_shanji.jpg":Nv,"../assets/album/09_era_road.jpg":Ov,"../assets/album/10_warm_morning.jpg":kv,"../assets/album/11_liqiu_hall.jpg":Bv,"../assets/album/12_oldstreet_series.jpg":zv,"../assets/album/13_biancheng.jpg":Hv,"../assets/album/14_biancheng2.jpg":Gv,"../assets/album/15_huangni.jpg":Vv}),r_=Object.assign({"../assets/album/thumbs/01_wuhou.jpg":Wv,"../assets/album/thumbs/02_dixi.jpg":Xv,"../assets/album/thumbs/03_hanlu_school.jpg":qv,"../assets/album/thumbs/04_hanlu_market.jpg":Yv,"../assets/album/thumbs/05_hanlu_oldstreet.jpg":jv,"../assets/album/thumbs/06_tunzhen.jpg":$v,"../assets/album/thumbs/07_tunzhen_morning.jpg":Zv,"../assets/album/thumbs/08_shanji.jpg":Kv,"../assets/album/thumbs/09_era_road.jpg":Jv,"../assets/album/thumbs/10_warm_morning.jpg":Qv,"../assets/album/thumbs/11_liqiu_hall.jpg":t_,"../assets/album/thumbs/12_oldstreet_series.jpg":e_,"../assets/album/thumbs/13_biancheng.jpg":n_,"../assets/album/thumbs/14_biancheng2.jpg":i_,"../assets/album/thumbs/15_huangni.jpg":s_}),a_=["01_wuhou.jpg","02_dixi.jpg","03_hanlu_school.jpg","04_hanlu_market.jpg","05_hanlu_oldstreet.jpg","06_tunzhen.jpg","07_tunzhen_morning.jpg","08_shanji.jpg","09_era_road.jpg","10_warm_morning.jpg","11_liqiu_hall.jpg","12_oldstreet_series.jpg","13_biancheng.jpg","14_biancheng2.jpg","15_huangni.jpg"],l_={"01_wuhou.jpg":"午后","02_dixi.jpg":"堤溪记事","03_hanlu_school.jpg":"寒露 - 放学后","04_hanlu_market.jpg":"寒露 - 新市场","05_hanlu_oldstreet.jpg":"寒露 - 老街旧事","06_tunzhen.jpg":"屯镇","07_tunzhen_morning.jpg":"屯镇的早晨","08_shanji.jpg":"山迹","09_era_road.jpg":"时代之光 - 湘西新路","10_warm_morning.jpg":"煦暖的早晨","11_liqiu_hall.jpg":"立秋 - 文昌阁礼堂","12_oldstreet_series.jpg":"老街旧事系列","13_biancheng.jpg":"边城新貌","14_biancheng2.jpg":"边城新貌 2","15_huangni.jpg":"黄泥田初照"},on=a_.flatMap((s,t)=>{const e=o_[`../assets/album/${s}`];return e?[{index:t,src:e,thumb:r_[`../assets/album/thumbs/${s}`]??e,title:l_[s],folio:String(t+1).padStart(2,"0")}]:[]}),c_="湘西画廊",h_="凤凰古城 · 十五帧",u_=280;function hr(s){return s.replace(/\s*-\s*/g," · ")}class d_{constructor(t={}){M(this,"label");M(this,"overlay");M(this,"closeButton");M(this,"dialog");M(this,"photo");M(this,"photoMat");M(this,"captionTitle");M(this,"captionFolio");M(this,"counter");M(this,"thumbs");M(this,"flip");M(this,"flipFront");M(this,"flipBack");M(this,"prevButton");M(this,"nextButton");M(this,"options");M(this,"current",0);M(this,"isOpenValue",!1);M(this,"turning",!1);M(this,"holdTimer",0);M(this,"holdPointer",null);M(this,"holdX",0);M(this,"holdY",0);M(this,"turnTimer",0);M(this,"thumbButtons",[]);M(this,"thumbsBuilt",!1);M(this,"previouslyFocused",null);M(this,"onLabelDown",t=>{if(!(t.button!==0||this.isOpenValue)){t.preventDefault(),t.stopPropagation(),this.clearHold(),this.holdPointer=t.pointerId,this.holdX=t.clientX,this.holdY=t.clientY;try{this.label.setPointerCapture(t.pointerId)}catch{}this.label.classList.add("is-holding"),this.holdTimer=window.setTimeout(()=>{this.holdTimer=0,this.label.classList.remove("is-holding"),this.open()},u_)}});M(this,"onLabelMove",t=>{this.holdPointer!==null&&Math.hypot(t.clientX-this.holdX,t.clientY-this.holdY)>7&&this.clearHold()});M(this,"onLabelUp",t=>{if(this.holdPointer!==null)try{this.label.releasePointerCapture(this.holdPointer)}catch{}t.type!=="lostpointercapture"&&t.preventDefault(),this.clearHold()});M(this,"onPageDown",t=>{t.button===0&&(this.pagePointer=t.pointerId,this.pageStartX=t.clientX,this.pageStartY=t.clientY)});M(this,"onPageUp",t=>{if(this.pagePointer!==t.pointerId||(this.pagePointer=null,this.turning))return;const e=t.target;if(e!=null&&e.closest("button"))return;const n=t.clientX-this.pageStartX,i=t.clientY-this.pageStartY;if(Math.abs(n)>42&&Math.abs(n)>Math.abs(i)*1.2){n<0?this.next():this.prev();return}if(Math.abs(n)<8&&Math.abs(i)<8){const o=this.overlay.querySelector(".album-page");if(!o)return;const r=o.getBoundingClientRect();t.clientX>r.left+r.width*.58?this.next():t.clientX<r.left+r.width*.42&&this.prev()}});M(this,"pagePointer",null);M(this,"pageStartX",0);M(this,"pageStartY",0);M(this,"onKeyDown",t=>{if(this.isOpenValue){if(t.stopPropagation(),t.code==="Escape"){t.preventDefault(),this.close();return}if(t.code==="ArrowRight"||t.code==="PageDown"){t.preventDefault(),this.next();return}if(t.code==="ArrowLeft"||t.code==="PageUp"){t.preventDefault(),this.prev();return}if(t.code==="Home"){t.preventDefault(),this.setPage(0,!0);return}t.code==="End"&&(t.preventDefault(),this.setPage(on.length-1,!0))}});this.options=t,this.label=document.createElement("button"),this.label.type="button",this.label.className="album-label",this.label.setAttribute("aria-label","按住打开湘西画廊"),this.label.innerHTML=`
      <span class="album-label-pin" aria-hidden="true"></span>
      <span class="album-label-face">
        <span class="album-label-seal" aria-hidden="true">湘</span>
        <span class="album-label-copy">
          <span class="album-label-kicker">凤凰 · 影像</span>
          <span class="album-label-title">湘西画廊</span>
        </span>
        <span class="album-label-hint">按住 0.3 秒</span>
      </span>
    `,this.overlay=document.createElement("div"),this.overlay.className="album-overlay",this.overlay.setAttribute("aria-hidden","true"),this.overlay.innerHTML=`
      <div class="album-scrim" data-album-close></div>
      <div class="album-dialog" role="dialog" aria-modal="true" aria-labelledby="albumHeading" tabindex="-1">
        <button type="button" class="album-close" aria-label="合上画册">×</button>
        <div class="album-book">
          <aside class="album-leaf">
            <div class="album-leaf-inner">
              <span class="album-kicker">凤凰古城 · 影像册</span>
              <h2 id="albumHeading">${c_}</h2>
              <p class="album-subtitle">${h_}</p>
              <div class="album-rule" aria-hidden="true"></div>
              <p class="album-note">一册十五帧。<br />按住吊脚楼上的木牌，翻开湘西的旧时光。</p>
              <div class="album-thumbs" aria-label="画册缩略图"></div>
              <div class="album-leaf-foot">
                <span class="album-seal" aria-hidden="true">沱</span>
                <span>二〇二六 · 秋</span>
              </div>
            </div>
          </aside>

          <section class="album-page" aria-label="画册页面">
            <div class="album-page-head">
              <span class="album-page-kicker">PLATE</span>
              <span class="album-caption-folio"></span>
            </div>
            <div class="album-page-mat">
              <div class="album-page-photo">
                <img class="album-photo" alt="" decoding="async" />
                <span class="album-photo-sheen" aria-hidden="true"></span>
              </div>
            </div>
            <div class="album-caption">
              <span class="album-caption-title"></span>
              <span class="album-caption-mark" aria-hidden="true">凤凰 · 沱江</span>
            </div>
            <button type="button" class="album-turn album-turn-prev" aria-label="上一页">‹</button>
            <button type="button" class="album-turn album-turn-next" aria-label="下一页">›</button>
            <div class="album-flip" aria-hidden="true">
              <div class="album-flip-face album-flip-front"></div>
              <div class="album-flip-face album-flip-back"></div>
            </div>
          </section>
        </div>

        <footer class="album-footer">
          <span class="album-footer-hint">← → 翻页 · Esc 合上</span>
          <span class="album-counter"></span>
          <div class="album-nav">
            <button type="button" class="album-nav-button album-prev" aria-label="上一页">上一页</button>
            <button type="button" class="album-nav-button album-next" aria-label="下一页">下一页</button>
          </div>
        </footer>
      </div>
    `,this.closeButton=this.overlay.querySelector(".album-close"),this.dialog=this.overlay.querySelector(".album-dialog"),this.photo=this.overlay.querySelector(".album-photo"),this.photoMat=this.overlay.querySelector(".album-page-photo"),this.captionTitle=this.overlay.querySelector(".album-caption-title"),this.captionFolio=this.overlay.querySelector(".album-caption-folio"),this.counter=this.overlay.querySelector(".album-counter"),this.thumbs=this.overlay.querySelector(".album-thumbs"),this.flip=this.overlay.querySelector(".album-flip"),this.flipFront=this.overlay.querySelector(".album-flip-front"),this.flipBack=this.overlay.querySelector(".album-flip-back"),this.prevButton=this.overlay.querySelector(".album-turn-prev"),this.nextButton=this.overlay.querySelector(".album-turn-next"),document.body.append(this.label,this.overlay),this.bindEvents()}get isOpen(){return this.isOpenValue}setAnchor(t,e,n){if(this.isOpenValue||!n){this.label.classList.remove("is-visible");return}this.label.style.left=`${t}px`,this.label.style.top=`${e}px`,this.label.classList.add("is-visible")}open(t=this.current){var e,n;this.isOpenValue||(this.isOpenValue=!0,this.previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,this.overlay.classList.add("is-open"),this.overlay.setAttribute("aria-hidden","false"),document.body.classList.add("album-open"),this.label.classList.remove("is-visible"),this.thumbsBuilt||(this.buildThumbs(),this.thumbsBuilt=!0),this.setPage(t,!1),requestAnimationFrame(()=>{this.overlay.classList.add("is-settled"),this.dialog.focus({preventScroll:!0})}),(n=(e=this.options).onOpen)==null||n.call(e))}close(){var t,e,n;this.isOpenValue&&(this.clearHold(),this.isOpenValue=!1,this.overlay.classList.remove("is-open","is-settled"),this.overlay.setAttribute("aria-hidden","true"),document.body.classList.remove("album-open"),this.resetFlip(),(t=this.previouslyFocused)==null||t.focus({preventScroll:!0}),this.previouslyFocused=null,(n=(e=this.options).onClose)==null||n.call(e))}next(){this.turn(1)}prev(){this.turn(-1)}setPage(t,e=!1){const n=on.length;if(n===0)return;this.current=(t%n+n)%n;const i=on[this.current];this.photoMat.classList.remove("is-loaded"),this.photo.src=i.src,this.photo.alt=`${hr(i.title)} · 凤凰古城`,this.captionTitle.textContent=hr(i.title),this.captionFolio.textContent=i.folio,this.counter.textContent=`${i.folio} / ${String(n).padStart(2,"0")}`,this.photoMat.classList.toggle("is-loaded",this.photo.complete),e&&(this.photoMat.classList.remove("is-page-in"),requestAnimationFrame(()=>this.photoMat.classList.add("is-page-in"))),this.thumbButtons.forEach((o,r)=>{o.classList.toggle("is-active",r===this.current),o.setAttribute("aria-current",r===this.current?"true":"false")}),this.prefetch(this.current+1),this.prefetch(this.current-1)}turn(t){if(!this.isOpenValue||this.turning||on.length<2)return;const e=on.length,n=((this.current+t)%e+e)%e,i=on[this.current],o=on[n];this.turning=!0,this.overlay.classList.add("is-turning"),this.prevButton.disabled=!0,this.nextButton.disabled=!0;const r=()=>{if(l)return;if(l=!0,!this.isOpenValue){this.resetFlip();return}this.flipFront.style.backgroundImage=`url("${t===1?i.src:o.src}")`,this.flipBack.style.backgroundImage=`url("${t===1?o.src:i.src}")`,this.setPage(n,!1),this.flip.classList.add("is-active",t===1?"is-next":"is-prev");const c=()=>{window.clearTimeout(this.turnTimer),this.flip.classList.remove("is-active","is-next","is-prev"),this.overlay.classList.remove("is-turning"),this.turning=!1,this.prevButton.disabled=!1,this.nextButton.disabled=!1,this.setPage(n,!0)};this.turnTimer=window.setTimeout(c,800)},a=new Image;let l=!1;a.onload=r,a.onerror=r,a.src=o.src,a.complete&&r()}resetFlip(){window.clearTimeout(this.turnTimer),this.flip.classList.remove("is-active","is-next","is-prev"),this.overlay.classList.remove("is-turning"),this.turning=!1,this.prevButton.disabled=!1,this.nextButton.disabled=!1}prefetch(t){const e=on.length;if(e===0)return;const n=on[(t%e+e)%e],i=new Image;i.src=n.src}buildThumbs(){if(!this.thumbsBuilt)for(const t of on){const e=document.createElement("button");e.type="button",e.className="album-thumb",e.setAttribute("aria-label",`第 ${t.folio} 页：${hr(t.title)}`);const n=document.createElement("img");n.src=t.thumb,n.alt="",n.loading="lazy",e.append(n),e.addEventListener("click",i=>{i.stopPropagation(),this.turning||this.setPage(t.index,!0)}),this.thumbs.append(e),this.thumbButtons.push(e)}}bindEvents(){this.label.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation()}),this.label.addEventListener("contextmenu",t=>t.preventDefault()),this.label.addEventListener("pointerdown",this.onLabelDown),this.label.addEventListener("pointermove",this.onLabelMove),this.label.addEventListener("pointerup",this.onLabelUp),this.label.addEventListener("pointercancel",this.onLabelUp),this.label.addEventListener("lostpointercapture",this.onLabelUp),this.label.addEventListener("keydown",t=>{t.code!=="Enter"&&t.code!=="Space"||(t.preventDefault(),t.stopPropagation(),this.open())}),this.closeButton.addEventListener("click",t=>{t.stopPropagation(),this.close()}),this.overlay.addEventListener("click",t=>{if(t.target===this.overlay){this.close();return}t.target instanceof HTMLElement&&t.target.hasAttribute("data-album-close")&&this.close()}),this.prevButton.addEventListener("click",t=>{t.stopPropagation(),this.prev()}),this.nextButton.addEventListener("click",t=>{t.stopPropagation(),this.next()}),this.overlay.querySelector(".album-prev").addEventListener("click",t=>{t.stopPropagation(),this.prev()}),this.overlay.querySelector(".album-next").addEventListener("click",t=>{t.stopPropagation(),this.next()}),this.photo.addEventListener("load",()=>this.photoMat.classList.add("is-loaded")),this.photo.addEventListener("error",()=>this.photoMat.classList.remove("is-loaded")),this.dialog.addEventListener("pointerdown",this.onPageDown),this.dialog.addEventListener("pointerup",this.onPageUp),document.addEventListener("keydown",this.onKeyDown)}clearHold(){window.clearTimeout(this.holdTimer),this.holdTimer=0,this.holdPointer=null,this.label.classList.remove("is-holding")}}const f_="./assets/01-stilt-CZckHSLJ.jpg",p_="./assets/02-bridge-DFvj9Fk5.jpg",m_="./assets/03-stepping-DI3AEd_E.jpg",g_="./assets/04-pagoda-tWJmmTJ5.jpg",v_="./assets/01-stilt-YiL4gET-.jpg",__="./assets/02-bridge-CHP_S7VN.jpg",x_="./assets/03-stepping-DISqeDAH.jpg",y_="./assets/04-pagoda-DLyWIMIu.jpg",S_=Object.assign({"../assets/postcards/01-stilt.jpg":f_,"../assets/postcards/02-bridge.jpg":p_,"../assets/postcards/03-stepping.jpg":m_,"../assets/postcards/04-pagoda.jpg":g_}),b_=Object.assign({"../assets/postcards/thumbs/01-stilt.jpg":v_,"../assets/postcards/thumbs/02-bridge.jpg":__,"../assets/postcards/thumbs/03-stepping.jpg":x_,"../assets/postcards/thumbs/04-pagoda.jpg":y_}),M_=[{id:"stilt",file:"01-stilt.jpg",title:"吊脚楼",roman:"STILT HOUSES",poem:"吊脚楼头听夜雨，沱江水畔点渔灯"},{id:"bridge",file:"02-bridge.jpg",title:"虹桥",roman:"HONG BRIDGE",poem:"虹桥卧波连两岸，灯火临水照千家"},{id:"stepping",file:"03-stepping.jpg",title:"跳岩",roman:"STEPPING STONES",poem:"跳岩踏碎一江雾，人在青山梦里行"},{id:"pagoda",file:"04-pagoda.jpg",title:"万名塔",roman:"WANMING PAGODA",poem:"万名塔影浮江水，古巷书声入翠微"}],Ki=M_.flatMap(s=>{const t=S_[`../assets/postcards/${s.file}`];return t?[{id:s.id,src:t,thumb:b_[`../assets/postcards/thumbs/${s.file}`]??t,title:s.title,roman:s.roman,poem:s.poem}]:[]}),uo="#2f3c34",w_="#f3e9d5",fo="#1d3029",T_="#b58a55";function $c(s,t,e){const n=t.replace(/\r/g,"").split(`
`),i=[];for(const o of n){if(o.length===0){i.push("");continue}let r="";for(const a of o){const l=r+a;r&&s.measureText(l).width>e?(i.push(r),r=a):r=l}r&&i.push(r)}return i}function Zc(s,t,e,n,i){s.save(),s.globalAlpha=.055;for(let o=0;o<140;o+=1){const r=t+Math.random()*n,a=e+Math.random()*i;s.fillStyle=o%3===0?"#7d6947":"#ffffff",s.fillRect(r,a,1,1)}s.restore()}function E_(s,t,e,n,i,o=T_){s.save(),s.strokeStyle="rgba(48, 71, 58, 0.56)",s.lineWidth=2,s.strokeRect(t,e,n,i),s.strokeStyle="rgba(174, 129, 76, 0.55)",s.lineWidth=1,s.strokeRect(t+8,e+8,n-16,i-16);const r=62;for(let a=t+36;a<t+n-22;a+=r)for(const l of[e+16,e+i-16])s.beginPath(),s.moveTo(a,l-5),s.lineTo(a+5,l),s.lineTo(a,l+5),s.lineTo(a-5,l),s.closePath(),s.fillStyle="rgba(157, 76, 55, 0.58)",s.fill();s.restore()}function Kc(s,t,e,n,i,o){if(t.scene){s.drawImage(t.scene,e,n,i,o);return}const r=s.createLinearGradient(0,n,0,n+o);r.addColorStop(0,"#d3ded3"),r.addColorStop(.6,"#efe1c8"),r.addColorStop(1,"#bfa37e"),s.fillStyle=r,s.fillRect(e,n,i,o),s.fillStyle="rgba(57, 100, 84, 0.6)",s.beginPath(),s.moveTo(e,n+o*.72),s.quadraticCurveTo(e+i*.2,n+o*.3,e+i*.42,n+o*.68),s.quadraticCurveTo(e+i*.65,n+o*.35,e+i,n+o*.7),s.lineTo(e+i,n+o),s.lineTo(e,n+o),s.closePath(),s.fill(),s.fillStyle="#22382e";for(let a=0;a<6;a+=1){const l=e+i*(.08+a*.16),c=n+o*(.7+a%2*.03);s.fillRect(l,c,i*.1,o*.1),s.beginPath(),s.moveTo(l-i*.03,c),s.lineTo(l+i*.05,c-o*.06),s.lineTo(l+i*.13,c),s.fill()}}function Jc(s,t,e,n,i,o){s.save(),s.fillStyle="#f2e6d0",s.fillRect(t,e,n,i),s.strokeStyle="rgba(93, 72, 45, 0.55)",s.lineWidth=1,s.setLineDash([3,3]),s.strokeRect(t+5,e+5,n-10,i-10),s.setLineDash([]),s.fillStyle="#8c4d3b",s.font='500 15px "Noto Serif SC", "STSong", serif',s.textAlign="center",s.fillText("凤凰四景",t+n*.5,e+i*.23);const r=t+n*.5,a=e+i*.61;for(let l=0;l<5;l+=1){const c=n*(.3-l*.04),h=a-l*i*.075;s.beginPath(),s.moveTo(r-c,h),s.lineTo(r,h-i*.06),s.lineTo(r+c,h),s.closePath(),s.fillStyle="#8c4d3b",s.fill()}s.fillRect(r-3,a-i*.38,6,i*.34),s.fillStyle=fo,s.font='400 11px "Geist", "Noto Sans SC", sans-serif',s.fillText(o,t+n*.5,e+i*.76),s.fillStyle="rgba(74, 57, 38, 0.55)",s.font='400 9px "Geist", "Noto Sans SC", sans-serif',s.fillText("80 分",t+n*.75,e+i*.88),s.restore()}function Qc(s,t,e,n){s.save(),s.strokeStyle="rgba(68, 91, 75, 0.48)",s.lineWidth=2,s.beginPath(),s.arc(t,e,n,0,Math.PI*2),s.stroke(),s.beginPath(),s.arc(t,e,n*.76,0,Math.PI*2),s.stroke(),s.fillStyle="rgba(68, 91, 75, 0.6)",s.font='400 11px "Geist", "Noto Sans SC", sans-serif',s.textAlign="center",s.fillText("凤凰 · 古城邮局",t,e-3);const i=new Date;s.font='400 9px "Geist", "Noto Sans SC", sans-serif',s.fillText(`${i.getFullYear()}.${String(i.getMonth()+1).padStart(2,"0")}.${String(i.getDate()).padStart(2,"0")}`,t,e+12);for(let o=-2;o<=2;o+=1)s.beginPath(),s.moveTo(t+n*.7,e+o*4),s.quadraticCurveTo(t+n*1.12,e+o*4-4,t+n*1.45,e+o*4),s.strokeStyle="rgba(68, 91, 75, 0.3)",s.lineWidth=1,s.stroke();s.restore()}function Jl(s,t,e,n,i="驿"){s.save(),s.translate(t,e),s.rotate(-.035),s.strokeStyle="rgba(164, 75, 56, 0.9)",s.lineWidth=3,s.strokeRect(0,0,n,n),s.fillStyle="rgba(164, 75, 56, 0.92)",s.font=`500 ${Math.round(n*.5)}px "Noto Serif SC", "STSong", serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(i,n*.5,n*.54),s.restore()}function th(s,t,e,n,i,o,r=0){if(!t.photo||t.photoWidth<=0||t.photoHeight<=0)return;s.save(),s.translate(e+i/2,n+o/2),s.rotate(r),s.fillStyle="#fbf4e5",s.fillRect(-i/2-8,-o/2-8,i+16,o+16),s.strokeStyle="rgba(83, 64, 40, 0.25)",s.strokeRect(-i/2-8,-o/2-8,i+16,o+16),s.beginPath(),s.rect(-i/2,-o/2,i,o),s.clip();const a=t.photoWidth/t.photoHeight,l=i/o;let c=0,h=0,u=t.photoWidth,d=t.photoHeight;a>l?(u=t.photoHeight*l,c=(t.photoWidth-u)*.5):(d=t.photoWidth/l,h=(t.photoHeight-d)*.45),s.drawImage(t.photo,c,h,u,d,-i/2,-o/2,i,o),s.fillStyle="rgba(203, 158, 103, 0.06)",s.fillRect(-i/2,-o/2,i,o),s.restore()}function A_(s){const n=document.createElement("canvas");n.width=1600,n.height=1067;const i=n.getContext("2d"),o=i.createLinearGradient(0,0,1600,1067);o.addColorStop(0,"#f5ecd9"),o.addColorStop(.55,"#efe2ca"),o.addColorStop(1,"#e1ceb0"),i.fillStyle=o,i.fillRect(0,0,1600,1067),Zc(i,0,0,1600,1067),E_(i,24,24,1552,1019),i.fillStyle=fo,i.font='500 25px "Noto Serif SC", "STSong", serif',i.textAlign="left",i.fillText("凤凰四景 · 明信片",84,96),i.fillStyle="rgba(75, 58, 38, 0.52)",i.font='400 11px "Geist", "Noto Sans SC", sans-serif',i.fillText("POSTCARD · REVERSE",84,122),i.fillStyle="rgba(69, 52, 34, 0.62)",i.font='400 14px "Noto Serif SC", "STSong", serif',i.textAlign="right",i.fillText(s.sceneTitle,1504,96),i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.fillText(s.sceneRoman,1504,120),Jc(i,1342,74,152,188,s.sceneTitle),Qc(i,1300,128,57),i.fillStyle="rgba(75, 56, 36, 0.48)",i.font='400 11px "Geist", "Noto Sans SC", sans-serif',i.textAlign="left",i.fillText("写给你",92,220),i.fillStyle=uo,i.font='500 26px "Noto Serif SC", "STSong", serif',i.fillText(s.recipient||"远方的你",160,221);const r=!!s.photo,a=r?920:1020;i.strokeStyle="rgba(94, 108, 86, 0.14)",i.lineWidth=1;for(let u=292;u<720;u+=45)i.beginPath(),i.moveTo(92,u),i.lineTo(1130,u),i.stroke();i.save(),i.globalAlpha=.04,i.fillStyle=fo,i.font='500 160px "Noto Serif SC", "STSong", serif',i.textAlign="right",i.fillText("凤凰",1470,917),i.restore(),i.fillStyle="rgba(51, 63, 52, 0.92)",i.font='400 31px "Noto Serif SC", "STSong", serif';const l=$c(i,s.message,a).slice(0,10);let c=284;for(const u of l)i.fillText(u,92,c),c+=45;if(r)th(i,s,1180,300,270,210,.025),i.fillStyle="rgba(74, 57, 38, 0.45)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText("随信附一张照片",1315,538);else if(s.scene){i.save(),i.fillStyle="#fbf4e4",i.fillRect(1180,290,298,380),i.strokeStyle="rgba(86, 65, 40, 0.3)",i.strokeRect(1180,290,298,380),i.beginPath(),i.rect(1190,300,278,360),i.clip(),i.drawImage(s.scene,0,0,s.scene.naturalWidth*.62,s.scene.naturalHeight,1190,300,278,360),i.restore(),i.fillStyle="rgba(74, 57, 38, 0.48)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText(`凤凰四景 · ${s.sceneTitle}`,1190+278/2,683),i.save(),i.fillStyle="rgba(63, 85, 70, 0.52)",i.font='400 12px "Noto Serif SC", "STSong", serif',i.textAlign="center";const x=s.scenePoem;for(let f=0;f<x.length;f+=1)i.fillText(x[f],1190+278/2,724+f*19);i.restore()}i.strokeStyle="rgba(74, 100, 82, 0.24)",i.lineWidth=1;for(let u=0;u<3;u+=1)i.beginPath(),i.moveTo(92,780+u*52),i.lineTo(1060,780+u*52),i.stroke();i.fillStyle="rgba(75, 56, 36, 0.42)",i.font='400 10px "Geist", "Noto Sans SC", sans-serif',i.textAlign="left",i.fillText("寄给",92,805),i.fillText(s.recipient||"远方的你",132,805);const h=new Date;return i.textAlign="right",i.fillStyle="rgba(72, 55, 35, 0.48)",i.font='400 11px "Noto Serif SC", "STSong", serif',i.fillText(`二〇二六年 ${h.getMonth()+1} 月 ${h.getDate()} 日`,1504,882),i.fillStyle=uo,i.font='500 18px "Noto Serif SC", "STSong", serif',i.fillText(`—— ${s.sender||"旅人"}`,1504,914),Jl(i,94,850,52),Jl(i,153,850,52,"凤凰"),i.fillStyle="rgba(57, 73, 59, 0.34)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText("凤凰古城 · 邮局 · 把此刻寄给未来",1600*.5,1047),n}function R_(s){const n=document.createElement("canvas");n.width=1600,n.height=1067;const i=n.getContext("2d");return i.fillStyle="#efe4cf",i.fillRect(0,0,1600,1067),s.scene?i.drawImage(s.scene,0,0,1600,1067):Kc(i,s,20,20,1560,1027),n}function C_(s,t,e,n,i,o){s.save(),s.fillStyle="#fcf6e7",s.fillRect(e-7,n-7,i+14,o+14),s.strokeStyle="rgba(89, 69, 43, 0.3)",s.strokeRect(e-7,n-7,i+14,o+14),s.beginPath(),s.rect(e,n,i,o),s.clip(),t.scene?s.drawImage(t.scene,e,n,i,o):Kc(s,t,e,n,i,o),s.restore(),s.fillStyle="rgba(58, 70, 54, 0.6)",s.font='400 9px "Geist", "Noto Sans SC", sans-serif',s.textAlign="center",s.fillText(t.sceneTitle,e+i*.5,n+o+21)}function P_(s){const n=document.createElement("canvas");n.width=1240,n.height=1750;const i=n.getContext("2d"),o=i.createLinearGradient(0,0,1240,1750);o.addColorStop(0,"#32463a"),o.addColorStop(.52,"#20342c"),o.addColorStop(1,"#18271f"),i.fillStyle=o,i.fillRect(0,0,1240,1750),i.save(),i.globalAlpha=.16,i.strokeStyle="#d8b77f",i.lineWidth=1,i.strokeRect(28,28,1184,1694),i.strokeRect(40,40,1160,1670);for(let y=60;y<1190;y+=54)for(const R of[34,1716])i.beginPath(),i.moveTo(y,R-4),i.lineTo(y+4,R),i.lineTo(y,R+4),i.lineTo(y-4,R),i.fillStyle="#d8b77f",i.fill();i.restore();const r=1060,a=1510;i.save(),i.translate(1240*.5,1750*.5),i.rotate(-.008);const l=-r*.5,c=-a*.5;i.shadowColor="rgba(5, 13, 10, 0.58)",i.shadowBlur=30,i.shadowOffsetY=16,i.fillStyle=w_,i.fillRect(l,c,r,a),i.shadowColor="transparent",i.restore(),i.save(),i.translate(1240*.5,1750*.5),i.rotate(-.008);const h=-r*.5,u=-a*.5,d=i.createLinearGradient(h,u,h+r,u+a);d.addColorStop(0,"#f8efdd"),d.addColorStop(.58,"#f1e5cf"),d.addColorStop(1,"#e6d4b5"),i.fillStyle=d,i.fillRect(h,u,r,a),Zc(i,h,u,r,a),i.fillStyle="#f8efdd",i.beginPath(),i.moveTo(h,u+12);for(let y=0;y<r;y+=24)i.lineTo(h+y,u+12-(Math.sin(y*.19)+1)*4);i.lineTo(h+r,u+12),i.lineTo(h+r,u),i.lineTo(h,u),i.closePath(),i.fill(),i.strokeStyle="rgba(83, 106, 86, 0.34)",i.lineWidth=2,i.strokeRect(h+24,u+24,r-48,a-48),i.strokeStyle="rgba(174, 126, 72, 0.52)",i.lineWidth=1,i.strokeRect(h+33,u+33,r-66,a-66),i.save(),i.globalAlpha=.055,i.fillStyle=fo,i.font='500 190px "Noto Serif SC", "STSong", serif',i.textAlign="center",i.fillText("凤凰",h+r*.58,u+a-165),i.restore(),i.strokeStyle="rgba(103, 78, 48, 0.07)",i.lineWidth=1;for(const y of[.34,.68])i.beginPath(),i.moveTo(h+50,u+a*y),i.lineTo(h+r-50,u+a*y),i.stroke();i.fillStyle="rgba(55, 73, 58, 0.56)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="left",i.fillText("凤凰古城 · 邮局",h+64,u+62),i.fillStyle="rgba(79, 60, 38, 0.52)",i.font='400 11px "Noto Serif SC", "STSong", serif',i.textAlign="right";const p=new Date;i.fillText(`${p.getFullYear()} 年 ${p.getMonth()+1} 月 ${p.getDate()} 日`,h+r-64,u+62),i.fillStyle="#263b30",i.font='500 66px "Noto Serif SC", "STSong", serif',i.textAlign="center";const g="见字如面";for(let y=0;y<g.length;y+=1)i.fillText(g[y],h+116,u+186+y*76);if(s.photo)th(i,s,h+760,u+92,270,215,.028),i.fillStyle="rgba(77, 57, 35, 0.44)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText("随信一张照片",h+895,u+334);else{i.save(),i.fillStyle="rgba(66, 88, 73, 0.42)",i.font='400 15px "Noto Serif SC", "STSong", serif',i.textAlign="center";const y=s.scenePoem;for(let R=0;R<y.length;R+=1)i.fillText(y[R],h+858,u+154+R*22);i.restore()}i.fillStyle="rgba(77, 58, 37, 0.52)",i.font='400 11px "Noto Serif SC", "STSong", serif',i.textAlign="left",i.fillText("写给",h+300,u+235),i.fillStyle=uo,i.font='500 22px "Noto Serif SC", "STSong", serif',i.fillText(s.recipient||"远方的你",h+350,u+236),i.fillStyle="rgba(46, 60, 48, 0.9)",i.font='400 29px "Noto Serif SC", "STSong", serif';const x=$c(i,s.message,710).slice(0,13);let f=u+302;for(const y of x)i.fillText(y,h+300,f),f+=46;i.strokeStyle="rgba(156, 75, 57, 0.5)",i.lineWidth=1;for(let y=0;y<3;y+=1)i.beginPath(),i.moveTo(h+52,u+360+y*30),i.lineTo(h+70,u+352+y*30),i.stroke();i.save(),i.fillStyle="rgba(61, 84, 69, 0.46)",i.font='400 13px "Noto Serif SC", "STSong", serif',i.textAlign="center";const m=s.scenePoem;for(let y=0;y<m.length;y+=1)i.fillText(m[y],h+r-58,u+620+y*19);i.restore(),i.fillStyle="rgba(77, 58, 37, 0.55)",i.font='400 13px "Noto Serif SC", "STSong", serif',i.textAlign="right",i.fillText("见字如面，山高水长。",h+r-70,u+a-530),i.fillStyle=uo,i.font='500 19px "Noto Serif SC", "STSong", serif',i.fillText(`—— ${s.sender||"旅人"}`,h+r-70,u+a-496),s.scene&&(i.save(),i.translate(h+270,u+a-232),i.rotate(-.022),C_(i,s,-180,-120,360,240),i.restore()),Jc(i,h+r-246,u+a-300,138,172,s.sceneTitle),Qc(i,h+r-288,u+a-370,51),i.save(),i.translate(h+760,u+a-150);const b=i.createRadialGradient(-10,-12,8,0,0,46);b.addColorStop(0,"#b9654d"),b.addColorStop(.7,"#8e3e30"),b.addColorStop(1,"#67271f"),i.fillStyle=b,i.beginPath();const _=24;for(let y=0;y<=_;y+=1){const R=y/_*Math.PI*2,E=42+Math.sin(R*5)*3.2,T=Math.cos(R)*E,C=Math.sin(R)*E;y===0?i.moveTo(T,C):i.lineTo(T,C)}return i.closePath(),i.shadowColor="rgba(70, 30, 20, 0.35)",i.shadowBlur=8,i.fill(),i.shadowColor="transparent",i.strokeStyle="rgba(69, 26, 20, 0.5)",i.lineWidth=2,i.stroke(),i.fillStyle="rgba(255, 222, 183, 0.76)",i.font='500 24px "Noto Serif SC", "STSong", serif',i.textAlign="center",i.textBaseline="middle",i.fillText("驿",0,1),i.restore(),i.fillStyle="rgba(55, 73, 58, 0.34)",i.font='400 8px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText("凤凰古城 · 慢递邮局 · 把此刻寄给未来",h+r*.5,u+a-34),i.restore(),i.fillStyle="rgba(241, 220, 180, 0.42)",i.font='400 9px "Geist", "Noto Sans SC", sans-serif',i.textAlign="center",i.fillText("A LETTER FROM FENGHUANG · OPEN SLOWLY",1240*.5,1702),n}async function L_(s){return s.format==="postcard"?{front:R_(s),back:A_(s)}:{back:P_(s)}}class D_{constructor(t={}){M(this,"label");M(this,"overlay");M(this,"dialog");M(this,"closeButton");M(this,"panelCompose");M(this,"panelEnvelope");M(this,"panelRead");M(this,"recipientInput");M(this,"senderInput");M(this,"messageInput");M(this,"counter");M(this,"photoInput");M(this,"cameraInput");M(this,"photoDrop");M(this,"photoPreview");M(this,"photoEmpty");M(this,"photoRemove");M(this,"error");M(this,"formatButtons");M(this,"sceneBlock");M(this,"sceneGrid");M(this,"submitButton");M(this,"envelope");M(this,"envelopeRecipient");M(this,"envelopeSender");M(this,"openButton");M(this,"backButton");M(this,"readImage");M(this,"readFrame");M(this,"readKicker");M(this,"readHint");M(this,"flipButton");M(this,"saveLink");M(this,"rewriteButton");M(this,"options");M(this,"sceneCache",new Map);M(this,"isOpenValue",!1);M(this,"hoveredScene",-1);M(this,"format","postcard");M(this,"selectedScene",Ki[0]);M(this,"photo",null);M(this,"photoWidth",0);M(this,"photoHeight",0);M(this,"photoUrl","");M(this,"frontUrl","");M(this,"backUrl","");M(this,"isPostcard",!0);M(this,"showingBack",!1);M(this,"openingTimer",0);M(this,"previouslyFocused",null);M(this,"onKeyDown",t=>{this.isOpenValue&&(t.stopPropagation(),t.code==="Escape"&&(t.preventDefault(),this.close()))});this.options=t,this.label=document.createElement("button"),this.label.type="button",this.label.className="album-label selfie-label post-label",this.label.setAttribute("aria-label","点击打开凤凰邮局"),this.label.innerHTML=`
      <span class="album-label-pin" aria-hidden="true"></span>
      <span class="album-label-face">
        <span class="album-label-seal" aria-hidden="true">邮</span>
        <span class="album-label-copy">
          <span class="album-label-kicker">凤凰 · 驿寄</span>
          <span class="album-label-title">邮局</span>
        </span>
        <span class="album-label-hint">点击进入</span>
      </span>
    `,this.overlay=document.createElement("div"),this.overlay.className="selfie-overlay post-overlay",this.overlay.setAttribute("aria-hidden","true"),this.overlay.innerHTML=`
      <div class="album-scrim selfie-scrim" data-post-close></div>
      <div class="selfie-dialog post-dialog" role="dialog" aria-modal="true" aria-labelledby="postHeading" tabindex="-1">
        <button type="button" class="album-close selfie-close post-close" aria-label="合上邮局">×</button>
        <div class="selfie-book">
          <aside class="selfie-intro post-intro">
            <div class="selfie-intro-inner">
              <span class="selfie-kicker">凤凰 · 驿寄</span>
              <h2 id="postHeading">邮局</h2>
              <p class="selfie-subtitle">把一句话，寄给凤凰的慢时光</p>
              <div class="selfie-rule" aria-hidden="true"></div>
              <p class="selfie-copy">挑一张凤凰四景，写几行字。我们会把它做成一张古镇明信片或信笺，封进信封，等你拆开。</p>
              <ol class="selfie-steps">
                <li><span>01</span>写一封信</li>
                <li><span>02</span>封存</li>
                <li><span>03</span>拆读</li>
              </ol>
              <p class="selfie-privacy">照片与文字只在本机浏览器处理，不会上传服务器。</p>
              <div class="selfie-intro-foot">
                <span class="album-seal" aria-hidden="true">邮</span>
                <span>慢递 · 湘西</span>
              </div>
            </div>
          </aside>

          <section class="selfie-stage post-stage">
            <div class="selfie-stage-head">
              <span>古镇邮局 · SLOW MAIL</span>
              <span class="selfie-stage-status">PRIVATE</span>
            </div>

            <div class="selfie-panel post-compose-panel" data-panel="compose">
              <div class="post-compose">
                <div class="post-photo-row">
                  <div class="post-photo-drop" tabindex="0" role="button" aria-label="上传一张照片">
                    <img class="post-photo-preview" alt="附在信里的照片" hidden />
                    <span class="post-photo-empty" aria-hidden="true">
                      <span class="post-photo-plus">＋</span>
                      <span>附一张照片</span>
                      <small>可选 · JPG / PNG</small>
                    </span>
                  </div>
                  <div class="post-photo-copy">
                    <p>让照片和字一起寄出。</p>
                    <div class="post-photo-actions">
                      <button type="button" class="selfie-secondary post-photo-choose">选择照片</button>
                      <button type="button" class="selfie-secondary post-photo-camera">手机拍照</button>
                      <button type="button" class="selfie-link post-photo-remove" hidden>移除照片</button>
                    </div>
                    <small>不附照片也可以；明信片用凤凰四景，信笺会附一张小景。</small>
                  </div>
                  <input class="post-photo-input" type="file" accept="image/*" hidden />
                  <input class="post-photo-camera-input" type="file" accept="image/*" capture="user" hidden />
                </div>

                <div class="post-fields">
                  <label class="post-field">
                    <span>写给</span>
                    <input class="post-recipient" type="text" maxlength="24" placeholder="自己 / 某个想念的人" />
                  </label>
                  <label class="post-field">
                    <span>落款</span>
                    <input class="post-sender" type="text" maxlength="24" placeholder="你的名字 / 旅人" />
                  </label>
                </div>

                <label class="post-message-label" for="postMessage">
                  <span>信里的话</span>
                  <span class="post-counter">0 / 280</span>
                </label>
                <textarea
                  id="postMessage"
                  class="post-message post-textarea"
                  maxlength="280"
                  rows="5"
                  placeholder="写下想对自己，或对某个人说的话……"
                ></textarea>

                <div class="post-format-row">
                  <span>做成</span>
                  <button type="button" class="post-format is-active" data-format="postcard" aria-pressed="true">明信片</button>
                  <button type="button" class="post-format" data-format="letter" aria-pressed="false">信笺</button>
                  <small>明信片横版 · 信笺竖版</small>
                </div>

                <div class="post-scene-block">
                  <div class="post-scene-head">
                    <span>凤凰四景 · 明信片画面</span>
                    <small>选自「明信片」文件夹</small>
                  </div>
                  <div class="post-scene-grid" role="group" aria-label="选择明信片画面"></div>
                </div>

                <button type="button" class="selfie-primary post-submit">封存这封信</button>
                <p class="selfie-error post-error" role="alert"></p>
              </div>
            </div>

            <div class="selfie-panel post-envelope-panel" data-panel="envelope" hidden>
              <div class="post-envelope-scene">
                <div class="post-envelope">
                  <div class="post-envelope-back"></div>
                  <div class="post-letter-peek">
                    <span>见字如面</span>
                    <small class="post-peek-message"></small>
                  </div>
                  <div class="post-envelope-front">
                    <div class="post-envelope-flap"></div>
                    <div class="post-envelope-seal" aria-hidden="true">驿</div>
                    <div class="post-envelope-address">
                      <span>寄给</span>
                      <strong class="post-envelope-recipient"></strong>
                      <small class="post-envelope-sender"></small>
                    </div>
                    <div class="post-envelope-stamp" aria-hidden="true">
                      <span>凤凰</span>
                      <small>80分</small>
                    </div>
                    <div class="post-envelope-postmark" aria-hidden="true"></div>
                  </div>
                  <div class="post-letter-slide">
                    <span>凤凰古城 · 邮局</span>
                    <strong>见字如面</strong>
                    <small>点击信封拆开</small>
                  </div>
                </div>
              </div>
              <div class="post-envelope-copy">
                <p>封好了。点击信封，慢慢拆开。</p>
                <div class="post-envelope-actions">
                  <button type="button" class="selfie-primary post-open">拆开信</button>
                  <button type="button" class="selfie-link post-back">再改一改</button>
                </div>
              </div>
            </div>

            <div class="selfie-panel post-read-panel" data-panel="read" hidden>
              <div class="post-read-frame">
                <img class="post-read-image" alt="生成的古镇明信片/信笺" />
              </div>
              <div class="post-read-copy">
                <div>
                  <span class="post-read-kicker">已封存 · 见字如面</span>
                  <p class="post-read-hint">这是你的凤凰来信，可以保存，也可以再写一封。</p>
                </div>
                <div class="post-read-actions">
                  <button type="button" class="selfie-secondary post-flip" hidden>翻到背面</button>
                  <a class="selfie-primary post-save" download="凤凰邮局-来信.png">保存这封信</a>
                  <button type="button" class="selfie-secondary post-rewrite">再写一封</button>
                  <button type="button" class="selfie-link post-close-link">合上</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer class="selfie-footer">
          <span>一封信 · 一张照片 · 一段凤凰慢时光</span>
          <span class="selfie-footer-mark">本机生成 · 照片不出浏览器</span>
        </footer>
      </div>
    `,this.dialog=this.overlay.querySelector(".post-dialog"),this.closeButton=this.overlay.querySelector(".post-close"),this.panelCompose=this.overlay.querySelector('[data-panel="compose"]'),this.panelEnvelope=this.overlay.querySelector('[data-panel="envelope"]'),this.panelRead=this.overlay.querySelector('[data-panel="read"]'),this.recipientInput=this.overlay.querySelector(".post-recipient"),this.senderInput=this.overlay.querySelector(".post-sender"),this.messageInput=this.overlay.querySelector(".post-message"),this.counter=this.overlay.querySelector(".post-counter"),this.photoInput=this.overlay.querySelector(".post-photo-input"),this.cameraInput=this.overlay.querySelector(".post-photo-camera-input"),this.photoDrop=this.overlay.querySelector(".post-photo-drop"),this.photoPreview=this.overlay.querySelector(".post-photo-preview"),this.photoEmpty=this.overlay.querySelector(".post-photo-empty"),this.photoRemove=this.overlay.querySelector(".post-photo-remove"),this.error=this.overlay.querySelector(".post-error"),this.formatButtons=[...this.overlay.querySelectorAll(".post-format")],this.sceneBlock=this.overlay.querySelector(".post-scene-block"),this.sceneGrid=this.overlay.querySelector(".post-scene-grid"),this.submitButton=this.overlay.querySelector(".post-submit"),this.envelope=this.overlay.querySelector(".post-envelope"),this.envelopeRecipient=this.overlay.querySelector(".post-envelope-recipient"),this.envelopeSender=this.overlay.querySelector(".post-envelope-sender"),this.openButton=this.overlay.querySelector(".post-open"),this.backButton=this.overlay.querySelector(".post-back"),this.readImage=this.overlay.querySelector(".post-read-image"),this.readFrame=this.overlay.querySelector(".post-read-frame"),this.readKicker=this.overlay.querySelector(".post-read-kicker"),this.readHint=this.overlay.querySelector(".post-read-hint"),this.flipButton=this.overlay.querySelector(".post-flip"),this.saveLink=this.overlay.querySelector(".post-save"),this.rewriteButton=this.overlay.querySelector(".post-rewrite"),this.buildScenePicker(),this.selectScene(Ki[0]),this.updateFormatVisibility(),document.body.append(this.label,this.overlay),this.bindEvents()}get isOpen(){return this.isOpenValue}buildScenePicker(){this.sceneGrid.innerHTML=Ki.map((t,e)=>`
        <button type="button" class="post-scene" data-scene="${t.id}" aria-pressed="${e===0?"true":"false"}">
          <img src="${t.thumb}" alt="${t.title}" loading="lazy" />
          <span>${t.title}</span>
          <small>${t.roman}</small>
        </button>
      `).join("");for(const t of this.sceneGrid.querySelectorAll(".post-scene"))t.addEventListener("click",e=>{e.stopPropagation();const n=Ki.find(i=>i.id===t.dataset.scene);n&&this.selectScene(n)});this.bindSceneHover()}bindSceneHover(){typeof window.matchMedia=="function"&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(this.sceneGrid.addEventListener("pointerover",t=>{const e=t.target,n=e instanceof Element?e.closest(".post-scene"):null;if(!n||!this.sceneGrid.contains(n))return;const i=[...this.sceneGrid.querySelectorAll(".post-scene")];this.setSceneHover(i.indexOf(n))}),this.sceneGrid.addEventListener("pointerleave",()=>this.setSceneHover(-1)),this.sceneGrid.addEventListener("focusin",t=>{const e=t.target,n=e instanceof Element?e.closest(".post-scene"):null;if(!n)return;const i=[...this.sceneGrid.querySelectorAll(".post-scene")];this.setSceneHover(i.indexOf(n))}),this.sceneGrid.addEventListener("focusout",t=>{const e=t.relatedTarget;(!(e instanceof Node)||!this.sceneGrid.contains(e))&&this.setSceneHover(-1)}))}setSceneHover(t){if(t===this.hoveredScene)return;this.hoveredScene=t,[...this.sceneGrid.querySelectorAll(".post-scene")].forEach((n,i)=>{const o=i===t;let r=0;if(t>=0&&!o){const a=Math.abs(i-t);r=(i<t?-1:1)*(8+a*3)}n.classList.toggle("is-raised",o),n.style.setProperty("--scene-shift",`${r}px`),n.style.setProperty("--scene-lift",o?"-9px":"0px"),n.style.setProperty("--scene-scale",o?"1.07":"1"),n.style.zIndex=o?"6":""})}selectScene(t){this.selectedScene=t;for(const e of this.sceneGrid.querySelectorAll(".post-scene")){const n=e.dataset.scene===t.id;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",n?"true":"false")}}updateFormatVisibility(){this.sceneBlock.hidden=this.format!=="postcard",this.format!=="postcard"&&this.setSceneHover(-1)}async loadSceneImage(t){return this.sceneCache.has(t)?this.sceneCache.get(t)??null:new Promise(e=>{const n=new Image;n.decoding="async",n.onload=()=>{this.sceneCache.set(t,n),e(n)},n.onerror=()=>e(null),n.src=t})}setAnchor(t,e,n){if(this.isOpenValue||!n){this.label.classList.remove("is-visible");return}this.label.style.left=`${t}px`,this.label.style.top=`${e}px`,this.label.classList.add("is-visible")}open(){var t,e;this.isOpenValue||(this.isOpenValue=!0,this.previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,this.overlay.classList.add("is-open","is-settled"),this.overlay.setAttribute("aria-hidden","false"),document.body.classList.add("selfie-open"),this.label.classList.remove("is-visible"),this.setSceneHover(-1),this.showPanel("compose"),this.error.textContent="",this.updateCounter(),requestAnimationFrame(()=>this.dialog.focus({preventScroll:!0})),(e=(t=this.options).onOpen)==null||e.call(t))}close(){var t,e,n;this.isOpenValue&&(this.isOpenValue=!1,window.clearTimeout(this.openingTimer),this.overlay.classList.remove("is-open","is-settled"),this.overlay.setAttribute("aria-hidden","true"),document.body.classList.remove("selfie-open"),this.envelope.classList.remove("is-opening"),this.resetAll(),this.showPanel("compose"),(t=this.previouslyFocused)==null||t.focus({preventScroll:!0}),this.previouslyFocused=null,(n=(e=this.options).onClose)==null||n.call(e))}bindEvents(){var e,n,i;this.label.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.open()}),this.label.addEventListener("pointerdown",o=>o.stopPropagation()),this.closeButton.addEventListener("click",o=>{o.stopPropagation(),this.close()}),this.overlay.addEventListener("click",o=>{if(o.target===this.overlay){this.close();return}o.target instanceof HTMLElement&&o.target.hasAttribute("data-post-close")&&this.close()}),(e=this.overlay.querySelector(".post-close-link"))==null||e.addEventListener("click",()=>this.close());const t=this.overlay.querySelector(".post-photo-choose");t==null||t.addEventListener("click",o=>{o.stopPropagation(),this.photoInput.click()}),(n=this.overlay.querySelector(".post-photo-camera"))==null||n.addEventListener("click",o=>{o.stopPropagation(),this.cameraInput.click()}),this.photoInput.addEventListener("change",()=>{var r;const o=(r=this.photoInput.files)==null?void 0:r[0];this.photoInput.value="",o&&this.loadPhoto(o)}),this.cameraInput.addEventListener("change",()=>{var r;const o=(r=this.cameraInput.files)==null?void 0:r[0];this.cameraInput.value="",o&&this.loadPhoto(o)}),this.photoDrop.addEventListener("click",()=>this.photoInput.click()),this.photoDrop.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.photoInput.click())}),this.photoDrop.addEventListener("dragover",o=>{o.preventDefault(),this.photoDrop.classList.add("is-dragging")}),this.photoDrop.addEventListener("dragleave",()=>this.photoDrop.classList.remove("is-dragging")),this.photoDrop.addEventListener("drop",o=>{var a,l;o.preventDefault(),this.photoDrop.classList.remove("is-dragging");const r=(l=(a=o.dataTransfer)==null?void 0:a.files)==null?void 0:l[0];r&&this.loadPhoto(r)}),this.photoRemove.addEventListener("click",o=>{o.stopPropagation(),this.clearPhoto()}),this.messageInput.addEventListener("input",()=>this.updateCounter());for(const o of this.formatButtons)o.addEventListener("click",r=>{r.stopPropagation();const a=o.dataset.format;this.setFormat(a)});this.submitButton.addEventListener("click",o=>{o.stopPropagation(),this.submit()}),this.openButton.addEventListener("click",o=>{o.stopPropagation(),this.openEnvelope()}),this.envelope.addEventListener("click",()=>{this.envelope.classList.contains("is-opening")||this.openEnvelope()}),this.backButton.addEventListener("click",o=>{o.stopPropagation(),window.clearTimeout(this.openingTimer),this.envelope.classList.remove("is-opening"),this.showPanel("compose")}),this.flipButton.addEventListener("click",o=>{o.stopPropagation(),this.setReadSide(!this.showingBack)}),this.rewriteButton.addEventListener("click",o=>{o.stopPropagation(),this.resetAll(),this.showPanel("compose")}),(i=this.overlay.querySelector(".post-save"))==null||i.addEventListener("click",o=>o.stopPropagation()),document.addEventListener("keydown",this.onKeyDown)}async loadPhoto(t){if(this.error.textContent="",!t.type.startsWith("image/")){this.error.textContent="请选择 JPG、PNG 或 WebP 图片。";return}if(t.size>20*1024*1024){this.error.textContent="图片超过 20 MB，请换一张小一点的照片。";return}try{const e=await this.readPhotoFile(t);this.clearPhoto(),this.photo=e.source,this.photoWidth=e.width,this.photoHeight=e.height,this.photoUrl=URL.createObjectURL(t),this.photoPreview.src=this.photoUrl,this.photoPreview.hidden=!1,this.photoEmpty.hidden=!0,this.photoRemove.hidden=!1}catch(e){console.error(e),this.error.textContent="这张照片无法读取，请换一张 JPG 或 PNG。"}}readPhotoFile(t){return new Promise((e,n)=>{if(typeof createImageBitmap=="function"){createImageBitmap(t,{imageOrientation:"from-image"}).then(i=>e({source:i,width:i.width,height:i.height})).catch(()=>this.readImageElement(t).then(e,n));return}this.readImageElement(t).then(e,n)})}readImageElement(t){return new Promise((e,n)=>{const i=URL.createObjectURL(t),o=new Image;o.onload=()=>{URL.revokeObjectURL(i),e({source:o,width:o.naturalWidth,height:o.naturalHeight})},o.onerror=()=>{URL.revokeObjectURL(i),n(new Error("image decode failed"))},o.src=i})}clearPhoto(){this.photo&&typeof this.photo.close=="function"&&this.photo.close(),this.photo=null,this.photoWidth=0,this.photoHeight=0,this.photoUrl&&URL.revokeObjectURL(this.photoUrl),this.photoUrl="",this.photoPreview.removeAttribute("src"),this.photoPreview.hidden=!0,this.photoEmpty.hidden=!1,this.photoRemove.hidden=!0}setFormat(t){this.format=t;for(const e of this.formatButtons){const n=e.dataset.format===t;e.classList.toggle("is-active",n),e.setAttribute("aria-pressed",n?"true":"false")}this.updateFormatVisibility()}updateCounter(){this.counter.textContent=`${this.messageInput.value.length} / 280`}async submit(){const t=this.messageInput.value.trim();if(!t){this.error.textContent="还没写呢。哪怕只写一句“见字如面”也好。",this.messageInput.focus();return}this.error.textContent="",this.submitButton.disabled=!0;const e=this.recipientInput.value.trim()||"远方的你",n=this.senderInput.value.trim()||"旅人";try{const i=await this.loadSceneImage(this.selectedScene.src),o=await L_({photo:this.photo,photoWidth:this.photoWidth,photoHeight:this.photoHeight,recipient:e,sender:n,message:t,format:this.format,scene:i,sceneTitle:this.selectedScene.title,sceneRoman:this.selectedScene.roman,scenePoem:this.selectedScene.poem}),r=await this.canvasBlob(o.back),a=o.front?await this.canvasBlob(o.front):null;this.releaseResultUrls(),this.backUrl=URL.createObjectURL(r),this.frontUrl=a?URL.createObjectURL(a):"",this.isPostcard=this.format==="postcard",this.setReadSide(!1),this.envelopeRecipient.textContent=e,this.envelopeSender.textContent=`—— ${n}`;const l=this.overlay.querySelector(".post-peek-message");l&&(l.textContent=t.slice(0,42)),this.envelope.classList.remove("is-opening"),this.showPanel("envelope"),this.openButton.focus({preventScroll:!0})}catch(i){console.error(i),this.error.textContent="信纸没有铺好，请再试一次。"}finally{this.submitButton.disabled=!1}}canvasBlob(t){return new Promise((e,n)=>{t.toBlob(i=>i?e(i):n(new Error("toBlob failed")),"image/png")})}setReadSide(t){const e=this.isPostcard?t:!0;this.showingBack=e,this.readFrame.classList.toggle("is-landscape",this.isPostcard),this.isPostcard?(this.readImage.src=e?this.backUrl:this.frontUrl,this.readKicker.textContent=e?"明信片 · 背面":"明信片 · 正面",this.readHint.textContent=e?"这是写在明信片背面的信。翻回正面，可以再看一眼凤凰四景。":"信封已拆开，这是明信片正面；翻到背面读信。",this.flipButton.hidden=!1,this.flipButton.textContent=e?"翻到正面":"翻到背面",this.saveLink.href=e?this.backUrl:this.frontUrl,this.saveLink.download=e?"凤凰邮局-明信片-背面.png":"凤凰邮局-明信片-正面.png",this.saveLink.textContent=e?"保存背面":"保存正面"):(this.readImage.src=this.backUrl,this.readKicker.textContent="信笺 · 见字如面",this.readHint.textContent="这是你的凤凰信笺，可以保存，也可以再写一封。",this.flipButton.hidden=!0,this.saveLink.href=this.backUrl,this.saveLink.download="凤凰邮局-信笺.png",this.saveLink.textContent="保存这封信")}releaseResultUrls(){this.frontUrl&&URL.revokeObjectURL(this.frontUrl),this.backUrl&&URL.revokeObjectURL(this.backUrl),this.frontUrl="",this.backUrl=""}openEnvelope(){this.envelope.classList.contains("is-opening")||(this.envelope.classList.add("is-opening"),window.clearTimeout(this.openingTimer),this.openingTimer=window.setTimeout(()=>{this.showPanel("read"),this.readImage.hidden=!1},1120))}showPanel(t){this.panelCompose.hidden=t!=="compose",this.panelEnvelope.hidden=t!=="envelope",this.panelRead.hidden=t!=="read"}resetAll(){window.clearTimeout(this.openingTimer),this.envelope.classList.remove("is-opening"),this.clearPhoto(),this.messageInput.value="",this.recipientInput.value="",this.senderInput.value="",this.error.textContent="",this.submitButton.disabled=!1,this.releaseResultUrls(),this.readImage.removeAttribute("src"),this.readFrame.classList.remove("is-landscape"),this.saveLink.removeAttribute("href"),this.flipButton.hidden=!0,this.readKicker.textContent="已封存 · 见字如面",this.readHint.textContent="这是你的凤凰来信，可以保存，也可以再写一封。",this.saveLink.textContent="保存这封信",this.updateCounter(),this.setFormat("postcard"),this.selectScene(Ki[0])}}const Ql="fenghuang-mountain-shop-v1",tc=["食品","茶饮","手作","农产"],I_=[{id:"all",label:"全部"},{id:"食品",label:"食品"},{id:"茶饮",label:"茶饮"},{id:"手作",label:"手作"},{id:"农产",label:"农产"},{id:"mine",label:"我的上架"}],ur=[{id:"ginger",title:"凤凰姜糖",category:"食品",price:18,unit:"袋",origin:"山江镇",description:"苗家古法熬制，姜香清辣，回甘不腻。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"非遗手作",art:"姜",image:null},{id:"bacon",title:"湘西腊肉",category:"食品",price:68,unit:"份",origin:"腊尔山",description:"高山土猪，松木慢熏，切薄片蒸饭最香。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"助农",art:"腊",image:null},{id:"tea",title:"凤凰雪茶",category:"茶饮",price:58,unit:"罐",origin:"禾库镇",description:"高山云雾春茶，汤色清亮，栗香回甘。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"当季",art:"茶",image:null},{id:"oil",title:"山茶油",category:"农产",price:45,unit:"瓶",origin:"山江镇",description:"霜降后采摘，物理压榨，清香不腻。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"助农",art:"油",image:null},{id:"sachet",title:"苗绣香囊",category:"手作",price:36,unit:"只",origin:"禾库镇",description:"绣娘手工缝制，一针一线都是山里的颜色。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"非遗手作",art:"绣",image:null},{id:"orange",title:"当季椪柑",category:"农产",price:28,unit:"箱",origin:"阿拉营镇",description:"山地日照足，现摘现发，酸甜多汁。",contact:"凰栖山物 · 店内自提 / 私信预订",badge:"助农",art:"橘",image:null}];function Re(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ec(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function nc(s){let t=0;for(const e of s)t=(t+e.charCodeAt(0))%6;return t}class U_{constructor(t={}){M(this,"label");M(this,"overlay");M(this,"dialog");M(this,"closeButton");M(this,"listPanel");M(this,"formPanel");M(this,"detailPanel");M(this,"grid");M(this,"empty");M(this,"count");M(this,"tabs");M(this,"addButton");M(this,"form");M(this,"formError");M(this,"imageInput");M(this,"imagePreview");M(this,"imageEmpty");M(this,"imageRemove");M(this,"detailBody");M(this,"toast");M(this,"options");M(this,"products",[]);M(this,"mine",[]);M(this,"filter","all");M(this,"pendingImage",null);M(this,"activeDetail",null);M(this,"isOpenValue",!1);M(this,"toastTimer",0);M(this,"previouslyFocused",null);M(this,"onKeyDown",t=>{this.isOpenValue&&t.code==="Escape"&&(t.preventDefault(),!this.formPanel.hidden||!this.detailPanel.hidden?this.showList():this.close())});this.options=t,this.label=document.createElement("button"),this.label.type="button",this.label.className="album-label shop-label",this.label.setAttribute("aria-label","点击打开凰栖山物"),this.label.innerHTML=`
      <span class="album-label-pin" aria-hidden="true"></span>
      <span class="album-label-face">
        <span class="album-label-seal" aria-hidden="true">凰</span>
        <span class="album-label-copy">
          <span class="album-label-kicker">凤凰 · 山物</span>
          <span class="album-label-title">凰栖山物</span>
        </span>
        <span class="album-label-hint">点击进入</span>
      </span>
    `,this.overlay=document.createElement("div"),this.overlay.className="selfie-overlay shop-overlay",this.overlay.setAttribute("aria-hidden","true"),this.overlay.innerHTML=`
      <div class="album-scrim selfie-scrim shop-scrim" data-shop-close></div>
      <div class="selfie-dialog shop-dialog" role="dialog" aria-modal="true" aria-labelledby="shopHeading" tabindex="-1">
        <button type="button" class="album-close selfie-close shop-close" aria-label="合上凰栖山物">×</button>
        <div class="selfie-book">
          <aside class="selfie-intro shop-intro">
            <div class="selfie-intro-inner">
              <span class="selfie-kicker">凤凰 · 山物</span>
              <h2 id="shopHeading">凰栖山物</h2>
              <p class="selfie-subtitle">把山里的好东西，带回家</p>
              <div class="selfie-rule" aria-hidden="true"></div>
              <p class="selfie-copy">从山江镇的姜糖，到腊尔山的腊肉；从绣娘的针脚，到当季刚摘下的果子。这里收着凤凰山野的味道，也给山民一个被看见的摊位。</p>
              <ol class="selfie-steps">
                <li><span>01</span>逛山物</li>
                <li><span>02</span>看产地</li>
                <li><span>03</span>上架</li>
              </ol>
              <p class="selfie-privacy">上架信息只保存在本机浏览器，不会上传服务器；不接入在线支付。</p>
              <div class="selfie-intro-foot">
                <span class="album-seal" aria-hidden="true">凰</span>
                <span>山民直供 · 湘西</span>
              </div>
            </div>
          </aside>

          <section class="selfie-stage shop-stage">
            <div class="selfie-stage-head">
              <span>凰栖山物 · LOCAL MARKET</span>
              <span class="selfie-stage-status">山民直供</span>
            </div>

            <div class="shop-panel shop-list-panel" data-shop-panel="list">
              <div class="shop-toolbar">
                <div class="shop-tabs" role="tablist" aria-label="山物分类"></div>
                <button type="button" class="shop-add">＋ 上架我的山物</button>
              </div>
              <div class="shop-summary">
                <span class="shop-count">6 件山物</span>
                <span>本机展示 · 线下预订</span>
              </div>
              <div class="shop-grid"></div>
              <p class="shop-empty" hidden>这个分类还没有山物。</p>
            </div>

            <form class="shop-panel shop-form-panel" data-shop-panel="form" hidden novalidate>
              <div class="shop-subhead">
                <button type="button" class="shop-back shop-form-back">← 返回山物</button>
                <span>上架我的山物</span>
              </div>
              <div class="shop-form-grid">
                <label class="shop-field">
                  <span>产品名称</span>
                  <input name="title" type="text" maxlength="28" placeholder="例如：高山土蜂蜜" required />
                </label>
                <label class="shop-field">
                  <span>类别</span>
                  <select name="category">
                    ${tc.map(e=>`<option value="${e}">${e}</option>`).join("")}
                  </select>
                </label>
                <label class="shop-field">
                  <span>价格</span>
                  <input name="price" type="number" min="0" max="99999" step="0.1" placeholder="36" required />
                </label>
                <label class="shop-field">
                  <span>单位</span>
                  <input name="unit" type="text" maxlength="8" placeholder="瓶 / 盒 / 袋" />
                </label>
                <label class="shop-field">
                  <span>产地 / 村寨</span>
                  <input name="origin" type="text" maxlength="24" placeholder="山江镇" />
                </label>
                <label class="shop-field">
                  <span>预订方式</span>
                  <input name="contact" type="text" maxlength="40" placeholder="微信 / 电话 / 店内自提" />
                </label>
                <label class="shop-check shop-field-full">
                  <input name="aid" type="checkbox" />
                  <span>标为助农产品</span>
                </label>
                <label class="shop-field shop-field-full">
                  <span>产品介绍</span>
                  <textarea name="description" rows="3" maxlength="240" placeholder="它从哪里来，怎么吃、怎么用，为什么值得带走……" required></textarea>
                </label>
                <div class="shop-field shop-field-full shop-image-field">
                  <span>产品照片 <small>可选</small></span>
                  <div class="shop-image-row">
                    <div class="shop-image-drop" tabindex="0" role="button" aria-label="上传产品照片">
                      <img class="shop-image-preview" alt="产品照片预览" hidden />
                      <span class="shop-image-empty">＋ 上传一张照片</span>
                    </div>
                    <button type="button" class="selfie-link shop-image-remove" hidden>移除照片</button>
                  </div>
                  <input class="shop-image-input" type="file" accept="image/*" hidden />
                </div>
              </div>
              <div class="shop-form-actions">
                <button type="submit" class="selfie-primary shop-submit">发布上架</button>
                <button type="button" class="selfie-secondary shop-form-cancel">取消</button>
              </div>
              <p class="selfie-error shop-form-error" role="alert"></p>
              <p class="shop-form-note">发布后保存在本机浏览器，可在“我的上架”中查看或下架。</p>
            </form>

            <div class="shop-panel shop-detail-panel" data-shop-panel="detail" hidden>
              <div class="shop-subhead">
                <button type="button" class="shop-back shop-detail-back">← 返回山物</button>
                <span>山物详情</span>
              </div>
              <div class="shop-detail-body"></div>
            </div>
          </section>
        </div>
        <footer class="selfie-footer">
          <span>山野有物 · 手作有温 · 助农有路</span>
          <span class="selfie-footer-mark">本机上架 · 不接支付</span>
        </footer>
        <div class="shop-toast" role="status" aria-live="polite"></div>
      </div>
    `,this.dialog=this.overlay.querySelector(".shop-dialog"),this.closeButton=this.overlay.querySelector(".shop-close"),this.listPanel=this.overlay.querySelector('[data-shop-panel="list"]'),this.formPanel=this.overlay.querySelector('[data-shop-panel="form"]'),this.detailPanel=this.overlay.querySelector('[data-shop-panel="detail"]'),this.grid=this.overlay.querySelector(".shop-grid"),this.empty=this.overlay.querySelector(".shop-empty"),this.count=this.overlay.querySelector(".shop-count"),this.tabs=[],this.addButton=this.overlay.querySelector(".shop-add"),this.form=this.formPanel,this.formError=this.overlay.querySelector(".shop-form-error"),this.imageInput=this.overlay.querySelector(".shop-image-input"),this.imagePreview=this.overlay.querySelector(".shop-image-preview"),this.imageEmpty=this.overlay.querySelector(".shop-image-empty"),this.imageRemove=this.overlay.querySelector(".shop-image-remove"),this.detailBody=this.overlay.querySelector(".shop-detail-body"),this.toast=this.overlay.querySelector(".shop-toast"),this.mine=this.loadMine(),this.products=[...this.mine,...ur],this.buildTabs(),this.bindEvents(),this.render(),document.body.append(this.label,this.overlay)}get isOpen(){return this.isOpenValue}setAnchor(t,e,n){if(this.isOpenValue||!n){this.label.classList.remove("is-visible");return}this.label.style.left=`${t}px`,this.label.style.top=`${e}px`,this.label.classList.add("is-visible")}open(){var t,e;this.isOpenValue||(this.isOpenValue=!0,this.previouslyFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,this.overlay.classList.add("is-open","is-settled"),this.overlay.setAttribute("aria-hidden","false"),document.body.classList.add("shop-open"),this.label.classList.remove("is-visible"),this.showList(),this.formError.textContent="",requestAnimationFrame(()=>this.dialog.focus({preventScroll:!0})),(e=(t=this.options).onOpen)==null||e.call(t))}close(){var t,e,n;this.isOpenValue&&(this.isOpenValue=!1,this.overlay.classList.remove("is-open","is-settled"),this.overlay.setAttribute("aria-hidden","true"),document.body.classList.remove("shop-open"),this.hideToast(),this.showList(),(t=this.previouslyFocused)==null||t.focus({preventScroll:!0}),this.previouslyFocused=null,(n=(e=this.options).onClose)==null||n.call(e))}buildTabs(){const t=this.overlay.querySelector(".shop-tabs");t.innerHTML=I_.map(e=>`<button type="button" class="shop-tab${e.id==="all"?" is-active":""}" data-filter="${e.id}" role="tab" aria-selected="${e.id==="all"}">${e.label}</button>`).join(""),this.tabs.push(...t.querySelectorAll(".shop-tab"));for(const e of this.tabs)e.addEventListener("click",n=>{n.stopPropagation(),this.filter=e.dataset.filter??"all";for(const i of this.tabs){const o=i===e;i.classList.toggle("is-active",o),i.setAttribute("aria-selected",o?"true":"false")}this.render()})}bindEvents(){var e,n,i;this.label.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.open()}),this.label.addEventListener("pointerdown",o=>o.stopPropagation()),this.closeButton.addEventListener("click",o=>{o.stopPropagation(),this.close()}),this.overlay.addEventListener("click",o=>{if(o.target===this.overlay){this.close();return}o.target instanceof HTMLElement&&o.target.hasAttribute("data-shop-close")&&this.close()}),this.addButton.addEventListener("click",()=>this.showForm()),(e=this.overlay.querySelector(".shop-form-back"))==null||e.addEventListener("click",()=>this.showList()),(n=this.overlay.querySelector(".shop-form-cancel"))==null||n.addEventListener("click",()=>this.showList()),(i=this.overlay.querySelector(".shop-detail-back"))==null||i.addEventListener("click",()=>this.showList()),this.grid.addEventListener("click",o=>{const r=o.target;if(!(r instanceof Element))return;const a=r.closest("[data-shop-action]");if(!a)return;const l=a.dataset.id;if(!l)return;const c=this.products.find(h=>h.id===l);c&&(a.dataset.shopAction==="view"&&this.openDetail(c),a.dataset.shopAction==="delete"&&this.deleteProduct(l))}),this.detailBody.addEventListener("click",o=>{const r=o.target;if(!(r instanceof Element))return;const a=r.closest("[data-shop-action]");if(!a)return;const l=this.activeDetail;l&&(a.dataset.shopAction==="back"&&this.showList(),a.dataset.shopAction==="delete"&&this.deleteProduct(l.id),a.dataset.shopAction==="contact"&&this.copyText(l.contact,"预订方式已复制"))}),this.imageInput.addEventListener("change",()=>{var r;const o=(r=this.imageInput.files)==null?void 0:r[0];this.imageInput.value="",o&&this.loadProductImage(o)});const t=this.overlay.querySelector(".shop-image-drop");t.addEventListener("click",()=>this.imageInput.click()),t.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.imageInput.click())}),this.imageRemove.addEventListener("click",o=>{o.stopPropagation(),this.pendingImage=null,this.imagePreview.removeAttribute("src"),this.imagePreview.hidden=!0,this.imageEmpty.hidden=!1,this.imageRemove.hidden=!0}),this.form.addEventListener("submit",o=>{o.preventDefault(),this.submitForm()}),document.addEventListener("keydown",this.onKeyDown)}async loadProductImage(t){if(this.formError.textContent="",!t.type.startsWith("image/")){this.formError.textContent="请选择 JPG、PNG 或 WebP 产品照片。";return}if(t.size>12*1024*1024){this.formError.textContent="图片超过 12 MB，请换一张小一点的照片。";return}try{const e=await createImageBitmap(t,{imageOrientation:"from-image"}),i=Math.min(1,720/Math.max(e.width,e.height)),o=document.createElement("canvas");o.width=Math.max(1,Math.round(e.width*i)),o.height=Math.max(1,Math.round(e.height*i)),o.getContext("2d").drawImage(e,0,0,o.width,o.height),e.close(),this.pendingImage=o.toDataURL("image/jpeg",.82),this.imagePreview.src=this.pendingImage,this.imagePreview.hidden=!1,this.imageEmpty.hidden=!0,this.imageRemove.hidden=!1}catch(e){console.error(e),this.formError.textContent="这张图片无法读取，请换一张 JPG 或 PNG。"}}showList(){this.listPanel.hidden=!1,this.formPanel.hidden=!0,this.detailPanel.hidden=!0,this.activeDetail=null,this.render()}showForm(){this.listPanel.hidden=!0,this.formPanel.hidden=!1,this.detailPanel.hidden=!0,this.activeDetail=null,this.form.reset(),this.pendingImage=null,this.imagePreview.removeAttribute("src"),this.imagePreview.hidden=!0,this.imageEmpty.hidden=!1,this.imageRemove.hidden=!0,this.formError.textContent="";const t=this.form.querySelector('[name="title"]');requestAnimationFrame(()=>t==null?void 0:t.focus({preventScroll:!0}))}submitForm(){const t=new FormData(this.form),e=String(t.get("title")??"").trim(),n=Number(t.get("price")),i=String(t.get("description")??"").trim();if(!e){this.formError.textContent="先给山物起个名字。";return}if(!Number.isFinite(n)||n<0){this.formError.textContent="请填写一个有效的价格。";return}if(!i){this.formError.textContent="写一句产品介绍，让买东西的人知道它好在哪里。";return}const o=String(t.get("category")??"食品"),r=t.get("aid")==="on",a={id:`mine-${Date.now()}`,title:e,category:tc.includes(o)?o:"食品",price:n,unit:String(t.get("unit")??"").trim()||"件",origin:String(t.get("origin")??"").trim()||"凤凰山野",description:i,contact:String(t.get("contact")??"").trim()||"凰栖山物 · 本机上架 / 待补充联系方式",badge:r?"助农":"我的上架",art:e.slice(0,1),image:this.pendingImage,mine:!0};this.mine=[a,...this.mine],this.products=[...this.mine,...ur];const l=this.saveMine();this.filter="mine";for(const c of this.tabs){const h=c.dataset.filter==="mine";c.classList.toggle("is-active",h),c.setAttribute("aria-selected",h?"true":"false")}this.showList(),this.showToast(l?"已上架，保存在本机浏览器":"已上架；本机存储空间不足，刷新后可能丢失")}deleteProduct(t){var e;this.mine=this.mine.filter(n=>n.id!==t),this.products=[...this.mine,...ur],this.saveMine(),((e=this.activeDetail)==null?void 0:e.id)===t?this.showList():this.render(),this.showToast("已下架")}render(){const t=this.products.filter(e=>this.filter==="all"?!0:this.filter==="mine"?e.mine:e.category===this.filter);this.count.textContent=`${t.length} 件山物`,this.empty.hidden=t.length>0,this.grid.innerHTML=t.map(e=>this.renderCard(e)).join("")}renderCard(t){const e=Re(t.title),n=Re(t.description),i=Re(t.origin),o=Re(t.category),r=Re(t.badge),a=Re(t.art||t.title.slice(0,1)),l=t.image?`<img class="shop-card-photo" src="${t.image}" alt="${e}" loading="lazy" />`:`<span class="shop-art-char">${a}</span><span class="shop-art-mark">凰栖山物</span>`;return`
      <article class="shop-card${t.mine?" is-mine":""}" data-id="${t.id}">
        <div class="shop-card-art art-${nc(t.id)}${t.image?" has-photo":""}">
          ${l}
          <span class="shop-card-badge">${r}</span>
          <span class="shop-card-no">${t.mine?"MINE":"PHOENIX"}</span>
        </div>
        <div class="shop-card-body">
          <div class="shop-card-meta"><span>${o}</span><span>${i}</span></div>
          <h3>${e}</h3>
          <p>${n}</p>
          <div class="shop-card-foot">
            <span class="shop-price">¥${ec(t.price)}<small>/${Re(t.unit)}</small></span>
            <span class="shop-card-actions">
              <button type="button" class="shop-view" data-shop-action="view" data-id="${t.id}">查看</button>
              ${t.mine?`<button type="button" class="shop-delete" data-shop-action="delete" data-id="${t.id}">下架</button>`:""}
            </span>
          </div>
        </div>
      </article>
    `}openDetail(t){this.activeDetail=t,this.listPanel.hidden=!0,this.formPanel.hidden=!0,this.detailPanel.hidden=!1;const e=Re(t.title),n=Re(t.description),i=Re(t.origin),o=Re(t.category),r=Re(t.badge),a=Re(t.contact),l=t.image?`<img src="${t.image}" alt="${e}" />`:`<div class="shop-detail-art art-${nc(t.id)}"><span>${Re(t.art||t.title.slice(0,1))}</span><small>凰栖山物 · 山民直供</small></div>`;this.detailBody.innerHTML=`
      <div class="shop-detail-layout">
        <div class="shop-detail-media">${l}</div>
        <div class="shop-detail-info">
          <div class="shop-detail-meta"><span>${o}</span><span>${i}</span><span class="shop-detail-badge">${r}</span></div>
          <h3>${e}</h3>
          <p class="shop-detail-desc">${n}</p>
          <div class="shop-detail-price">¥${ec(t.price)}<small> / ${Re(t.unit)}</small></div>
          <div class="shop-contact-box">
            <span>预订 / 联系</span>
            <strong>${a}</strong>
            <small>本项目为本地展示，不接入在线支付与物流。</small>
          </div>
          <div class="shop-detail-actions">
            <button type="button" class="selfie-primary" data-shop-action="contact">复制预订方式</button>
            ${t.mine?'<button type="button" class="selfie-secondary" data-shop-action="delete">下架</button>':""}
            <button type="button" class="selfie-link" data-shop-action="back">返回山物</button>
          </div>
        </div>
      </div>
    `}loadMine(){try{const t=localStorage.getItem(Ql);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.filter(n=>{if(!n||typeof n!="object")return!1;const i=n;return typeof i.id=="string"&&typeof i.title=="string"&&typeof i.price=="number"&&typeof i.description=="string"&&typeof i.category=="string"}).map(n=>({...n,mine:!0})):[]}catch{return[]}}saveMine(){try{return localStorage.setItem(Ql,JSON.stringify(this.mine)),!0}catch(t){return console.warn("mountain shop storage failed",t),!1}}showToast(t){this.toast.textContent=t,this.toast.classList.add("is-visible"),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove("is-visible"),2400)}hideToast(){window.clearTimeout(this.toastTimer),this.toast.classList.remove("is-visible")}async copyText(t,e){try{await navigator.clipboard.writeText(t),this.showToast(e)}catch{this.showToast("请联系： "+t)}}}class F_{constructor(t){M(this,"callbacks");M(this,"dock");M(this,"dockHandle");M(this,"dockSummary");M(this,"sliders");M(this,"outputs");M(this,"flavorButtons");M(this,"seasonButtons");M(this,"radialToggle");M(this,"radialMenu");M(this,"pauseButton");M(this,"pauseLabel");M(this,"soundButton");M(this,"toastEl");M(this,"loader");M(this,"loaderPct");M(this,"loaderBar");M(this,"loaderWord");M(this,"toastTimer",0);M(this,"loaderTimer",0);M(this,"isPaused",!1);M(this,"isSoundOn",!1);M(this,"isDockOpen",!1);M(this,"previousMobile",!1);M(this,"resizeTimer",0);M(this,"handleResize",()=>{window.clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{const t=this.previousMobile,e=this.isMobile;this.previousMobile=e,t!==e&&(this.setDockOpen(!e,!1),e||this.setRadialOpen(!1))},140)});M(this,"handleOrientation",()=>{this.isMobile&&this.setDockOpen(!1)});this.callbacks=t,this.dock=this.require("#dock"),this.dockHandle=this.require("#dockHandle"),this.dockSummary=this.require("#dockSummary"),this.toastEl=this.require("#toast"),this.loader=this.require("#loader"),this.loaderPct=this.require("#loaderPct"),this.loaderBar=this.require("#loaderBar"),this.loaderWord=this.require("#loaderWord"),this.pauseButton=this.require('[data-action="pause"]'),this.pauseLabel=this.pauseButton.querySelector(".action-label"),this.soundButton=this.require('[data-action="sound"]'),this.radialToggle=this.require("#radialToggle"),this.radialMenu=this.require("#radialMenu"),this.sliders={firmness:this.require("#firmness"),damping:this.require("#damping"),tide:this.require("#tide")},this.outputs={firmness:this.require("#firmnessOut"),damping:this.require("#dampingOut"),tide:this.require("#tideOut")},this.flavorButtons=Array.from(document.querySelectorAll("[data-flavor]")),this.seasonButtons=Array.from(document.querySelectorAll("[data-season]")),this.bindFlavors(),this.bindSeasons(),this.bindSliders(),this.bindActions(),this.bindDock(),this.bindRadial(),this.bindKeyboard(),this.previousMobile=this.isMobile,this.setDockOpen(!this.isMobile,!1),this.setFlavor("dawn"),this.setSeason("spring"),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("orientationchange",this.handleOrientation,{passive:!0})}get mobile(){return window.matchMedia("(max-width: 940px)").matches}get open(){return this.isDockOpen}setFlavor(t){document.body.dataset.flavor=t;const e=Dn[t];for(const o of this.flavorButtons)o.setAttribute("aria-pressed",String(o.dataset.flavor===t));const n=document.querySelector('meta[name="theme-color"]');n&&(n.content=t==="night"?"#160b09":t==="dusk"?"#e6d3b7":"#ece6d9");const i=this.dock.querySelector(".dock-note");i&&(i.textContent=e.note),this.dockHandle.setAttribute("aria-label",`水感与操作，当前${e.label}`)}setSeason(t){const e=Ti[t];if(!e)return;document.body.dataset.season=t;for(const i of this.seasonButtons)i.setAttribute("aria-pressed",String(i.dataset.season===t));const n=this.dock.querySelector(".dock-title");n&&(n.title=`${e.label} · ${e.note}`)}setSlider(t,e){const n=this.sliders[t];n.value=String(e),this.refreshSlider(t)}getSlider(t){return Number(this.sliders[t].value)}setCounter(t,e){const n=document.querySelectorAll(`[data-counter="${t}"]`);for(const i of n){const o=String(e).padStart(2,"0");i.textContent!==o&&(i.textContent=o,i.classList.remove("is-bump"),i.offsetWidth,i.classList.add("is-bump"))}}setPaused(t){this.isPaused=t;const e=document.querySelectorAll('[data-action="pause"]');for(const n of e){n.setAttribute("aria-pressed",String(t)),n.setAttribute("aria-label",t?"继续微动":"暂停微动");const i=n.querySelector(".action-label");i&&(i.textContent=t?"继续":"暂停")}this.pauseButton.setAttribute("aria-pressed",String(t)),this.pauseLabel.textContent=t?"继续":"暂停",this.showToast(t?"沙盘静止了":"沙盘又活过来")}setSound(t){this.isSoundOn=t;const e=document.querySelectorAll('[data-action="sound"]');for(const n of e)n.setAttribute("aria-pressed",String(t)),n.setAttribute("aria-label",t?"关闭环境声":"开启环境声");this.soundButton.setAttribute("aria-pressed",String(t)),this.showToast(t?"水声已开启":"水声已关闭")}setDockOpen(t,e=!0){this.isDockOpen=t,this.dock.classList.toggle("is-open",t),this.dockHandle.setAttribute("aria-expanded",String(t)),this.radialMenu.classList.toggle("is-dock-open",t),t&&this.isMobile&&this.setRadialOpen(!1),e||(this.dock.style.transition="none"),e||requestAnimationFrame(()=>{this.dock.style.transition=""}),this.callbacks.onDockChange(t)}setRadialOpen(t){this.radialMenu.classList.toggle("is-open",t),this.radialToggle.setAttribute("aria-expanded",String(t)),this.radialToggle.setAttribute("aria-label",t?"收起操作菜单":"展开操作菜单")}showToast(t,e=2200){window.clearTimeout(this.toastTimer),this.toastEl.textContent=t,this.toastEl.classList.add("is-visible"),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.remove("is-visible")},e)}setProgress(t,e){const n=Math.max(0,Math.min(100,Math.round(t)));this.loaderPct.textContent=`${String(n).padStart(2,"0")}%`,this.loaderBar.style.width=`${n}%`,e?this.loaderWord.textContent=e:n<32?this.loaderWord.textContent="正在凝聚":n<64?this.loaderWord.textContent="正在注入江水":n<92?this.loaderWord.textContent="正在布置柔光":this.loaderWord.textContent="可以上手了"}completeLoading(){this.setProgress(100,"可以上手了"),window.clearTimeout(this.loaderTimer),this.loader.classList.add("is-done"),this.loader.setAttribute("aria-hidden","true"),document.body.classList.add("is-ready"),this.loaderTimer=window.setTimeout(()=>{this.loader.style.display="none"},1550)}bindFlavors(){for(const t of this.flavorButtons)t.addEventListener("click",()=>{const e=t.dataset.flavor;!e||!Dn[e]||(this.setFlavor(e),this.callbacks.onFlavor(e))})}bindSeasons(){for(const t of this.seasonButtons)t.addEventListener("click",()=>{const e=t.dataset.season;!e||!Ti[e]||(this.setSeason(e),this.callbacks.onSeason(e))})}bindRadial(){this.radialToggle.addEventListener("click",()=>{this.setRadialOpen(!this.radialMenu.classList.contains("is-open"))})}bindSliders(){Object.keys(this.sliders).forEach(t=>{const e=this.sliders[t];this.refreshSlider(t),e.addEventListener("input",()=>{this.refreshSlider(t),this.callbacks.onSlider(t,Number(e.value))})})}bindActions(){const t=Array.from(document.querySelectorAll("[data-action]"));for(const e of t)e.addEventListener("click",()=>{const n=e.dataset.action;n==="level"?(this.callbacks.onLevel(),this.showToast("沙盘已回正")):n==="pause"?(this.setPaused(!this.isPaused),this.callbacks.onPause(this.isPaused)):n==="sound"?(this.setSound(!this.isSoundOn),this.callbacks.onSound(this.isSoundOn)):n==="reset-view"&&(this.callbacks.onResetView(),this.showToast("回到入画视角")),this.isMobile&&this.setRadialOpen(!1)})}bindDock(){var t;this.dockHandle.addEventListener("click",()=>{this.setDockOpen(!this.isDockOpen)}),(t=document.querySelector("canvas"))==null||t.addEventListener("pointerdown",()=>{this.mobile&&this.isDockOpen&&this.setDockOpen(!1)},{passive:!0})}bindKeyboard(){window.addEventListener("keydown",t=>{if(!t.defaultPrevented&&!(t.target instanceof HTMLInputElement||t.target instanceof HTMLButtonElement)&&t.key.toLowerCase()==="t"){t.preventDefault();const e=["dawn","dusk","night"],n=e[(e.indexOf(document.body.dataset.flavor)+1)%3];this.setFlavor(n),this.callbacks.onFlavor(n),this.showToast(Dn[n].label)}})}refreshSlider(t){const e=this.sliders[t],n=Number(e.value),i=Number(e.min),o=Number(e.max),r=(n-i)/(o-i)*100;e.style.setProperty("--fill",`${r}%`);const a=this.outputs[t];t==="tide"?a.textContent=`${n>=0?"+":""}${n.toFixed(2)}`:a.textContent=n.toFixed(2),t==="firmness"&&(this.dockSummary.textContent=`柔度 ${n.toFixed(2)}`)}require(t){const e=document.querySelector(t);if(!e)throw new Error(`Missing UI element: ${t}`);return e}get isMobile(){return window.matchMedia("(max-width: 940px)").matches}}class N_{constructor(t){M(this,"renderer");M(this,"scene",new y0);M(this,"camera");M(this,"orbit");M(this,"ui");M(this,"album");M(this,"postOffice");M(this,"mountainShop");M(this,"paletteMixer",new pg("dawn"));M(this,"seasonMixer",new mg("spring"));M(this,"worldRoot",new Xe);M(this,"river");M(this,"jelly");M(this,"terrain");M(this,"water");M(this,"atmosphere");M(this,"architecture");M(this,"riverLife");M(this,"weather");M(this,"lights");M(this,"post");M(this,"reflection",null);M(this,"audio",new Rv);M(this,"quality");M(this,"envTexture");M(this,"picker");M(this,"raycaster",new lg);M(this,"pointerNdc",new st);M(this,"activePointers",new Map);M(this,"mode","none");M(this,"drag",null);M(this,"press",null);M(this,"lanternDrag",null);M(this,"houseDrag",null);M(this,"hoverStone",-1);M(this,"lastPinchDistance",0);M(this,"raf",0);M(this,"lastTimestamp",0);M(this,"animTime",0);M(this,"paused",!1);M(this,"levelTiltX",0);M(this,"levelTiltY",0);M(this,"tiltX",0);M(this,"tiltY",0);M(this,"tiltVX",0);M(this,"tiltVY",0);M(this,"tiltTargetX",0);M(this,"tiltTargetY",0);M(this,"tiltDragging",!1);M(this,"counterValues",{lanterns:0,boats:0,bells:0});M(this,"lastInteractionAt",typeof performance<"u"?performance.now():0);M(this,"lastRenderedAt",0);M(this,"lastPortrait",!1);M(this,"started",!1);M(this,"frameStats",{fps:0,frames:0,time:0,lowChecks:0});M(this,"metrics",{triangles:0,calls:0,sceneTriangles:0});M(this,"degradation",0);M(this,"adaptiveEnabled",!0);M(this,"disposed",!1);M(this,"lastHoverCheck",0);M(this,"reflectionFrame",0);M(this,"detailValue",.25);M(this,"seasonAutoAt",0);M(this,"flavorAutoAt",20);M(this,"rainRippleAt",0);M(this,"albumAnchor",new N);M(this,"albumScreen",new N);M(this,"postAnchor",new N);M(this,"postScreen",new N);M(this,"shopAnchor",new N);M(this,"shopScreen",new N);M(this,"albumOpen",!1);M(this,"postOpen",!1);M(this,"shopOpen",!1);M(this,"onKeyDown",t=>{if(!(t.target instanceof HTMLInputElement||t.target instanceof HTMLButtonElement||t.target instanceof HTMLTextAreaElement)){if(t.code==="KeyY"){t.preventDefault(),t.repeat||this.cycleSeason();return}t.code==="Space"&&(t.preventDefault(),!t.repeat&&this.triggerBoatSong())}});M(this,"loop",t=>{if(this.disposed)return;if(this.raf=requestAnimationFrame(this.loop),document.hidden){this.lastTimestamp=t;return}const e=Math.max(0,(t-this.lastTimestamp)/1e3),i=t-this.lastInteractionAt>12e3&&!this.paletteMixer.isTransitioning&&this.mode==="none";if(i&&t-this.lastRenderedAt<1e3/30)return;this.lastTimestamp=t;const o=Math.min(.05,e||.016);if(this.paused||(this.animTime+=o),this.paletteMixer.update(o)&&this.applyPalette(this.paletteMixer.current),this.seasonMixer.update(o)&&this.applySeasonVisuals(),!this.paused&&!this.albumOpen&&!this.postOpen&&!this.shopOpen&&this.mode==="none"&&!this.seasonMixer.isTransitioning&&performance.now()>this.seasonAutoAt){const h=Vn.indexOf(this.seasonMixer.id);this.setSeason(Vn[(h+1)%Vn.length],!1)}if(!this.paused&&!this.albumOpen&&!this.postOpen&&!this.shopOpen&&!this.paletteMixer.isTransitioning&&this.animTime>this.flavorAutoAt){const h=rr.indexOf(this.paletteMixer.id);this.setFlavor(rr[(h+1)%rr.length],!1,4.2),this.flavorAutoAt=this.animTime+22}const r=Math.sin(this.animTime*.17)*.72+Math.sin(this.animTime*.49+1.4)*.24,a=Math.cos(this.animTime*.12+.8)*.52+Math.sin(this.animTime*.31+2.1)*.16,l=.42+Math.sin(this.animTime*.34+.9)*.16;this.weather.setWind(r,a,l),this.architecture.material.setWind(r,a,l),this.orbit.update(o),this.updateWorldTransform(o),this.updateAlbumLabel();const c=Gt(1-(this.orbit.currentDistance-26)/24,0,1);if(this.detailValue+=(c-this.detailValue)*(1-Math.exp(-o*5)),this.architecture.setDetail(this.detailValue),this.water.tick(this.animTime),this.jelly.tick(this.animTime),this.terrain.tick(this.animTime),this.architecture.tick(this.animTime,this.paused?0:o),this.paused||this.riverLife.tick(this.animTime,o),this.weather.tick(this.animTime,this.paused?0:o),!this.paused&&this.weather.isRaining&&(this.rainRippleAt+=o,this.rainRippleAt>.34)){this.rainRippleAt=0;const h=this.river.sampleAt(.12+Math.random()*.74),u=(Math.random()*2-1)*2.6;this.water.addRipple(h.x+h.nx*u,h.y+h.ny*u,this.animTime,.12+Math.random()*.1)}this.atmosphere.tick(this.animTime,this.water.tide),this.post.setTime(this.animTime),this.reflection&&this.quality.tier==="high"&&this.degradation===0&&!this.paused&&(this.reflectionFrame=(this.reflectionFrame+1)%8,this.reflectionFrame===0&&this.reflection.update(this.renderer,this.scene,this.camera)),i||this.measurePerformance(e*1e3,t),this.renderFrame(o,!1),this.lastRenderedAt=t});M(this,"onWindowResize",()=>{const t=window.innerWidth,e=window.innerHeight,n=this.lastPortrait,i=e>t*1.05;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(t,e,!1),this.weather.setPixelRatio(this.renderer.getPixelRatio()),this.camera.aspect=t/e,i!==n?this.applyViewportCamera(!0):this.camera.updateProjectionMatrix(),this.post.resize(t,e),this.atmosphere.resize(Math.floor(t*this.renderer.getPixelRatio()),Math.floor(e*this.renderer.getPixelRatio())),this.markInteraction()});M(this,"onVisibility",()=>{this.lastTimestamp=performance.now(),this.lastInteractionAt=performance.now()});M(this,"onContextMenu",t=>{t.preventDefault()});M(this,"onPointerDown",t=>{if(t.pointerType==="mouse"&&t.button!==0)return;const e=this.renderer.domElement;try{e.setPointerCapture(t.pointerId)}catch{}if(this.markInteraction(),this.activePointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.scene.updateMatrixWorld(!0),this.activePointers.size>=2){this.beginPinch();return}this.drag={startX:t.clientX,startY:t.clientY,lastX:t.clientX,lastY:t.clientY,startTiltX:this.tiltX,startTiltY:this.tiltY,lastRippleAt:0,lastRippleX:0,lastRippleY:0},this.updateRay(t.clientX,t.clientY),this.clearStoneHover();const n=[],i=this.riverLife.pickLantern(this.raycaster);i&&n.push({kind:"lantern",distance:i.distance,index:i.index});const o=this.riverLife.pickBoat(this.raycaster);o&&n.push({kind:"boat",distance:o.distance,index:o.index});const r=this.raycaster.intersectObject(this.architecture.tower,!1)[0];r&&n.push({kind:"tower",distance:r.distance});const a=this.raycaster.intersectObject(this.architecture.bridge,!1)[0];a&&n.push({kind:"bridge",distance:a.distance});const l=this.pickStoneHit();l&&n.push({kind:"stone",distance:l.distance,index:l.index});const c=this.pickHouseHit();c&&n.push({kind:"house",distance:c.distance,index:c.index,mesh:c.mesh});const h=this.pickWater(t.clientX,t.clientY);if(h){const d=new N(h.x,h.y,this.water.tide),p=this.worldRoot.localToWorld(d);n.push({kind:"water",distance:p.distanceTo(this.raycaster.ray.origin),water:h})}n.sort((d,p)=>d.distance-p.distance);const u=n[0];if((u==null?void 0:u.kind)==="lantern"&&u.index!==void 0){this.mode="lantern",this.riverLife.beginLanternDrag(u.index);const d=this.localPlanePoint(t.clientX,t.clientY,this.water.tide+.36);d&&this.riverLife.dragLantern(u.index,d.x,d.y),this.lanternDrag={index:u.index,lastX:(d==null?void 0:d.x)??0,lastY:(d==null?void 0:d.y)??0,lastAt:performance.now(),vx:0,vy:0},this.setCursor("lantern");return}if((u==null?void 0:u.kind)==="boat"&&u.index!==void 0){this.mode="boat",this.press={kind:"boat",index:u.index,startX:t.clientX,startY:t.clientY,moved:!1},this.setCursor("boat");return}if((u==null?void 0:u.kind)==="tower"){this.mode="tower",this.press={kind:"tower",startX:t.clientX,startY:t.clientY,moved:!1},this.setCursor("tower");return}if((u==null?void 0:u.kind)==="bridge"){this.mode="bridge",this.press={kind:"bridge",startX:t.clientX,startY:t.clientY,moved:!1},this.setCursor("bridge");return}if((u==null?void 0:u.kind)==="stone"&&u.index!==void 0){this.mode="stone",this.press={kind:"stone",index:u.index,startX:t.clientX,startY:t.clientY,moved:!1},this.setCursor("stone");return}if((u==null?void 0:u.kind)==="house"&&u.mesh&&u.index!==void 0){this.mode="house",this.houseDrag={mesh:u.mesh,index:u.index,startX:t.clientX,startY:t.clientY,moved:!1},this.architecture.beginHouseSway(u.mesh,u.index),this.setCursor("house");return}if((u==null?void 0:u.kind)==="water"&&u.water){this.mode="water",this.water.addRipple(u.water.x,u.water.y,this.animTime,.9),this.drag.lastRippleAt=performance.now(),this.drag.lastRippleX=u.water.x,this.drag.lastRippleY=u.water.y,this.setCursor("water");return}if(this.pickSide(t.clientX,t.clientY)){this.mode="tilt",this.tiltDragging=!0,this.tiltTargetX=this.tiltX,this.tiltTargetY=this.tiltY,this.drag.startTiltX=this.tiltX,this.drag.startTiltY=this.tiltY,this.setCursor("tilt");return}this.mode="orbit",this.orbit.startDrag(),this.setCursor("drag")});M(this,"onPointerMove",t=>{if(!this.activePointers.has(t.pointerId)){t.pointerType==="mouse"&&this.updateHover(t.clientX,t.clientY);return}if(this.activePointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.markInteraction(),this.mode==="pinch"){this.updatePinch();return}if(this.drag)if(this.mode==="lantern"&&this.lanternDrag){const e=this.localPlanePoint(t.clientX,t.clientY,this.water.tide+.36);if(e&&this.river.isWater(e.x,e.y,.18)){const n=performance.now(),i=Math.max(16,n-this.lanternDrag.lastAt)/1e3;this.riverLife.dragLantern(this.lanternDrag.index,e.x,e.y),this.lanternDrag.vx=Gt((e.x-this.lanternDrag.lastX)/i,-12,12),this.lanternDrag.vy=Gt((e.y-this.lanternDrag.lastY)/i,-12,12),this.lanternDrag.lastX=e.x,this.lanternDrag.lastY=e.y,this.lanternDrag.lastAt=n}}else if(this.mode==="house"&&this.houseDrag){const e=t.clientX-this.houseDrag.startX,n=t.clientY-this.houseDrag.startY;!this.houseDrag.moved&&Math.hypot(e,n)>5&&(this.houseDrag.moved=!0),this.architecture.dragHouseSway(e,n)}else if(this.press)!this.press.moved&&Math.hypot(t.clientX-this.press.startX,t.clientY-this.press.startY)>5&&(this.press.moved=!0);else if(this.mode==="water"){const e=this.pickWater(t.clientX,t.clientY);if(e){const n=performance.now(),i=e.x-this.drag.lastRippleX,o=e.y-this.drag.lastRippleY,r=Math.hypot(i,o);if(n-this.drag.lastRippleAt>38&&r>.12){const a=Math.max(16,n-this.drag.lastRippleAt)/1e3,l=r/a,c=Gt(.25+l*.12,.3,1.55);this.water.addRipple(e.x,e.y,this.animTime,c),this.drag.lastRippleAt=n,this.drag.lastRippleX=e.x,this.drag.lastRippleY=e.y}}}else if(this.mode==="tilt"){const e=t.clientX-this.drag.startX,n=t.clientY-this.drag.startY,i=ie.degToRad(Zi.maxDegrees);this.tiltTargetX=Gt(this.drag.startTiltX+n*.00105,-i,i),this.tiltTargetY=Gt(this.drag.startTiltY+e*.00105,-i,i)}else this.mode==="orbit"&&(this.orbit.rotateBy(t.clientX-this.drag.lastX,t.clientY-this.drag.lastY,window.innerWidth),this.drag.lastX=t.clientX,this.drag.lastY=t.clientY)});M(this,"onPointerUp",t=>{this.activePointers.delete(t.pointerId);const e=this.renderer.domElement;try{e.releasePointerCapture(t.pointerId)}catch{}if(this.mode==="pinch"){this.activePointers.size<2&&(this.mode="none",this.drag=null,this.orbit.endDrag()),this.markInteraction();return}if(this.mode==="lantern"&&this.lanternDrag){this.riverLife.releaseLantern(this.lanternDrag.index,this.lanternDrag.vx,this.lanternDrag.vy),this.bumpCounter("lanterns"),this.ui.showToast("一盏河灯，顺着沱江走了"),this.lanternDrag=null,this.mode="none",this.drag=null,this.press=null,this.setCursor("none"),this.markInteraction();return}if(this.mode==="house"&&this.houseDrag){this.architecture.endHouseSway(),this.houseDrag.moved&&this.ui.showToast("吊脚楼晃了晃，又站稳了"),this.houseDrag=null,this.mode="none",this.drag=null,this.press=null,this.setCursor("none"),this.markInteraction();return}if(this.press){const n=this.press;n.moved||(n.kind==="tower"?(this.architecture.lightTower(),this.ui.showToast("万名塔七层灯，自下而上")):n.kind==="bridge"?this.triggerBoatSong(0):n.kind==="boat"&&n.index!==void 0?this.triggerBoatSong(n.index):n.kind==="stone"&&n.index!==void 0&&this.architecture.toggleStone(n.index)),this.press=null,this.mode="none",this.drag=null,this.setCursor("none"),this.markInteraction();return}this.mode==="orbit"&&this.orbit.endDrag(),this.mode==="tilt"&&(this.tiltDragging=!1,this.tiltTargetX=0,this.tiltTargetY=0),this.mode="none",this.drag=null,this.press=null,this.lanternDrag=null,this.houseDrag=null,this.setCursor("none"),this.markInteraction()});M(this,"onPointerLeave",()=>{this.clearStoneHover(),this.activePointers.size===0&&this.setCursor("none")});M(this,"onWheel",t=>{t.preventDefault(),this.orbit.zoomBy(t.deltaY),this.markInteraction()});this.quality=hg(),this.adaptiveEnabled=!new URLSearchParams(window.location.search).has("no-adaptive");const e=new x0({canvas:t,antialias:this.quality.antialias,alpha:!1,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!e.capabilities.isWebGL2)throw e.dispose(),new Error("WebGL2 is required for this jelly river.");this.renderer=e,e.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),e.setSize(window.innerWidth,window.innerHeight,!1),e.outputColorSpace=We,e.toneMapping=yn,e.shadowMap.enabled=!0,e.shadowMap.type=rc,e.info.autoReset=!1,e.debug.checkShaderErrors=!1,this.camera=new ze(ne.fovDesktop,window.innerWidth/window.innerHeight,ne.near,420),this.orbit=new gg(this.camera),this.worldRoot.name="jelly-diorama",this.worldRoot.rotation.order="YXZ",this.scene.add(this.worldRoot),this.scene.fog=new ho(this.paletteMixer.current.color.fog.getHex(),this.paletteMixer.current.value.fogDensity*.35),this.envTexture=vv(e),this.scene.environment=this.envTexture,this.scene.environmentIntensity=this.paletteMixer.current.value.envIntensity,this.river=new _g,this.jelly=new Ig(this.paletteMixer.current),this.terrain=new Mg(this.river,this.quality,this.paletteMixer.current),this.architecture=new hv({river:this.river,heightAt:this.terrain.heightAt,palette:this.paletteMixer.current}),this.water=new Eg(this.river,this.quality,this.paletteMixer.current,0),this.riverLife=new uv(this.river,this.water,this.architecture.material),this.architecture.onTowerBell=a=>{this.audio.playBell(a),this.bumpCounter("bells")},this.architecture.onTowerGlow=a=>{const l=this.river.sampleAt(this.architecture.tTower);this.water.setTowerGlow(l.x,l.y,a)},this.water.setTowerGlow(this.river.sampleAt(this.architecture.tTower).x,this.river.sampleAt(this.architecture.tTower).y,0),this.architecture.onStoneToggle=a=>{const l=this.architecture.tiaoyanStones[a];l&&(this.water.addRipple(l.x,l.y,this.animTime,.55),this.audio.playBell(2))},this.architecture.onHouseSway=a=>{a||this.audio.playCreak()},this.riverLife.onSplash=()=>{this.audio.playSplash()},this.riverLife.onBoatMoved=()=>{this.audio.playBoatSong()},this.atmosphere=new Gg(this.river,this.quality,this.paletteMixer.current),this.weather=new mv(this.quality),this.worldRoot.add(this.jelly.group),this.worldRoot.add(this.terrain.group),this.worldRoot.add(this.architecture.group),this.worldRoot.add(this.riverLife.group),this.worldRoot.add(this.water.mesh),this.worldRoot.add(this.atmosphere.mist),this.scene.add(this.atmosphere.backdrop),this.scene.add(this.atmosphere.shadow),this.scene.add(this.atmosphere.dust),this.scene.add(this.weather.group);const n=new ra(Ht.width+.16,Ht.depth+.16,Ht.height,3,Ht.radius);n.translate(0,0,(Ht.top+Ht.bottom)*.5),this.picker=new ae(n,new vo),this.picker.name="interaction-picker",this.picker.visible=!1,this.worldRoot.add(this.picker),this.lights=new gv(this.scene,this.quality,this.paletteMixer.current),this.post=new Av(e,this.scene,this.camera,{width:window.innerWidth,height:window.innerHeight},this.quality,this.quality.ssao),this.quality.tier==="high"&&(this.reflection=new dv(this.worldRoot,this.water)),this.ui=new F_({onFlavor:a=>this.setFlavor(a),onSeason:a=>this.setSeason(a,!0),onSlider:(a,l)=>this.applySlider(a,l),onPause:a=>this.setPaused(a),onSound:a=>this.setSound(a),onLevel:()=>this.resetTilt(),onResetView:()=>this.resetView(),onDockChange:()=>this.markInteraction()}),this.ui.setSlider("firmness",.55),this.ui.setSlider("damping",.5),this.ui.setSlider("tide",0),this.applySlider("firmness",.55),this.applySlider("damping",.5),this.applySlider("tide",0),this.counterValues.lanterns=0,this.counterValues.boats=0,this.counterValues.bells=0,this.ui.setCounter("lanterns",0),this.ui.setCounter("boats",0),this.ui.setCounter("bells",0),this.ui.setSeason(this.seasonMixer.id);const i=this.architecture.housePlacements.find(a=>a.id==="house-N-1-H2_A")??this.architecture.housePlacements[0];i&&this.albumAnchor.set(i.x,i.y,i.z+3.45);const o=this.architecture.housePlacements.find(a=>a.id==="house-S-1-H1_B")??this.architecture.housePlacements[1]??this.architecture.housePlacements[0];o&&this.postAnchor.set(o.x,o.y,o.z+3.45);const r=this.architecture.housePlacements.find(a=>a.id==="house-N-4-H1_B")??this.architecture.housePlacements[3]??this.architecture.housePlacements[0];r&&this.shopAnchor.set(r.x,r.y,r.z+3.45),this.album=new d_({onOpen:()=>{this.albumOpen=!0,this.markInteraction()},onClose:()=>{this.albumOpen=!1,this.markInteraction()}}),this.postOffice=new D_({onOpen:()=>{this.postOpen=!0,this.markInteraction()},onClose:()=>{this.postOpen=!1,this.markInteraction()}}),this.mountainShop=new U_({onOpen:()=>{this.shopOpen=!0,this.markInteraction()},onClose:()=>{this.shopOpen=!1,this.markInteraction()}}),this.metrics.sceneTriangles=this.countSceneTriangles(),this.applyPalette(this.paletteMixer.current),this.applySeasonVisuals(this.seasonMixer.current),this.seasonAutoAt=performance.now()+52e3,this.onResize(!0),this.bindCanvasEvents(),window.addEventListener("resize",this.onWindowResize,{passive:!0}),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("keydown",this.onKeyDown)}start(t){this.started||(this.started=!0,this.lastTimestamp=performance.now(),this.raf=requestAnimationFrame(this.loop),t==null||t())}async warmup(t){this.applyPalette(this.paletteMixer.current),t==null||t(45),this.renderFrame(.016,!0),t==null||t(94)}setFlavor(t,e=!0,n=.6){Dn[t]&&this.paletteMixer.set(t,n)&&(this.ui.setFlavor(t),e&&(this.flavorAutoAt=this.animTime+22,this.markInteraction()))}setSeason(t,e=!0){if(Vn.includes(t)&&this.seasonMixer.set(t)&&(this.ui.setSeason(t),this.markInteraction(),this.seasonAutoAt=performance.now()+52e3,e)){const n=this.seasonMixer.target.definition;this.ui.showToast(`${n.label} · ${n.note}`,2800)}}cycleSeason(){const t=Vn.indexOf(this.seasonMixer.id);this.setSeason(Vn[(t+1)%Vn.length],!0)}applySeasonVisuals(t=this.seasonMixer.current){this.architecture.setSeason(t),this.terrain.setSeason(t,this.paletteMixer.current),this.water.setSeason(t),this.weather.setSeason(t)}setPaused(t){this.paused=t,this.markInteraction()}setSound(t){this.audio.setEnabled(t),this.audio.isEnabled!==t&&this.ui.setSound(this.audio.isEnabled),this.markInteraction()}bumpCounter(t){this.counterValues[t]+=1,this.ui.setCounter(t,this.counterValues[t])}triggerBoatSong(t=0){this.audio.isEnabled||(this.audio.setEnabled(!0),this.ui.setSound(!0)),this.riverLife.dispatchBoat(t)&&(this.bumpCounter("boats"),this.ui.showToast("船工号子，从桥下飘过来")),this.markInteraction()}resetTilt(){this.tiltTargetX=0,this.tiltTargetY=0,this.tiltDragging=!1,this.markInteraction()}resetView(){this.applyViewportCamera(!0),this.markInteraction()}getStats(){return{triangles:this.metrics.triangles,calls:this.metrics.calls,sceneTriangles:this.metrics.sceneTriangles,fps:Number(this.frameStats.fps.toFixed(1)),quality:this.quality.tier,resolution:`${this.renderer.domElement.width}×${this.renderer.domElement.height}`,drawDistance:Number(this.orbit.currentDistance.toFixed(1)),flavor:this.paletteMixer.id,season:this.seasonMixer.id,paused:this.paused,tide:this.water.tide,degradation:this.degradation,landmarks:{bridge:Math.round(this.architecture.stats.bridge),tower:Math.round(this.architecture.stats.tower),tiaoyan:Math.round(this.architecture.stats.tiaoyan),houses:Math.round(this.architecture.stats.houses),houseInstances:this.architecture.stats.houseInstances,prototypeTriangles:this.architecture.stats.prototypeTriangles}}}addRippleAtNormalized(t,e,n=1){const i=this.renderer.domElement.getBoundingClientRect(),o=i.left+t*i.width,r=i.top+e*i.height,a=this.pickWater(o,r);a&&(this.water.addRipple(a.x,a.y,this.animTime,n),this.markInteraction())}dispose(){this.disposed||(this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("keydown",this.onKeyDown),this.unbindCanvasEvents(),this.audio.dispose(),this.water.dispose(),this.post.composer.dispose(),this.envTexture.dispose(),this.renderer.dispose())}applySlider(t,e){t==="firmness"&&this.water.setFirmness(e),t==="damping"&&this.water.setDamping(e),t==="tide"&&this.water.setTide(e),this.markInteraction()}applyPalette(t){this.lights.setPalette(t),this.terrain.setPalette(t),this.architecture.setPalette(t),this.water.setPalette(t),this.jelly.setPalette(t),this.atmosphere.setPalette(t),this.post.setPalette(t),this.scene.environmentIntensity=t.value.envIntensity,this.scene.fog instanceof ho&&(this.scene.fog.color.copy(t.color.fog),this.scene.fog.density=t.value.fogDensity*.35),this.atmosphere.resize(this.renderer.domElement.width,this.renderer.domElement.height),this.applySeasonVisuals()}updateWorldTransform(t){const e=this.tiltDragging?90*(1+Zi.rebound):52*(1+Zi.rebound),n=this.tiltDragging?16:2*Zi.dampingRatio*Math.sqrt(e);this.tiltVX+=(this.tiltTargetX-this.tiltX)*e*t,this.tiltVY+=(this.tiltTargetY-this.tiltY)*e*t;const i=Math.exp(-n*t);this.tiltVX*=i,this.tiltVY*=i,this.tiltX+=this.tiltVX*t,this.tiltY+=this.tiltVY*t;const o=ie.degToRad(Zi.maxDegrees),r=Math.hypot(this.tiltX,this.tiltY);if(r>o){const g=o/r;this.tiltX*=g,this.tiltY*=g,this.tiltVX*=.94,this.tiltVY*=.94}!this.tiltDragging&&Math.abs(this.tiltX)<3e-5&&Math.abs(this.tiltY)<3e-5&&Math.abs(this.tiltVX)<1e-4&&Math.abs(this.tiltVY)<1e-4&&(this.tiltX=0,this.tiltY=0,this.tiltVX=0,this.tiltVY=0);const a=this.paused?0:1,l=Math.sin(this.animTime*.31)*85e-5*a,c=Math.sin(this.animTime*.24+1.4)*.0011*a,h=Math.sin(this.animTime*.53+.7)*.032*a,u=1+Math.sin(this.animTime*.42)*.0013*a;this.worldRoot.rotation.set(this.tiltX+l,this.tiltY+c,0),this.worldRoot.position.z=h,this.worldRoot.scale.setScalar(u),this.worldRoot.updateMatrixWorld(!0);const d=Gt(this.tiltY*.26-this.tiltVY*.006,-.028,.028),p=Gt(-this.tiltX*.26+this.tiltVX*.006,-.028,.028);this.water.setSlosh(d,p)}updateAlbumLabel(){if(this.albumOpen||this.postOpen||this.shopOpen){this.album.setAnchor(0,0,!1),this.postOffice.setAnchor(0,0,!1),this.mountainShop.setAnchor(0,0,!1);return}this.camera.updateMatrixWorld(),this.albumScreen.copy(this.albumAnchor).applyMatrix4(this.worldRoot.matrixWorld),this.albumScreen.project(this.camera);const e=this.albumScreen.z>-1&&this.albumScreen.z<1&&Math.abs(this.albumScreen.x)<1.04&&Math.abs(this.albumScreen.y)<1.02;this.album.setAnchor((this.albumScreen.x*.5+.5)*window.innerWidth,(-this.albumScreen.y*.5+.5)*window.innerHeight,e),this.postScreen.copy(this.postAnchor).applyMatrix4(this.worldRoot.matrixWorld),this.postScreen.project(this.camera);const n=this.postScreen.z>-1&&this.postScreen.z<1&&Math.abs(this.postScreen.x)<1.04&&Math.abs(this.postScreen.y)<1.02;this.postOffice.setAnchor((this.postScreen.x*.5+.5)*window.innerWidth,(-this.postScreen.y*.5+.5)*window.innerHeight,n),this.shopScreen.copy(this.shopAnchor).applyMatrix4(this.worldRoot.matrixWorld),this.shopScreen.project(this.camera);const i=this.shopScreen.z>-1&&this.shopScreen.z<1&&Math.abs(this.shopScreen.x)<1.04&&Math.abs(this.shopScreen.y)<1.02;this.mountainShop.setAnchor((this.shopScreen.x*.5+.5)*window.innerWidth,(-this.shopScreen.y*.5+.5)*window.innerHeight,i)}renderFrame(t,e){this.renderer.info.reset(),this.post.render(t),this.metrics.triangles=this.renderer.info.render.triangles,this.metrics.calls=this.renderer.info.render.calls,e&&this.applyPalette(this.paletteMixer.current)}measurePerformance(t,e){if(e<4200||this.paused||(this.frameStats.frames+=1,this.frameStats.time+=t/1e3,this.frameStats.time<2))return;const n=this.frameStats.frames/this.frameStats.time;this.frameStats.fps=n,this.frameStats.frames=0,this.frameStats.time=0,this.adaptiveEnabled&&(n<40?this.frameStats.lowChecks+=1:this.frameStats.lowChecks=0,this.frameStats.lowChecks>=1&&this.degradation<3&&(this.frameStats.lowChecks=0,this.degrade()))}degrade(){var t;if(this.degradation+=1,(t=this.reflection)==null||t.disable(),this.degradation===1&&(this.post.ssaoAvailable?this.post.setSSAOEnabled(!1):this.degradation=2),this.degradation===2){const e={...this.quality,waterAlong:Math.max(128,Math.round(this.quality.waterAlong*.66)),waterAcross:Math.max(80,Math.round(this.quality.waterAcross*.68)),bloomScale:Math.max(.45,this.quality.bloomScale*.7)};this.quality=e,this.water.setQuality(e,this.paletteMixer.current)}if(this.degradation===3){const e=Math.min(window.devicePixelRatio||1,1);this.quality={...this.quality,maxPixelRatio:e},this.renderer.setPixelRatio(e),this.post.composer.setPixelRatio(e),this.weather.setPixelRatio(e),this.onResize(!1)}}countSceneTriangles(){let t=0;return this.scene.traverse(e=>{var r;if(!(e instanceof ae)||!e.visible)return;const n=e.geometry,i=n.index?n.index.count/3:(((r=n.getAttribute("position"))==null?void 0:r.count)??0)/3,o=e instanceof bn?e.count:1;t+=i*o}),Math.round(t)}applyViewportCamera(t=!1){const e=window.innerWidth,n=window.innerHeight,i=e/n,o=n>e*1.05,r=o!==this.lastPortrait;this.lastPortrait=o,t||r?(this.camera.aspect=i,o?(this.camera.fov=70,this.orbit.target.set(-1,0,1),this.orbit.setView({azimuth:-1.1,polar:.72,distance:64},!0)):(this.camera.fov=ne.fovDesktop,this.orbit.target.set(ne.target[0],ne.target[1],ne.target[2]),this.orbit.setView({azimuth:ne.defaultAzimuth,polar:ne.defaultPolar,distance:66},!0)),this.camera.updateProjectionMatrix()):(this.camera.aspect=i,this.camera.updateProjectionMatrix())}onResize(t=!1){const e=window.innerWidth,n=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(e,n,!1),this.weather.setPixelRatio(this.renderer.getPixelRatio()),this.applyViewportCamera(t),this.post.resize(e,n),this.atmosphere.resize(Math.floor(e*this.renderer.getPixelRatio()),Math.floor(n*this.renderer.getPixelRatio()));const i=this.renderer.domElement;i.style.width=`${e}px`,i.style.height=`${n}px`}markInteraction(){this.lastInteractionAt=performance.now()}bindCanvasEvents(){const t=this.renderer.domElement;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove,{passive:!0}),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),t.addEventListener("pointerleave",this.onPointerLeave),t.addEventListener("wheel",this.onWheel,{passive:!1}),t.addEventListener("contextmenu",this.onContextMenu)}unbindCanvasEvents(){const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("pointerleave",this.onPointerLeave),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("contextmenu",this.onContextMenu)}beginPinch(){this.mode="pinch",this.tiltDragging=!1;const t=Array.from(this.activePointers.values()).slice(0,2);this.lastPinchDistance=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y),this.orbit.beginPinch(this.lastPinchDistance),this.setCursor("none")}updatePinch(){const t=Array.from(this.activePointers.values()).slice(0,2);if(t.length<2)return;const e=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y);e>0&&(this.orbit.pinchTo(e),this.lastPinchDistance=e)}updateHover(t,e){const n=performance.now();if(n-this.lastHoverCheck<42)return;if(this.lastHoverCheck=n,this.scene.updateMatrixWorld(!0),this.updateRay(t,e),this.riverLife.pickLantern(this.raycaster)){this.clearStoneHover(),this.setCursor("lantern");return}if(this.riverLife.pickBoat(this.raycaster)){this.clearStoneHover(),this.setCursor("boat");return}if(this.raycaster.intersectObject(this.architecture.tower,!1).length>0){this.clearStoneHover(),this.setCursor("tower");return}if(this.raycaster.intersectObject(this.architecture.bridge,!1).length>0){this.clearStoneHover(),this.setCursor("bridge");return}const i=this.pickStoneHit();if(i){this.hoverStone!==i.index&&(this.hoverStone=i.index,this.architecture.setStoneHover(i.index),this.water.setHover(i.x,i.y,1)),this.setCursor("stone");return}if(this.clearStoneHover(),this.pickHouseHit()){this.setCursor("house");return}if(this.pickWater(t,e)){this.setCursor("water");return}if(this.pickSide(t,e)){this.setCursor("tilt");return}this.setCursor("none")}clearStoneHover(){this.hoverStone>=0&&(this.hoverStone=-1,this.architecture.setStoneHover(-1),this.water.setHover(0,0,0))}setCursor(t){const e=this.renderer.domElement;e.classList.toggle("is-water",t==="water"),e.classList.toggle("is-tilt",t==="tilt"),e.classList.toggle("is-dragging",t==="drag"||t==="orbit"),e.classList.toggle("is-point",t==="tower"||t==="bridge"||t==="stone"||t==="lantern"||t==="boat"),e.classList.toggle("is-house",t==="house")}pickWater(t,e){this.updateRay(t,e);const n=new jt().copy(this.worldRoot.matrixWorld).invert(),i=this.raycaster.ray.clone().applyMatrix4(n);if(i.direction.normalize(),Math.abs(i.direction.z)<1e-4)return null;const o=(this.water.tide-i.origin.z)/i.direction.z;if(o<=0)return null;const r=i.origin.clone().addScaledVector(i.direction,o);return!this.river.isWater(r.x,r.y,-.02)||r.z<Ht.bottom||r.z>Ht.top+1.2?null:{x:r.x,y:r.y}}localPlanePoint(t,e,n){this.updateRay(t,e);const i=new jt().copy(this.worldRoot.matrixWorld).invert(),o=this.raycaster.ray.clone().applyMatrix4(i);if(o.direction.normalize(),Math.abs(o.direction.z)<1e-4)return null;const r=(n-o.origin.z)/o.direction.z;return r<=0?null:o.origin.clone().addScaledVector(o.direction,r)}pickStoneHit(){const t=this.raycaster.intersectObject(this.architecture.tiaoyan,!1)[0];if(!t)return null;const e=this.worldRoot.worldToLocal(t.point.clone());let n=-1,i=1/0;return this.architecture.tiaoyanStones.forEach((o,r)=>{const a=Math.hypot(o.x-e.x,o.y-e.y);a<i&&(i=a,n=r)}),n<0||i>1.1?null:{index:n,x:e.x,y:e.y,distance:t.distance}}pickHouseHit(){const t=this.raycaster.intersectObjects(this.architecture.houses,!1);for(const e of t)if(e.instanceId!==void 0&&e.object instanceof bn&&e.object.visible)return{mesh:e.object,index:e.instanceId,distance:e.distance};return null}pickSide(t,e){this.updateRay(t,e);const n=this.raycaster.intersectObject(this.picker,!1);if(n.length===0)return!1;const i=this.worldRoot.worldToLocal(n[0].point.clone());return i.z<Ht.top-.32&&i.z>Ht.bottom-.2}updateRay(t,e){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.pointerNdc,this.camera)}}function O_(s){window.__FH__={app:s,stats:()=>s.getStats(),setFlavor:t=>s.setFlavor(t),splash:(t,e,n=1)=>s.addRippleAtNormalized(t,e,n)}}function $s(s,t){const e=document.querySelector("#loaderPct"),n=document.querySelector("#loaderBar"),i=document.querySelector("#loaderWord");e&&(e.textContent=`${String(Math.max(0,Math.min(100,Math.round(s)))).padStart(2,"0")}%`),n&&(n.style.width=`${Math.max(0,Math.min(100,s))}%`),i&&t&&(i.textContent=t)}function ic(s,t){const e=document.querySelector("#loader");if(!e)return;e.classList.remove("is-done");const n=e.querySelector(".loader-inner");n&&(n.innerHTML=`
    <p class="loader-kicker">FENGHUANG&nbsp;&nbsp;/&nbsp;&nbsp;TUOJIANG</p>
    <div style="font-family: var(--ui-serif); font-size: 20px; letter-spacing: .08em; line-height: 1.7; text-align: center;">${s}</div>
    <p style="margin: 20px 0 0; max-width: 250px; color: var(--ink-soft); font-size: 11px; line-height: 1.9; letter-spacing: .06em; text-align: center;">${t}</p>
    <p style="margin: 28px 0 0; color: var(--ink-faint); font-size: 9px; letter-spacing: .16em; text-align: center;">需要支持 WebGL2 的现代浏览器</p>
  `)}async function sc(){await new Promise(s=>{requestAnimationFrame(()=>{window.setTimeout(s,8)})})}function k_(){window.setTimeout(()=>{if(typeof FontFace>"u")return;const s=new FontFace("Noto Serif SC Lo","url('./fonts/noto-serif-sc-subset.min.woff2') format('woff2')",{weight:"100 900",style:"normal"}),t=new FontFace("Geist","url('./fonts/geist.woff2') format('woff2')",{weight:"400",style:"normal"});s.load().then(e=>document.fonts.add(e)).catch(()=>{}),t.load().then(e=>document.fonts.add(e)).catch(()=>{})},900)}async function B_(){const s=performance.now(),t=document.querySelector("#scene");if(!t){ic("沙盘画布没有就位","请刷新页面后再试。");return}$s(6,"正在凝聚"),$s(17),await sc();let e;try{$s(29,"正在铺开沱江"),e=new N_(t)}catch(o){console.error(o);const r=o instanceof Error&&o.message.includes("WebGL2")?"这块果冻需要 WebGL2":"沙盘没能凝固";ic(r,"换用较新的 Chrome、Edge 或 Safari，并确认浏览器已开启硬件加速。");return}const n=performance.now();O_(e),$s(43,"正在注入江水"),await e.warmup(o=>{e.ui.setProgress(o)}),e.start(),await sc(),e.ui.setProgress(99,"最后一滴水"),e.ui.completeLoading();const i=performance.now();window.__FH_READY_AT__=i,window.__FH_BOOT_TIMING__={pageStartMs:Math.round(s),constructedMs:Math.round(n-s),readyMs:Math.round(i)},window.setTimeout(()=>{e.ui.showToast("拖一拖水面，它会回弹",2600)},900),k_()}B_();
