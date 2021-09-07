let timetable = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25],
];

for (let row = 0; row < timetable.length; row++) {
  let line = "";
  for (let col = 0; col < timetable[row].length; col++) {
    line += timetable[row][col] + " ";
  }
  console.log(line);
}
