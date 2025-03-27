// 문자열 겹쳐쓰기

/*
  문제설명

  문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
  문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 
  문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string, overwrite_string, s) {
  var answer = '';
  answer = my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
  return answer;
}

// 문제가 발생한 지점
// splice를 사용했는데 splice는 원본 문자열을 바꿔서 두번째 자르기때 원치 않는 동작이 이루어짐
// 해결: 원본 문자열을 건드리지 않는 slice를 사용해서 해결함
