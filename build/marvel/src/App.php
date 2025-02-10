<?php

require_once 'src/Pessoa.php';


/************************************************************************************
                       Busca dados dos personagens da API da Marvel 
************************************************************************************/

       //'Mystique','Rogue','Wolverine'
$pessoas = ['1009465','1009546','1009718'];

for ($i=0; $i < 3; $i++) { 
    
$url = "http://gateway.marvel.com/v1/public/characters/".$pessoas[$i]."?ts=1674594600000&apikey=6f9b10cdded56a531afc852fba51c6e0&hash=96f4f7d0f2c20bfc26054a43c12af503";

$personagens = file_get_contents($url);
$decode = json_decode($personagens);
$stories = array();

foreach ($decode->data as $dentroData) {

    $tipo = gettype($dentroData);

    if ($tipo == 'array'){

    foreach ($dentroData as $personagem){
              
        // NOME e ID
        $nome = $personagem->name;
        $id = $personagem->id;
        
        // IMAGEM
        foreach ($personagem->thumbnail as $srcs){
            if ($srcs != 'jpg'){
                
                $src = $srcs.".jpg";
            }
        }
        
        // HISTÓRIAS
        foreach ($personagem->stories as $historia){

            $tipo2 = gettype($historia);

            if ($tipo2 == 'array') {
                
                foreach ($historia as $number){
                    $nomes = $number->name;

                    array_unshift($stories,$nomes);
                        
                    }
            }   
        }

/************************************************************************************
                       Cria objeto pessoa (personagem)
************************************************************************************/
      $pessoa[$i] = new Pessoa($nome,$id,$src,$stories);

       

        }
    }
    }
}


