FROM node:18-alpine AS build
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

FROM build AS prod
ENV NODE_ENV=production
WORKDIR /website
RUN adduser nextjs -S -u 1001
RUN addgroup nextjs -S -g 1001
COPY package*.json ./
COPY --from=build --chown=nextjs:nextjs /website/node_modules ./node_modules
COPY --from=build --chown=nextjs:nextjs /website/.next ./.next
COPY --from=build --chown=nextjs:nextjs /website/public ./public

USER nextjs
EXPOSE 2000
CMD ["npm", "run", "start"]