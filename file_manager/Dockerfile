FROM node:12-alpine as assets_prepare

RUN set -ex && \
    mkdir -p /var/backend/file_manager

WORKDIR /var/backend/file_manager

COPY package.json package-lock.json ./

RUN apk add --no-cache bash && \
    npm install

FROM node:12-alpine

COPY --from=assets_prepare /var/backend/file_manager /var/backend/file_manager

COPY . /var/backend/file_manager

WORKDIR /var/backend/file_manager

CMD [ "npm", "start" ]

