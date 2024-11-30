# Use an official node image as a base
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the React app build files
COPY . .

# Build the React app
RUN npm run build

# Install 'serve' globally to serve the production build
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 80

# Command to serve the build version of the app
CMD ["serve", "-s", "build", "-l", "80"]