# Stage 1: Build the Angular app

# Current Node LTS
FROM node:24-alpine AS build

WORKDIR /usr/local/app

# Install dependencies first, so Docker can cache this layer
COPY package.json package-lock.json ./
RUN npm ci

# Build the app. The output goes to dist/angular-docker-nginx/browser
COPY . .
RUN npm run build


# Stage 2: Serve the app with NGINX

# Current stable NGINX
FROM nginx:1.30-alpine

# Serve the app as a single page app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Replace the default NGINX content with the build output
COPY --from=build /usr/local/app/dist/angular-docker-nginx/browser /usr/share/nginx/html

EXPOSE 80
