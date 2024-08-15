# Projeto Marvel 🎯

Este projeto foi desenvolvido para consumir a API da Marvel e obter informações sobre 3 personagens, incluindo seus nomes, IDs, imagens e as 5 principais histórias em que esses personagens aparecem. Para obter mais detalhes sobre a API da Marvel, você pode consultar a documentação oficial disponível em [developer.marvel.com/docs](https://developer.marvel.com/docs).

## Visualizar 🧑‍💻
Para visualizar o projeto em ação, você pode acessá-lo diretamente em [gabrielaramires.com.br/marvel](https://gabrielaramires.com.br/marvel/).

## Tecnologias Utilizadas 🚀

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **PHP**: Utilizado para criar a lógica de busca e renderização dos dados.
- **HTML**: Para a estruturação das páginas web.
- **CSS**: Para o estilo visual das páginas.
- **PHPUnit**: Usado para realizar testes unitários.

## Requisitos do Projeto 🔎

Para desenvolver e testar este projeto, você precisará de alguns requisitos específicos:

- **Servidor Web**: Você precisa de um servidor web para executar o projeto. Recomendamos o Apache, mas outros servidores também são compatíveis.
- **PHPUnit**: Para realizar testes, você precisará do PHPUnit. Você pode instalá-lo de duas maneiras:

  1. **Pelo Visual Studio Code (VSCode)**: Procure por "PHPUnit" na extensão de mercado e siga as instruções para instalar.
  2. **Pelo Composer**: Se você ainda não possui o Composer instalado, você pode baixá-lo em [getcomposer.org/download](https://getcomposer.org/download). Depois, abra o terminal na raiz do projeto e execute o seguinte comando para instalar o PHPUnit:

     ```bash
     composer require --dev phpunit/phpunit
     ```

## Como Executar o Projeto 🧑‍💻

Para executar o projeto, siga estas etapas:

1. Faça o download do projeto como um arquivo ZIP e descompacte-o em sua máquina.

2. Abra o projeto em seu editor de código preferido.

3. Certifique-se de que você tenha um servidor web configurado e funcionando, como o Apache.

4. Inicie o servidor web e acesse o projeto localmente no seu navegador.

## Observações Importantes ❗

Para fazer as requisições à API da Marvel, é necessário gerar um hash MD5, utilizando as chaves pública e privada fornecidas quando você se cadastra na plataforma. Além disso, é necessário incluir um timestamp nas requisições. Para obter informações detalhadas sobre a autenticação e autorização da API da Marvel, consulte a [documentação oficial](https://developer.marvel.com/documentation/authorization).


