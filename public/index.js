console.log('load index.js')


function updateCTime() {
    const el = document.querySelector('#ctime');
    const now = new Date().toString();
    el.innerHTML = `<strong>Client Time : </strong> ${now}`;
}

function updateSTime() {

    fetch('/time').then(async (res) => {
        const el = document.querySelector('#stime');
        const now = await res.text();
        el.innerHTML = `<strong>Server Time : </strong> ${now}`;
    })

   
}

setInterval(() => {
    updateSTime();
    updateCTime();
}, 1000);