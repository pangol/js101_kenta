# js101_kenta
## Express install

```
npm init
npm install express --save
```

## Http 서버 실행하기

익스프레스 모듈을 require로 로딩
홈 - get 으로 접근할 때 Hello World로 전송함
listen()를 사용해서, 포트 지정과 서버 실행 시 출력될 문구를 지정함

```
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'))
app.listen(3000, ()=> console.log('Example app listening on port 3000!'));
```

** const의 의미 **
es2015 에서 들어감
https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d

let 과 클로져, for 루프와 관련된 설명 글
http://hacks.mozilla.or.kr/2016/03/es6-in-depth-let-and-const/

()=>의 의미

이 전 버전
```
var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('Hello World');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
```

var는 function-scope
let, const는 block-scope

```
for(var j=0; j<10; j++) {
  console.log('j', j)
}
console.log('after loop j is ', j)

function counter () {
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
}
counter()
console.log('after loop i is', i)
```

위의 j는 정상 수행되는 반면에 counter함수 안의 i는 not defined 에러 발생
독립적으로? 변수를 사용하려면 함수처럼 스코프 지정이 필요한 것으로 보임

아래처럼 immediately-invoked function expression (or IIFE, pronounced "iffy")로 구획할 수 있다.

```
(function() {
  // var 변수는 여기까지 hoisting이 된다.
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i)
```

아래처럼 var 없이 쓰면 전역변수로 할당됨

```
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i)
```
위의 코드는 i의 값이 출력
위의 상황을 방지하기 위해 'use strict'를 사용함

let, const는 변수 재선언 불가능
let은 재할당가능, const는 재선언, 재할당 불가능



