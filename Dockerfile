# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Add `node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install any needed packages
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Bundle app source
COPY . /app

# Start the app
CMD ["npm", "start"]
