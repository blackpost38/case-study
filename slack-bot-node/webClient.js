const WebClient = require('@slack/client').WebClient;
const token = process.env.SLACK_API_TOKEN || ''; //see section above on sensitive data

const web = new WebClient(token);
const CHANEL = 'gan-a';
const MESSAGE = 'Hello there';
web.chat.postMessage(CHANEL, MESSAGE, function(err, res) {
  if (err) {
    return console.log('Error:', err);
  }
  console.log('Message sent: ', res);
});
