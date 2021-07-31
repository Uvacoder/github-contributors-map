import{d as e,S as n,P as t,W as a,O as o,T as r,a as s,M as l,b as i,w as u,A as c,c as d,r as p,o as h,C as m,e as g,V as b,f,g as v,v as w,h as y,F as k,i as $,j as M,k as S,l as C,t as U,m as R,n as T,p as E}from"./vendor.21b02428.js";import{graphql as P}from"https://cdn.skypack.dev/@octokit/graphql";let I;const _={};var z=e({name:"ThreeCanvas",props:{users:{type:Array,required:!0}},setup(e){const f=new n,v=new t(75,960/540,.1,1e3),w=new a;w.setSize(960,540);const y=new o;let k;f.add(y);const $=new r;$.load("textures/world-map.jpg",(e=>{const n=new s(2.5,32,32),t=new l({map:e,dithering:!0});k=new i(n,t),y.add(k)})),u((()=>e.users),(e=>{y.clear(),y.add(k),e.filter((e=>Boolean(e.geolocation))).forEach((e=>{const{lat:n,lng:t}=e.geolocation,a=function(e,n,t){const a=(90-n)*(Math.PI/180),o=(t+180)*(Math.PI/180),r=new b;return r.x=-e*Math.sin(a)*Math.cos(o),r.z=e*Math.sin(a)*Math.sin(o),r.y=e*Math.cos(a),r}(2.6,n,t);$.load(e.avatarUrl,(e=>{const n=new m(.2,32),t=new g({map:e}),o=new i(n,t);o.position.set(a.x,a.y,a.z),y.add(o)}))}))}),{deep:!0});const M=new c(16777215,.1);f.add(M);const S=new d(16777215,1);S.position.set(40,15,40),S.angle=Math.PI/4,S.penumbra=.1,S.decay=2,S.distance=200,S.castShadow=!0,S.shadow.mapSize.width=512,S.shadow.mapSize.height=512,S.shadow.camera.near=10,S.shadow.camera.far=200,S.shadow.focus=1,f.add(S),v.position.z=5;const C=p(.003);return function e(){if(requestAnimationFrame(e),k){y.rotation.y-=C.value;for(const e of y.children)e instanceof i&&"CircleGeometry"===e.geometry.type&&(e.rotation.y+=C.value)}w.render(f,v)}(),h((()=>{const e=document.getElementById("canvas");e&&(e.innerHTML="",e.appendChild(w.domElement))})),{rotationSpeed:C}}});const G=y("label",{for:"rotation-speed"},"Rotation speed:",-1),L=y("div",{id:"canvas"},null,-1);function q(e,n,t){console.log(`Found (${e}): ${n.name}, "${n.location}" -> "${t.city}", "${t.adminName}", "${t.country}" (${t.lat}, ${t.lng})`)}z.render=function(e,n,t,a,o,r){return $(),f(k,null,[G,v(y("input",{id:"rotation-speed","onUpdate:modelValue":n[1]||(n[1]=n=>e.rotationSpeed=n),name:"rotation-speed",type:"number",placeholder:"0.001",step:"0.0001"},null,512),[[w,e.rotationSpeed,void 0,{number:!0}]]),L],64)};var x=e({name:"App",components:{ThreeCanvas:z},setup(){const e=p(""),n=p("vitejs/vite"),t=M((()=>{var e;return null!=(e=n.value.split("/")[0])?e:""})),a=M((()=>{var e;return null!=(e=n.value.split("/")[1])?e:""})),{searchRepositories:o,getMentionableUsers:r}={searchRepositories:({search:e,token:n})=>P("\n        query searchRepositories($search: String!) {\n          search(type: REPOSITORY, query: $search, first: 5) {\n            nodes {\n              ... on Repository {\n                id\n                name\n                owner {\n                  login\n                }\n                nameWithOwner\n              }\n            }\n          }\n        }\n      ",{headers:{authorization:`token ${n}`},search:e}),getMentionableUsers:({owner:e,name:n,token:t,after:a=null})=>P("\n        query getMentionableUsers($owner: String!, $name: String!, $after: String) {\n          repository(owner: $owner, name: $name) {\n            mentionableUsers(first: 100, after: $after) {\n              nodes {\n                id\n                login\n                name\n                avatarUrl\n                location\n                url\n              }\n              pageInfo {\n                hasNextPage\n                endCursor\n              }\n              totalCount\n            }\n          }\n        }\n      ",{headers:{authorization:`token ${t}`},owner:e,name:n,after:a})},s=p([]),l=p([]),i=p(),c=[],d=e=>{let n;const{location:t}=e;if(!t)return n;let a=999;for(const o of c)o.city===t&&a>1?(n={lat:o.lat,lng:o.lng},a=1,q(a,e,o)):o.adminName===t&&a>2?(n={lat:o.lat,lng:o.lng},a=2,q(a,e,o)):o.country===t&&a>3?(n={lat:o.lat,lng:o.lng},a=3,q(a,e,o)):t.includes(o.city)&&a>4?(n={lat:o.lat,lng:o.lng},a=4,q(a,e,o)):o.adminName&&t.includes(o.adminName)&&a>5?(n={lat:o.lat,lng:o.lng},a=5,q(a,e,o)):t.includes(o.country)&&a>6&&(n={lat:o.lat,lng:o.lng},a=6,q(a,e,o));return n};return u([e,n],(async([e,n])=>{if(s.value=[],i.value=void 0,e&&n)try{const t=await o({token:e,search:n});s.value=t.search.nodes.map((e=>e.nameWithOwner))}catch(t){console.error(t),i.value=t.message}})),h((()=>{(function(e,n){if(!n||0===n.length)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(n.map((e=>{if((e=`/github-contributors-map/${e}`)in _)return;_[e]=!0;const n=e.endsWith(".css"),t=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=n?"stylesheet":I,n||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),n?new Promise(((e,n)=>{a.addEventListener("load",e),a.addEventListener("error",n)})):void 0}))).then((()=>e()))})((()=>import("./worldcities.46d1bbb9.js")),[]).then((e=>{c.push(...e.default)}))})),{githubToken:e,search:n,repositories:s,collaborators:l,errorMessage:i,submit:async()=>{if(l.value=[],i.value=void 0,e.value&&t.value&&a.value)try{let n=!0,o=null;const s=[];do{const l=await r({owner:t.value,name:a.value,token:e.value,after:o});n=l.repository.mentionableUsers.pageInfo.hasNextPage,o=l.repository.mentionableUsers.pageInfo.endCursor;const i=l.repository.mentionableUsers.nodes;if(i.length>0){for(const e of i)e.geolocation=d(e);s.push(...i)}}while(n);l.value=s}catch(n){console.error(n),i.value=n.message}}}}});const N=y("h1",null,"GitHub Contributors Map",-1),O=y("p",null,[y("a",{href:"https://github.com/Shinigami92/github-contributors-map",target:"_blank"},"GitHub Repo")],-1),A=y("p",null,[R("You need a GitHub private access token: "),y("a",{href:"https://github.com/settings/tokens/new?description=GitHub%20Contributors%20Map&scopes=public_repo",target:"_blank"},"Generate a personal token")],-1),H=y("label",{for:"personal-github-token"},"Your GitHub Token:",-1),j=y("label",{for:"search-repo"},"Search Repo:",-1),V={id:"repositories"},W=y("button",{type:"submit"},"Search",-1),F=y("h2",null,"Collaborators",-1),Y=y("thead",null,[y("tr",null,[y("th",null,"Avatar"),y("th",null,"Login"),y("th",null,"Name"),y("th",null,"Location"),y("th",null,"URL"),y("th",null,"Geolocation")])],-1);x.render=function(e,n,t,a,o,r){const s=T("ThreeCanvas");return $(),f(k,null,[N,y("div",null,[O,A,y("form",{onSubmit:n[3]||(n[3]=S(((...n)=>e.submit&&e.submit(...n)),["prevent"]))},[H,v(y("input",{id:"personal-github-token","onUpdate:modelValue":n[1]||(n[1]=n=>e.githubToken=n),name:"personal-github-token",placeholder:"ghp_************************************"},null,512),[[w,e.githubToken]]),j,v(y("input",{id:"search-repo","onUpdate:modelValue":n[2]||(n[2]=n=>e.search=n),name:"search-repo",placeholder:"owner/name",list:"repositories"},null,512),[[w,e.search]]),y("datalist",V,[($(!0),f(k,null,C(e.repositories,(e=>($(),f("option",null,U(e),1)))),256))]),W],32)]),e.errorMessage?($(),f("span",{key:1,textContent:U(e.errorMessage)},null,8,["textContent"])):($(),f(k,{key:0},[F,y(s,{users:e.collaborators},null,8,["users"]),y("table",null,[Y,y("tbody",null,[($(!0),f(k,null,C(e.collaborators,(e=>($(),f("tr",{key:e.id},[y("td",null,[y("img",{src:e.avatarUrl,width:"128"},null,8,["src"])]),y("td",null,U(e.login),1),y("td",null,U(e.name),1),y("td",null,U(e.location),1),y("td",null,U(e.url),1),y("td",null,U(e.geolocation),1)])))),128))])])],64))],64)},E(x).mount("#app");
