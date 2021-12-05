ARG NODE_TAG

FROM node:${NODE_TAG}

ARG APP_EXPOSED_PORT

ENV APP_EXPOSED_PORT ${APP_EXPOSED_PORT}

WORKDIR /var/www/html

COPY package.json .

RUN npm install

CMD ["npx","ng","serve","--host","0.0.0.0","--port","$APP_EXPOSED_PORT"]