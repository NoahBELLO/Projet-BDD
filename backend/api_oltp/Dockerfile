FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3001

COPY package*.json ./

COPY . .

RUN npm i
RUN npm install -g nodemon

ENTRYPOINT [ "nodemon", "./src/app.ts" ]