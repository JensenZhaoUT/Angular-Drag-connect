# Stage 1: Build the Angular app
FROM node:18-alpine as build

# Create app directory
WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Build the app (output will go to /app/dist/)
RUN ng build --configuration production

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy built Angular files to NGINX
COPY --from=build /app/dist/drag-connect-app /usr/share/nginx/html

# Copy default NGINX config (optional, if needed)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
