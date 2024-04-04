# syntax=docker/dockerfile:1
FROM oven/bun:1-alpine as build
WORKDIR /app
COPY package.json bun.lockb ./
RUN apk add --no-cache python make g++
RUN bun i
COPY . .
RUN bun run build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy/
EXPOSE 80
