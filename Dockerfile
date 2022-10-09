FROM node:16
WORKDIR /opt/projetos/node/projeto-node
COPY package*.json ./
RUN npm install
RUN npm install -g winston
COPY . .
EXPOSE 3000
CMD ["node", "."]