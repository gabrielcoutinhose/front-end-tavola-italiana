FROM node:18-alpine

ARG MODE=dev
ENV NODE_ENV=${MODE}

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE ${PORT:-3000}

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"prod\" ]; then yarn build && yarn global add serve && serve -s build -l ${PORT:-3000}; else yarn start; fi"]