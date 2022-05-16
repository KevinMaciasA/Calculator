function getNumbersByID(id) {
  const input = document.getElementById(id).value;
  const strings = input.replace(/\s/g, "").split(",");
  const numbers = strings.map((element) => parseInt(element));
  return numbers;
}

function writeByID(id, value) {
  const output = document.getElementById(id);
  output.innerHTML = value;
}

function getMean(numbers) {
  const sum = numbers.reduce((acum, value) => acum + value);
  const mean = sum / numbers.length;
  return mean;
}

function calculateMean() {
  const numbers = getNumbersByID("numbers");

  const mean = getMean(numbers);
  writeByID("result", mean);
}

function getMedian(numbers) {
  const sortNumbers = numbers.sort((a, b) => a - b);
  const isEven = sortNumbers.length % 2 === 0;

  const normLenght = sortNumbers.length - 1; //Length seen it if you start counting from 0
  const half = normLenght / 2;

  const midNumbers = isEven
    ? [sortNumbers[Math.floor(half)], sortNumbers[Math.ceil(half)]]
    : [sortNumbers[half]];

  const median = getMean(midNumbers);
  return median;
}

function calculateMedian() {
  const numbers = getNumbersByID("numbers");

  const median = getMedian(numbers);
  writeByID("result", median);
}

function getMode(numbers) {
  const map = {};
  let mode;
  let pastMax = 0;
  numbers.forEach((number) => {
    const max = map[number] ? (map[number] += 1) : (map[number] = 1);
    if (max > pastMax) {
      mode = number;
      pastMax = max;
    }
  });

  return mode;
}

function calculateMode() {
  const numbers = getNumbersByID("numbers");
  const mode = getMode(numbers);

  writeByID("result", mode);
}
