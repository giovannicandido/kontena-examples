FROM node:6-alpine
RUN mkdir -p /usr/local/app && chown node.node /usr/local/app


WORKDIR /usr/local/app
USER node

COPY package.json /usr/local/app
RUN npm install

COPY . /usr/local/app

CMD ["npm", "run", "start"]

