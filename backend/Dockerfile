# Use Node.js as the base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install nodemon
# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
