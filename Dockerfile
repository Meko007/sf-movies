FROM node:20

WORKDIR /usr/src/app

# Install Dependncies
COPY package*.json ./

RUN npm install

# Copy app files
COPY . .

# Start server
EXPOSE 3000

CMD [ "npm", "start" ]