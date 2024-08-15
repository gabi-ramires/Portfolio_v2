<?php
// Ler as mensagens do arquivo de texto (chat.txt)
$messages = file_get_contents('chat.txt');

// Exibir as mensagens formatadas
echo nl2br($messages);
?>
