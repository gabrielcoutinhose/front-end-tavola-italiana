FROM node:22-alpine

ARG MODE=dev
ENV NODE_ENV=${MODE}

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE ${PORT:-3000}

CMD ["sh", "-c", "yarn run ${NODE_ENV}"]