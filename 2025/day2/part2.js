const fs = require("fs");

const startTime = performance.now();

let text = fs
    .readFileSync("input.txt", "utf8", (error, data) => {
        if (error) {
            console.error("An error occurred while reading the file:", error);
            return;
        }
        return data;
    })
    .split(",");

let totalSum = 0;


function isRepeatedPattern(num) {
    const str = num.toString();
    const len = str.length;
    
    for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        if (len % patternLen !== 0) continue;
        
        const pattern = str.substring(0, patternLen);
        let isValid = true;

        for (let i = patternLen; i < len; i += patternLen) {
            const nextChunk = str.substring(i, i + patternLen);
        
            if (nextChunk !== pattern) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            return true;
        }
    }
    
    return false;
}

text.forEach((serie) => {
    const range = serie.split("-");
    let part1 = parseInt(range[0]); 
    let part2 = parseInt(range[1]); 

    let account = part1;
    while (account <= part2) {
        if (isRepeatedPattern(account)) {
            totalSum += account;
        }
        
        account++;
    }
});

const endTime = performance.now();

console.log("Time taken: " + (endTime - startTime) / 1000 + " seconds");
console.log("Total sum of invalid IDs (Part 2):", totalSum);