const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, './text-1.txt');

// 동기 방식 파일 쓰기
const data = fs.readFileSync(filePath, 'utf-8');
fs.writeFileSync(savePath, data);