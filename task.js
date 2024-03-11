const cookie = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');
const clicker__speed = document.getElementById('clicker__speed');

let clicks_dt = []

cookie.onclick = () => {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
    if (Number(clicker__counter.textContent) % 2 == 0) {
        cookie.width += 20;
    } else {
        cookie.width -= 20;
    }
    if (clicks_dt.length < 2) {
        clicks_dt.push(Date.now());
    } else if (clicks_dt.length >= 2) {
        clicks_dt.splice(0, 1);
        clicks_dt.push(Date.now());
        clicker__speed.textContent = Number((clicks_dt[1] - clicks_dt[0]) / 1000).toFixed(2)
    }
}