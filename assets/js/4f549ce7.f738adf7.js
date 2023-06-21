"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9377],{3905:(a,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>g});var o=r(7294);function t(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function n(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.push.apply(r,o)}return r}function l(a){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){t(a,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))}))}return a}function i(a,e){if(null==a)return{};var r,o,t=function(a,e){if(null==a)return{};var r,o,t={},n=Object.keys(a);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(t[r]=a[r]);return t}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(t[r]=a[r])}return t}var s=o.createContext({}),p=function(a){var e=o.useContext(s),r=e;return a&&(r="function"==typeof a?a(e):l(l({},e),a)),r},c=function(a){var e=p(a.components);return o.createElement(s.Provider,{value:e},a.children)},m="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(a,e){var r=a.components,t=a.mdxType,n=a.originalType,s=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),m=p(r),d=t,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(g,l(l({ref:e},c),{},{components:r})):o.createElement(g,l({ref:e},c))}));function g(a,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=a,i[m]="string"==typeof a?a:t,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8152:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),t=(r(7294),r(3905));const n={},l="L\xf3gica de programa\xe7\xe3o",i={unversionedId:"Introducao/Logica_de_programacao",id:"Introducao/Logica_de_programacao",title:"L\xf3gica de programa\xe7\xe3o",description:"O qu\xea \xe9 a l\xf3gica?",source:"@site/docs/01-Introducao/02-Logica_de_programacao.md",sourceDirName:"01-Introducao",slug:"/Introducao/Logica_de_programacao",permalink:"/algoritmos/docs/Introducao/Logica_de_programacao",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/01-Introducao/02-Logica_de_programacao.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introdu\xe7\xe3o a algoritmos",permalink:"/algoritmos/docs/Introducao/"},next:{title:"Linguagem de programa\xe7\xe3o",permalink:"/algoritmos/docs/Introducao/Linguagem_de_programacao"}},s={},p=[{value:"Algoritmo",id:"algoritmo",level:2}],c={toc:p},m="wrapper";function u(a){let{components:e,...r}=a;return(0,t.kt)(m,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"l\xf3gica-de-programa\xe7\xe3o"},"L\xf3gica de programa\xe7\xe3o"),(0,t.kt)("p",null,"O qu\xea \xe9 a l\xf3gica?"),(0,t.kt)("p",null,'Estuda a "corre\xe7\xe3o do racioc\xednio", tem em vista a "ordem da raz\xe3o"',(0,t.kt)("br",{parentName:"p"}),"\n","(Forbellone, 2006, pg 1)."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplos")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Todo mam\xedfero \xe9 um animal.\nTodo cavalo \xe9 um mam\xedfero.\nPortanto, Todo cavalo \xe9 um animal\n")),(0,t.kt)("p",null,"(Forbellone, 2006, pg 1)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Paran\xe1 um estado do Brasil.\nTodos os cascavelenses s\xe3o paranaenses.\nLogo, todos os cascavelenses s\xe3o brasileiros.\n")),(0,t.kt)("p",null,"A L\xf3gica de programa\xe7\xe3o consiste na ordem da raz\xe3o e organiza\xe7\xe3o de processos de racioc\xednio e simboliza\xe7\xe3o formais na programa\xe7\xe3o de sistemas computacionais."),(0,t.kt)("h2",{id:"algoritmo"},"Algoritmo"),(0,t.kt)("p",null,"Um ",(0,t.kt)("strong",{parentName:"p"},"algoritmo")," \xe9 uma sequ\xeancia de passos organizada, de maneira que a ",(0,t.kt)("strong",{parentName:"p"},"execu\xe7\xe3o")," dos passos possibilita atingir um objetivo."),(0,t.kt)("p",null,"Junto \xe0 id\xe9ia de algoritmo vem a no\xe7\xe3o de ",(0,t.kt)("strong",{parentName:"p"},"ordem"),", na execu\xe7\xe3o dos passos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Como far\xedamos para trocar uma l\xe2mpada?")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Resposta"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"pegar uma escada\ncolocar a escada abaixo da l\xe2mpada\npegar uma l\xe2mpada nova\nsubir na escada\nretirar a l\xe2mpada velha\ncolocar a l\xe2mpada nova\n"))),(0,t.kt)("mermaid",{value:'flowchart TD;\n  inicio(In\xedcio)\n  processamento["Pegar uma escada"<br>colocar a escada abaixo da lampada<br>pegar uma lampada nova<br>subir na escada<br>retirar a lampada velha<br>colocar a lampada nova]\n  fim(Fim)\n  inicio --\x3e processamento\n  processamento --\x3efim'}),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exerc\xedcio")),(0,t.kt)("p",null,"Abaixo h\xe1 um algoritmo para trocar uma l\xe2mpada."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Ele resolve o problema?"),(0,t.kt)("li",{parentName:"ul"},"O que h\xe1 de errado?")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"colocar a escada abaixo da l\xe2mpada\npegar uma escada\nretirar a l\xe2mpada velha\nsubir na escada\ncolocar a l\xe2mpada nova\npegar uma l\xe2mpada nova\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-{dropdown}",metastring:"Resposta",Resposta:!0},"A ordem est\xe1 incorreta. O algoritmo n\xe3o resolve o problema, visto que n\xe3o ir\xe1 executar corretamente.\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exerc\xedcio"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Tr\xeas senhoras - dona Branca, dona Rosa e dona Violeta - passeavam pelo parque quando dona Rosa disse:"),(0,t.kt)("li",{parentName:"ul"},"N\xe3o \xe9 curioso que estejamos usando vestidos de cores branca, rosa e violeta, embora nenhuma de n\xf3s esteja usando um vestido de cor igual ao seu pr\xf3prio nome?"),(0,t.kt)("li",{parentName:"ul"},"Uma simples coincid\xeancia - respondeu a senhora com vestido violeta.")),(0,t.kt)("p",null,"Qual a cor do vestido de cada senhora?  "),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/"},"Forbellone, 2006, pg 12")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exerc\xedcios")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Desenvolva um algoritmo para fazer caf\xe9."),(0,t.kt)("li",{parentName:"ul"},"Desenvolva um algoritmo para fazer um omelete."),(0,t.kt)("li",{parentName:"ul"},"Desenvolva um algoritmo para trocar o pneu de um carro.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Refer\xeancias")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/"},"Forbellone, Andr\xe9 Luiz Villar; Ebersp\xe4tcher, Henri Frederico. L\xf3gica de programa\xe7\xe3o: a constru\xe7\xe3o de algoritmos e estruturas de dados. 4.ed. S\xe3o Paulo: Pearson Prentice Hall, 2022."))))}u.isMDXComponent=!0}}]);