FROM strapi/base:14

WORKDIR /srv/app

COPY ./strapi-app/package.json /srv/app

RUN yarn install

COPY ./strapi-app/ /srv/app

COPY ./strapi-app/server.js /srv/app

RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y vim

RUN service nginx start

COPY ./strapi-app/nginx/conf.d/upstream.conf /etc/nginx/conf.d/upstream.conf
COPY ./strapi-app/nginx/sites-available/strapi.conf /etc/nginx/sites-available/strapi.conf

RUN yarn global add pm2
