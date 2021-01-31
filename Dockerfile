FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL "mongodb://user:pass@mongo:27017"
ENV DB_NAME points
ENV COL_NAME dataPoints
ENV COL_ARCS arcs

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
