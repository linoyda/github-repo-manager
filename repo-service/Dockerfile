FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .
EXPOSE 3001

# Define the command to run the app
CMD ["node", "src/index.js"]
