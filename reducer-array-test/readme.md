Reducer Array Test
===

Redux의 reducer를 배울때, 2가지 특징을 얘기한다.

reducer는 side effect가 없어야 하며, parameter를 변경하지 않는다.

따라서 array 같은 경우 reducer에서 다음과 같이 return 한다.

```
// index에 있는 값을 1 증가하는 reducer
const some = (foo, index) => {
  return [
    ...foo.slice(0, index),
    foo[index] + 1,
    ...foo.slice(index + 1)
  ]
};
```

slice method를 사용하면, 새로운 값을 생성하므로 immutable 하게 parameter를 유지할 수 있다.

여기까진 알고 있었는데 이번에 겪었던 문제는 Object 안의 array 였다.

```
const bar = {
  foo: [1, 2, 3]
}
```

bar의 foo 값을 변경하는 reducer를 작성하면서 아래와 같은 방법을 생각했다.

```
// index에 있는 값을 1 증가하는 reducer
const some = (bar, index) => {
  let copiedBar = Object.assign({}, bar);
  copiedBar.foo[index] = copiedBar.foo[index] + 1;
  return copiedBar;
};
```

assign method를 사용하면 object를 복제하므로 위와 같이 index에 접근해서 바로 수정할 수 있다고 생각했다.

그러나 parameter 값이 변하더라. 복제가 제대로 안된걸까?

생각해보니 array는 reference type 아니던가..!

같은 곳을 바라보니 어떤 변수가 값을 바꿔버리면 다른 변수도 덩달아 바뀌어 버리는 것이다.

간단하게 설명하자면 아래와 같은 현상이 발생했던 것이다.

```
var foo = [1, 2, 3];
var copiedFoo = foo;
copiedFoo[1] = copiedFoo[1] + 1;
console.log(foo[1]);  // 3
```

따라서 assign을 사용해도 reference type의 array는 아래와 같이 변경해야 하더라..

```
const some = (bar, index) => {
  return Object.assign({}, bar, {
    foo: [
      ...bar.foo.slice(0, index),
      bar.foo[index] + 1,
      ...bar.foo.slice(index + 1)
    ] 
  });
};
```
