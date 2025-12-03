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
  let maxJoltage = 0;
  
  for (let i = 0; i < battery_array.length - 1; i++) {
    for (let j = i + 1; j < battery_array.length; j++) {
      const joltage = parseInt(battery_array[i] + battery_array[j]);
      if (joltage > maxJoltage) {
        maxJoltage = joltage;
      }
    }
  }
  
  total_output += maxJoltage;
});

const endTime = performance.now();

console.log("Time taken: " + (endTime - startTime) / 1000 + " seconds");
console.log("total_output: " + total_output);