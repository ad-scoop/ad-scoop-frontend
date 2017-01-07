FROM xqdocker/ubuntu-nginx

COPY dist /data/www
#COPY /my/nginx.conf /etc/nginx/nginx.conf
#COPY /my/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
RUN service nginx start