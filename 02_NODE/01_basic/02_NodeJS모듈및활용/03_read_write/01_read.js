const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'example.txt');
// const savePath = path.join(__dirname, './text-1.txt');

const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);