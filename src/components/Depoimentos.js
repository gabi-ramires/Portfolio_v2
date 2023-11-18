import {useState, useEffect} from 'react';
import './Depoimentos.css';


const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJET2xk12dGZURptjFws5206A&fields=reviews&key=AIzaSyBpLFsCQoIjG9AFULiHY5107lAW8xF_6qo&language=pt-BR";

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);

  const notas = [1,2,3,4,5];

  useEffect(() => {
    // Faça a solicitação para o servidor intermediário
    fetch('http://localhost:3001/')
    .then((response) => response.json())
    .then((data) => 
    
    setDepoimentos(data.result.reviews)
  
    )
     console.log(depoimentos)
  }, []);

  return (
    <div>
        <div className="titulo">
            <h2>📜 Depoimentos</h2>
        </div>
            
        <div className="depoimentos">
          {depoimentos ? (
            (depoimentos.map((depoimento => (

            <div className="cardDepo">

              <div className="head">
                <img key={depoimento}src={depoimento.profile_photo_url} width={40} height={40}/>
                <p key={depoimento}><strong>{depoimento.author_name}</strong></p>
              </div>

              <div className="nota">
               {notas.map((nota=> (
                  <img
                  key={nota}
                  src={`/ico/estrela${nota <= depoimento.rating ? '' : 'Branca'}.png`} 
                  width={25} 
                  height={25}/>
                )))}                
              </div>
              
              <div className="body">
                <span>{depoimento.text}</span>
              </div>
            
            </div>

               ))))): (<div><p>Seja o primeiro a avaliar!</p><a href="https://g.page/r/CabYxcLOdtOgEAI/review" target='_blank'>Clique aqui</a></div>)}
            
        </div>
    </div>
  )
}

export default Depoimentos