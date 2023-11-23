import express from 'express';

import fetch from 'node-fetch';

// Resto do seu código

const app = express();
const port = 3001; // Escolha a porta que desejar

// Middleware para permitir solicitações CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Rota para fazer a solicitação ao servidor de destino e passar a resposta de volta
app.get('', async (req, res) => {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJET2xk12dGZURptjFws5206A&fields=reviews&key=AIzaSyBpLFsCQoIjG9AFULiHY5107lAW8xF_6qo&language=pt-BR`);
    const data = await response.json();
    
    // Enviar a resposta com os reviews
   res.json(data.result);
    
  } catch (error) {
    console.error('Erro na solicitação:', error);
    res.status(500).json({ error: 'Erro na solicitação' });
  }
});

app.listen(port, () => {
  console.log(`Servidor intermediário rodando na porta ${port}`);
});
