FROM node:22-alpine3.19

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY ./package*.json ./

# Install node packages
RUN yarn install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY ./ .

# Build the app
RUN yarn run build

# Start the app
CMD [ "yarn", "start" ]