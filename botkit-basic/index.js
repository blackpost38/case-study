const Botkit = require('botkit');
const debug = require('debug')('botkit-basic');
debug('botkit-basic debug!');

if (!process.env.token) {
  debug('Error: Specify token in environment');
  process.exit(1);
}

const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: process.env.token,
}).startRTM();

controller.on('message_received', (bot, message) => {
  debug('message_received', message);
});

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
  bot.reply(message, 'Hello yourself.');
});
