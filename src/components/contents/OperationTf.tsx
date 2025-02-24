import { useState } from 'react';

function OperationTf() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const onClickEvent = (selectedOperation: string) => {
    const questionArr = [firstNumber, secondNumber, selectedOperation];
    console.log(questionArr);
    // 텐서플로우 불러오는 함수자리
  };

  return (
    <div>
      <h1>텐서플로우가 말아주는 사칙연산</h1>
      <label htmlFor='fist'>첫번째 수를 입력해주세요</label>
      <input
        name='first'
        value={firstNumber}
        onChange={(event) => setFirstNumber(Number(event.target.value))}
        required
      ></input>
      <input
        name='second'
        value={secondNumber}
        onChange={(event) => setSecondNumber(Number(event.target.value))}
        required
      ></input>
      <button onClick={() => onClickEvent('+')}>더하기</button>
      <button onClick={() => onClickEvent('-')}>빼기</button>
      <button onClick={() => onClickEvent('*')}>곱하기</button>
      <button onClick={() => onClickEvent('/')}>나누기</button>
    </div>
  );
}

export default OperationTf;
