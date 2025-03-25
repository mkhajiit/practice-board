// 시간 복잡도로 인해서 제출이 불가했던 코드
/*
function solution(players, callings) {
  let answer = [];
  function swap(players, calling) {
    // calling이 추월하기 전의 index
    const callingIndex = players.indexOf(calling);
    const temp = players[callingIndex - 1];
    players[callingIndex - 1] = calling;
    players[callingIndex] = temp;
  }
  callings.map((calling) => swap(players, calling));
  answer = players;
  return answer;
}
*/
