// 현실적으로 지금 데이터셋과 모델로는 구현이 불가능함
// 좀더 공부를하고 시도해야 함
import { useState } from 'react';
import operationTf from '../../function/operationTf';

function OperationTf() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onClickEvent = async (operator: number) => {
    setLoading(true);
    const inputArr = [firstNumber, secondNumber, operator];
    const predict = await operationTf(inputArr);
    setResult(Math.round(predict));
    setLoading(false);
  };

  return (
    <div>
      <h1>텐서플로우가 말아주는 사칙연산</h1>
      <h1>{loading ? 'loading...' : result}</h1>
      <label htmlFor='fist'>첫번째 수를 입력해주세요</label>
      <input
        name='first'
        value={firstNumber}
        onChange={(event) => setFirstNumber(Number(event.target.value))}
        required
        size={10}
      ></input>
      <input
        name='second'
        value={secondNumber}
        onChange={(event) => setSecondNumber(Number(event.target.value))}
        required
        size={10}
      ></input>
      <button onClick={() => onClickEvent(0)}>더하기</button>
      <button onClick={() => onClickEvent(1)}>빼기</button>
    </div>
  );
}

export default OperationTf;
