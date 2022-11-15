# Imagen base del sistema operativo
FROM node:19-slim

# Directorio de trabajo de la aplicacion
WORKDIR /app

COPY package*.json ./

RUN npm install

# COPY /src/ /app/
COPY . . 

CMD [ "npm", "start" ]