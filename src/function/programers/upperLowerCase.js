// 대소문자 바꿔서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  //문자열을 split('')으로 배열로 나누고 반환된 배열을 join('')으로 합친다.
  const answer = str
    .split('')
    .map((element) => {
      return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
    })
    .join('');
  console.log(answer);
});
