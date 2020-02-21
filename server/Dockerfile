FROM node:lts-slim

WORKDIR /usr/node_server

COPY package.json ./

RUN yarn

COPY ./dist .

EXPOSE 8080

CMD [ "node", "server.js" ]
