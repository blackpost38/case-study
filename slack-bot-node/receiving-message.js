const RtmClient = require('@slack/client').RtmClient;

const botToken = process.env.SLACK_BOT_TOKEN || '';

const rtm = new RtmClient(botToken);
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  console.log('Message:', message); //this is no doubt the lamest possible message handler, but you get the idea
  const channel = message.channel
  const text = message.text
  rtm.sendMessage(text, channel);
});