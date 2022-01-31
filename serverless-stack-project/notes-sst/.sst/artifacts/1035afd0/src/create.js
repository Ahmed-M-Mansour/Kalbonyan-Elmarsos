var me=Object.create;var O=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var ge=Object.getOwnPropertyNames;var xe=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty;var B=e=>O(e,"__esModule",{value:!0});var i=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),he=(e,t)=>{B(e);for(var u in t)O(e,u,{get:t[u],enumerable:!0})},Ae=(e,t,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ge(t))!qe.call(e,r)&&r!=="default"&&O(e,r,{get:()=>t[r],enumerable:!(u=ye(t,r))||u.enumerable});return e},w=e=>Ae(B(O(e!=null?me(xe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=i((T,J)=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.default=Pe;var Me=De(require("crypto"));function De(e){return e&&e.__esModule?e:{default:e}}function Pe(){return Me.default.randomBytes(16)}J.exports=T.default});var R=i((p,j)=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.default=void 0;var W=[];for(_=0;_<256;++_)W[_]=(_+256).toString(16).substr(1);var _;function Oe(e,t){var u=t||0,r=W;return[r[e[u++]],r[e[u++]],r[e[u++]],r[e[u++]],"-",r[e[u++]],r[e[u++]],"-",r[e[u++]],r[e[u++]],"-",r[e[u++]],r[e[u++]],"-",r[e[u++]],r[e[u++]],r[e[u++]],r[e[u++]],r[e[u++]],r[e[u++]]].join("")}var we=Oe;p.default=we;j.exports=p.default});var K=i((m,G)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.default=void 0;var Te=z(S()),Re=z(R());function z(e){return e&&e.__esModule?e:{default:e}}var F,I,C=0,N=0;function Ue(e,t,u){var r=t&&u||0,a=t||[];e=e||{};var n=e.node||F,f=e.clockseq!==void 0?e.clockseq:I;if(n==null||f==null){var l=e.random||(e.rng||Te.default)();n==null&&(n=F=[l[0]|1,l[1],l[2],l[3],l[4],l[5]]),f==null&&(f=I=(l[6]<<8|l[7])&16383)}var o=e.msecs!==void 0?e.msecs:new Date().getTime(),d=e.nsecs!==void 0?e.nsecs:N+1,s=o-C+(d-N)/1e4;if(s<0&&e.clockseq===void 0&&(f=f+1&16383),(s<0||o>C)&&e.nsecs===void 0&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");C=o,N=d,I=f,o+=122192928e5;var M=((o&268435455)*1e4+d)%4294967296;a[r++]=M>>>24&255,a[r++]=M>>>16&255,a[r++]=M>>>8&255,a[r++]=M&255;var D=o/4294967296*1e4&268435455;a[r++]=D>>>8&255,a[r++]=D&255,a[r++]=D>>>24&15|16,a[r++]=D>>>16&255,a[r++]=f>>>8|128,a[r++]=f&255;for(var P=0;P<6;++P)a[r+P]=n[P];return t||(0,Re.default)(a)}var Se=Ue;m.default=Se;G.exports=m.default});var k=i(c=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.default=Ee;c.URL=c.DNS=void 0;var Ie=Ce(R());function Ce(e){return e&&e.__esModule?e:{default:e}}function Ne(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,function(u){t.push(parseInt(u,16))}),t}function ke(e){e=unescape(encodeURIComponent(e));for(var t=new Array(e.length),u=0;u<e.length;u++)t[u]=e.charCodeAt(u);return t}var Q="6ba7b810-9dad-11d1-80b4-00c04fd430c8";c.DNS=Q;var V="6ba7b811-9dad-11d1-80b4-00c04fd430c8";c.URL=V;function Ee(e,t,u){var r=function(a,n,f,l){var o=f&&l||0;if(typeof a=="string"&&(a=ke(a)),typeof n=="string"&&(n=Ne(n)),!Array.isArray(a))throw TypeError("value must be an array of bytes");if(!Array.isArray(n)||n.length!==16)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var d=u(n.concat(a));if(d[6]=d[6]&15|t,d[8]=d[8]&63|128,f)for(var s=0;s<16;++s)f[o+s]=d[s];return f||(0,Ie.default)(d)};try{r.name=e}catch(a){}return r.DNS=Q,r.URL=V,r}});var Y=i((y,X)=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.default=void 0;var Le=He(require("crypto"));function He(e){return e&&e.__esModule?e:{default:e}}function Be(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Le.default.createHash("md5").update(e).digest()}var Je=Be;y.default=Je;X.exports=y.default});var b=i((g,$)=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.default=void 0;var We=Z(k()),je=Z(Y());function Z(e){return e&&e.__esModule?e:{default:e}}var ze=(0,We.default)("v3",48,je.default),Fe=ze;g.default=Fe;$.exports=g.default});var te=i((x,re)=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default=void 0;var Ge=ee(S()),Ke=ee(R());function ee(e){return e&&e.__esModule?e:{default:e}}function Qe(e,t,u){var r=t&&u||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||Ge.default)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t)for(var n=0;n<16;++n)t[r+n]=a[n];return t||(0,Ke.default)(a)}var Ve=Qe;x.default=Ve;re.exports=x.default});var ae=i((q,ue)=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var Xe=Ye(require("crypto"));function Ye(e){return e&&e.__esModule?e:{default:e}}function Ze(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Xe.default.createHash("sha1").update(e).digest()}var $e=Ze;q.default=$e;ue.exports=q.default});var de=i((h,fe)=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.default=void 0;var be=ne(k()),er=ne(ae());function ne(e){return e&&e.__esModule?e:{default:e}}var rr=(0,be.default)("v5",80,er.default),tr=rr;h.default=tr;fe.exports=h.default});var le=i(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});Object.defineProperty(v,"v1",{enumerable:!0,get:function(){return ur.default}});Object.defineProperty(v,"v3",{enumerable:!0,get:function(){return ar.default}});Object.defineProperty(v,"v4",{enumerable:!0,get:function(){return nr.default}});Object.defineProperty(v,"v5",{enumerable:!0,get:function(){return fr.default}});var ur=U(K()),ar=U(b()),nr=U(te()),fr=U(de());function U(e){return e&&e.__esModule?e:{default:e}}});he(exports,{main:()=>dr});var pe=w(le());var ie=w(require("util")),oe=w(require("aws-sdk")),E;oe.default.config.logger={log:L};function L(){E.push({date:new Date,string:ie.default.format.apply(null,arguments)})}function se(e){E=[],L("API event",{body:e.body,pathParameters:e.pathParameters,queryStringParameters:e.queryStringParameters})}function ce(e){E.forEach(({date:t,string:u})=>console.debug(t,u)),console.error(e)}function H(e){return async function(t,u){let r,a;se(t);try{r=await e(t,u),a=200}catch(n){ce(n),r={error:n.message},a=500}return{statusCode:a,body:JSON.stringify(r),headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}}}var ve=w(require("aws-sdk")),A=new ve.default.DynamoDB.DocumentClient,_e={get:e=>A.get(e).promise(),put:e=>A.put(e).promise(),query:e=>A.query(e).promise(),update:e=>A.update(e).promise(),delete:e=>A.delete(e).promise()};var dr=H(async e=>{let t=JSON.parse(e.body),u={TableName:process.env.TABLE_NAME,Item:{userId:e.requestContext.authorizer.iam.cognitoIdentity.identityId,noteId:pe.v1(),content:t.content,attachment:t.attachment,createdAt:Date.now()}};return await _e.put(u),u.Item});0&&(module.exports={main});
//# sourceMappingURL=create.js.map
