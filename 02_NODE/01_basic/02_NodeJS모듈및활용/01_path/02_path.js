const path = require('path');
// import path from 'path'; //esm

// __filename, __dirname -> esm에서는 사용 불가
/*
    path 모듈
    - 파일 경로나 디렉토리 경로를 다루는 모듈
    - OS 간의 경로를 구분하는 구분자가 다르지만 통일 가능하다
*/
// const url = require('url');
// import { fileURLToPath } from 'url';

// const dir = url.fileURLToPath(import.meta.url);
// console.log(dir);
console.log('----------------------');

//현재 작업 디렉터리
console.log(process.cwd());