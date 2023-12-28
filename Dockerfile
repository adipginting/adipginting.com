FROM node:18-alpine AS build
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM build AS prod
WORKDIR /website
ENV NODE_ENV=production
RUN npm ci

RUN adduser nextjs -S -u 1001
RUN addgroup nextjs -S -g 1001
COPY --from=build --chown=nextjs:nextjs /website/node_modules ./node_modules
COPY --from=build --chown=nextjs:nextjs /website/.next ./.next
COPY --chown=nextjs:nextjs ./public ./public

USER nextjs
EXPOSE 3000
CMD ["npm", "run", "start"]