FROM node:lts-buster

WORKDIR usr/app

COPY package.json yarn.lock ./

COPY ./ ./

RUN chown -Rh $user:$user /usr/app

USER $user

RUN yarn

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]
