import { useState } from 'react';
import './Sobre.css';

const Sobre = () => {
const [aux, setAux] = useState(0);
const [isMouseOver, setIsMouseOver] = useState(false);
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
                <img id="gabi" src="./img/gabi.jpg" alt="foto de uma mulher de oculos"/>
            </div>

            <div className="desc">
                <h2>Gabriela Ramires</h2>
                <p>👩‍💻 Desenvolvedora Fullstack PHP e JavaScript</p>
                <p>📚 Cursando Ciência da Computação</p>
                <p>🚀 Apaixonada por programação</p>
            </div>
            
            <svg
        id="btn"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        onClick={rolar}
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        version="1.1"
        viewBox="0 0 128 128"
        width="40px"
        xmlSpace="preserve"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <line
            style={{
              fill: 'none',
              stroke: isMouseOver ? 'white' : '#1C7ED6',
              strokeWidth: 12,
              strokeLinecap: 'square',
              strokeMiterlimit: 10
            }}
            x1="111"
            x2="64"
            y1="40.5"
            y2="87.499"
          />
          <line
            style={{
              fill: 'none',
              stroke: isMouseOver ? 'white' : '#1C7ED6',
              strokeWidth: 12,
              strokeLinecap: 'square',
              strokeMiterlimit: 10
            }}
            x1="64"
            x2="17"
            y1="87.499"
            y2="40.5"
          />
        </g>
      </svg>
      
        </div>
  )
}

export default Sobre