FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN corepack enable && npm install --frozen-lockfile
EXPOSE 3000
CMD ["npm","run","start:prod"]
