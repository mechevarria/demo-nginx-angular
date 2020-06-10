# build using nodejs
FROM node:12 as builder

WORKDIR /usr/src/app

COPY *.json ./

COPY *.js ./

RUN npm install

COPY src/ ./src/

RUN npm run build

# run using nginx
FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/

COPY ./nginx/entrypoint.sh /usr/bin/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

ENTRYPOINT [ "/usr/bin/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]