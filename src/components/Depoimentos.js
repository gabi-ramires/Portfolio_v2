import {useState, useEffect} from 'react';
import './Depoimentos.css';

//const url = "../manifest.json";
const url = "https://gabrielaramires.com.br/apiGoogle.php";

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState();

  const notas = [1,2,3,4,5];

  useEffect(() => {
    // Faça a solicitação para o servidor intermediário
    fetch(url)
    .then((response) => response.json())
    .then((data) => 
    
  
  setDepoimentos(data.result.reviews)
    )
     
  }, []);

  function converterTimestampParaData(timestamp) {
    const data = new Date(timestamp * 1000); // Multiplicado por 1000 para converter de segundos para milissegundos
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Lembre-se que os meses começam do zero, então adicionamos 1
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  return (
    <div>
        <div className="titulo">
            <h2>📜 Depoimentos</h2>
            
        </div>
       
        <p>Avalie você também por <a href="https://g.page/r/CabYxcLOdtOgEAI/review" target='_blank'>aqui</a>. 😸</p>
        <div className="depoimentos">
          
          {depoimentos ? (
            (depoimentos.map(((depoimento, i )=> (

            <div className="cardDepo">
              <div className="head">
                <img
                    key={i}
                    src={depoimento.profile_photo_url}
                    width={40}
                    height={40}
                    alt="foto de perfil da conta google"/>
                <p key={i}><strong>{depoimento.author_name}</strong></p>
              </div>

              <div className="nota">
               {notas.map(((nota, index)=> (
                  <img
                  key={index}
                  src={`/ico/estrela${nota <= depoimento.rating ? '' : 'Branca'}.png`} 
                  width={25} 
                  height={25}
                  alt="estrela de avaliação do google"/>
                )))}                
              </div>
              
              <div className="body">
                <span>{depoimento.text}</span>
                
              </div>

              <div className="data">
                
              <span>{converterTimestampParaData(depoimento.time)}</span>
              </div>
            
            </div>

               ))))): (<div><p>Seja o primeiro a avaliar!</p><a href="https://g.page/r/CabYxcLOdtOgEAI/review" target='_blank'>Clique aqui</a></div>)}
            
        </div>
    </div>
  )
}

export default Depoimentos