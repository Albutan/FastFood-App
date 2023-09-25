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

FROM node:16-alpine3.16 as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=8192"
RUN npm run build
EXPOSE 4200
CMD [ "npm", "start" ]