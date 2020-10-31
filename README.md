# spotify-cli-n8n

Use this CLI tool to control your Spotify player. Build with [Node.js](https://nodejs.org), [n8n](https://n8n.io), and a lot of music!

## Getting Started

### Prerequisites

- This CLI tool is built with Node.js. [Install Node.js](https://nodejs.org) to get started.

- Copy the workflow from [n8n.io](https://n8n.io/workflows/755) and use it in your n8n instance. 

Follow the instructions in the documentation to configure your credentials for the Spotify node.

1. Clone the repository
```
git clone https://github.com/harshil1712/spotify-cli-n8n.git
```
2. Install the node modules
```
yarn install
```
or
```
npm install
```
3. Rename the .env.example to .env
4. Copy and paste your Webhook URL from n8n in the .env file and save the file
5. Open a terminal in the project directory and run the following command to add it to your global npm packages
```
npm link
```
## Features

1. ▶️ Play a song in the queue
2. ⏸ Pause a song
3. ⏭ Play the next song in the queue
4. ⏮ Play the previous song in the queue
5. ℹ️ Get the name of the current song in the queue
