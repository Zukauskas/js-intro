console.clear();

import { Student } from "./Student.js";

const petras = new Student("Petras", 2000);

petras.addMark(10);
petras.addMark(2);
petras.addMark(4);
petras.addMark(22);
petras.addMark(3.14);
petras.addMark(0);
petras.addMark(-22);
petras.addMark(-3.14);
petras.addMark(8);
petras.addMark(6);

console.log(petras.name, petras.marksAverage());
