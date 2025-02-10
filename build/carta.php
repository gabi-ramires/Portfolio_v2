<?php

header("Access-Control-Allow-Origin: *"); // Permite todas as origens
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // MÃ©todos permitidos
header("Content-Type: application/json"); // Define o tipo de conteÃºdo como JSON
header("Access-Control-Allow-Headers: Content-Type, Authorization");

class Carta{

    public $conn;

    public function __construct()
    {
        $this->connectDB();
    }

    /**
     * Manipula requisiÃ§Ã£o
     */
    public function handleRequest()
    {
        $response = [];

        try {
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);

            if (!isset($data['acao'])) {
                throw new Exception('AÃ§Ã£o nÃ£o especificada');
            }

            $acao = $data['acao'];

            if (method_exists($this, $acao)) {
                $this->$acao($data);
            } else {
                throw new Exception('AÃ§Ã£o invÃ¡lida');
            }
        } catch (Exception $e) {
            $response = [
                'status' => false,
                'msg' => $e->getMessage()
            ];
        }
    }


    /**
     * ConexÃ£o com banco
     */
    private function connectDB()
    {
        $host = 'mysql30-farm10.kinghost.net';
        $db   = 'gabrielaramire01';
        $user = 'gabrielaramire01';
        $pass = 'uva3214';

        $this->conn = new mysqli($host, $user, $pass, $db);

        if ($this->conn->connect_error) {
            throw new Exception('Erro ao conectar ao banco de dados: ' . $this->conn->connect_error);
        }

        $this->conn->set_charset('utf8mb4'); // Define o charset
    }

    /**
     * Cria uma nova carta
     */
    private function novaCarta($data)
    {
        // Recebe os dados
        $remetente = $this->conn->real_escape_string($data['remetente']);
        $destinatario = $this->conn->real_escape_string($data['destinatario']);
        $titulo = $this->conn->real_escape_string($data['titulo']);
        $mensagem = $this->conn->real_escape_string($data['msg']);
       
        $sql = "INSERT INTO cartas (remetente, destinatario, titulo, mensagem, data_criacao) 
                VALUES ('$remetente', '$destinatario', '$titulo', '$mensagem', NOW())";

        if ($this->conn->query($sql) === TRUE) {
            $response = [
                'status' => true,
                'msg' => 'Nova carta registrada com sucesso!',
            ];
        } else {
            throw new Exception('Erro ao registrar a carta: ' . $this->conn->error);
        }

        echo json_encode($response);
    }

    /**
     * Busca todos usuarios
     */
    private function buscaUsuarios()
    {
        $sql = "SELECT * FROM usuarios";
        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $usuarios = $result->fetch_all(MYSQLI_ASSOC);
            $response = [
                'status' => true,
                'data' => $usuarios,
            ];
        } else {
            $response = [
                'status' => false,
                'msg' => 'Nenhum usuario encontrado.',
            ];
        }

        echo json_encode($response);
    }

    private function login($data)
    {
        var_dump($data); die;
    }

    /**
     * Verifica se tem nova mensagem
     */
    private function verificarNovaMensagemRecebida($data)
    {
        $destinatario = $data['usuario'];

        $sql = "SELECT * FROM cartas WHERE destinatario = '$destinatario' AND lida IS NULL";

        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $cartas = $result->fetch_all(MYSQLI_ASSOC);
            $response = [
                'status' => true,
                'data' => $cartas,
            ];
        } else {
            $response = [
                'status' => false,
                'msg' => 'Nenhuma carta encontrado.',
            ];
        }

        echo json_encode($response);
    }

    private function marcarComoLida($data)
    {
        $id = $this->conn->real_escape_string($data['id']);
    
        // Query de atualização
        $sql = "UPDATE `gabrielaramire01`.`cartas` SET `lida` = '1' WHERE `id` = '$id'";
    
        $result = $this->conn->query($sql);
    
        if ($result) {
            // Verifica se alguma linha foi afetada
            if ($this->conn->affected_rows > 0) {
                $response = [
                    'status' => true,
                    'msg' => 'Carta marcada como lida com sucesso!',
                ];
            } else {
                $response = [
                    'status' => false,
                    'msg' => 'Nenhuma carta encontrada ou já estava marcada como lida.',
                ];
            }
        } else {
            $response = [
                'status' => false,
                'msg' => 'Erro ao marcar carta como lida: ' . $this->conn->error,
            ];
        }
    
        echo json_encode($response);
    }

    /**
     * Busca cartas recebidas do usuario
     */
    private function cartasArquivadas($data)
    {
        $destinatario = $data['usuario'];

        $sql = "SELECT * FROM cartas WHERE destinatario = '$destinatario' AND lida = 1";

        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $cartas = $result->fetch_all(MYSQLI_ASSOC);
            $response = [
                'status' => true,
                'data' => $cartas,
            ];
        } else {
            $response = [
                'status' => false,
                'msg' => 'Nenhuma carta encontrado.',
            ];
        }

        echo json_encode($response);
    }

    /**
     * Busca cartas enviadas do usuario
     */
    private function cartasEnviadas($data)
    {
        $destinatario = $data['usuario'];

        $sql = "SELECT * FROM cartas WHERE remetente = '$destinatario'";

        $result = $this->conn->query($sql);

        if ($result && $result->num_rows > 0) {
            $cartas = $result->fetch_all(MYSQLI_ASSOC);
            $response = [
                'status' => true,
                'data' => $cartas,
            ];
        } else {
            $response = [
                'status' => false,
                'msg' => 'Nenhuma carta encontrado.',
            ];
        }

        echo json_encode($response);
    }
    

}

// Crie uma instÃ¢ncia do controlador e manuseie a requisiÃ§Ã£o
$controller = new Carta();
$controller->handleRequest();

?>

