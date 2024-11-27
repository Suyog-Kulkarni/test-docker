# Use official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the static website (from my-website directory) to Nginx's web directory
COPY ./ /usr/share/nginx/html/

# Expose port 80 to access the website
EXPOSE 80
