const IncomingWebhook = require('@slack/client').IncomingWebhook;
const url = process.env.SLACK_WEBHOOK_URL || '';
const webhook = new IncomingWebhook(url);

webhook.send('hello, world!', (err, res) => {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log('Message sent: ', res);
});
