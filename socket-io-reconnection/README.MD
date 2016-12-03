socket io reconnection
===

기존 작업 도중 connection이 끊어지고, reconnection을 할 때..

socket object가 새롭게 생성된다.

그러면 server가 사용자가 재접인지 아닌지 판단할 방법이 없음.

따라서 socket object를 변수에 보관하여 동일한 user가 접속할 때,

기존 socket을 사용할 수 있도록 한다.

> 전역 변수를 사용하므로, memory 사용이 커질 것
> 다른 방법이 없는지 검토해야 한다.