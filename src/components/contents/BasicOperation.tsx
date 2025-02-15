// 사칙연산
import React, { useState } from 'react';
import styled from 'styled-components';

const DisplayBox = styled.div`
  h1 {
    display: inline;
  }
  text-align: center;
`;

function BasicOperation() {
  const [firstNumber, setFirstVariable] = useState<number>(0); // 초기값이 있어서 타입지정 안해도 된다
  const [secondNumber, setSecondVariable] = useState<number>(0);
  const [operationState, setOperationState] = useState<string>('plus');

  const onChangeHandler =
    (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(Number(event.target.value));
    };
  // onChange 이벤트가 실행되면 내부의 함수를 반환해서 () => () => {} 구조

  // 버튼 클릭시 operationState 상태를 바꾸는 이벤트
  const onClickHandler = (operation: string) => {
    setOperationState(operation);
  };

  // 사칙 연산에 따라 기호를 바꾸는 함수
  const symbolChanger = () => {
    if (operationState === 'plus') {
      return '+';
    } else if (operationState === 'minus') {
      return '-';
    } else if (operationState === 'times') {
      return '*';
    } else {
      return '/';
    }
  };

  // 사칙 연산에 따라 답을 바꾸는 함수
  const answerChanger = () => {
    if (operationState === 'plus') {
      return firstNumber + secondNumber;
    } else if (operationState === 'minus') {
      return firstNumber - secondNumber;
    } else if (operationState === 'times') {
      return firstNumber * secondNumber;
    } else {
      return firstNumber / secondNumber;
    }
  };
  return (
    <div>
      <DisplayBox>
        <h1>{firstNumber}</h1>
        <h1> {symbolChanger()} </h1>
        <h1>{secondNumber}</h1>
        <h1> = </h1>
        <h1>{Number(answerChanger().toFixed(5))}</h1>
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
      <button onClick={() => onClickHandler('plus')}>더하기</button>
      {/* onChange와 똑같지만 다른방식으로 구현했다 */}
      <button onClick={() => onClickHandler('minus')}>빼기</button>
      <button onClick={() => onClickHandler('times')}>곱하기</button>
      <button onClick={() => onClickHandler('division')}>나누기</button>
      <br />
      <h1>{operationState === 'division' ? '소수점 5자리까지만 출력됩니다' : ''}</h1>
    </div>
  );
}

export default BasicOperation;
