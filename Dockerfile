FROM node:14.15.4-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

CMD ["npm", "run", "start"]
