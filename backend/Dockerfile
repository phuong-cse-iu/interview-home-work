FROM node:alpine
RUN npm install pm2 -g
COPY . /app
WORKDIR /app
RUN npm i
ENV NODE_ENV=production
CMD [ "pm2-runtime", "start","/app/src/server.js"]