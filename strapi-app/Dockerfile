FROM strapi/strapi:3.6.8-node14

WORKDIR /srv/app

COPY ./strapi-app/package.json /srv/app

RUN yarn install

COPY ./strapi-app/ /srv/app

RUN yarn build

COPY ./strapi-app/server.js /srv/app

RUN yarn global add pm2
RUN pm2 start server.js
