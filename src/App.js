import React, {useState} from 'react';
import Api from './services/api';
import './App.css';

function App() {
  const [vlr, setVlr] = useState('');
  const [cep, setCep] = useState('');

  async function buscaCEP(e){
    e.preventDefault();

    try{
      const res = await Api.get(`${vlr}/json`);
      setCep(res.data);
    }catch{
      return <h1>CEP NÃO ENCONTRADO</h1>
    }
  }

  return (
    <>
      <main className="main">
        <section className="sectionForm">
          <form className="form" onSubmit={buscaCEP}>
            <input type="text" placeholder="Digite um cep válido" onChange={(e) => setVlr(e.target.value)} required/>
            <button type="submit">Consultar</button>
          </form>
        </section>

        <section className="saidaDados">
          {cep && (
            <div className="sd">
              <h2>{cep.cep}</h2>
              <span>{cep.logradouro}</span>

              <div>
                <span>{cep.bairro}</span>
                <span>{cep.localidade}</span>
                <span>{cep.uf}</span>
              </div>
            </div>
          )}
          {!cep && (
            <h1>SEM CONSULTA FEITA!</h1>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
