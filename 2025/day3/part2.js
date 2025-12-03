const startTime = performance.now();

const fs = require("fs");
let text;

text = fs
  .readFileSync("input.txt", "utf8", (error, data) => {
    if (error) {
      console.error("An error occurred while reading the file:", error);
      return;
    }
    return data;
  })
  .split("\n");

let total_output = 0;

text.forEach((battery) => {
  if (battery.trim() === "") return;
  
  const battery_array = battery.split("");
  const n = battery_array.length;
  const selectCount = 12;

  let selected = [];
  let startIdx = 0;
  
  for (let i = 0; i < selectCount; i++) {
    let maxDigit = -1;
    let maxIdx = -1;
    for (let j = startIdx; j <= n - (selectCount - i); j++) {
      if (parseInt(battery_array[j]) > maxDigit) {
        maxDigit = parseInt(battery_array[j]);
        maxIdx = j;
      }
    }
    
    selected.push(maxDigit);
    startIdx = maxIdx + 1;
  }
  
  const joltage = parseInt(selected.join(""));
  console.log(`Battery: ${battery}, Max joltage: ${joltage}`);
  total_output += joltage;
});

const endTime = performance.now();

console.log("Time taken: " + (endTime - startTime) / 1000 + " seconds");
console.log("total_output: " + total_output.toString());