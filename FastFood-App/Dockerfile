FROM node:16-alpine3.16 as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:16-alpine3.16 as build_image
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
USER root

RUN npm build
RUN rm -rf node_modules
RUN npm install

FROM node:16-alpine3.16
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S angular -u 1001

WORKDIR /app
COPY --from=build_image --chown=angular:nodejs /app/package.json ./
COPY --from=build_image --chown=angular:nodejs /app/node_modules ./node_modules

USER angular
EXPOSE 4300
CMD ["npm","start"]





