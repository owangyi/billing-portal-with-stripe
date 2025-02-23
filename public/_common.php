<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use Stripe\StripeClient;

$dotenv = Dotenv::createImmutable(__DIR__ . '../../')->safeLoad();

$web_url = $_ENV['WEB_URL'];
$stripe_client = new StripeClient([
    'api_key' => $_ENV['STRIPE_SECRET'],
]);

function json_response($data, $status = 200, $message = '')
{
    echo json_encode([
       'data' => $data,
       'status' => $status,
       'message' => $message,
    ]);
}
