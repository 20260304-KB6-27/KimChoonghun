const path = require('path');

const filePath = path.join('some','work','ex.txt');
console.log(filePath);

console.log('파일 절대 경로:',path.normalize(__filename)); //현재 파일의 절대 경로
console.log('경로만:',path.dirname(__filename)) //현재 파일의 위치

console.log('파일 이름:',path.basename(__filename)); //파일 이름
console.log('파일 이름(확장자 제외):',path.basename(__filename,'.js')); //확장자 제외한 파일 이름

console.log('파일 확장자:',path.extname(__filename)); //파일 확장자명

console.log(path.parse(__filename));

