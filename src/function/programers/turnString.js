// 주어진 문자열을 90도로 회전시키기
// abcde
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
  const answer = str.split('').map((element) => {
    return console.log(element);
  });
});
// 단순하게 split으로 문자열을 분리하고 map으로 한줄씩 출력해주면 됨
