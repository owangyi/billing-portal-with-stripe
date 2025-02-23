<?php

require_once __DIR__ . '/_common.php';

$stripe_customer_reference = 'cus_RpDxD8bkX37nWz';

$billing_portal_session = $stripe_client->billingPortal->sessions->create([
    'customer' => $stripe_customer_reference,
    'return_url' => $web_url . '/subscription',
]);

header("HTTP/1.1 303 See Other");
header("Location: " . $billing_portal_session->url);


/**
 * Checkout 预填需同时满足：
 * - Mode 必须为 payment/subscription[10]
 * - allow_redisplay=always[5]
 * - Customer 对象必须关联有效默认支付方式[10]
 * - 支付方式类型为信用卡[10]
 */





