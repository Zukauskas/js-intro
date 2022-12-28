class Student {
  #name = "";
  #birthYear = 0;
  #isMarried = false;
  #shoes = 40;
  #marks = [];

  constructor() {
    this.#name = "Petras";
    this.#birthYear = 0;
    this.#isMarried = false;
    this.#shoes = 40;
    this.#marks = [];
  }

  getName() {
    return this.#name;
  }

  isValidMark(mark) {
    if (
      typeof mark !== "number" ||
      !isFinite(mark) ||
      mark < 1 ||
      mark > 10 ||
      mark % 1 !== 0
    ) {
      return false;
    }
    return true;
  }

  //Metodas itraukiantis nauja pazymi
  addMark(mark) {
    if (!this.isValidMark(mark)) {
      return "ERROR";
    }

    this.#marks.push(mark);

    return "OK";
  }

  addMarks(...marks) {
    for (const mark of marks) {
      if (!this.isValidMark(mark)) {
        continue;
      }
      this.#marks.push(mark);
    }
  }

  marksAverage() {
    if (this.#marks.length === 0) {
      return "neiskaita";
    }

    return this.#marks.reduce((t, m) => t + m, 0) / this.#marks.length;
  }
}

export { Student };
