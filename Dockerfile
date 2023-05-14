# Base image
FROM alpine:3.14

# Install necessary packages
RUN apk update && apk add nodejs npm yarn

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn run build


EXPOSE 3000


VOLUME [ "/app-data" ]

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
