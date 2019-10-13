FROM node:10

ARG port
ENV port=${port}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${port}
CMD [ "node", "server.js" ]