FROM node:lts

WORKDIR /src
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn build
CMD [ "npx", "serve", "-s", "build"]