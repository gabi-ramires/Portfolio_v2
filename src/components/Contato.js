import React from 'react'
import './Contato.css'
import { useState, useEffect } from 'react';

const Contato = () => {

  return (

    <div className="contato">
        <div className="supeiorCont">
                <div className="titulo">
                    <h2>📱 Contato</h2>
                </div>

                <div className="containerContato">
                  <div className="containerFilho1">
                  <p className="contato-text">Sinta-se à vontade para me chamar em qualquer hora! 😸</p>
        
                    
                  </div>

                  <div className="containerFilho2">
                    <div className="rede">
                        <img src="./ico/email.png" width={'48px'} title="JavaScript"/>
                        <p> contato@gabrielaramires.com.br</p>
                      </div>
                      <div className="rede">
                        <a href="https://api.whatsapp.com/send?phone=5551980187026&text=Ol%C3%A1!%20Olhei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank"><img src="./ico/whats.png" width={'48px'} title="JavaScript"/></a>
                        <p> (51) 98018-7026</p>
                      </div>
                      <div className="rede">
                        <a href="https://github.com/gabi-ramires" target="_blank"><img src="./ico/github.png" width={'48px'} title="JavaScript"/></a>
                        <p> github.com/gabi-ramires</p>
                      </div>
                      <div className="rede">
                        <a href="https://www.linkedin.com/in/gabi-ramires/" target="_blank"><img src="./ico/link.png" width={'48px'} title="JavaScript"/></a>
                        <p> linkedin.com/in/gabi-ramires</p>
                      </div>
                    </div>
                </div>
                <div className="footer">
                  <p>© 2023 Gabriela Ramires. All rights reserved.</p>
                </div>
        </div>

    </div>
  )
}

function CursorBlink({ showCursor }) {
  return <p className="cursor">{showCursor && '|'}</p>;
}

export default Contato