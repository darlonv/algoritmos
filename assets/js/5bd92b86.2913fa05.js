"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[9333],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),m=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,v=u["".concat(l,".").concat(c)]||u[c]||p[c]||r;return n?t.createElement(v,s(s({ref:a},d),{},{components:n})):t.createElement(v,s({ref:a},d))}));function v(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<r;m++)s[m]=n[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},a)}},4866:(e,a,n)=>{n.d(a,{Z:()=>_});var t=n(7462),o=n(7294),r=n(6010),s=n(2466),i=n(6550),l=n(1980),m=n(7392),d=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:o}}=e;return{value:a,label:n,attributes:t,default:o}}))}function p(e){const{values:a,children:n}=e;return(0,o.useMemo)((()=>{const e=a??u(n);return function(e){const a=(0,m.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function c(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=p(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!c({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[l,m]=v({queryString:n,groupId:t}),[u,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,d.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),k=(()=>{const e=l??u;return c({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,r]),tabValues:r}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:n,selectedValue:i,selectValue:l,tabValues:m}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const a=e.currentTarget,n=d.indexOf(a),t=m[n].value;t!==i&&(u(a),l(t))},c=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a)},m.map((e=>{let{value:a,label:n,attributes:s}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:c,onClick:p},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===a})}),n??a)})))}function N(e){let{lazy:a,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],a){const e=n.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function y(e){const a=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(b,(0,t.Z)({},e,a)),o.createElement(N,(0,t.Z)({},e,a)))}function _(e){const a=(0,k.Z)();return o.createElement(y,(0,t.Z)({key:String(a)},e))}},2549:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var t=n(7462),o=(n(7294),n(3905)),r=n(4866),s=n(5162);const i={},l="Vetores",m={unversionedId:"Vetores_e_registros/Vetores",id:"Vetores_e_registros/Vetores",title:"Vetores",description:"Chamamos de vetores ou arrays \xe0s estruturas de dados que possibilitam armazenar um conjunto de valores de forma organizada e cont\xedgua. Podemos fazer uma analogia com um trem, onde cada vag\xe3o do trem corresponde uma vari\xe1vel, e os vag\xf5es organizados em sequ\xeancia formam o trem. Nesta analogia o trem \xe9 o vetor.",source:"@site/docs/06-Vetores_e_registros/02-Vetores.md",sourceDirName:"06-Vetores_e_registros",slug:"/Vetores_e_registros/Vetores",permalink:"/algoritmos/docs/Vetores_e_registros/Vetores",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/06-Vetores_e_registros/02-Vetores.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vari\xe1veis compostas",permalink:"/algoritmos/docs/Vetores_e_registros/Variaveis_compostas"},next:{title:"Vetores",permalink:"/algoritmos/docs/Vetores_e_registros/Exerc\xedcios/Vetores"}},d={},u=[{value:"Aloca\xe7\xe3o est\xe1tica",id:"aloca\xe7\xe3o-est\xe1tica",level:2},{value:"Acesso a elementos",id:"acesso-a-elementos",level:2},{value:"Aloca\xe7\xe3o din\xe2mica",id:"aloca\xe7\xe3o-din\xe2mica",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],p={toc:u},c="wrapper";function v(e){let{components:a,...n}=e;return(0,o.kt)(c,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vetores"},"Vetores"),(0,o.kt)("p",null,"Chamamos de ",(0,o.kt)("strong",{parentName:"p"},"vetores")," ou ",(0,o.kt)("em",{parentName:"p"},"arrays")," \xe0s estruturas de dados que possibilitam armazenar um conjunto de valores de forma organizada e cont\xedgua. Podemos fazer uma analogia com um trem, onde cada vag\xe3o do trem corresponde uma vari\xe1vel, e os vag\xf5es organizados em sequ\xeancia formam o trem. Nesta analogia o trem \xe9 o vetor."),(0,o.kt)("p",null,"Os vetores s\xe3o fundamentais para o desenvolvimento de algoritmos. Com eles podemos solucionar problemas em que seja necess\xe1rio armazenar informa\xe7\xf5es que estejam relacionadas a uma mesma atividade."),(0,o.kt)("p",null,"Os vetores possuem algumas caracter\xedsticas, o que define como ser\xe1 o vetor. S\xe3o elas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identificador: nome dado ao vetor;"),(0,o.kt)("li",{parentName:"ul"},"Tamanho: quantidade de elementos do vetor;"),(0,o.kt)("li",{parentName:"ul"},"Tipo: tipo de dado que cada elemento do vetor. Todos os elementos do vetor devem possuir o mesmo tipo;")),(0,o.kt)("h2",{id:"aloca\xe7\xe3o-est\xe1tica"},"Aloca\xe7\xe3o est\xe1tica"),(0,o.kt)("p",null,"Inicialmente abordaremos a cria\xe7\xe3o de vetores de maneira est\xe1tica, para compreender o funcionamento. Aqui, sabemos de antem\xe3o o tamanho do vetor, e j\xe1 atribuiremos valores iniciais para cada posi\xe7\xe3o."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sintaxe")),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"<tipo> []: <nome> = {<valores>};\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"inteiro []: idade = {20, 22, 18, 40, 37, 20, 12, 65, 68, 40};                                //armazena informa\xe7\xf5es da idade de 10 pessoas,\nreal []: altura = {1.62, 1.10,  0.23, 1,80, 1,42, ,1.20, 0.90, 1.40 };  //armazena a altura de 8 pessoas\nlogico []: porta_aberta = {verdadeiro, falso, falso, verdadeiro};       //armazena informa\xe7\xf5es sobre 4 portas\n"))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<tipo>[] <nome> = {<valores>};\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"int[] idade = {20, 22, 18, 40, 37, 20, 12, 65, 68, 40}; //armazena informa\xe7\xf5es da idade de 10 pessoas,\nfloat [] altura = {1.62f, 1.10f,  0.23f, 1,80f, 1,42f,1.20f, 0.90f, 1.40f };  //armazena a altura de 8 pessoas\nboolean [] porta_aberta = {true, false, false, true};   //armazena informa\xe7\xf5es sobre 4 portas\n"))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"<nome> = [<valores>]\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"idade = [20, 22, 18, 40, 37, 20, 12, 65, 68, 40]; #armazena informa\xe7\xf5es da idade de 10 pessoas,\naltura = [1.62, 1.10,  0.23, 1,80, 1,42,1.20, 0.90, 1.40 ];  #armazena a altura de 8 pessoas\nporta_aberta = [true, false, false, true];   #armazena informa\xe7\xf5es sobre 4 portas\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Observa\xe7\xe3o"),(0,o.kt)("p",null,"Em Python, abordaremos a estrutura de dados ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," para compreendermos o funcionamento dos vetores. Diferentes dos vetores, as ",(0,o.kt)("inlineCode",{parentName:"p"},"lists")," s\xe3o din\xe2micas e permitem manipula\xe7\xe3o mais complexas que os vetores. Dado isto, aqui daremos foco \xe0s suas caracter\xedsticas est\xe1ticas.")))),(0,o.kt)("h2",{id:"acesso-a-elementos"},"Acesso a elementos"),(0,o.kt)("p",null,"Nos vetores, cada valor possui o seu ",(0,o.kt)("strong",{parentName:"p"},"\xedndice"),". O \xedndice \xe9 uma informa\xe7\xe3o de acesso ao conte\xfado que \xe9 armazenado naquela posi\xe7\xe3o. Em nossa analogia com o trem, o \xedndice pode ser entendido como o n\xfamero do vag\xe3o do trem."),(0,o.kt)("p",null,"Os \xedndices de um vetor s\xe3o valores de ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1"),", em que ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," \xe9 a quantidade total de elementos no vetor."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Observa\xe7\xe3o"),"Neste material, adotamos como sendo `0` o valor inicial do \xedndice dos elementos de um vetor. abordagem \xe9 implementada em grande parte das linguagens de programa\xe7\xe3o. Por\xe9m h\xe1 exce\xe7\xf5es, como Pascal, p.ex.",(0,o.kt)("p",null,"  O livro (FORBELLONE, 2022) tamb\xe9m apresenta em seu conte\xfado vetores com elementos inicializando seu \xedndice com 1.")),(0,o.kt)("p",null,"Para acessar os elementos de um vetor, tanto para acessar o valor como para modific\xe1-lo, a sintaxe \xe9 "),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"<nome>[<\xedndice>]\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"escreva(idade[0]); //20\nescreva(idade[1]); //22\nescreva(idade[7]); //65\nescreva(idade[9]); //40\n\nidade[2] = 14;\nescreva(idade[2]); //14\n")),(0,o.kt)("p",null,"  Neste caso, o vetor ",(0,o.kt)("inlineCode",{parentName:"p"},"idade")," possui 10 elementos, ou seja, seus \xedndices variam de ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"9"),". Acessar elementos utilizando como \xedndice posi\xe7\xf5es n\xe3o existentes, resulta em erro."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"escreva(idade[10]); //ERRO. O vetor possui 10 elementos, ou seja, seus \xedndices v\xe3o de 0 a 9.\nescreva(idade[20]); //ERRO\n\nidade[10] = 50; //ERRO\nidade[30] = 26; //ERRO\n"))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<nome>[<\xedndice>]\n")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"System.out.println(idade[0]); //20\nSystem.out.println(idade[1]); //22\nSystem.out.println(idade[7]); //65\nSystem.out.println(idade[9]); //40\n\nidade[2] = 14;\nSystem.out.println(idade[2]); //14\n")),(0,o.kt)("p",null,"  Neste caso, o vetor ",(0,o.kt)("inlineCode",{parentName:"p"},"idade")," possui 10 elementos, ou seja, seus \xedndices variam de ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"9"),". Acessar elementos utilizando como \xedndice posi\xe7\xf5es n\xe3o existentes, resulta em erro."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"System.out.println(idade[10]); //ERRO. O vetor possui 10 elementos, ou seja, seus \xedndices v\xe3o de 0 a 9.\nSystem.out.println(idade[20]); //ERRO\n\nidade[10] = 50; //ERRO\nidade[30] = 26; //ERRO\n"))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(idade[0]) #20\nprint(idade[1]) #22\nprint(idade[7]) #65\nprint(idade[9]) #40\n\nidade[2] = 14\nprint(idade[2]) #14\n")),(0,o.kt)("p",null,"  Neste caso, o vetor ",(0,o.kt)("inlineCode",{parentName:"p"},"idade")," possui 10 elementos, ou seja, seus \xedndices variam de ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"9"),". Acessar elementos utilizando como \xedndice posi\xe7\xf5es n\xe3o existentes, resulta em erro."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(idade[10]); #ERRO. O vetor possui 10 elementos, ou seja, seus \xedndices v\xe3o de 0 a 9.\nprint(idade[20]); #ERRO\n\nidade[10] = 50; #ERRO\nidade[30] = 26; #ERRO\n")))),(0,o.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"N\xe3o confundir o ",(0,o.kt)("strong",{parentName:"p"},"\xedndice")," com o ",(0,o.kt)("strong",{parentName:"p"},"conte\xfado")," dos elementos do vetor.")),(0,o.kt)("p",null,"Para ilustrar um exemplo de problema que pode ser resolvido com vetores, tomemos o seguinte exemplo:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pe\xe7a ao usu\xe1rio que digite 5 notas (valores de 0 a 100), que correspondem \xe0s notas obtidas em determinada prova. Em seguida, calcule qual foi a nota m\xe9dia da turma, e mostre na tela apenas as notas que s\xe3o iguais ou acima da m\xe9dia da turma.")),(0,o.kt)("p",null,"Solu\xe7\xe3o sem o uso de vetores:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'inicio\n  //vari\xe1veis\n  inteiro nota1, nota2, nota3, nota4, nota5, qtde_notas=5, soma_notas;\n  real: media_turma;\n\n  //entrada\n  escreva("Entre com as 5 notas");\n  leia(nota1);\n  leia(nota2);\n  leia(nota3);\n  leia(nota4);\n  leia(nota5);\n\n  //processamento\n  soma_notas = nota1 + nota2 + nota3 + nota4 + nota5\n  media = soma_notas / qtde_notas;\n\n  //sa\xedda\n  escreva("Notas acima da m\xe9dia:")\n  se( nota1 >= media_turma)\n  ent\xe3o\n      escreva(nota1);\n  fimse;\n\n  se( nota2 >= media_turma)\n  ent\xe3o\n      escreva(nota2);\n  fimse;\n\n  se( nota3 >= media_turma)\n  ent\xe3o\n      escreva(nota3);\n  fimse;\n\n  se( nota4 >= media_turma)\n  ent\xe3o\n      escreva(nota4);\n  fimse;\n\n  se( nota5 >= media_turma)\n  ent\xe3o\n      escreva(nota5);\n  fimse;\nfim.\n'))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'public static void main(String[] args){\n  //vari\xe1veis\n  int nota1, nota2, nota3, nota4, nota5, qtde_notas=5, soma_notas;\n  float media_turma;\n  Scanner entrada = new Scanner(System.in);\n\n  //entrada\n  System.out.println("Entre com as 5 notas");\n  nota1 = entrada.nextInt();\n  nota2 = entrada.nextInt();\n  nota3 = entrada.nextInt();\n  nota4 = entrada.nextInt();\n  nota5 = entrada.nextInt();\n  entrada.close();\n\n  //processamento\n  soma_notas = nota1 + nota2 + nota3 + nota4 + nota5\n  media = (float) soma_notas / qtde_notas;\n\n  //sa\xedda\n  System.out.println("Notas acima da m\xe9dia:")\n  if(nota1 >= media_turma){\n      System.out.println(nota1);\n  }\n  if(nota2 >= media_turma){\n      System.out.println(nota2);\n  }\n  if(nota3 >= media_turma){\n      System.out.println(nota3);\n  }\n  if(nota4 >= media_turma){\n      System.out.println(nota4);\n  }\n  if(nota5 >= media_turma){\n      System.out.println(nota5);\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'  #entrada\n  escreva("Entre com as 5 notas");\n  nota1 = input()\n  nota2 = input()\n  nota3 = input()\n  nota4 = input()\n  nota5 = input()\n\n  #processamento\n  soma_notas = nota1 + nota2 + nota3 + nota4 + nota5\n  media = soma_notas / qtde_notas\n\n  #sa\xedda\n  print("Notas acima da m\xe9dia:")\n  if nota1 >= media_turma:\n      print(nota1)\n  if nota2 >= media_turma:\n      print(nota2)\n  if nota3 >= media_turma:\n      print(nota3)\n  if nota4 >= media_turma:\n      print(nota4)\n  if nota5 >= media_turma:\n      print(nota5)\n')))),(0,o.kt)("p",null,"Apenas substituindo as vari\xe1veis por vetor utilizando \xedndices, poder\xedamos chegar \xe0 seguinte solu\xe7\xe3o:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'inicio\n  //vari\xe1veis\n  inteiro[]: nota = {0,0,0,0,0}; //Inicializa o vetor, colocando valores padr\xe3o\n  inteiro: qtde_notas=5, soma_notas, i;\n  real: media_turma;\n\n  //entrada\n  escreva("Entre com as 5 notas");\n  leia(nota[0]);\n  leia(nota[1]);\n  leia(nota[2]);\n  leia(nota[3]);\n  leia(nota[4]);\n\n  //processamento\n  soma_notas = nota[0] + nota[1] + nota[2] + nota[3] + nota[4];\n  media = soma_notas / qtde_notas;\n\n  //sa\xedda\n  escreva("Notas acima da m\xe9dia:")\n  se( nota[0] >= media_turma)\n  ent\xe3o\n      escreva(nota[0]);\n  fimse;\n\n  se( nota[1] >= media_turma)\n  ent\xe3o\n      escreva(nota[1]);\n  fimse;\n\n  se( nota[2] >= media_turma)\n  ent\xe3o\n      escreva(nota[2]);\n  fimse;\n\n  se( nota[3] >= media_turma)\n  ent\xe3o\n      escreva(nota[3]);\n  fimse;\n\n  se( nota[4] >= media_turma)\n  ent\xe3o\n      escreva(nota[4]);\n  fimse;\nfim.\n'))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'public static void main(String[] args){\n  //vari\xe1veis\n  int[] nota = {0,0,0,0,0};\n  int qtde_notas=5, soma_notas;\n  float media_turma;\n  Scanner entrada = new Scanner(System.in);\n\n  //entrada\n  System.out.println("Entre com as 5 notas");\n  nota[0] = entrada.nextInt();\n  nota[1] = entrada.nextInt();\n  nota[2] = entrada.nextInt();\n  nota[3] = entrada.nextInt();\n  nota[4] = entrada.nextInt();\n  entrada.close();\n\n  //processamento\n  soma_notas = nota[0] + nota[1] + nota[2] + nota[3] + nota[4]\n  media = (float) soma_notas / qtde_notas;\n\n  //sa\xedda\n  System.out.println("Notas acima da m\xe9dia:")\n  if(nota[0] >= media_turma){\n      System.out.println(nota[0]);\n  }\n  if(nota[1] >= media_turma){\n      System.out.println(nota[1]);\n  }\n  if(nota[2] >= media_turma){\n      System.out.println(nota[2]);\n  }\n  if(nota[3] >= media_turma){\n      System.out.println(nota[3]);\n  }\n  if(nota[4] >= media_turma){\n      System.out.println(nota[4]);\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'  #vari\xe1veis\n  nota = [0,0,0,0,0]\n  #entrada\n  escreva("Entre com as 5 notas");\n  nota[0] = input()\n  nota[1] = input()\n  nota[2] = input()\n  nota[3] = input()\n  nota[4] = input()\n\n  #processamento\n  soma_notas = nota[0] + nota[1] + nota[2] + nota[3] + nota[4]\n  media = soma_notas / qtde_notas\n\n  #sa\xedda\n  print("Notas acima da m\xe9dia:")\n  if nota[0] >= media_turma:\n      print(nota[0])\n  if nota[1] >= media_turma:\n      print(nota[1])\n  if nota[2] >= media_turma:\n      print(nota[2])\n  if nota[3] >= media_turma:\n      print(nota[3])\n  if nota[4] >= media_turma:\n      print(nota[4])\n')))),(0,o.kt)("p",null,"Observe que o vetor funciona normalmente como uma vari\xe1vel. A diferen\xe7a \xe9 que podemos utilizar como se fosse um grupo de vari\xe1veis que pode ser acessado por um \xedndice. Na verdade \xe9 isso mesmo que acontece. Cada elemento em um vetor opera como uma vari\xe1vel independente."),(0,o.kt)("p",null,"Podemos resolver o exerc\xedcio anterior da mesma maneira, por\xe9m agora utilizando uma vari\xe1vel auxiliar para percorrer o \xedndice de cada elemento no vetor."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'inicio\n  //vari\xe1veis\n  inteiro[]: nota = {0,0,0,0,0}; //Inicializa o vetor, colocando valores padr\xe3o\n  inteiro: qtde_notas=5, soma_notas, i;\n  real: media_turma;\n\n  //entrada\n  escreva("Entre com as 5 notas");\n  para i de 0 at\xe9 qtde_notas-1 passo 1 fa\xe7a:\n      leia(nota[i]);\n  fimpara;\n\n  //processamento\n  soma_notas = 0;\n  para i de 0 at\xe9 qtde_notas-1 passo 1 fa\xe7a:\n      soma_notas += nota[i];\n  fimpara;\n  media = soma_notas / qtde_notas;\n\n  //sa\xedda\n  escreva("Notas acima da m\xe9dia:")\n  para i de 0 at\xe9 qtde_notas-1 passo 1 fa\xe7a:\n      se( nota[i] >= media_turma)\n      ent\xe3o\n          escreva(nota[i]);\n      fimse;\n  fimpara;\nfim.\n'))),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'public static void main(String[] args){\n  //vari\xe1veis\n  int[] nota = {0,0,0,0,0};\n  int qtde_notas=5, soma_notas, i;\n  float media_turma;\n  Scanner entrada = new Scanner(System.in);\n\n  //entrada\n  System.out.println("Entre com as 5 notas");\n  for(i=0;i<qtde_notas;i++){\n      nota[i] = entrada.nextInt();\n  }\n  entrada.close();\n\n  //processamento\n  soma_notas = 0;\n  for(i=0;i<qtde_notas;i++){\n      soma_notas += nota[i];\n  }\n  media = (float) soma_notas / qtde_notas;\n\n  //sa\xedda\n  System.out.println("Notas acima da m\xe9dia:")\n  for(i=0;i<qtde_notas;i++){\n      if(nota[i] >= media_turma){\n          System.out.println(nota[i]);\n      }\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'  #vari\xe1veis\n  nota = [0,0,0,0,0]\n  #entrada\n  escreva("Entre com as 5 notas")\n  for i in range(5):\n      nota[i] = int(input())\n\n  #processamento\n  soma_notas = 0\n  for i in range(5):\n      soma_notas += nota[i]\n  media = soma_notas / qtde_notas\n\n  #sa\xedda\n  print("Notas acima da m\xe9dia:")\n  for i in range(5):\n      if nota[i] >= media_turma:\n          print(nota[0])\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exerc\xedcios")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Desenvolva um algoritmo que contabiliza os pontos de  um jogo de apostas, realizada por um apostador. Neste jogo, existem 25 valores, dos quais 10 s\xe3o sorteados.  Leia valores utilizando dois vetores, em que:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- O primeiro vetor corresponde aos n\xfameros sorteados (10 n\xfameros);\n- O segundo vetor corresponde aos n\xfameros apostados pelo jogador, com 5 valores\n")),"Seu programa deve mostrar quantos pontos o jogador acertou. Cada n\xfamero acertado corresponde a um ponto.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Exemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entrada:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"22 6 5 19 8 3 7 12 24 13\n5 25 23 13 24\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"3 pontos\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entrada:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"4 6 15 9 11 16 13 1 25 19\n2 5 20 21 17\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0 pontos\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Entrada:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"15 3 25 13 16 12 20 23 17 8\n12 23 8 3 13\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sa\xedda:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"5 pontos\n")),(0,o.kt)("hr",null)),(0,o.kt)("h2",{id:"aloca\xe7\xe3o-din\xe2mica"},"Aloca\xe7\xe3o din\xe2mica"),(0,o.kt)("p",null,"@todo: string split"),(0,o.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/"},"Forbellone, Andr\xe9 Luiz Villar; Ebersp\xe4tcher, Henri Frederico. L\xf3gica de programa\xe7\xe3o: a constru\xe7\xe3o de algoritmos e estruturas de dados. 4.ed. S\xe3o Paulo: Pearson Prentice Hall, 2022."))))}v.isMDXComponent=!0}}]);