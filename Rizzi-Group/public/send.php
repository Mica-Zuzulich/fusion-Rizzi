<?php
// --- 1. Inclusión de PHPMailer (Librería de envío de correos) ---
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Rutas de PHPMailer (asumiendo instalación manual en public/PHPMailer/src/)
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


// --- 2. Cargar Variables de Configuración (¡RUTA SEGURA Y CORRECTA!) ---
// '..' sube de 'public/' a la raíz de 'Rizzi-Group/' para cargar config.php
require_once '../config.php'; 

// Las variables se definen a partir de las constantes cargadas en config.php
$MAIL_USER = MAIL_USER;
$MAIL_PASS = MAIL_PASS; 
$RECAPTCHA_SECRET_KEY = RECAPTCHA_SECRET_KEY;


// --- 3. Configuración General y CORS ---
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(["success" => false, "message" => "Método no permitido."]); exit(); }


// --- 4. Recibir y Decodificar los Datos JSON (De React fetch) ---
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

if ($data === null) { http_response_code(400); echo json_encode(["success" => false, "message" => "Datos JSON inválidos."]); exit(); }

// Extracción y sanitización (similar a la desestructuración de req.body en Node.js)
$nombre = filter_var($data['nombre'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$mensaje = filter_var($data['mensaje'] ?? '', FILTER_SANITIZE_STRING);
$captchaToken = $data['captchaToken'] ?? '';

if (empty($nombre) || !$email || empty($mensaje) || empty($captchaToken)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Faltan campos requeridos."]);
    exit();
}


// --- 5. Verificación de reCAPTCHA (Lógica de contacto.js) ---
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$post_fields = [ 'secret' => $RECAPTCHA_SECRET_KEY, 'response' => $captchaToken ];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $recaptcha_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_fields));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$recaptcha_response = curl_exec($ch);
curl_close($ch);

$captcha_data = json_decode($recaptcha_response);

if (!$captcha_data || !$captcha_data->success) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Captcha inválido o expirado."]); 
    exit();
}


// --- 6. Envío de Correo con PHPMailer (Similar a Nodemailer en contacto.js) ---
$mail = new PHPMailer(true);

try {
    // Configuración SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $MAIL_USER;
    $mail->Password = $MAIL_PASS; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    
    // Remitente y Destinatario
    $mail->setFrom($MAIL_USER, 'Formulario Rizzi'); 
    $mail->addAddress($MAIL_USER); 

    $mail->Subject = 'Nuevo mensaje de ' . $nombre; 
    $body = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;
    $mail->Body = $body;
    $mail->AltBody = $body; 

    $mail->send();

    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);

} catch (Exception $e) {
    error_log("PHPMailer Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
}
?>