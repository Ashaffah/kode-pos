# Use an official Node.js runtime as a parent image
FROM node:18
ARG API_KEY
ARG DATABASE_URL

ENV SECRET_VAR=$API_KEY
ENV DATABASE_URL=$DATABASE_URL
# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json ./

# Install dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the current directory contents into the container at /app
COPY . .

# Compile TypeScript code
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["node", "temp/index.js"]