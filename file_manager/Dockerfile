FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN cp -r ./dist/src/* .

EXPOSE 3333

CMD ["npm", "run", "start"]