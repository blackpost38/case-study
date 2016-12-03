node celery test
===

node-celery로 꾸준하게 응답을 받아야 하는 문제.

`celery.js`의 304 번째 줄에 다음과 같이 수정하면,

응답이 끝나는 특정 status일 때, unsubscribe 하는 code로 수정

```js
ready_states = ["SUCCESS", "FAILURE", "REVOKED"];
if (ready_states.indexOf(message.status) >= 0) {
    console.log("unsubscribing to " + ctag);
    q.unsubscribe(ctag);
    debug('Emiting ready event...');
    self.emit('ready', message);
}
```