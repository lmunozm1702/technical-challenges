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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let unique_ranked = [...new Set(ranked)]
  let min_index = unique_ranked.length
  let min = unique_ranked[min_index - 1]
  console.log(min_index)
  let result = []
  player.forEach((value, i) => {
    if (value < min) {
      result.push(min_index + 1)
    } else {
      while ((unique_ranked.length > 0) &&
        (player[i] >= unique_ranked[unique_ranked.length - 1])) {
        unique_ranked.length = unique_ranked.length - 1;
      }
      result.push(unique_ranked.length + 1);

      // let position = unique_ranked.findIndex(v => v <= value)
      // result.push(position + 1)
    }
  })

  return result
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const rankedCount = parseInt(readLine().trim(), 10);

  const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

  const playerCount = parseInt(readLine().trim(), 10);

  const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

  const result = climbingLeaderboard(ranked, player);

  ws.write(result.join('\n') + '\n');

  ws.end();
}
