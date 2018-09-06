// for(var j=0; j<10; j++) {
//   console.log('j', j)
// }
// console.log('after loop j is ', j)

// function counter () {
//   for(var i=0; i<10; i++) {
//     console.log('i', i)
//   }
// }
// counter()
// console.log('after loop i is', i)

// (function() {
//   // var 변수는 여기까지 hoisting이 된다.
//   for(var i=0; i<10; i++) {
//     console.log('i', i)
//   }
// })();
// console.log('after loop i is', i)

// (function() {
//   for(i=0; i<10; i++) {
//     console.log('i', i)
//   }
// })()
// console.log('after loop i is', i)

// (function() {
//   'use strict'
//   for(i=0; i<10; i++) {
//     console.log('i', i)
//   }
// })()
// console.log('after loop i is', i)


for(let i = 0; i < 5; i++){

  setTimeout(function(){
    console.log(i);
  }, 100);

}
