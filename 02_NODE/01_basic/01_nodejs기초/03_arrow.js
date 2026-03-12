// var getTriangle = function (base, height) {
//     return (base * height) / 2;
// }

// console.log('삼각형의 면적:' + getTriangle(5,2));

// 화살표 함수
var getTriangle = (base, height) => {
    
    // 추가 코드 작성
    

    return (base * height) / 2;
}

console.log('삼각형의 면적:' + getTriangle(5,2));


const person = {
    name : "김충훈",
    
    // 일반함수
    hello1 : function () { console.log(`일반함수 : `, this)},

    // 화살표함수
    hello2 : () => { console.log('화살표함수: ', this)}
}

person.hello1()
person.hello2()

/*
    삼각형의 면적:5
    일반함수 :  { name: '김충훈', hello1: [Function: hello1], hello2: [Function: hello2] }
    화살표함수:  {}
    
    화살표 함수는 this로 객체 자신을 못 가져온다.
*/