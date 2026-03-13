const fsp = require('fs').promises;

fsp.readdir('./')
    .then((files) => {
        console.log('then-catch',files);
    })
    .catch((err) => {
        console.error(err);
    });

async function readDir() {
   try {
    const files = await fsp.readdir('./');
    console.log('async/await',files);
   } catch (e) {
    console.error(e);
   }
}

readDir();