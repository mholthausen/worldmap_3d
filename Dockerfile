FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
RUN apk add --no-cache nginx
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/http.d/default.conf
COPY nginx.conf /etc/nginx/http.d/
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install --only=production
COPY server/server.js ./
RUN mkdir -p /usr/share/nginx/html/data
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80 3001
CMD ["/start.sh"]
