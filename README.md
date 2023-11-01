# Discord Bot

This is a Discord bot built with Node.js and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Setup

1.  Clone the repository to your local machine:
2.  Create a `.env` file in the project root to store your environment variables, such as your Discord token:

```
DISCORD_TOKEN=your-discord-token
```

3.  Build the Docker image for your project

```
docker compose build
```

4.  Start the Docker container using Docker Compose

```
docker compose up -d
```
