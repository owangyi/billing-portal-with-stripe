## About
A billing page demo which help you to manage customer payment, including creating, updating, canceling subscription and payment method with Stripe [Checkout](https://docs.stripe.com/payments/checkout/build-integration) and [Billing Portal](https://docs.stripe.com/customer-management).

## Features
1. support managing customer information
2. support selecting multiple plans
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2F163a7f5f-f475-409a-8619-01a5a7767360%2Fimage.png/size/w=2000?exp=1740300617&sig=bsGUcb4RayALWqnsd3X07rOzr3SjTAdV2KCrf_SwjoQ)
3. checkout plans
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2F273fc7d4-63e3-4fe1-85ac-e2a87a14ed16%2Fimage.png/size/w=2000?exp=1740300686&sig=SNj48SiqNPlpjYtffarFM-MPEHzD4cwyIOgmZ9ZwmFc)
4. supported multiple payment method:
    - credit card
    - link       
    - ach debit
5. can save payment method for recurring revenue
    ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2Ff206c842-8389-4a3e-ad0e-611c6f8519bf%2Fimage.png/size/w=2000?exp=1740300715&sig=_VpSVB5gSt4viBoI1Ej5t6E387Qt0SGStpMno7Ji1tU)
6. manage subscribed subscriptions
   - show subscription details
   - update subscription item and quantity
   - cancel subscription
   - review purchase records
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2F1f346667-65d2-41ff-9ee2-32232a07734c%2Fimage.png/size/w=2000?exp=1740300755&sig=B78xsCbRlkjTCioN_sDXUO89ddX6xv5tisuqP4HVo6g)
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2Fa2bbc0d9-b2fe-4422-b2ef-abe8eafd8b0d%2Fimage.png/size/w=2000?exp=1740300806&sig=Nzhjxn5dNkNbSw6VsTDGSFY7LVhtRRwSpnRNp0miskM)
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2Fd717bdb2-0c37-405b-8600-6498df7275d7%2Fimage.png/size/w=2000?exp=1740300842&sig=PUUWgw7Sf0bTHjPvRxP4lnTDEAdTRwCszfLohS-uxK4)
9. manage payment method
    - add new payment method
    - delete
    - mark as the default method
   ![](https://img.notionusercontent.com/s3/prod-files-secure%2F82b8862c-d3ff-414b-8f5c-9225193c0611%2F89fd7509-056f-43c1-b062-2b55d67f3feb%2Fimage.png/size/w=2000?exp=1740300871&sig=99gmknuHX8LAZcEPlwW7ntw2EG0vapazFwJrqG1OMCc)
## Demo
No demo online

## Setup

1. Build the server

~~~
composer install
~~~

2. Run the server

~~~
php -S 127.0.0.1:4242 --docroot=public
~~~

3. Build the client app

~~~
npm install
~~~

4. Run the client app

~~~
npm start
~~~

5. Go to [http://localhost:3000](http://localhost:3000)

## More（todo）
1. discount
2. ...
