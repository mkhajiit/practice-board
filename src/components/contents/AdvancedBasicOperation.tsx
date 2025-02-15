// 입력창 한개에 3+4 이런식으로 입력을 받으면 배열에 저장 후 계산하고
// 배열을 초기화 시켜 빈 배열로 바꾸고 화면에 출력해주는 컴포넌트

import React, { useState } from 'react';

function AdvancedBasicOperation() {
  const [error, setError] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const setArr = (input) => {
    // 정규식으로 숫자와 연산자를 분리하여 배열로 반환 (match)
    const regex = /^(\d+)([+\-*/%])(\d+)$/;
    const match = input.match(regex);
    console.log(match);

    if (match) {
      const num1 = parseFloat(match[1]);
      const operator = match[2];
      const num2 = parseFloat(match[3]);
      const inputArr = [num1, operator, num2];
      console.log(inputArr);
      setError(false);
      return inputArr;
    } else {
      setError(true);
      return;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const calculate = (input) => {
    const equation = setArr(input);

    if (equation) {
      const [num1, operator, num2] = equation;

      let result: number;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            setError(true);
            console.log('나눗셈인데 두번째 수가 0입니다.');
          }
          result = num1 / num2;
          break;
        case '%':
          result = num1 % num2;
          break;
        default:
          setError(true);
          return;
      }
      console.log(result);
      setResult(result);
    } else {
      setError(true);
      console.log('잘못된 입력 입니다.');
    }
  };
  return (
    <div>
      <h1>정수 사칙연산 계산기</h1>
      <h2>답: {result !== 0 ? result : ''}</h2>
      <label htmlFor='input'>계산할 식을 입력하세요 예시) 2+3 </label>
      <br />
      <input name='input' value={input} onChange={handleChange}></input>
      <button onClick={() => calculate(input)}>계산시작!</button>
      <h1>{error ? '다시입력해주세요' : ''}</h1>
    </div>
  );
}

export default AdvancedBasicOperation;
