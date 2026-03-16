// let obj = {result:0};

// // Javascript this 바인딩 문제
// obj.add = function(x,y) {
//     function inner() {
//         // this?
//         this.result = x+y;
//     }

//     // 일반함수 호출시에 this는 전역객체를 참조
//     // inner 함수의 this는 global(node), window
//     return inner()
// };

// obj.add(3,4);
// console.log(obj);
// console.log(result);

// console.log(global.result);

// 바인딩 문제를 해결하기 위한 해결책
// 1. 화살표함수 : 호출된 상위객체의 this
// let obj = {result:0};

// obj.add = function(x,y) {
//     const inner = () => {
//         // 화살표 함수 안의 this : 상위 scope의 this
//        this.result = x+y; // this가 정상적으로 obj를 가르키며 result가 제대로 갱신된다!
//     }

//     return inner()
// };

// obj.add(3,4)
// console.log(obj);
// console.log(obj.result);
// console.log(global.result);

// 2. bind()로 병시적 바인딩
// 함수의 this 값을 특정 객체의 영구적으로 바인딩한 새로운 함수를 반환
// 첫번째 인자로 전달된 객체가 this로 설정됨

let obj = { result: 0 };

// KavaScript this 바인딩 문제
obj.add = function (x,y) {
    function inner() {
        this.result = x+y;
    }

    inner.bind(obj)(); //명시적 작성
}

obj.add(3,4)
console.log(obj)