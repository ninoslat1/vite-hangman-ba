# Stage 1: Build Node.js application
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Build Go server
FROM golang:1.20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/main.go .
RUN go mod init vite-hangman-ba
RUN go build -o main .

# Stage 3: Serve the application
FROM golang:1.20-alpine AS server
WORKDIR /app
COPY --from=runner /app/dist /app/dist
COPY --from=runner /app/main .
EXPOSE 5000
CMD ["./main"]