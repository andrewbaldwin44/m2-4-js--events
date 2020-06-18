class Clock {
  constructor() {
    this.clock = document.querySelector('#clock-display');
  }

  padZeroes(time) {
    return String(time).length == 1 ? `0${time}` : time;
  }

  setTime() {
    let currentTime = new Date();
    let hours = this.padZeroes(currentTime.getHours());
    let minutes = this.padZeroes(currentTime.getMinutes());
    let seconds = this.padZeroes(currentTime.getSeconds());

    this.clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  startClock() {
    this.setTime();
    setInterval(() => {
      this.setTime();
    }, 1000);
  }
}

window.onload = () => {
  new Clock().startClock();
}
