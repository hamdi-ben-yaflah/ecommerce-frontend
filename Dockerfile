
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]
