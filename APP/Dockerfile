#imagen oficial de Node.js
FROM node:18

#directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

#copiar package.json y package-lock.json
COPY package*.json ./

#instalamos dependencias
RUN npm install

#copia proyecto al contenedor
COPY . .

#puerto que se va a exponer
EXPOSE 3000

CMD [ "npm", "start" ]
