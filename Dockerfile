FROM node:lts-alpine
WORKDIR /friends-chatbot
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
