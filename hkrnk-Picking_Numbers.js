'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  a = a.sort((a, b) => b - a)
  let result = []
  a.forEach((value, index) => {
    let temp_array = []
    for (let i = index; i < a.length; i++) {
      if (value - a[i] <= 1) { temp_array.push(a[i]) }
    }
    result.push(temp_array)
  })
  return ((result.map((e) => e.length)).sort((a, b) => b - a)[0])
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
}
