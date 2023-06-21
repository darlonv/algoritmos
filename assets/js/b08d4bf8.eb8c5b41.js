"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[5927],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return t?n.createElement(b,l(l({ref:a},c),{},{components:t})):n.createElement(b,l({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(7462),r=t(7294),o=t(6010),l=t(2466),i=t(6550),s=t(1980),u=t(7392),c=t(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function d(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,u]=b({queryString:t,groupId:n}),[m,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),h=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var h=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==i&&(m(a),s(n))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function k(e){const a=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(v,(0,n.Z)({},e,a)),r.createElement(y,(0,n.Z)({},e,a)))}function N(e){const a=(0,h.Z)();return r.createElement(k,(0,n.Z)({key:String(a)},e))}},945:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=t(7462),r=(t(7294),t(3905)),o=t(4866),l=t(5162);const i={},s="Blocos de c\xf3digo",u={unversionedId:"Basicos/Blocos",id:"Basicos/Blocos",title:"Blocos de c\xf3digo",description:"\xc9 comum em algoritmos e linguagens de programa\xe7\xe3o a delimita\xe7\xe3o de trechos de c\xf3digo. A tais delimita\xe7\xf5es chamamos de bloco.",source:"@site/docs/02-Basicos/09-Blocos.md",sourceDirName:"02-Basicos",slug:"/Basicos/Blocos",permalink:"/algoritmos/docs/Basicos/Blocos",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/02-Basicos/09-Blocos.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Representa\xe7\xe3o de algoritmos",permalink:"/algoritmos/docs/Basicos/Representacao_de_algoritmos copy"},next:{title:"Express\xf5es",permalink:"/algoritmos/docs/Basicos/Exercicios/Expressoes-exercicios"}},c={},m=[],d={toc:m},p="wrapper";function b(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blocos-de-c\xf3digo"},"Blocos de c\xf3digo"),(0,r.kt)("p",null,"\xc9 comum em algoritmos e linguagens de programa\xe7\xe3o a delimita\xe7\xe3o de trechos de c\xf3digo. A tais delimita\xe7\xf5es chamamos de bloco."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),(0,r.kt)("br",{parentName:"p"}),"\n","O exemplo apresentado abaixo apresenta apenas a estrutura para defini\xe7\xe3o de c\xf3digos, ele n\xe3o faz parte da solu\xe7\xe3o de nenhum problema espec\xedfico. \xc9 apenas a ilustra\xe7\xe3o da subdivis\xe3o de um c\xf3digo em blocos."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"portugol",label:"Portugol",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:"showLineNumbers",showLineNumbers:!0},"in\xedcio\n  //comando 1\n  //comando 2\n  // highlight-start\n  in\xedcio              //<-- In\xedcio do bloco\n      //comando 3\n      //comando 4\n      //comando 5\n  fim;                //<-- T\xe9rmino do bloco\n  // highlight-end\n  // comando 6\n  // comando 7\nfim.\n")),(0,r.kt)("p",null,"  Em portugol, os blocos s\xe3o delimitados por ",(0,r.kt)("inlineCode",{parentName:"p"},"in\xedcio")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"fim"),"."),(0,r.kt)("p",null,"  Adaptado de (",(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/"},"Forbellone 2022, p. 43"),")")),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:"showLineNumbers",showLineNumbers:!0},"{\n // comando 1 ;\n // comando 2 ;\n // highlight-start\n {                   //<-- In\xedcio do bloco\n     // comando 3 ;\n     // comando 4 ;\n     // comando 5 ;\n }                   //<-- T\xe9rmino do bloco\n // highlight-end\n // comando 6 ;\n // comando 7 ;\n}\n")),(0,r.kt)("p",null,"  Em Java, os blocos s\xe3o delimitados pelas chaves ",(0,r.kt)("inlineCode",{parentName:"p"},"{")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"}"),".")),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"  # comando 1\n  # comando 2\n  # highlight-start\n      # comando 3     #<-- In\xedcio do bloco\n      # comando 4\n      # comando 5     #<-- T\xe9rmino do bloco\n  # highlight-end\n  # comando 6 ;\n  # comando 7 ;\n")),(0,r.kt)("p",null,"Em Python, os blocos s\xe3o definidos pela indenta\xe7\xe3o do c\xf3digo, ou seja, pelo alinhamento no in\xedcio de cada linha do c\xf3digo. Este alinhamento pode ser feito por caracteres ",(0,r.kt)("em",{parentName:"p"},"tab")," ou ",(0,r.kt)("em",{parentName:"p"},"espa\xe7os"),"."))),(0,r.kt)("p",null,"A ideia \xe9 que os blocos agrupem determinadas tarefas dentro do c\xf3digo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Calcular e mostrar a \xe1rea e o per\xedmetro de um ret\xe2ngulo, a partir das informa\xe7\xf5es de sua base e altura.")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"portugol",label:"Portugol",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:"showLineNumbers",showLineNumbers:!0},'in\xedcio\n  //Vari\xe1veis\n  real: base, altura;\n  real: area, perimetro;\n\n  //Entrada\n  escreva("Base: ");\n  leia(base);\n  escreva("Altura: ");\n  leia(altura);\n\n  //Processamento\n  // highlight-start\n  in\xedcio              //<-- In\xedcio do bloco\n      //C\xe1lculo da \xe1rea\n      area = base * altura;\n  fim;                //<-- T\xe9rmino do bloco\n  // highlight-end\n\n  // highlight-start\n  in\xedcio              //<-- In\xedcio do bloco\n      //C\xe1lculo do per\xedmetro\n      area = (base + altura)*2;\n  fim;                //<-- T\xe9rmino do bloco\n  // highlight-end\n\n  //Sa\xedda\n  escreva("\xc1rea     : ", area);\n  escreva("Per\xedmetro: ", perimetro);\nfim.\n')),(0,r.kt)("p",null,"  Adaptado de (",(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/"},"Forbellone 2022, p. 43"),")")),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:"showLineNumbers",showLineNumbers:!0},'{\n //Vari\xe1veis\n float base, altura;\n float area, perimetro;\n Scanner entrada\n\n //Entrada\n entrada = new Scanner(System.in);\n System.out.print("Base: ");\n base   = entrada.nextFloat();\n System.out.print("Altura: ");\n altura = entrada.nextFloat();\n\n //Processamento\n // highlight-start\n { // C\xe1lculo da \xe1rea  <-- In\xedcio do bloco\n     \n     area = base * altura;\n }                   //<-- T\xe9rmino do bloco\n // highlight-end\n\n // highlight-start\n { // C\xe1lculo da \xe1rea  <-- In\xedcio do bloco\n     \n     perimetro = (base + altura)*2;\n }                   //<-- T\xe9rmino do bloco\n // highlight-end\n\n //Sa\xedda\n System.out.printf("\xc1rea     : %f", area);\n System.out.printf("Per\xedmetro: %f", perimetro);\n}\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'  # Vari\xe1veis e entrada\n  base   = float(input("Base: "))\n  altura = float(input("altura: "))\n\n  # Processamento\n  area = base*altura \n  perimetro = (base+altura*2)\n\n  # Sa\xedda\n  print("\xc1rea     : ", area)\n  print("Per\xedmetro:", perimetro)\n')),(0,r.kt)("p",null,"Em Python, n\xe3o \xe9 poss\xedvel separar os blocos com este exemplo, utilizando apenas o que aprendemos at\xe9 aqui. Dado que nesta linguagem a indenta\xe7\xe3o define os blocos, indent\xe1-los resultaria em erro."))),(0,r.kt)("p",null,"Utilizando a representa\xe7\xe3o de algoritmos utilizando fluxogramas, o uso dos blocos se torna mais intuitivo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Representa\xe7\xe3o do c\xe1lculo da \xe1rea e per\xedmetro do ret\xe2ngulo utilizando fluxograma.")),(0,r.kt)("mermaid",{value:'flowchart TD\n    inicio(inicio)\n    subgraph Vari\xe1veis a serem utilizadas\n      variaveis["\n        real: base, altura;\n        real: area, perimetro;\n        "]\n    end\n    subgraph Entrada de dados\n      Entrada["\n        leitura(base);\n        leitura(altura);\n        "]\n      end\n    subgraph "Processamento"\n      subgraph "C\xe1lculo da \xe1rea"\n        area["\n        area \u2190 base * altura;\n        "]\n      end\n      subgraph "C\xe1lculo do per\xedmetro"\n        perimetro["\n        perimetro \u2190 (base+altura)*2;\n        "]\n      end\n    end\n    subgraph "Sa\xedda"\n        escrita["\n        escreva(&quot;\xc1rea: &quot;, area);\n        escreva(&quot;perimetro: &quot;, perimetro);\n        "]\n      end\n    fim(fim)\n    inicio --\x3e variaveis --\x3e Entrada --\x3e area --\x3e perimetro --\x3e escrita--\x3e fim'}))}b.isMDXComponent=!0}}]);