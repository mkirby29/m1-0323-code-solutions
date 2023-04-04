/* exported getStudentNames */
function getStudentNames(students) {
  const arr = [];

  for (const x in students) {
    arr.push(students[x].name);
  }
  return arr;
}
