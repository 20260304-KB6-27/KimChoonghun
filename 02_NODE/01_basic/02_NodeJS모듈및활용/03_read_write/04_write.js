const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises')

const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, './text-2.txt');

// 비동기 (콜백) 방식 파일 쓰기
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFile(savePath, data, (err, _) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("text-2.txt 저장 완료!")
    });
});

// 비동기 (프라미스) 방식 파일 쓰기
fsp.readFile(filePath, 'utf-8')
    .then(data => fsp.writeFile(savePath, data))
    .then(_ => console.log("text-2.txt 저장 완료!"))
    .catch(err => console.error(err))
