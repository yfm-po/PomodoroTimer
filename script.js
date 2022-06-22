class PomodoroTimer {
    /**
     * @constructor
     */
    constructor() {
        /**
         * @type {HTMLElement}
         */
        this.workBtn = document.querySelector('#work-btn');
        /**
         * @type {HTMLElement}
         */
        this.longBreakBtn = document.querySelector('#long-break-btn');
        /**
         * @type {HTMLElement}
         */
        this.shortBreakBtn = document.querySelector('#short-break-btn');
        /**
         * @type {HTMLElement}
         */
        this.timeDisplay = document.querySelector('#time-display');
        /**
         * @type {null | setInterval}
         */
        this.timeout = null;
    }
    setEventListeners() {
        /**
         * @type {this}
         */
        let iself = this;
        /**
         * @type {HTMLElement}
         */
        this.workBtn.addEventListener("click", function () {iself.startTimer(25)});
        /**
         * @type {HTMLElement}
         */
        this.longBreakBtn.addEventListener("click", function () {iself.startTimer(15)});
        /**
         * @type {HTMLElement}
         */
        this.shortBreakBtn.addEventListener("click", function () {iself.startTimer(5)});
    }

    /**
     * @param seconds
     * @returns {string|*}
     */
    timePadding = (seconds) => {
        return seconds < 10 ? `0${seconds.toString()}` : seconds;
    }
    /**
     * @param seconds
     */
    renderTime = (seconds) => {
        const minutesInText = Math.floor(seconds / 60);
        const actualSeconds = seconds % 60;

        const secondsInText = this.timePadding(actualSeconds);
        const time = `${minutesInText}:${secondsInText}`;

        this.timeDisplay.textContent = time;
        document.title = `meow ${time}`;
    }
    /**
     * @param timeInMinutes
     */
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

/**
 * @type {PomodoroTimer}
 */
let Timer = new PomodoroTimer();
Timer.setEventListeners();




