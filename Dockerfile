FROM node:10

COPY package.json /src/package.json

RUN cd /src && npm install --loglevel error

COPY . /src
WORKDIR /src

EXPOSE 3000
RUN npm run build

CMD ["sh", "-c", "npm start"]