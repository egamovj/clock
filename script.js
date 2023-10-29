function updateTime() {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    const dateElement = document.getElementById("date");
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.textContent = seconds;
    dateElement.textContent = date;
}

setInterval(updateTime, 1000);

updateTime();