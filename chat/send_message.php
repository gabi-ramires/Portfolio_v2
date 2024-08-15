<?php
// Verificar se o método de requisição é POST e se a mensagem foi enviada

    $message = $_POST['message'];
    $nome = $_POST['nome'];

    $textoCompleto = '<strong>'.$nome.'</strong> - '. $message;
    
    // Abrir o arquivo em modo de escrita, criando-o se não existir
    $fileHandle = fopen('chat.txt', 'a');
    
    if ($fileHandle === false) {
        die('Erro ao abrir o arquivo.');
    }
    
    // Escrever a mensagem no arquivo
    if (fwrite($fileHandle, $textoCompleto . PHP_EOL) === false) {
        die('Erro ao escrever no arquivo.');
    }
    
    // Fechar o arquivo
    fclose($fileHandle);
?>
