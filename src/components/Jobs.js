import React from 'react'
import './Jobs.css';

const Jobs = () => {
  return (
    <div>
        <div className="jobs">
          
          {/* Superior */}
          <div className="superior">
            <div className="titulo">
              <h2>⛏️ Experiências</h2>
            </div>
          
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
                <p>Projetos: <a href="">Clique aqui</a></p>
                <p>Certificações: <a href="">Clique aqui</a></p>
              </div>

              <div className="card">
                <p><strong>Back-end </strong></p>
                <img src="./ico/php.png" width={'25px'} title="PHP" alt="php"/>
                <img src="./ico/phpunit.png" width={'25px'} title="PHPUnit" alt="phpunit"/>
                <img src="./ico/mysql.png" width={'25px'} title="MySQL" alt="mysql"/>
                <hr/>
                <p>Projetos: <a href="#">Clique aqui</a></p>
                <p>Certificações: <a href="#">Clique aqui</a></p>
              </div>

              <div className="card">
                <p><strong>Tecnologias </strong></p>
                <img src="./ico/docker.png" width={'25px'} title="Docker" alt="docker"/>
                <img src="./ico/git.png" width={'25px'} title="Git" alt="git"/>
                <img src="./ico/gitlab.png" width={'25px'} title="GitLab" alt="gitlab"/>
                <img src="./ico/wordpress.png" width={'25px'} title="WordPress" alt="wordpress"/>
                <hr/>
                <p>Projetos: <a href="#">Clique aqui</a></p>
                <p>Certificações: <a href="#">Clique aqui</a></p>
              </div>

            </div>
          </div>
        </div>

       
    </div>
  )
}

export default Jobs