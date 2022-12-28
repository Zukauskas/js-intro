class Student {
  constructor(vardas, gimimoMetai) {
    this.name = vardas;
    this.birthYear = gimimoMetai;
    this.isMarried = false;
    this.shoesSize = 40;
    this.marks = [];
  }

  //Metodas itraukiantis nauja pazymi
  addMark(mark) {
    this.marks.push(mark);
  }

  marksAverage() {
    const correctMarks = this.marks.filter(
      (m) => m >= 1 && m <= 10 && m % 1 === 0
    );

    if (correctMarks.length === 0) {
      return "neiskaita";
    }

    return correctMarks.reduce((t, m) => t + m, 0) / correctMarks.length;
  }
}

export { Student };
