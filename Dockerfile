# Stage 1: Build Node.js application
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Node.js
FROM node:22-alpine AS server
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY index.js .
EXPOSE 5000
CMD [ "node", "index.js" ]