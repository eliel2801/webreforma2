# Etapa 1: Build da aplicação React
FROM node:18 AS builder
WORKDIR /app

# Copiar arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Configuração do servidor
FROM node:18
WORKDIR /app

# Instalar dependências necessárias para o servidor
COPY package.json package-lock.json ./
RUN npm install --production

# Copiar os arquivos de build do frontend
COPY --from=builder /app/dist ./dist
COPY server.js .

EXPOSE 3000
CMD ["node", "server.js"]
