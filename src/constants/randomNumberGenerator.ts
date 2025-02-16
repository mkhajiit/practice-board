// 자릿수를 인자로 받아서 string타입의 난수 숫자를 만들어 주는 함수
const randomNumberGenerator = (length: number): string => {
  return Math.floor(Math.random() * Math.pow(10, length))
    .toString()
    .padStart(length, '0'); //난수가 0이 나와 숫자라서 사라진 앞자리에 0을 채워서 자릿수를 맞춰줍니다
};

export default randomNumberGenerator;
