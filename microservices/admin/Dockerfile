FROM node:13.12.0-alpine3.11

WORKDIR /usr/tlis_api_admin/source

COPY ./admin ./admin
COPY ./common ./common
COPY package.json .

RUN yarn

WORKDIR /usr/tlis_api_admin/source/admin

RUN yarn build-prod

RUN cp ./dist/server.js ../../

WORKDIR /usr/tlis_api_admin

RUN rm -rf source

RUN yarn add express mongodb bcrypt

CMD [ "node", "server.js" ]