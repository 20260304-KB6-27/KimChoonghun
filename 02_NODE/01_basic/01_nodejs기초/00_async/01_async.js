function sayhello(str) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if (!str) {
                reject("인사 안해?")
                return;
            }
            resolve(str)
        },3000)
    });
}

async function init() {
    try {
        const say = await sayhello('안녕')
        console.log(say);
        const bye = await sayhello()
        console.log(bye);
    } catch (error) {
        console.error(error)
    }
}

init()