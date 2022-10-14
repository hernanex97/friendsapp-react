FROM node:lts-alpine AS build-env

ENV PATH="./node_modules/.bin:$PATH"

RUN mkdir /app/
COPY . ./app/
WORKDIR /app/

RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
