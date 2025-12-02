const startTime = performance.now()

const fs = require("fs");
let text;

text = fs
.readFileSync("input.txt", "utf8", (error, data) => {
    if (error) {
    console.error("An error occurred while reading the file:", error);
    return;
    }
    return data;
}).split(",")

let doubled = 0

text.forEach((serie) => {
    const range = serie.split("-")
    const part1 = parseInt(range[0])
    const part2 = parseInt(range[1])
    let account = part1
    while(account <= part2) {
    const mom = account.toString()
    
    if (mom.length % 2 !== 0) {
        account++
        continue
    }
    
    const half = mom.length / 2
    const mom1 = mom.slice(0, half)
    const mom2 = mom.slice(half)
    
    if (mom1 === mom2) {
        doubled += account
    }
    account++
}
})

const endTime = performance.now()

console.log("Time taken: " + (endTime - startTime) / 1000 + " seconds");
console.log("Total sum of invalid IDs (Part 1):", doubled);
