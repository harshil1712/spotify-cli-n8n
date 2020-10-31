#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
require('dotenv').config();

const url = process.env.URL;

const args = process.argv.slice(2)[0];

let action = 'help';
// Arguments
switch (args) {
  case 'start':
  case 'play':
    action = 'startMusic';
    break;
  case 'curr':
    action = 'currentlyPlaying';
    break;
  case 'next':
    action = 'nextSong';
    break;
  case 'pause':
    action = 'pause';
    break;
  case 'previous':
    action = 'previousSong';
    break;
  case '--help':
    action = 'help';
    break;
  default:
    action = 'help';
}

// Perform action
const webhookReq = async () => {
  const res = await axios.post(url, {
    body: action,
  });
  const songTitle = res.data.song || '';
  const artist = res.data.artist || '';
  if (
    action === 'startMusic' ||
    action === 'nextSong' ||
    action === 'previousSong'
  ) {
    console.log(
      chalk` \n▶️  Now playing the song {green ${songTitle}} by {blue ${artist}}`
    );
  }
  if (action === 'pause') {
    console.log(chalk`\n⏸  The song {green ${songTitle}} is paused`);
  }
  if (action === 'currentlyPlaying') {
    console.log(
      chalk`\n🎧 You are listining to {green ${songTitle}} by {blue ${artist}}`
    );
  }
};

const run = async () => {
  if (action !== 'help') {
    await webhookReq();
  } else {
    const commands = [
      {
        command: 'play',
        description: 'Starts the song',
      },
      {
        command: 'pause',
        description: 'Pauses the currently playing song',
      },
      {
        command: 'next',
        description: 'Play the next song in the queue',
      },
      {
        command: 'previous',
        description: 'Play the previous song in the queue',
      },
      {
        command: 'curr',
        description: 'Gives information about the current song',
      },
    ];
    console.log(
      '🎶 Welcom to Spotify CLI! 🎶 \nHere are the list of commands you can use:'
    );
    console.table(commands);
  }
};

run();
