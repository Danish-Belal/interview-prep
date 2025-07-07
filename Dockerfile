
FROM node:22-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install


RUN npm install -g nodemon

#copying later so that we dont have to intall eveything agani and again and packages will be catched.
COPY . .  


EXPOSE 5000


CMD ["npm", "run", "dev"]
