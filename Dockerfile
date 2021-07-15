FROM node:lts-buster

ENV NEXT_PUBLIC_CONTACT_RECEIVE_EMAIL=contact@sphinx-software.com

ENV NEXT_PUBLIC_APPLY_JOB_RECEIVE_EMAIL=recruit.sphinx@gmail.com

WORKDIR usr/app

COPY package.json yarn.lock ./

COPY ./ ./

RUN chown -Rh $user:$user /usr/app

USER $user

RUN yarn

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "start" ]
