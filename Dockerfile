FROM node:lts-alpine

WORKDIR /src

COPY package.json yarn.lock /src/

RUN yarn install \
    --frozen-lockfile\
    --non-interractive

COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
