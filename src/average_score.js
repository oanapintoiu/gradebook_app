function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let average = sum / scores.length;
  return average;
}

module.exports = getAverage;
