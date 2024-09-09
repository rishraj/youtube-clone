# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Install ffmpeg in the container
RUN apt-get update && apt-get install -y ffmpeg

# Copy entire video processing directory inside the Docker image
COPY . .

# Make port 3000 available outside this container
EXPOSE 3000

# Command to run your app (only 1 CMD allowed in a Dockerfile)
CMD [ "npm", "start" ]
