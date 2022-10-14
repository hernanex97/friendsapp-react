# FROM node:lts-alpine AS build-env

# ENV PATH="./node_modules/.bin:$PATH"

# RUN mkdir /app/
# COPY . ./app/
# WORKDIR /app/

# RUN npm install
# RUN npm run build
# EXPOSE 8080

# CMD ["npm", "start"]


FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/

EXPOSE 3080

CMD ["node", "./api/server.js"]