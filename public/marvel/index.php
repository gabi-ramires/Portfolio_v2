<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio King</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="icon" href="img/shield.png">

</head>

    <body>

        <h1>PERSONAGENS DA MARVEL</h1> 
        <main>
            
        </main>



    </body>

</html>


<?php

require_once('src/App.php');

for ($n=0; $n < 3; $n++) { 
  
    echo '
    
    <div id="cartao">
        <div id="nome">
            <p>'.$pessoa[$n]->nome.'</p>
        </div>
        <div id="foto">
            <p>ID: '.$pessoa[$n]->id.'</p>
            <img width="100%" src='.$pessoa[$n]->src.'>
        </div>
        <div id="infos">
            <p><strong>Histórias</strong><hr></p>
            
            <div id="historias"><br>

                <span>1 - '.$pessoa[$n]->historias[0].'</span><br>
                <span>2 - '.$pessoa[$n]->historias[1].'</span><br>
                <span>3 - '.$pessoa[$n]->historias[2].'</span><br>
                <span>4 - '.$pessoa[$n]->historias[3].'</span><br>
                <span>5 - '.$pessoa[$n]->historias[4].'</span><br>
            </div>
        </div>
    </div>
    

    ';

}


?>





