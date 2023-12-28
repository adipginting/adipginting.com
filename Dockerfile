FROM node:current-alpine AS build
WORKDIR /website
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM builder AS prod
RUN adduser nextjs -S -u 1001
RUN addgroup nextjs -S -g 1001
WORKDIR /website
COPY --from=build /website/node_modules ./node_modules
COPY --from=build /website/.next ./.next

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
