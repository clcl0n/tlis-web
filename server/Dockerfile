FROM node:lts-slim

WORKDIR /usr/tlis_api/source

COPY . .

RUN yarn

RUN yarn build-prod

COPY ./dist/server.js ..
COPY package.json ..

WORKDIR /usr/tlis_api

RUN yarn install --production

EXPOSE 8080

CMD [ "node", "server.js" ]