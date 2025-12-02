function getPassword() {
  const fs = require("fs");
  let text;
  let key = 50;
  let count = 0;

  text = fs
    .readFileSync("input.txt", "utf8", (error, data) => {
      if (error) {
        console.error("An error occurred while reading the file:", error);
        return;
      }
      return data;
    })
    .split("\n");

  text.forEach((instruction) => {
    let direction = instruction[0];
    let number = parseInt(instruction.substring(1));

    if (direction === "R" || direction === "r") key += number;
    if (direction === "L" || direction === "l") key -= number;

    key = ((key % 100) + 100) % 100;
    if (key === 0) count++;
  });

  return count;
}

console.log(getPassword());
