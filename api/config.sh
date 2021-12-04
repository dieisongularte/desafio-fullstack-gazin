#!/bin/bash

mkdir -p storage/framework/cache/data

mkdir -p storage/framework/sessions

mkdir -p storage/framework/views

cat .env.example > .env

chmod -R 777 storage

composer install

php artisan key:generate

php artisan config:cache

php artisan serve --host 0.0.0.0 --port $API_EXPOSED_PORT