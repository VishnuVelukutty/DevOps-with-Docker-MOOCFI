FROM node:16

WORKDIR /frontend

COPY package.json .
COPY index.js .

RUN npm install

CMD node index.js