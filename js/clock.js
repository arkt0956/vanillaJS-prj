const clock = document.querySelector('#clock');

function getClock() {
    const hour = String(new Date().getHours()).padStart(2,"0");
    const minute = String(new Date().getMinutes()).padStart(2,"0");
    // const second = String(new Date().getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hour}:${minute}`;
    const username = localStorage.getItem("username");

    if(username !== null) {
    clock.classList.remove("hidden");
    }
}

getClock();
setInterval(getClock,1000);
