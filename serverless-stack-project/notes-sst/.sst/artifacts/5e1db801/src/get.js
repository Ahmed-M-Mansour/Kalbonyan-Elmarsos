var w=Object.create;var a=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var p=e=>a(e,"__esModule",{value:!0});var P=(e,t)=>{p(e);for(var r in t)a(e,r,{get:t[r],enumerable:!0})},q=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of I(t))!C.call(e,o)&&o!=="default"&&a(e,o,{get:()=>t[o],enumerable:!(r=A(t,o))||r.enumerable});return e},s=e=>q(p(a(e!=null?w(x(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);P(exports,{main:()=>D});var c=s(require("util")),f=s(require("aws-sdk")),u;f.default.config.logger={log:d};function d(){u.push({date:new Date,string:c.default.format.apply(null,arguments)})}function g(e){u=[],d("API event",{body:e.body,pathParameters:e.pathParameters,queryStringParameters:e.queryStringParameters})}function y(e){u.forEach(({date:t,string:r})=>console.debug(t,r)),console.error(e)}function m(e){return async function(t,r){let o,i;g(t);try{o=await e(t,r),i=200}catch(l){y(l),o={error:l.message},i=500}return{statusCode:i,body:JSON.stringify(o),headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}}}}var h=s(require("aws-sdk")),n=new h.default.DynamoDB.DocumentClient,b={get:e=>n.get(e).promise(),put:e=>n.put(e).promise(),query:e=>n.query(e).promise(),update:e=>n.update(e).promise(),delete:e=>n.delete(e).promise()};var D=m(async e=>{let t={TableName:process.env.TABLE_NAME,Key:{userId:e.requestContext.authorizer.iam.cognitoIdentity.identityId,noteId:e.pathParameters.id}},r=await b.get(t);if(!r.Item)throw new Error("Item not found.");return r.Item});0&&(module.exports={main});
//# sourceMappingURL=get.js.map