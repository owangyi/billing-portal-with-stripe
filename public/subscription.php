<?php

require_once __DIR__ . '/_common.php';

use Stripe\StripeClient;

if (isset($_GET['stripe_customer_reference'])) {
    getCustomer($_GET['email']);
} elseif (isset($_GET['list'])) {
    json_response(array_values(getSubscriptions($stripe_client)));
} else {
    throw new Exception("Invalid request");
}

function isSubscribed(StripeClient $stripe_client)
{
    return !(getSubscriptions($stripe_client) === []);
}

function getCustomer($email)
{
    $customers = $stripe_client->customers->search([
        'query' => 'email: "{$email}" ',
    ]);
}

function getSubscriptions(StripeClient $stripe_client)
{
    $subscriptions_by_reference = [];

    foreach ($stripe_client->subscriptions->all([
        'customer' => 'cus_RpDxD8bkX37nWz',
    ])->autoPagingIterator() as $subscription) {
        $subscriptions_by_reference[$subscription->id] = $subscription;
    }

    return $subscriptions_by_reference;
}
