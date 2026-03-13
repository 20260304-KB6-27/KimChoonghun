const path = require('path');

const ext = path.extname(__filename)
console.log('파일 확장자:',ext); //파일 확장자명

const parsdPath = path.parse(__filename);
console.log('parsedPath:',parsdPath);

