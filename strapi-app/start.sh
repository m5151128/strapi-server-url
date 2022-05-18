#!/usr/bin/env bash

ln -s /etc/nginx/sites-available/strapi.conf /etc/nginx/sites-enabled/strapi.conf
service nginx start

yarn develop
