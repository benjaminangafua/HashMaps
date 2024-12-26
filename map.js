// Initiate a HashMap
const gradeStudents = new Map();

const students = [
  { name: "Alice", age: 14, gradeLevel: "9th Grade" },
  { name: "Bob", age: 15, gradeLevel: "10th Grade" },
  { name: "Charlie", age: 13, gradeLevel: "8th Grade" },
  { name: "Daisy", age: 14, gradeLevel: "9th Grade" },
  { name: "Ethan", age: 16, gradeLevel: "11th Grade" },
  { name: "Fiona", age: 15, gradeLevel: "10th Grade" },
  { name: "George", age: 17, gradeLevel: "12th Grade" },
  { name: "Hannah", age: 14, gradeLevel: "9th Grade" },
  { name: "Isaac", age: 16, gradeLevel: "11th Grade" },
  { name: "Julia", age: 13, gradeLevel: "8th Grade" },
];

// iterate the array of objects
for (let student of students) {
  let grade = student.gradeLevel;

  if (!gradeStudents.has(grade)) {
    gradeStudents.set(grade, []);
  }

  gradeStudents.get(grade).push(student);
}

console.log(gradeStudents);
