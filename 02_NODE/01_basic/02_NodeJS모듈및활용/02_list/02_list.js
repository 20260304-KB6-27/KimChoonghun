const fs = require('fs'); //콜백 방식이다!
const fsp = require('fs/promises'); //프로미스 방식이다!

// 비동기 방식 readdir
fs.readdir('./', (err,files) => { 
    console.log('콜백 방식 비동기 파일 조회',files)
});

fsp.readdir('./')
    .then(files => console.log('프로미스 방식 비동기 파일 조회',files))
    .catch(err => console.error(err))

async function readdirWithasync() {
    try {
        const files = await fsp.readdir('./');
        console.log('async/await 방식 비동기 파일 조회',files)
    } catch (e) {
        console.error(e)
    }
}

readdirWithasync();