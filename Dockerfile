FROM node:carbon-slim

# Create app directory
WORKDIR /payandgo-wa

# Install app dependencies
COPY package.json /payandgo-wa/
COPY . /payandgo-wa/
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

# Bundle app source
CMD ["npm", "run", "serve"]
