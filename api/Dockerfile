ARG PHP_TAG

FROM php:${PHP_TAG}

ARG API_EXPOSED_PORT

WORKDIR /var/www/html

ENV API_EXPOSED_PORT ${API_EXPOSED_PORT}

COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY . .

RUN apk add --no-cache \
        mysql-client \
    && docker-php-ext-install \
        pdo \
        pdo_mysql

RUN composer install

EXPOSE ${API_EXPOSED_PORT}