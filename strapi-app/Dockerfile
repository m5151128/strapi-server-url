FROM strapi/base:14

WORKDIR /srv/app

COPY ./strapi-app/package.json /srv/app

RUN yarn install

COPY ./strapi-app/ /srv/app

# RUN yarn build

COPY ./strapi-app/server.js /srv/app

RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y xinetd
RUN apt-get install -y vim

RUN service nginx start

COPY ./strapi-app/nginx/conf.d/upstream.conf /etc/nginx/conf.d/upstream.conf
COPY ./strapi-app/nginx/sites-available/strapi.conf /etc/nginx/sites-available/strapi.conf
COPY ./strapi-app/xinetd.d/nginx /etc/xinetd.d/nginx

RUN service nginx reload

RUN yarn global add pm2
RUN pm2 start server.js --name api
