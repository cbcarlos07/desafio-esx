FROM node:14.15.1-alpine3.11

WORKDIR /usr/app

COPY web-api/package*.json ./
RUN npm install
RUN npm run create
COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]