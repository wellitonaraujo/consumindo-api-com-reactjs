import React, { useState, useEffect } from 'react'

import './style.css';

function App() {
  const [ post, setPost ] = useState([]) // os Hooks da aplicação

  // useEffect - função que será chamada quando  a págin for carregada
  useEffect(() => {
    async function loadApi() { // função da requisição com a FETCH API
      const resp = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts');
      const json = await resp.json();
      setPost(json)
    }

    loadApi(); // invocando a função da requisição

  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {post.map((item) => { // mapeando os itens da API
        return(
          <section className="post" key={item.id}> 
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa}></img>
            <p className="subtitulo">{item.subtitulo}</p>
            <a className="botao">Acessar</a>
          </section>
        )
      })}    
    </div>
  );
}
export default App;
