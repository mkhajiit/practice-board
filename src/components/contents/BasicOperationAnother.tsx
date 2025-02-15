// 타입 스크립트와 객체만을 이용해 구현한 사칙연산
import React, { useState } from 'react';
import styled from 'styled-components';

const DisplayBox = styled.div`
  h1 {
    display: inline;
  }
  text-align: center;
`;

type Operation = 'plus' | 'minus' | 'times' | 'division';

const operations: Record<Operation, { symbol: string; calc: (a: number, b: number) => number }> = {
  plus: { symbol: '+', calc: (a, b) => a + b },
  minus: { symbol: '-', calc: (a, b) => a - b },
  times: { symbol: '*', calc: (a, b) => a * b },
  division: { symbol: '/', calc: (a, b) => (b !== 0 ? Number((a / b).toFixed(5)) : NaN) },
};

function BasicOperationAnother() {
  const [firstNumber, setFirstVariable] = useState<number>(0); // 초기값이 있어서 타입지정 안해도 된다
  const [secondNumber, setSecondVariable] = useState<number>(0);
  const [operationState, setOperationState] = useState<string>('plus');

  const onChangeHandler =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(Number(event.target.value));
    };
  // onChange 이벤트가 실행되면 내부의 함수를 반환해서 () => () => {} 구조

  const result = operations[operationState].calc(firstNumber, secondNumber);

  return (
    <div>
      <DisplayBox>
        <h1>{firstNumber}</h1>
        <h1> {operations[operationState].symbol} </h1>
        <h1>{secondNumber}</h1>
        <h1> = </h1>
        <h1>{result}</h1>
      </DisplayBox>

      <label htmlFor='first'>첫번째 수 </label>
      <input
        name='first'
        type='number'
        value={firstNumber}
        onChange={onChangeHandler(setFirstVariable)}
      ></input>
      <br />
      <label htmlFor='second'>두번째 수 </label>
      <input
        name='second'
        type='number'
        value={secondNumber}
        onChange={onChangeHandler(setSecondVariable)}
      ></input>
      <br />
      <br />
      <button onClick={() => setOperationState('plus')}>더하기</button>
      {/* onChange와 똑같지만 다른방식으로 구현했다 */}
      <button onClick={() => setOperationState('minus')}>빼기</button>
      <button onClick={() => setOperationState('times')}>곱하기</button>
      <button onClick={() => setOperationState('division')}>나누기</button>
      <br />
      <h1>{operationState === 'division' ? '소수점 5자리까지만 출력됩니다' : ''}</h1>
    </div>
  );
}

export default BasicOperationAnother;
