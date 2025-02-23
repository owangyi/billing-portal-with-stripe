<?php

require_once __DIR__ . '/_common.php';

$plans = $stripe_client->prices->all();

if ($plans) {
    json_response($plans['data']);
} else {
    json_response([]);
}

