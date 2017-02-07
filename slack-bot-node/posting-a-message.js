const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const debug = require('debug')('posting-a-message');

const botToken = process.env.SLACK_BOT_TOKEN || '';
const channel = 'C3R5WHD16';  // #gan-a

const rtm = new RtmClient(botToken);

// The client will emit an RTM.AUTHENTICATED event on successful connection,
// with the `rtm.start` payload if you want to cache it
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  debug(`
    Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name},
    but not yet connected to a channel
  `);
});

// you need to wait for the client to fully connect before you can send messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
  rtm.sendMessage('Hello!', channel);
});

rtm.start();
