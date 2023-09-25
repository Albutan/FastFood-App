# FROM node:16-alpine3.16 as base
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install

# FROM node:16-alpine3.16 as build_image
# WORKDIR /app
# COPY --from=base /app/node_modules ./node_modules
# COPY . .
# USER root

# RUN npm run build
# RUN rm -rf node_modules
# RUN npm install

# # FROM node:16-alpine3.16
# # ENV NODE_ENV production
# # RUN addgroup -g 1001 -S nodejs
# # RUN adduser -S angular -u 1001
# # --from=build_image --chown=angular:nodejs
# # --from=build_image --chown=angular:nodejs

# WORKDIR /app
# COPY  /app/package.json ./
# COPY  /app/node_modules ./node_modules

# USER angular
# EXPOSE 4300
# CMD ["npm","start"]

FROM node:lts-bullseye as base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/dist /var/www/app/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]