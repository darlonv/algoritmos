
import React from 'react';

export default function Bib({bib, page, type, inline=false, link=false}) {
  let base = {
    ['tanenbaum_2011_book']: {
      ['cite']: 'TANENBAUM 2011', 
      ['abnt']: 'TANENBAUM, A.S., Wetherall, D. Redes de Computadores. 5. ed. São Paulo: Pearson do Brasil, 2011.', 
      ['link']: 'https://plataforma.bvirtual.com.br/Acervo/Publicacao/2610',
      
    },
    ['kurose_2013_book']   : {
      ['cite']: 'KUROSE 2013',    
      ['abnt']: 'KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. São Paulo: Pearson, 2013. ISBN 9788581436777.',
      ['link']: 'https://plataforma.bvirtual.com.br/Acervo/Publicacao/198909',
    },
    ['torres_2009_book']   : {
      ['cite']: 'TORRES 2009',    
      ['abnt']: 'TORRES, G. Redes de Computadores. Rio de Janeiro: Novaterra, 2009. ISBN 978-85-61893-05-7.',
    },
    ['stevens_1994_book']   : {
      ['cite']: 'STEVENS 1994',    
      ['abnt']: 'STEVENS, W. R. TCP/IP Illustrated, Volume 1: The Protocols. Boston, USA: Addison-Wesley/Pearson Education, 1994. ISBN 0-201-63346-9.',
    },
    ['rfc_791_site']   : {
      ['cite']: 'IETF 1981',    
      ['abnt']: 'IETF. RFC 791: Internet Protocol. 1981.',
      ['link']: 'https://datatracker.ietf.org/doc/html/rfc791',
    },
    ['rfc_1058_site']   : {
      ['cite']: 'IETF 1988',    
      ['abnt']: 'IETF. RFC 1058: Routing Information Protocol. 1988.',
      ['link']: 'https://datatracker.ietf.org/doc/html/rfc1058',
    },
    ['rfc_1131_site']   : {
      ['cite']: 'IETF 1989',    
      ['abnt']: 'IETF. RFC 1131: The OSPF Specification. 1989.',
      ['link']: 'https://datatracker.ietf.org/doc/html/rfc1131',
    },
    ['forbellone_2022_book']   : {
      ['cite']: 'FORBELLONE 2022',    
      ['abnt']: 'FOBELLONE, A.L.V. HEBERSPÄTCHER, H.F. Lógica de programação: A construção de algoritmos e estruturas de dados.',
      ['link']: 'https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/',
    },
  }

  let data;

  //Verifica se é referência ou bibliografia
  if(!type){
    //referência

    //Verifica se é necessário incluir a página
    if(!page){
      //sem página
      data = base[bib]['cite'];
    }
    else{
      //com página
      data = base[bib]['cite']+', pg. '+page;
    }
    
    //Verifica se é referência inline
    if(!inline){
      //Caso não seja inline, coloca parênteses antes e depois
      data = '('+data+')';
    }

    if(link){
      //referência com link
      data = <a href={base[bib]['link']} target='_blank'>{data}</a>
    }
    
  }else{
    //Bibliografia
    data = base[bib][type]
    if(link){
      //Bibliografia com link
      data = <a href={base[bib]['link']} target='_blank'>{data}</a>
    }

  }
  
    return (
      <>
        {data}
      </>
    );
  }