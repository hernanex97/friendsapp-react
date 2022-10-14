FROM node:lts-alpine
WORKDIR /friends-chatbot
ENV PATH="./node_modules/.bin:$PATH"
COPY . /.
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
