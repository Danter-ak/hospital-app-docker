# Step 1: Build the Angular app
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Step 2: Serve it with nginx
FROM nginx:alpine
COPY --from=build /app/dist/hospital-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
