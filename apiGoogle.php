<?php
 
// URL da API do Google Places
$apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
 
// Parâmetros da solicitação
$placeId = 'ChIJET2xk12dGZURptjFws5206A';
$fields = 'reviews';
$key = 'AIzaSyBsZu-kKaEg9jwvODNuSw99HHQP-Dc3-_U';
$language = 'pt-BR';
 
// Montar a URL completa com parâmetros
$requestUrl = "{$apiUrl}?place_id={$placeId}&fields={$fields}&key={$key}&language={$language}";
 
// Inicializar cURL
$curl = curl_init($requestUrl);
 
// Configurar opções cURL
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 
// Fazer a solicitação para a API do Google Places
$response = curl_exec($curl);
 
// Verificar se a solicitação foi bem-sucedida
if ($response === FALSE) {
    die('Erro ao fazer a solicitação para a API do Google Places: ' . curl_error($curl));
}
 
// Fechar a sessão cURL
curl_close($curl);
 
// Decodificar a resposta JSON
$data = json_decode($response, TRUE);
 
// Verificar se a resposta contém dados válidos
if (!$data) {
    die('Erro ao decodificar a resposta JSON da API do Google Places');
}
 
// Adicionar cabeçalhos CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
 
// Converter os dados para formato JSON
$jsonData = json_encode($data, JSON_PRETTY_PRINT);
 
// Enviar cabeçalhos de conteúdo JSON
header('Content-Type: application/json');
 
// Exibir os dados obtidos
echo $jsonData;