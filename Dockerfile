FROM node:20-alpine

WORKDIR /app
COPY . /app/

ARG DISCORD_TOKEN
ENV DISCORD_TOKEN=${DISCORD_TOKEN}

RUN yarn global add pnpm
RUN pnpm install --frozen-lockfile

CMD ["pnpm", "start"]