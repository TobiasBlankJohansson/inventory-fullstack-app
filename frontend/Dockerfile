FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ARG VITE_DOMAIN_AUTH
ENV VITE_DOMAIN_AUTH=$VITE_DOMAIN_AUTH
ARG VITE_CLIENT_ID_AUTH
ENV VITE_CLIENT_ID_AUTH=$VITE_CLIENT_ID_AUTH


RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]