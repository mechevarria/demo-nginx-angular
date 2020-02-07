# build using nodejs
FROM node:10 as builder

WORKDIR /usr/src/app

COPY *.json ./

COPY *.js ./

RUN npm install

COPY src/ ./src/

RUN npm run build

# run using nginx
FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

CMD /bin/sh -c "envsubst < /usr/share/nginx/html/assets/js/env.template.js > /usr/share/nginx/html/assets/js/env.js && nginx -g 'daemon off;'"