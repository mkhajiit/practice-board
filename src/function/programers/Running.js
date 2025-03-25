/* 문제
  문제 설명
얀에서는 매년 달리기 경주가 열립니다. 
해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 
예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 
해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 
경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
*
/*
입출력 예
players: ["mumu", "soe", "poe", "kai", "mine"]	
callings: ["kai", "kai", "mine", "mine"]
result: ["mumu", "kai", "mine", "soe", "poe"]
*/

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

// Map을 사용해서 시간 복잡도를 해결한 코드
function solution(players, callings) {
  var answer = [];
  const playerMap = new Map();

  players.forEach((player, index) => playerMap.set(player, index));

  callings.forEach((calling) => {
    const callingIndex = playerMap.get(calling);
    const prevPlayer = players[callingIndex - 1];

    players[callingIndex - 1] = calling;
    players[callingIndex] = prevPlayer;

    playerMap.set(calling, callingIndex - 1);
    playerMap.set(prevPlayer, callingIndex);
  });
  answer = players;
  return answer;
}
