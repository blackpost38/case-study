socket io celery reconnection
===

아래 사항 확인

기존 작업 도중 connection이 끊어지고, reconnection을 할 때..

user가 재접속이고, 진행하던 작업이 있을 때,

진행하던 작업을 담당하는 celery client로 다시 연결해준다.

work flow
---
1. user connection on client
1. request to back-end to call some command on client
1. save task info on back-end
1. working on mlcore
1. user disconnection on client
1. save task info on back-end
1. user reconnection on client
1. checking task info on back-end
1. response to back-end on mlcore
1. response to client on back-end
