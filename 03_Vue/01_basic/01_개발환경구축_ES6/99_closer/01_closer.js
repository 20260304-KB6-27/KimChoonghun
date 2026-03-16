function outer() {
    let count = 0;

    function inner() {
        count++; // outer 함수의 지역변수

        console.log(count);
    }

    return inner
}

// outer()();
// outer()();
// outer()();
const counter = outer();

counter();
counter();
counter();