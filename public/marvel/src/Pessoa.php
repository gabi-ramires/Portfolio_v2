<?php

    class Pessoa 
    {
        public string $nome;       //string
        public int $id;            //int
        public string $src;        //string
        public array $historias;   //array

        public function __construct($nome,$id,$src,$historias)
        {
            $this->nome = $nome;
            $this->id = $id;
            $this->src = $src;
            $this->historias = $historias;
        }
    }

?>