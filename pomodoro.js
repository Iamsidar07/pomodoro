const WORK_MIN = 25;
const SHORT_BREAK_MIN = 5;
const LONG_BREAK_MIN = 25;

class Pomodoro {
  constructor() {
    this.reps = 0;
    this.timer = null;
    this.count = null;
    this.message = null;
    this.workSession = null;
    this.mins = null;
    this.sec = null;
  }

  hello() {
    console.log("Hi");
    this.bollo();
  }

  bollo() {
    console.log("Bollo");
  }

  resetTimer() {
    this.reps = 0;
    clearTimeout(this.timer);
  }

  startTimer() {
    console.log("reps:", this);
    this.reps++;
    if (this.reps % 8 == 0) {
      this.count = LONG_BREAK_MIN * 60;
      this.message = "Break";
    } else if (this.reps % 2 == 0) {
      this.count = SHORT_BREAK_MIN * 60;
      this.message = "Break";
    } else {
      this.count = WORK_MIN * 60;
      this.message = "Work";
    }
    this.countdown();
  }
  countdown() {
    this.mins = Math.floor(this.count / 60);
    this.sec = this.count % 60;
    console.log("this: ", this.mins, this.sec);

    if (this.sec < 10) {
      this.sec = `0${this.sec}`;
    }
    if (this.count > 0) {
      this.count--;
      this.timer = setTimeout(() => this.countdown(), 1000);
    } else {
      this.startTimer();
      this.workSession = Math.floor(this.reps / 2);
    }
  }
}

module.exports = Pomodoro;
