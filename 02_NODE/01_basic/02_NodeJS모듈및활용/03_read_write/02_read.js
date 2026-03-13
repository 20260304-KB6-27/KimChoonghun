
const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises')

const filePath = path.join(__dirname, 'example.txt');
// const savePath = path.join(__dirname, './text-1.txt');

//비동기(콜백) 방식 파일 읽기
fs.readFile(filePath, {'encoding': 'utf-8'},
    (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    }
);

//비동기(프라미스) 방식 파일 읽기
fsp.readFile(filePath, {'encoding': 'utf-8'})
    .then(data => console.log(data))
    .catch(err => console.error(err));

// console.log(data);