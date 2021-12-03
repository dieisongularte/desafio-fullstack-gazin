ARG PHP_TAG

FROM php:${PHP_TAG}

WORKDIR /var/www/html

COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY . .

RUN apk add --no-cache \
        mysql-client \
    && docker-php-ext-install \
        pdo \
        pdo_mysql

RUN mkdir -p storage/framework/cache/data \
    && mkdir -p -m 777 storage/framework/sessions \
    && mkdir -p -m 777 storage/framework/views \
    && cat .env.example > .env \
    && chmod -R 777 storage \
    && composer install \
    && php artisan key:generate \
    && php artisan config:cache

CMD ["php","artisan","serve","--host","0.0.0.0"]