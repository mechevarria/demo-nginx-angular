# build using nodejs
FROM node:10 as builder

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY src/ ./src/

RUN npm run build

# run using nginx
FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/

CMD /bin/sh -c "nginx -g 'daemon off;'"

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html