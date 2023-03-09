"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[1660],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,v=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?t.createElement(v,i(i({ref:a},d),{},{components:n})):t.createElement(v,i({ref:a},d))}));function v(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4095:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},i=void 0,l={unversionedId:"Introducao/Expressoes",id:"Introducao/Expressoes",title:"Expressoes",description:"Exemplo",source:"@site/docs/01-Introducao/07-Expressoes.md",sourceDirName:"01-Introducao",slug:"/Introducao/Expressoes",permalink:"/algoritmos/docs/Introducao/Expressoes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-Introducao/07-Expressoes.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Fun\xe7\xf5es b\xe1sicas",permalink:"/algoritmos/docs/Introducao/Funcoes_basicas"},next:{title:"Exerc\xedcios",permalink:"/algoritmos/docs/Introducao/07a-Expressoes-exercicios"}},s={},p=[{value:"Vari\xe1veis",id:"vari\xe1veis",level:2},{value:"Operadores",id:"operadores",level:2},{value:"Tipos de operadores",id:"tipos-de-operadores",level:3},{value:"Atribui\xe7\xe3o",id:"atribui\xe7\xe3o",level:4},{value:"Aritm\xe9ticos",id:"aritm\xe9ticos",level:4},{value:"Relacionais",id:"relacionais",level:4},{value:"L\xf3gicos",id:"l\xf3gicos",level:4},{value:"Conjun\xe7\xe3o",id:"conjun\xe7\xe3o",level:5},{value:"Disjun\xe7\xe3o",id:"disjun\xe7\xe3o",level:5},{value:"Nega\xe7\xe3o",id:"nega\xe7\xe3o",level:5},{value:"Operadores compostos",id:"operadores-compostos",level:2},{value:"Prioridade entre operadores",id:"prioridade-entre-operadores",level:2}],d={toc:p},u="wrapper";function m(e){let{components:a,...n}=e;return(0,o.kt)(u,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n\n```\n\n```\n````\n\n````{tab-item} Java\n\n```java\n\n```\n````\n\n````{tab-item} Python 3\n```python\n\n```\n````\n\n")),(0,o.kt)("h1",{id:"express\xf5es"},"Express\xf5es"),(0,o.kt)("p",null,"Uma express\xe3o \xe9 uma combina\xe7\xe3o de elementos, que podem ser valores, vari\xe1veis, operadores e chamadas a fun\xe7\xf5es. Com o uso das express\xf5es \xe9 poss\xedvel realizar c\xe1lculos que produzem novos valores, ou seja, fazem a transforma\xe7\xe3o das informa\xe7\xf5es."),(0,o.kt)("h2",{id:"vari\xe1veis"},"Vari\xe1veis"),(0,o.kt)("p",null,"Como visto anteriormente, vari\xe1veis s\xe3o localiza\xe7\xf5es na mem\xf3ria que armazenam dados."),(0,o.kt)("p",null,"Para associar um valor a uma vari\xe1vel utiliza-se o operador ",(0,o.kt)("strong",{parentName:"p"},"\u2190")," ao lado direito da vari\xe1vel."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\nUm exemplo de express\xe3o \xe9\n```\nsoma \u2190 5 + 4\n```\nonde:\n- `5` e `4` s\xe3o valores, \n- `+` \xe9 um operador aritm\xe9tico, \n- `=` \xe9 o operador de atribui\xe7\xe3o, e\n- `soma` \xe9 uma vari\xe1vel.\n````\n\n````{tab-item} Java\nUm exemplo de express\xe3o \xe9\n```java\nsoma = 5 + 4\n```\nonde:\n- `5` e `4` s\xe3o valores, \n- `+` \xe9 um operador aritm\xe9tico, \n- `=` \xe9 o operador de atribui\xe7\xe3o, e\n- `soma` \xe9 uma vari\xe1vel.  \nEm Java, o operador de atribui\xe7\xe3o \xe9 utilizado com o caractere `=`\n````\n\n````{tab-item} Python 3\nUm exemplo de express\xe3o \xe9\n```python\nsoma = 5 + 4\n```\nonde:\n- `5` e `4` s\xe3o valores, \n- `+` \xe9 um operador aritm\xe9tico, \n- `=` \xe9 o operador de atribui\xe7\xe3o, e\n- `soma` \xe9 uma vari\xe1vel.  \nEm Python, o operador de atribui\xe7\xe3o \xe9 utilizado com o caractere `=`\n````\n\n")),(0,o.kt)("p",null,"A execu\xe7\xe3o desta express\xe3o resulta em um novo valor, que ser\xe1 armazenado na vari\xe1vel ",(0,o.kt)("inlineCode",{parentName:"p"},"soma"),"."),(0,o.kt)("h2",{id:"operadores"},"Operadores"),(0,o.kt)("p",null,"Os operadores s\xe3o utilizados para construir ",(0,o.kt)("strong",{parentName:"p"},"express\xf5es"),", que podem conter diferentes quantidades de operandos."),(0,o.kt)("h3",{id:"tipos-de-operadores"},"Tipos de operadores"),(0,o.kt)("h4",{id:"atribui\xe7\xe3o"},"Atribui\xe7\xe3o"),(0,o.kt)("p",null,"Como dito anteriormente, a atribui\xe7\xe3o \xe9 o operador que determina a passagem de valor para uma vari\xe1vel. Por defini\xe7\xe3o toda vari\xe1vel pode ser seu valor alterado, e a modifica\xe7\xe3o deste valor \xe9 realizada com o operador de atribui\xe7\xe3o."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},'\n````{tab-item} Portugol\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`\u2190`|atribui\xe7\xe3o|\n\n**Exemplo**  \n- `lado \u2190 8`\n- `distancia \u2190 49.6`\n- `nome \u2190 "Adalberto"`\n- `custo \u2190 5.50`\n````\n\n````{tab-item} Java\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`=`|atribui\xe7\xe3o|\n\n**Exemplo**  \n- `lado = 8`\n- `distancia = 49.6`\n- `nome = "Adalberto"`\n- `custo = 5.50`\n````\n\n````{tab-item} Python 3\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`=`|atribui\xe7\xe3o|\n\n**Exemplo**  \n- `lado = 8`\n- `distancia = 49.6`\n- `nome = "Adalberto"`\n- `custo = 5.50`\n\n````\n\n')),(0,o.kt)("h4",{id:"aritm\xe9ticos"},"Aritm\xe9ticos"),(0,o.kt)("p",null,"S\xe3o aqueles utilizados para a execu\xe7\xe3o de opera\xe7\xf5es matem\xe1ticas, como adi\xe7\xe3o, multiplica\xe7\xe3o, subtra\xe7\xe3o, divis\xe3o, potencia\xe7\xe3o, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n|Operador|Fun\xe7\xe3o|Exemplo|\n|----|----------| ----------|\n|`+` | adi\xe7\xe3o | `5+2 = 7` |\n|`-` | subtra\xe7\xe3o | `5-2 = 3` |\n|`*` | multiplica\xe7\xe3o | `3*6 = 18` |\n|`/` | divis\xe3o | `11/2 = 5.5` |\n|`pot(x,y)` | pot\xeancia. $x^y$ | `pot(5,2) = 25` |\n|`rad(x)` | raiz quadrada. $\\sqrt{x}$ | `rad(16) = 4` |\n|`mod(x,y)` | resto da divis\xe3o inteira. | `mod(20,6) = 2` |\n|`div(x,y)` | quociente da divis\xe3o inteira.| `div(20,6) = 3` |\n\n**Exemplos**\n```\n//variaveis\ninteiro: valor_i;\nreal: valor_f;\n\n//saida\nvalor_i \u2190 5+10; \nescreva(valor_i);\nvalor_i \u2190 8-4;\nescreva(valor_i);\nvalor_i \u2190 6*4;\nescreva(valor_i);\nvalor_f \u2190 10/5;\nescreva(valor_f);\nvalor_i \u2190 20%11;\nescreva(valor_i);\nvalor_f \u2190 rad(25);\nescreva(valor_f);\n```\n\n````\n\n````{tab-item} Java\n|Operador|Fun\xe7\xe3o|Exemplo|\n|----|----------| ----------|\n|`+` | adi\xe7\xe3o | `5+2 = 7` |\n|`-` | subtra\xe7\xe3o | `5-2 = 3` |\n|`*` | multiplica\xe7\xe3o | `3*6 = 18` |\n|`/` | divis\xe3o | `10/2 = 5.0` |\n|`pot(x,y)` | pot\xeancia. $x^y$ | `pot(5,2) = 25` |\n|`rad(x)` | raiz quadrada. $\\sqrt{x}$ | `rad(16) = 4` |\n|`mod(x,y)` | resto da divis\xe3o inteira. | `mod(20,6) = 2` |\n|`div(x,y)` | quociente da divis\xe3o inteira.| `div(20,6) = 3` |\n\n**Exemplos**\n```java\nint valor_i;\nfloat valor_f;\n\nvalor_i = 5+10;\nSystem.out.println(valor_i); //15\nvalor_i = 8-4;\nSystem.out.println(valor_i); //4\nvalor_i = 6*4;\nSystem.out.println(valor_i); //24\nvalor_i = 10/2;\nSystem.out.println(valor_i); //5\nvalor_f = 10/2;\nSystem.out.println(valor_f); //5.0\nvalor_f = (float) 10/6;\nSystem.out.println(valor_f); //1.6666666\nvalor_i = 25%11;\nSystem.out.println(valor_i); //3\n\n\n\n```\n````\n\n````{tab-item} Python 3\n|Operador|Fun\xe7\xe3o|Exemplo|\n|----|----------| ----------|\n|`+` | adi\xe7\xe3o | `5+2 = 7` |\n|`-` | subtra\xe7\xe3o | `5-2 = 3` |\n|`*` | multiplica\xe7\xe3o | `3*6 = 18` |\n|`/` | divis\xe3o | `11/2 = 5.5` |\n|`**` | pot\xeancia. $x^y$ | `5**2 = 25` |\n|`sqrt(x)` | raiz quadrada. $\\sqrt{x}$ (`from math import sqrt`) | `sqrt(16) = 4.0` |\n|`%` | resto da divis\xe3o inteira. | `20%6 = 2` |\n|`//` | quociente da divis\xe3o inteira.| `20//6 = 3` |\n\n**Exemplos**\n```python\nvalor_i = 5+10;\nprint(valor_i); #15\nvalor_i = 8-4;\nprint(valor_i); #4\nvalor_i = 6*4;\nprint(valor_i); #24\nvalor_i = 6*4.5;\nprint(valor_i); #27.0\nvalor_i = 10/2;\nprint(valor_i); #5.0\nvalor_f = 10/2;\nprint(valor_f); #5\nvalor_f = 10/6;\nprint(valor_f); #1.6666666666666667\nvalor_i = 25%11;\nprint(valor_i); #3\nvalor_i = 4**3\nprint(valor_i) #64\nvalor_f = sqrt(16)\nprint(valor_f) #4.0\n```\n````\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exerc\xedcios")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Calcule a \xe1rea de um quadrado de lado L. Utilize duas vari\xe1veis."),(0,o.kt)("li",{parentName:"ul"},"No dia de seu anivers\xe1rio, Tom\xe1s deseja saber qual e a sua idade, em dias. Considere que Tom\xe1s est\xe1 completando X anos, e cada ano possui 365 dias. Utilize duas vari\xe1veis.")),(0,o.kt)("h4",{id:"relacionais"},"Relacionais"),(0,o.kt)("p",null,"S\xe3o operadores de compara\xe7\xe3o entre valores. As express\xf5es realizadas com estes operadores retornam um resultado do tipo l\xf3gico, ",(0,o.kt)("inlineCode",{parentName:"p"},"verdadeiro")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"falso")," (",(0,o.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/51"},"FORBELLONE 2022, p.27"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n|Operador|Fun\xe7\xe3o|\n|---|---| \n|`>`  |maior que|\n|`<`  |menor que| \n|`=` |igual| \n|`<>` |diferente|\n|`>=` |maior ou igual| \n|`<=` |menor ou igual| \n\n**Exemplos**  \n```\nescreva(6>7); //falso\nescreva(6<7); //verdadeiro\nescreva(6=7); //falso\nescreva(4=4); //verdadeiro\nescreva(12>=12); //verdadeiro\nescreva(15>=12); //verdadeiro\nescreva(12>=12); //verdadeiro\nescreva(12<=12); //verdadeiro\nescreva(15<=12); //falso\nescreva(8<=12); //verdadeiro\nescreva(3<>11); //verdadeiro\nescreva(12<>12); //falso\n```\n\n````\n\n````{tab-item} Java\n|Operador|Fun\xe7\xe3o|\n|---|---| \n|`>`  |maior que|\n|`<`  |menor que| \n|`==` |igual| \n|`!=` |diferente|\n|`>=` |maior ou igual| \n|`<=` |menor ou igual| \n\n**Exemplos**  \n```java\nSystem.out.println(6>7); //false\nSystem.out.println(6<7); //true\nSystem.out.println(6==7); //false\nSystem.out.println(4==4); //true\nSystem.out.println(12>=12); //true\nSystem.out.println(15>=12); //true\nSystem.out.println(12>=12); //true\nSystem.out.println(12<=12); //true\nSystem.out.println(15<=12); //false\nSystem.out.println(8<=12); //true\nSystem.out.println(3!=11); //true\nSystem.out.println(12!=12); //false\n```\n````\n\n````{tab-item} Python 3\n|Operador|Fun\xe7\xe3o|\n|---|---| \n|`>`  |maior que|\n|`<`  |menor que| \n|`==` |igual| \n|`!=` |diferente|\n|`>=` |maior ou igual| \n|`<=` |menor ou igual| \n\n\n**Exemplos**  \n```python\nprint(6>7) #False\nprint(6<7) #True\nprint(6==7) #False\nprint(4==4) #True\nprint(12>=12) #True\nprint(15>=12) #True\nprint(12>=12) #True\nprint(12<=12) #True\nprint(15<=12) #False\nprint(8<=12) #True\nprint(3!=11) #True\nprint(12!=12) #False\n```\n````\n\n")),(0,o.kt)("h4",{id:"l\xf3gicos"},"L\xf3gicos"),(0,o.kt)("p",null,"Os operadores l\xf3giso s\xe3o utilizados para a composi\xe7\xe3o de express\xf5es l\xf3gicas. As possibilidades de resultados de express\xf5es l\xf3gicas considerando as entradas s\xe3o chamadas de Tabelas-Verdade. S\xe3o elas:"),(0,o.kt)("h5",{id:"conjun\xe7\xe3o"},"Conjun\xe7\xe3o"),(0,o.kt)("p",null,"A conjun\xe7\xe3o corresponde ao ",(0,o.kt)("strong",{parentName:"p"},"e")," l\xf3gico. Possui resultado verdadeiro apenas quando ambas entradas forem verdadeiras, e falso para os demais casos."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"p"),(0,o.kt)("th",{parentName:"tr",align:null},"q"),(0,o.kt)("th",{parentName:"tr",align:null},"p e q"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"F")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"F")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"F")))),(0,o.kt)("h5",{id:"disjun\xe7\xe3o"},"Disjun\xe7\xe3o"),(0,o.kt)("p",null,"A disjun\xe7\xe3o corresponde ao ",(0,o.kt)("strong",{parentName:"p"},"ou")," l\xf3gico. \xc9 falso apenas quando ambas as entradas s\xe3o falsas. Basta apenas um dos dos operandos serem verdadeiros para resultar em verdadeiro."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"p"),(0,o.kt)("th",{parentName:"tr",align:null},"q"),(0,o.kt)("th",{parentName:"tr",align:null},"p ou q"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"F")))),(0,o.kt)("h5",{id:"nega\xe7\xe3o"},"Nega\xe7\xe3o"),(0,o.kt)("p",null,"A nega\xe7\xe3o corresponde ao ",(0,o.kt)("strong",{parentName:"p"},"n\xe3o")," l\xf3gico. Consiste na invers\xe3o l\xf3gica do valor de entrada. A nega\xe7\xe3o \xe9 um operador un\xe1rio, ou seja, atua sobre um \xfanico operando."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"p"),(0,o.kt)("th",{parentName:"tr",align:null},"n\xe3o p"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"V"),(0,o.kt)("td",{parentName:"tr",align:null},"F")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"F"),(0,o.kt)("td",{parentName:"tr",align:null},"V")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`e`  |**e** l\xf3gico (conjun\xe7\xe3o) |\n|`ou` |**ou** l\xf3gico (disjun\xe7\xe3o)|\n|`n\xe3o`|**n\xe3o** l\xf3gico (nega\xe7\xe3o) |\n\n````\n\n````{tab-item} Java\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`&&`|**e** l\xf3gico (conjun\xe7\xe3o)|\n|`\\|\\|` |**ou** l\xf3gico (disjun\xe7\xe3o)|\n|`!`|**n\xe3o** l\xf3gico (nega\xe7\xe3o)|\n\n````\n\n````{tab-item} Python 3\n|Operador|Fun\xe7\xe3o|\n|--------|------|\n|`and`|**e** l\xf3gico (conjun\xe7\xe3o)|\n|`or` |**ou** l\xf3gico (disjun\xe7\xe3o)|\n|`not`|**n\xe3o** l\xf3gico (nega\xe7\xe3o)|\n````\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"X = 5\nX++\nescreva(X)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"X = 4\nX <<= 2\nprint(X)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")),(0,o.kt)("h2",{id:"operadores-compostos"},"Operadores compostos"),(0,o.kt)("p",null,"\xc9 poss\xedvel combinar alguns operadores, que realizam a opera\xe7\xe3o utilizando os par\xe2metros passados ao operador, e em seguida realiza uma atribui\xe7\xe3o utilizando a vari\xe1vel \xe0 esquerda dos operadores."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n|Operador|Fun\xe7\xe3o| \n|---|---|\n|`++`| incremento de valor 1| \n|`+=`| adi\xe7\xe3o e atribui\xe7\xe3o| \n|`-=`| subtra\xe7\xe3o e atribui\xe7\xe3o| \n|`*=`| multiplica\xe7\xe3o e atribui\xe7\xe3o| \n|`/=`| divis\xe3o e atribui\xe7\xe3o| \n|`%=`| m\xf3dulo e atribui\xe7\xe3o|\n````\n\n````{tab-item} Java\n|Operador|Fun\xe7\xe3o|\n|---|---|\n|`++`| incremento de valor 1 (un\xe1rio)| \n|`+=`| adi\xe7\xe3o e atribui\xe7\xe3o| \n|`-=`| subtra\xe7\xe3o e atribui\xe7\xe3o| \n|`*=`| multiplica\xe7\xe3o e atribui\xe7\xe3o| \n|`/=`| divis\xe3o e atribui\xe7\xe3o|\n|`%=`| m\xf3dulo e atribui\xe7\xe3o| \n````\n\n````{tab-item} Python 3\n|Operador|Fun\xe7\xe3o|\n|---|---|\n|`+=`| adi\xe7\xe3o e atribui\xe7\xe3o| \n|`-=`| subtra\xe7\xe3o e atribui\xe7\xe3o| \n|`*=`| multiplica\xe7\xe3o e atribui\xe7\xe3o| \n|`/=`| divis\xe3o e atribui\xe7\xe3o|\n|`//=`| divis\xe3o inteira e atribui\xe7\xe3o|\n|`%=`| m\xf3dulo e atribui\xe7\xe3o| \n````\n\n")),(0,o.kt)("h2",{id:"prioridade-entre-operadores"},"Prioridade entre operadores"),(0,o.kt)("p",null,"As prioridades definem quais operadores ser\xe3o executados primeiro. Caso possuam a mesma prioridade, a express\xe3o ser\xe1 executada da esquerda para a direita."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{tab-set}"},"\n````{tab-item} Portugol\n|Tipo|S\xedmbolo|\n|----|-------|\n|par\xeanteses mais internos|`(` `)`|\n|pot\xeancia, raiz| `pot` `rad`|\n|multiplica\xe7\xe3o, divis\xe3o|`*` `/` `div` `mod`|\n|adi\xe7\xe3o e subtra\xe7\xe3o|`+` `-`|\n|atribui\xe7\xe3o|`\u2190`|\nAdaptado de [FORBELLONE 2022, p.26](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/51).\n````\n\n````{tab-item} Java\n|Tipo|S\xedmbolo|\n|----|-------|\n|Operadores p\xf3s-fixados<br>operadores pr\xe9-fixados<br>*cast*|`exp++`  `exp--`<br>`++exp` `+exp` `-exp` `~exp` `!exp`<br>`(type) exp`|\n|multiplica\xe7\xe3o, divis\xe3o| `*` `/` `%`|\n|adi\xe7\xe3o, subtra\xe7\xe3o|`+` `-`|\n|compara\xe7\xe3o|`,` `<=` `>` `>=`|\n|igualdade|`==` `!=`|\n|e l\xf3gico|`&&`|\n|ou l\xf3gico|`\\|\\|`|\n|atribui\xe7\xe3o|`=`|\n\nAdaptado de [GOODRICH 2013, p.24].\n````\n\n````{tab-item} Python 3\n\n|Tipo|S\xedmbolo|\n|----|-------|\n|par\xeanteses, colchetes e chaves|`()`,`[]`,`{}`|\n|pot\xeancia|`**`|\n|positivo, negativo|`+x` `-x`|\n|multiplica\xe7\xe3o e divis\xe3o|`*``/` `//` `%`|\n|adi\xe7\xe3o e subtra\xe7\xe3o|`+` `-`|\n|compara\xe7\xf5es|`in` `not in` `is` `is not` `<` `<=` `>=` `!=` `==`|\n|n\xe3o l\xf3gico|`not`|\n|e l\xf3gico|`and`|\n|ou l\xf3gico|`or`| \n|atribui\xe7\xe3o|`=`|\n\nAdaptado de [PYTHON SOFTWARE FOUNDATION. Expressions - Python 3 documentation](https://docs.python.org/3/reference/expressions.html#operator-precedence).\n````\n")),(0,o.kt)("p",null,"Al\xe9m destes h\xe1 outros operadores. Est\xe3o aqui listados apenas os que s\xe3o importantes neste momento do aprendizado."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")))}m.isMDXComponent=!0}}]);