class PomodoroTimer {
    constructor() {
        this.workBtn = document.querySelector('#work-btn');
        this.longBreakBtn = document.querySelector('#long-break-btn');
        this.shortBreakBtn = document.querySelector('#short-break-btn');
        this.timeDisplay = document.querySelector('#time-display');
        this.timeout = null;
    }
    setEventListeners() {
        let iself = this;
        this.workBtn.addEventListener("click", function () {iself.startTimer(25)});
        this.longBreakBtn.addEventListener("click", function () {iself.startTimer(15)});
        this.shortBreakBtn.addEventListener("click", function () {iself.startTimer(5)});
    }
    timePadding = (seconds) => {
        return seconds < 10 ? `0${seconds.toString()}` : seconds;
    }
    renderTime = (seconds) => {
        const minutesInText = Math.floor(seconds / 60);
        const actualSeconds = seconds % 60;

        const secondsInText = this.timePadding(actualSeconds);
        const time = `${minutesInText}:${secondsInText}`;

        this.timeDisplay.textContent = time;
        document.title = `meow ${time}`;
    }
    startTimer = (timeInMinutes) => {
        let iself = this;
        clearInterval(this.timeout);
        let workTimeInSeconds = timeInMinutes * 60;
        this.renderTime(workTimeInSeconds);
        this.timeout = setInterval(function() {
            if (workTimeInSeconds > 0) {
                workTimeInSeconds--;
            }
            iself.renderTime(workTimeInSeconds);
        }, 1000);
    }
}

let Timer = new PomodoroTimer();
Timer.setEventListeners();




