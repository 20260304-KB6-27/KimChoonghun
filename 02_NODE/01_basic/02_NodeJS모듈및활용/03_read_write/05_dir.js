const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises')


// 비동기 (콜백) 방식 폴더 만들기
if (fs.existsSync('./test')) {
    console.log("이미 폴더가 존재합니다!");
} else {
    fs.mkdir('./test', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('./test', "생성 완료!");
    })
}


// 비동기 (프라미스) 방식 파일 쓰기
if (fs.existsSync('./test')) {
    console.log("이미 폴더가 존재합니다!");
} else {
    fsp.mkdir('./test')
    .then(_ => console.log('./test', "생성 완료!"))
    .catch(err => console.error(err));
}

