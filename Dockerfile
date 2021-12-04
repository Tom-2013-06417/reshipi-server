FROM node:14

WORKDIR /mnt/server

COPY . .
RUN yarn && yarn build

EXPOSE 4000
CMD yarn start
