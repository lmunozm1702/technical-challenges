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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  // Write your code here
  console.log("a".charCodeAt(0) - 97)
  let max = 0
  for (let i = 0; i <= word.length; i++) {
    let x = h[word.charCodeAt(i) - 97]
    if (x > max) {
      max = x
    }
  }
  return (max * word.length)
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

  const word = readLine();

  const result = designerPdfViewer(h, word);

  ws.write(result + '\n');

  ws.end();
}
