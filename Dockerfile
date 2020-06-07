FROM node:lts-alpine

RUN npm install --global @vue/cli

# モックサーバー
RUN npm install -g drakov

WORKDIR /projects