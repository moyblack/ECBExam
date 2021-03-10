FROM node:10

COPY package.json /src/package.json

RUN cd /src && npm install --loglevel error

COPY . /src
WORKDIR /src

WORKDIR /app

RUN npm run build

EXPOSE 3000
CMD ["sh", "-c", "npm start"]