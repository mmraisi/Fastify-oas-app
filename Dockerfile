# Use Node.js v18 as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/src/server.js"]
