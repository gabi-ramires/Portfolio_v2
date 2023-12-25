import React from 'react'
import './Contato.css'
import { useState, useEffect } from 'react';
import Depoimentos from './Depoimentos';

const Contato = () => {

  return (

    <div className="contato">
        <div className="supeiorCont">
                

                <div className="containerContato">
                <div className="containerFilho1">
                      <Depoimentos />
                </div>

                  <div className="containerFilho2">

                    <div className="rede">
                        <img src="./ico/email.png" width={'48px'} title="JavaScript" alt="icone de email"/>
                        <p> contato@gabrielaramires.com.br</p>
                      </div>
                      <div className="rede">
                        <a href="/whats.php" target="_blank"><img src="./ico/whats.png" width={'48px'} title="JavaScript" alt="icone do whatsapp"/></a>
                        <p> (51) 99540-0581</p>
                      </div>
                      <div className="rede">
                        <a href="https://github.com/gabi-ramires" target="_blank"><img src="./ico/github.png" width={'48px'} title="JavaScript" alt="icone do github"/></a>
                        <p> github.com/gabi-ramires</p>
                      </div>
                      <div className="rede">
                        <a href="https://www.linkedin.com/in/gabi-ramires/" target="_blank"><img src="./ico/link.png" width={'48px'} title="JavaScript" alt="icone do linkedin"/></a>
                        <p> linkedin.com/in/gabi-ramires</p>
                      </div>
                    </div>

                </div>
                <div className="footer">
                  <p>
                      <a href="https://king.host/?utm_source=parceiros&utm_medium=site&utm_term=&utm_content=selo-hospedado-king&utm_campaign=content-marketing" target='_blank'>Orgulhosamente hospedado por KingHost </a>
                  </p>
                </div>
        </div>

    </div>
  )
}

function CursorBlink({ showCursor }) {
  return <p className="cursor">{showCursor && '|'}</p>;
}

export default Contato