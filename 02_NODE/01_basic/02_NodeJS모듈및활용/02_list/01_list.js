const fs = require('fs'); //콜백 방식이다!

// 동기 방식 readdirSync
let files = fs.readdirSync('./');
console.log('동기 방식 파일 조회', files);