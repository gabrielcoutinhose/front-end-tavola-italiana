FROM node:22-alp

# fix script and env logic later
ARG MODE=start
ENV NODE_ENV=${MODE}

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3001

CMD ["sh", "-c", "yarn run ${NODE_ENV}"]