node-global
===

NodeJS는 event driven. event loop가 돌면서 request가 오면 그에 맞는 response를 보내 주는 것 뿐.

헷갈렸던 건, Java의 servlet 환경과 헷갈렸다..?

요청을 할 때마다 sevlet 객체가 생성되어 따로 노는 줄 알았는데, 알고 보니 그것도 아니더라.
 
결론은 내가 엉터리로 알고 있었을 뿐.

Java의 경우도 전역 변수가 공유되기 때문에 member variable, local variable 신중히 사용하더라.

 