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
COPY --from=build /website/src ./src
COPY --from=build --chown=nextjs:nextjs /website/node_modules ./node_modules
COPY --from=build --chown=nextjs:nextjs /website/.next ./.next
COPY --chown=nextjs:nextjs ./public ./public

USER nextjs
EXPOSE 3000
CMD ["npm", "run", "start"]