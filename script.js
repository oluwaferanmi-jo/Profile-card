function updateTime() {
    document.getElementById('utc-time').innerText
     = new Date().toUTCString();
}

updateTime();
setInterval(updateTime, 1000);
