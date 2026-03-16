// 배열 구조분해할당

const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];

const [a,b,c,d,e] = animals;
console.log(a,b,c,d,e);

// 2. 나머지 요소 가져오기
const [first, ...rest] = animals;
console.log(first,rest)

// 3. 기본값 설정
const zoo = ['panda', 'koala']
const [ani1, ani2, ani3='snake', ani4='monkey'] = zoo;
console.log(ani1, ani2, ani3, ani4)

// 4. 중첩된 배열
const arr = [1, [2,3], 4];

const [num1, [num3, num4], num2] = arr;
console.log(num1, num2, num3, num4)