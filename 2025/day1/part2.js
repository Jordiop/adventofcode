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
    .split("\n")
    .filter((line) => line.trim() !== "");

  text.forEach((instruction) => {
    let direction = instruction[0];
    let number = parseInt(instruction.substring(1));

    if (direction === "R" || direction === "r") {
      if (key === 0) {
        count += Math.floor(number / 100);
      } else {
        count += Math.floor((key + number) / 100);
      }
      key = (key + number) % 100;
    } else if (direction === "L" || direction === "l") {
      if (key === 0) {
        count += Math.floor(number / 100);
      } else {
        if (number >= key) {
          count += 1 + Math.floor((number - key) / 100);
        }
      }
      key = (((key - number) % 100) + 100) % 100;
    }
  });

  return count;
}

console.log(getPassword());
