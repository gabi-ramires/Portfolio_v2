<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bate-papo</title>
<style>
    .chat-container {
        width: 80%;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding: 20px;
        margin-top: 20px;
    }
    .message {
        margin-bottom: 10px;
    }
</style>
</head>
<body>

<div class="chat-container">
    <div class="chat-box" id="chat-box">
        <!-- As mensagens serão exibidas aqui -->
    </div>
    <form id="message-form">
        <input type="text" id="nome" placeholder="Nome">
        <input type="text" id="message" placeholder="Digite sua mensagem">
        <button type="submit">Enviar</button>
    </form>
    <br>
    <span id='nome-salvo' style='display:none; font-size:small'>&nbsp;</span><a id='link'style='display:none; font-size:small' href='#'>Alterar nome</a>
</div>



<script
  src="https://code.jquery.com/jquery-3.7.1.js"
  integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const messageForm = document.getElementById('message-form');

    // Atualizar o bate-papo a cada 2 segundos
    setInterval(function() {
        fetchMessages();
    }, 2000);

    // Função para enviar mensagem
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageInput = document.getElementById('message');
        const message = messageInput.value;
        var nome = $("#nome-salvo").text();

        // Enviar a mensagem para o PHP
        fetch('send_message.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'nome=' + encodeURIComponent(nome) + '&message=' + encodeURIComponent(message),
        }).then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem.');
            }
            messageInput.value = ''; // Limpar o campo de entrada após enviar
        }).catch(error => {
            console.error('Erro:', error);
        });
    });

    // Função para buscar mensagens do PHP
    function fetchMessages() {
        fetch('get_messages.php')
        .then(response => response.text())
        .then(data => {
            chatBox.innerHTML = data; // Atualizar o conteúdo do bate-papo com as mensagens recebidas
        }).catch(error => {
            console.error('Erro:', error);
        });
    }

    $(document).ready(function() {
        // Nome
        $("#nome").blur(function(){
            $("#nome-salvo").css("display","block");
            $("#link").css("display","block");
            var nome = $("#nome").val();
            $("#nome-salvo").text(nome);
            $("#nome").css("display","none");

        });
    });
    
});
</script>


</body>
</html>
