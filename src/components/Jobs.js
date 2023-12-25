import { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

import './Jobs.css';

const Jobs = () => {

  const [selectedOption, setSelectedOption] = useState("Selecione ...");
  const [modal, setModal] = useState(false);
  
console.log(selectedOption)


  const abrirCertificado = (curso) => {
    setSelectedOption(curso)

    setModal(true);
  
  }

  const overlayStyle = {

    backgroundColor: 'rgba(0, 0, 0, 0.8)', // cor preta semi-transparente
    display: selectedOption ? 'flex' : 'none', // oculta ou exibe a sobreposição com base na seleção
    
  };


  const fecharCertificado = () => {

    setModal(false);

    document.body.style.backgroundColor = "#181A1C"; 

  }

  return (
        <div className="jobs">
          
           <div className="titulo">
              <h2>⛏️ Experiências</h2>
            </div>
          <div className="superior">
            {/* Superior */}
         
          
            <div className="flecha">
              <div className="flecha-container"></div>
              <div className="bola"></div>
              <div className="linha"></div>

              <div className="flecha-container"></div>
              <div className="bola"></div>
              <div className="linha"></div>

              <div className="flecha-container"></div>
              <div className="bola"></div>
              <div className="linha"></div>
              <div className="ponta"></div>
            </div>
          
            <div className="linhaTempo">
              
              <div className="parte">
                <h3>2021</h3>
                  <p><strong>Assist. de Engenharia</strong></p>
                  <hr/>
                  <p>Me formei em Engenharia Civil e trabalhava na área há quase 3 anos.</p>
              </div>

              <div className="parte">
                <h3>2022</h3>
                  <p><strong>Estagiária de Suporte Técnico</strong></p>
                  <hr/>
                  <p>Comecei a estudar programação e a desenvolver projetos pessoais.</p>
              </div>

              <div className="parte">
                <h3>2023</h3>
                <p><strong>Assist. de Desenvolvimento</strong></p>
                <hr/>
                  <p>Desenvolvimento e manutenção do sistema de hospedagem de sites/emails da  <a href="https://king.host" target="_blank">KingHost</a>.</p>
              </div>

            </div>
          </div>

          {/* Inferior */}
          <div className="inferior">
            <div className="titulo">
                <h2>🧑‍💻 Habilidades</h2>
            </div>

            <div className="linhaTempo">
              <div className="card">
                <p><strong>Front-end </strong></p>
                <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                <img src="./ico/bootstrap.png" width={'25px'} title="Bootstrap" alt="bootstrap"/>
                <img src="./ico/react.png" width={'25px'} title="React" alt="react"/>
                <hr/>

                <p id='cert'>Certificações: <select
                                            id="certificados"
                                            name="certificados"
                                            value={selectedOption}
                                            onChange={(e) => abrirCertificado(e.target.value)}
                                          >
                                            <option className='option' hidden>Selecione...</option>
                                            <option className='option' value="JavaScript">JavaScript</option>
                                            <option className='option' value="HTML5">HTML5</option>
                                            <option className='option' value="CSS">CSS</option>
                                            <option className='option' value="Bootstrap">Bootstrap</option>
                                            <option className='option' disabled value="React">React</option>
                                          </select></p>
              </div>

              <div className="card">
                <p><strong>Back-end </strong></p>
                <img src="./ico/php.png" width={'25px'} title="PHP" alt="php"/>
                <img src="./ico/phpunit.png" width={'25px'} title="PHPUnit" alt="phpunit"/>
                <img src="./ico/mysql.png" width={'25px'} title="MySQL" alt="mysql"/>
                <hr/>
                <p id='cert'>Certificações: <select
                                            id="certificados"
                                            name="certificados"
                                            value={selectedOption}
                                            onChange={(e) => abrirCertificado(e.target.value)}
                                          >
                                            <option  hidden>Selecione...</option>
                                            <option className='option' value="PHP">PHP</option>
                                            <option className='option' value="PHPUnit">PHPUnit</option>
                                            <option className='option' value="MySQL">MySQL</option>
                                          </select></p>
              </div>

              <div className="card">
                <p><strong>Tecnologias </strong></p>
                <img src="./ico/linux.png" width={'25px'} title="Linux" alt="linux"/>
                <img src="./ico/docker.png" width={'25px'} title="Docker" alt="docker"/>
                <img src="./ico/git.png" width={'25px'} title="Git" alt="git"/>
                <img src="./ico/wordpress.png" width={'25px'} title="WordPress" alt="wordpress"/>
                <hr/>
                <p id='cert'>Certificações: <select
                                            id="certificados"
                                            name="certificados"
                                            value={selectedOption}
                                            onChange={(e) => abrirCertificado(e.target.value)}
                                          >
                                            <option  hidden>Selecione...</option>
                                            <option className='option' value="Linux">Linux</option>
                                            <option className='option' disabled value="Docker">Docker</option>
                                            <option className='option' disabled value="Git">Git e GitHub</option>
                                            <option className='option' disabled value="WordPress">Wordpress</option>
                                          </select></p>
              </div>

            </div>
          </div>

          {/* Seção da imagem */}
    {modal && (
        <div style={overlayStyle} className="imagem-container">
          <img
            src={`./certificados/${selectedOption}.jpg`}
           
            title={selectedOption}
            alt={selectedOption}
          />
            <button onClick={() => fecharCertificado()}>Fechar</button>
          
        </div>
      )}
        </div>
  )
}

export default Jobs