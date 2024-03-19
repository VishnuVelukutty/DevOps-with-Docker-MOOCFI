FROM node:17-alpine
WORKDIR /frontend
COPY frontend .
COPY /frontend/package.json .
RUN npm init -y && npm install && npm install -g serve
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "-l", "3000", "build"]