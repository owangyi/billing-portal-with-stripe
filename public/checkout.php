<?php

require_once __DIR__ . '/_common.php';

$payload = json_decode(file_get_contents('php://input'), true);

$customer_email = $payload['email'] ?? 'wangyi@icloud.com';

$stripe_price_references = $payload['plans'] ?? [];

if (empty($stripe_price_references)) {
    throw new Exception('Invalid Stripe price references');
}

$line_items =[];

foreach ($stripe_price_references as $price) {
    $line_items[] = [
        'price' => $price,
        'quantity' => 1,
    ];
}

$checkout_session = $stripe_client->checkout->sessions->create([
    'customer_email' => $customer_email,  // If not provided, customers will be asked to enter their email address.
    'line_items' => $line_items,
    'mode' => 'subscription',
    'saved_payment_method_options' => [
        'payment_method_save' => 'enabled',
    ],
    'success_url' => $web_url . '/subscription',
    'cancel_url' => $web_url . '/subscription',
]);

json_response(['redirect_url' => $checkout_session->url]);
exit;


