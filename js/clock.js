const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    // padStart(int, "string") : string이 가져야 하는 길이는 2,
    // 그렇지 않으면 string 앞에 0을 붙임
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
// website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록

setInterval(getClock, 1000);
