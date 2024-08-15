import React from 'react'
import './Projetos.css';

const Projetos = () => {
  return (
    <div className="projeto">
            <div className="supeiorPro">
                <div className="titulo">
                    <h2>🚀 Projetos</h2>
                </div>
            </div>

            <div className="container">
                    {/* Space Invaders */}
                    <div className="cardPro">
                        <p><strong>Space Invaders</strong></p>
                        <hr/>
                        <p>Site: <a href="https://nave.free.nf/" target="_blank">Clique aqui</a></p>
                        <img src="./img/serimar.png" height={'220px'}/>
                        <p>Space Invaders é um jogo de nave espacial onde você atira em meteoros para ganhar pontos. Cadastre-se, faça login e controle a nave com o mouse.</p>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/php.png" width={'25px'} title="PHP" alt="php"/>
                        <img src="./ico/bootstrap.png" width={'25px'} title="Bootstrap" alt="bootstrap"/>
                        <img src="./ico/mysql.png" width={'25px'} title="MySQL" alt="mysql"/>
                    </div>

                    {/* Viver Coometal */}
                    <div className="cardPro">
                        <p><strong>Viver Coometal</strong></p>
                        <hr/>
                        <p>Site: <a href="https://vivercoometal.free.nf/" target="_blank">Clique aqui</a></p>
                        <img src="./img/vivercoometal.png" height= {'220px'}/>
                        <p>Projeto desenvolvido para pessoas autorizadas criarem e gerenciarem notícias do condomínio Viver Coometal.</p>
                        <img src="./ico/vue.png" width={'25px'} title="JavaScript" alt="vue.js"/>
                        <img src="./ico/bootstrap.png" width={'25px'} title="Bootstrap" alt="bootstrap"/>
                        <img src="./ico/php.png" width={'25px'} title="PHP" alt="php"/>
                        <img src="./ico/mysql.png" width={'25px'} title="MySQL" alt="mysql"/>
                    </div>

                    {/* Marvel */}
                    <div className="cardPro">
                        <p><strong>API Marvel</strong></p>
                        <hr/>
                        <p>Site: <a href="https://api-marvel.free.nf/?i=1" target="_blank">Clique aqui</a></p>
                        <img src="./img/marvel.png" height= {'220px'}/>
                        <p>Consuma a API Marvel para obter informações de personagens com este projeto. Testes unitários feito com PHPUnit.</p>
                        <img src="./ico/php.png" width={'25px'} title="PHP" alt="php"/>
                        <img src="./ico/phpunit.png" width={'25px'} title="PHPUnit" alt="phpunit"/>
                    </div>

                    {/* Site Vitor */}
                    <div className="cardPro">
                        <p><strong>Site Institucional</strong></p>
                        <hr/>
                        <p>Site: <a href="https://engenheirocivilpoa.com.br/" target="_blank">Clique aqui</a></p>
                        <img src="./img/vitor.png" height= {'220px'}/>
                        <p>Website de engenheiro civil com portfólio, serviços, depoimentos e informações de contato, desenvolvido no WordPress.</p>
                        <img src="./ico/wordpress.png" width={'25px'} title="WordPress" alt="wordpress"/>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                        <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                    </div>

                    {/* Morango */}
                    <div className="cardPro">
                        <p><strong>Corrida das Frutas</strong></p>
                        <hr/>
                        <p>Site: <a href="https://morango.netlify.app/" target="_blank">Clique aqui</a></p>
                        <img src="./img/morango.png" height= {'220px'}/>
                        <p>Jogo das Frutinhas é um jogo para 2 jogadores onde coletar frutas e alcançar a pontuação alvo leva à vitória.</p>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                        <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                    </div>


                    {/* Bola de Crital */}
                    <div className="cardPro">
                        <p><strong>Bola de Cristal</strong></p>
                        <hr/>
                        <p>Site: <a href="https://vamoscomecar.netlify.app/" target="_blank">Clique aqui</a></p>
                        <img src="./img/bola-de-cristal.png" height= {'220px'}/>
                        <p>Faça perguntas misteriosas e obtenha respostas aleatórias com a Bola de Cristal - uma diversão interativa online.</p>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                        <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                    </div>

                    {/* Fibonacci */}
                    <div className="cardPro">
                        <p><strong>Fibonacci</strong></p>
                        <hr/>
                        <p>Site: <a href="https://seqfibonacci.netlify.app/" target="_blank">Clique aqui</a></p>
                        <img src="./img/fibonacci.png" height= {'220px'}/>
                        <p>Calcule a sequência de Fibonacci até o número desejado com esta simples aplicação.</p>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                        <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                    </div>

                    {/* Jogo da Velha */}
                    <div className="cardPro">
                        <p><strong>Jogo da velha</strong></p>
                        <hr/>
                        <p>Site: <a href="https://gamedavelha.netlify.app" target="_blank">Clique aqui</a></p>
                        <img src="./img/jogodavelha.png" height= {'220px'}/>
                        <p>Divirta-se no Jogo da Velha clássico com música e vitórias emocionantes!</p>
                        <img src="./ico/js.png" width={'25px'} title="JavaScript" alt="javascript"/>
                        <img src="./ico/html.png" width={'25px'} title="HTML5" alt="html5"/>
                        <img src="./ico/css.png" width={'25px'} title="CSS3" alt="css3"/>
                    </div>



        </div>

              
        
    </div>
  )
}

export default Projetos