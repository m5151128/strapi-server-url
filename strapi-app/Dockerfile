FROM strapi/base:14

WORKDIR /srv/app

COPY ./strapi-app/package.json /srv/app

RUN yarn install

COPY ./strapi-app/ /srv/app

COPY ./strapi-app/server.js /srv/app

RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y vim

COPY ./strapi-app/nginx/sites-available/strapi.conf /etc/nginx/sites-available/strapi.conf

COPY ./strapi-app/start.sh /start.sh
RUN chmod 744 /start.sh
CMD ["/start.sh"]
