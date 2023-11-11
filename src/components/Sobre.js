import { useState } from 'react';
import './Sobre.css';

const Sobre = () => {
const [aux, setAux] = useState(0);
const btn = document.getElementById('btn');

    const rolar = () => {
        
        let secao = ""
        if (aux == 0) {secao = ".jobs";    setAux(1)}
        if (aux == 1) {secao = ".projeto"; setAux(2)}
        if (aux == 2) {secao = ".contato"; setAux(3); btn.style.display = "none";}
        
        const content = document.querySelector(secao);
        content.scrollIntoView({ behavior: "smooth" });
  
    }
  return (
        <div className="sobre">
            <div className="img">
                <img src="./img/gabi.jpg" alt="foto de uma mulher de oculos"/>
            </div>

            <div className="desc">
                <h2>Gabriela Ramires</h2>
                <p>👩‍💻 Desenvolvedora Fullstack PHP e JavaScript</p>
                <p>📚 Cursando Ciência da Computação</p>
                <p>🚀 Apaixonada por programação</p>
            </div>
            <button id="btn" onClick={({aux}) => rolar()}>Continuar</button>
      
        </div>
  )
}

export default Sobre