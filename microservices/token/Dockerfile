FROM node:13.12.0-alpine3.11

WORKDIR /usr/tlis_api_token/source

COPY ./token ./token
COPY ./common ./common
COPY package.json .

RUN yarn

WORKDIR /usr/tlis_api_token/source/token

RUN yarn build-prod

RUN cp ./dist/server.js ../..

WORKDIR /usr/tlis_api_token

RUN rm -rf source

RUN yarn add express mongodb bcrypt

CMD [ "node", "server.js" ]