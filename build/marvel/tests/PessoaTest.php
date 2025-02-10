<?php

require __DIR__.'/../src/Pessoa.php';

use \PHPUnit\Framework\TestCase;

class PessoaTest extends \PHPUnit\Framework\TestCase
{
    
    /**
     * @test
     */
    public function testCriaPessoa()
    {   
        $nome = "Gabriela";
        $id = 261049;
        $src = 'url-de-imagem-qualquer.jpg';
        $historias = ['historia 1','historia 2', 'historia 3', 'historia 4', 'historia 5'];
        
        $pessoa = new Pessoa($nome,$id,$src,$historias);

        $this->assertInstanceOf(Pessoa::class,$pessoa);
    }


}


?>