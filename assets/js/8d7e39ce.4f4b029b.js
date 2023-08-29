"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[521],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>I});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=l,I=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return t?n.createElement(I,r(r({ref:a},c),{},{components:t})):n.createElement(I,r({ref:a},c))}));function I(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:l,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(6010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(7462),l=t(7294),i=t(6010),r=t(2466),s=t(6550),o=t(1980),d=t(7392),c=t(12);function m(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function u(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function I(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(i),(0,l.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=u(e),[r,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[o,d]=I({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,c.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),Z=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{Z&&s(Z)}),[Z]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var Z=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:s,selectValue:o,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),u=e=>{const a=e.currentTarget,t=c.indexOf(a),n=d[t].value;n!==s&&(m(a),o(n))},p=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},d.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:p,onClick:u},r,{className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function G(e){const a=b(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},l.createElement(v,(0,n.Z)({},e,a)),l.createElement(y,(0,n.Z)({},e,a)))}function h(e){const a=(0,Z.Z)();return l.createElement(G,(0,n.Z)({key:String(a)},e))}},1563:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>I,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=t(7462),l=(t(7294),t(3905)),i=t(4866),r=t(5162);const s={},o="Matrizes",d={unversionedId:"Vetores_e_registros/Matrizes",id:"Vetores_e_registros/Matrizes",title:"Matrizes",description:"Chamaremos de matrizes \xe0s vari\xe1veis compostas multimensionais com duas dimens\xf5es. Os casos de mais dimens\xf5es ser\xe3o abordados mais adiante.",source:"@site/docs/06-Vetores_e_registros/03-Matrizes.md",sourceDirName:"06-Vetores_e_registros",slug:"/Vetores_e_registros/Matrizes",permalink:"/algoritmos/docs/Vetores_e_registros/Matrizes",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/06-Vetores_e_registros/03-Matrizes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vetores",permalink:"/algoritmos/docs/Vetores_e_registros/Vetores"},next:{title:"Registros",permalink:"/algoritmos/docs/Vetores_e_registros/Registros"}},c={},m=[{value:"Aloca\xe7\xe3o est\xe1tica",id:"aloca\xe7\xe3o-est\xe1tica",level:2},{value:"Acesso a elementos",id:"acesso-a-elementos",level:2},{value:"Aloca\xe7\xe3o din\xe2mica",id:"aloca\xe7\xe3o-din\xe2mica",level:2},{value:"n dimens\xf5es",id:"n-dimens\xf5es",level:2}],u={toc:m},p="wrapper";function I(e){let{components:a,...s}=e;return(0,l.kt)(p,(0,n.Z)({},u,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"matrizes"},"Matrizes"),(0,l.kt)("p",null,"Chamaremos de ",(0,l.kt)("strong",{parentName:"p"},"matrizes")," \xe0s vari\xe1veis compostas multimensionais com duas dimens\xf5es. Os casos de mais dimens\xf5es ser\xe3o abordados mais adiante."),(0,l.kt)("p",null,"Diferente dos vetores, que s\xe3o vari\xe1veis compostas unidimensionais, ou seja, possuem um ",(0,l.kt)("strong",{parentName:"p"},"\xfanico \xedndice")," para acessar o elemento armazenado, as matrizes s\xe3o vetores ",(0,l.kt)("strong",{parentName:"p"},"multimensionais"),". Ou seja, para que um elemento possa ser acessado \xe9 necess\xe1rio que ",(0,l.kt)("strong",{parentName:"p"},"mais de um \xedndice")," seja informado."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exemplo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\xedndices em vari\xe1vel composta unidimensional (",(0,l.kt)("strong",{parentName:"li"},"vetor"),") de 4 posi\xe7\xf5es:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Matrizes",src:t(6096).Z,width:"281",height:"41"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exemplo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\xedndices em vari\xe1vel composta ",(0,l.kt)("strong",{parentName:"li"},"bidimensional")," (",(0,l.kt)("strong",{parentName:"li"},"matriz"),") de 4 linhas e 4 colunas:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Matrizes",src:t(8939).Z,width:"351",height:"101"})),(0,l.kt)("h2",{id:"aloca\xe7\xe3o-est\xe1tica"},"Aloca\xe7\xe3o est\xe1tica"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sintaxe")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"<tipo> [][]: <nome> = {{<valores>}, .. ,{<valores>}}\n"))),(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<tipo>[][] <nome> = { { <valores> }, .. ,{ <valores> } };\n"))),(0,l.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<nome> = [ [ <valores> ], .. ,[ <valores> ] ]\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exemplo")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"inteiro [][]: idade = {{20, 22, 18, 40},{37, 20, 12, 65}};                  //armazena informa\xe7\xf5es de idade de 2 grupos com 4 pessoas cada grupo\nreal [][]: altura {{1.62, 1.10,  0.23, 1,80} , {1,42, ,1.20, 0.90, 1.40} }; //armazena informa\xe7\xf5es da altura de 2 grupos com 4 pessoas cada grupo\nlogico [][] : porta_aberta = {{verdadeiro, falso}, {falso, verdadeiro}};    //armazena informa\xe7\xf5es sobre portas em 2 andares\n"))),(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"int[][] idade = { { 1, 2, 3 }, { 4, 5, 6 } };                                 //armazena informa\xe7\xf5es de idade de 2 grupos com 4 pessoas cada grupo\nfloat [][] altura = {{1.62, 1.10,  0.23, 1,80} , {1,42, ,1.20, 0.90, 1.40} }; //armazena informa\xe7\xf5es da altura de 2 grupos com 4 pessoas cada grupo\nboolean [][] porta_aberta = {{true, false}, {false, true}};                   //armazena informa\xe7\xf5es sobre portas em 2 andares\n"))),(0,l.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"idade = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]                               #armazena informa\xe7\xf5es de idade de 2 grupos com 4 pessoas cada grupo\naltura = [ [1.62, 1.10,  0.23, 1,80] , [1,42, ,1.20, 0.90, 1.40]]; #armazena informa\xe7\xf5es da altura de 2 grupos com 4 pessoas cada grupo\nporta_aberta = [ [True, False], [False, True] ];                   #armazena informa\xe7\xf5es sobre portas em 2 andares\n\n")))),(0,l.kt)("h2",{id:"acesso-a-elementos"},"Acesso a elementos"),(0,l.kt)("p",null,"Para acessar os elementos nas matrizes, \xe9 necess\xe1rio informarmos os \xedndices referentes a cada ",(0,l.kt)("strong",{parentName:"p"},"linha")," e ",(0,l.kt)("strong",{parentName:"p"},"coluna")," da matriz."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exemplo")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"//matriz com 2 linhas e 4 colunas\ninteiro [][]: idade = {{20, 22, 18, 40},{37, 20, 12, 65}};\nescreva(idade[0][0]) //20\nescreva(idade[0][1]) //22\nescreva(idade[0][2]) //18\nescreva(idade[0][3]) //40\nescreva(idade[1][0]) //37\nescreva(idade[1][1]) //20\nescreva(idade[1][2]) //12\nescreva(idade[1][3]) //65\n")),(0,l.kt)("p",null,"  ou ent\xe3o utilizando estruturas de repeti\xe7\xe3o:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"//matriz com 2 linhas e 4 colunas\ninteiro [][]: idade = {{20, 22, 18, 40},{37, 20, 12, 65}};\ninteiro n_linhas = 2, n_colunas = 4, i, j;\npara i de 0 at\xe9 n_linhas -1 passo 1 fa\xe7a:\n  para j de 0 at\xe9 n_colunas -1 passo 1 fa\xe7a:\n      escreva(idade[i][j])\n  fimpara;\nfimpara;\n"))),(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//matriz com 2 linhas e 4 colunas\nint[][] idade = { { 20, 22, 18, 40 }, { 37, 20, 12, 65 } };\nSystem.out.println(idade[0][0]) //20\nSystem.out.println(idade[0][1]) //22\nSystem.out.println(idade[0][2]) //18\nSystem.out.println(idade[0][3]) //40\nSystem.out.println(idade[0][0]) //37\nSystem.out.println(idade[0][1]) //20\nSystem.out.println(idade[0][2]) //12\nSystem.out.println(idade[0][3]) //65\n")),(0,l.kt)("p",null,"  ou ent\xe3o utilizando estruturas de repeti\xe7\xe3o:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//matriz com 2 linhas e 4 colunas\nint[][] idade = { { 20, 22, 18, 40 }, { 37, 20, 12, 65 } };\nint n_linhas = 2,n_colunas = 4, i, j;\nfor(i=0;i<n_linhas, i++){\n  for(j=0;j<n_linhas;j++){\n      System.out.printf("%d ", idade[i][j]);\n  }\n  System.out.println("")\n}\n'))),(0,l.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# vetor com 2 linhas e 3 colunas\nidade = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]\nprint(idade[0][0])\nprint(idade[0][1])\nprint(idade[0][2])\nprint(idade[1][0])\nprint(idade[1][1])\nprint(idade[1][2])\n")),(0,l.kt)("p",null,"  ou ent\xe3o utilizando estruturas de repeti\xe7\xe3o:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# vetor com 2 linhas e 3 colunas\nidade = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]\nfor i in range(2):\n  for j in range(3):\n    print(idade[i][j])\n")))),(0,l.kt)("p",null,"Observe que ao utilizar estruturas de repeti\xe7\xe3o aninhadas. Uma estrutura de repeti\xe7\xe3o ",(0,l.kt)("strong",{parentName:"p"},"para cada dimens\xe3o"),"."),(0,l.kt)("h2",{id:"aloca\xe7\xe3o-din\xe2mica"},"Aloca\xe7\xe3o din\xe2mica"),(0,l.kt)("p",null,"A aloca\xe7\xe3o din\xe2mica permite que a matriz seja criada durante a execu\xe7\xe3o do algoritmo."),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<tipo>[][] <nome>;\n\n<nome> = new tipo[<n\xfamero de linhas>][<n\xfamero de colunas>];\n")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Exemplo")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Matriz com 3 linhas e 4 colunas")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//declara\xe7\xe3o\nint[][] matriz;\nint n_linhas = 3, n_colunas = 4;\n\n//aloca\xe7\xe3o\nmatriz = new int[n_linhas][n_colunas];\n")))),(0,l.kt)("h2",{id:"n-dimens\xf5es"},"n dimens\xf5es"))}I.isMDXComponent=!0},8939:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/matrizes.drawio-20a85ad417452ccc11d6a845ed69914f.svg"},6096:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjI4MXB4IiBoZWlnaHQ9IjQxcHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSAyODEgNDEiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjMtMDgtMTFUMTM6Mzc6NDQuNTMxWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE0LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgZXRhZz0mcXVvdDs5alRvQnM1TFh3MXo4X3dxU0dZaCZxdW90OyB2ZXJzaW9uPSZxdW90OzIwLjcuNCZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyBpZD0mcXVvdDtmYzJhYzU2NS0wZDRlLTNmMGQtODhiMC1hNTRhZjE2MzRlZDcmcXVvdDsmZ3Q7MVpiTGNvSXdGSWFmaHFVZElBaTZMYlYyT3Iwc1hIUzZUQ1VDR29pTlViRlAzMGhPdUppeHJRc0h5b2JrUHljNXlaZC9JQllLczJMSzhUcDVaaEdobG10SGhZWHVMTmQxSEc4a1gwZmxvQlEvOEpVUTh6U0NwRnFZcFY4RVJCdlViUnFSVFN0Uk1FWkZ1bTZMYzViblpDNlVCbU14NTJ6ZlRsc3cycTY2eGpFeGhOa2NVNjNlREd2OUxZMUVvbmZtait2QUEwbmpCSXFQM0VBRlB2QjhGWE8yemFGaXpuS2lJaG5XMDhCS053bU8yTDRob1ltRlFzNllVSzJzQ0FrOWd0WE05RGh4MEF1MTBHMGlNaW83am15VzRmc3pnNTIvREpiNzRpUnZBVDAzbi84NmVBOC9CMHY2TkkxM252M292VXlXQThlR01qdE10N3JNYWQyTjRHeFZZVDNXWHJCY3pDREIvbTFadWdMaGdoUU5DWlk1SlN3amdoOWtDa1I5Qjg0RzNPZ01BZVMrUHRrQXBLUnhwcFdqd0UxeE5YT05SVGFBekNXVVhKT1NlYlkvWTNMYW1GUnl5Q2pqVWlsTnAvSzFaTGxvWEQ1WFlvbzZaK3IyMEhtajNqblBOeWlaSDRaK08rK1VhZWZPUXoxMFhqRHNtL09RNmJ4TE1YWHNQSU5wOTg0TCt1ZTg2aWJVRytkNTV0OFcvUy9uR1V5djV6elpyVytnWmF4eHgwZVRidz09Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsiPjxkZWZzLz48Zz48cmVjdCB4PSIwIiB5PSIyMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTBweDsgbWFyZ2luLWxlZnQ6IDM1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICM5OTk5OTk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij4wPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM1IiB5PSIxNCIgZmlsbD0iIzk5OTk5OSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+MDwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iNzAiIHk9IjIwIiB3aWR0aD0iNzAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSI3MCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTBweDsgbWFyZ2luLWxlZnQ6IDEwNXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjOTk5OTk5OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogbm93cmFwOyI+MTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxMDUiIHk9IjE0IiBmaWxsPSIjOTk5OTk5IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj4xPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxNDAiIHk9IjIwIiB3aWR0aD0iNzAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxNDAiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMXB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDEwcHg7IG1hcmdpbi1sZWZ0OiAxNzVweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogIzk5OTk5OTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsiPjI8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTc1IiB5PSIxNCIgZmlsbD0iIzk5OTk5OSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+MjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjEwIiB5PSIyMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMjEwIiB5PSIwIiB3aWR0aD0iNzAiIGhlaWdodD0iMjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMHB4OyBtYXJnaW4tbGVmdDogMjQ1cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICM5OTk5OTk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdoaXRlLXNwYWNlOiBub3dyYXA7Ij4zPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjI0NSIgeT0iMTQiIGZpbGw9IiM5OTk5OTkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPjM8L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+VGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXk8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);