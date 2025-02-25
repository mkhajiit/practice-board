import { useState } from 'react';
import operationTf from '../../function/operationTf';

function OperationTf() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onClickEvent = async () => {
    setLoading(true);
    const inputArr = [firstNumber, secondNumber];
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
      <button onClick={() => onClickEvent()}>더하기</button>
    </div>
  );
}

export default OperationTf;
