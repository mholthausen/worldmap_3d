FROM node:14.15.4-alpine as builder
# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:1.21-alpine
COPY dist/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]