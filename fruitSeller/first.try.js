
// function solutionHold(k, m, score) {
//   let answer = 0;
//   const scoreLen = score.length;
//   const maxLoop = Math.ceil(scoreLen / m);
//
//   // const sortedScore = sortArr(score, 'desc');
//   const countedScore = countArrInValue(score);
//
//   const sortedScoreValues = sortArr(Object.keys(countedScore), 'desc');
//   console.log(countedScore)
//   console.log(sortedScoreValues)
//   return answer;
// }

function solution(k, m, score) {
  let answer = 0;
  const scoreLen = score.length;
  const maxLoop = Math.ceil(scoreLen / m);

  const sortedScore = sortArr(score, 'desc');

  let boxBucket = {};
  for (let i = 0; i < maxLoop; i++) {
    const startIndex = i * m;
    const endIndex = startIndex + m;
    const box = sortedScore.slice(startIndex, endIndex);

    if (box.length !== m) {
      break;
    }

    const bucketKey = box.join('');
    if (boxBucket.hasOwnProperty(bucketKey)) {
      boxBucket[bucketKey][1]++;
    } else {
      boxBucket[bucketKey] = [box[m - 1] * m, 1];
    }
  }

  for (const value of Object.values(boxBucket)) {
    answer += value[0] * value[1];
  }

  return answer;
}


function countArrInValue(arr) {
  return arr.reduce((accumulator, value) => {
    if (accumulator.hasOwnProperty(value)) {
      accumulator[value] = accumulator[value] + 1;
    } else {
      accumulator[value] = 1;
    }
    return accumulator;
  }, {});
}

function sortArr(arr, type = 'asc') {
  const sortFunc = {
    asc: (a, b) => {
      return a - b;
    },
    desc: (a, b) => {
      return b - a;
    },
  };
  return arr.sort(sortFunc[type]);
}

module.exports = solution;