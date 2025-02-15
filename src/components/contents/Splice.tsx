// Filter 말고 Splice나 indexOf를 활용해서 주어진 배열에서 조건에 맞지않는 단어를 제거하기
// 결론 filter 쓰는게 훨씬 편하고 원본의 불변성을 유지할 수 있음
import React, { useState } from 'react';
import MyTestCase from '../../constants/myTestCase.ts';

function Splice() {
  const incorrectCase = ['require', 'permit', 'aim', 'hope'];

  const [testCase, setTestCase] = useState<string[]>(MyTestCase);
  const [input, setInput] = useState<string>('');
  const [incorrect, setInCorrect] = useState<boolean>(false);

  const eraseElement = (input) => {
    const index = testCase.indexOf(input);
    // splice()는 기존 배열을 수정한 후, 삭제된 요소를 배열로 반환해서 기존배열임(요소가 변해도 배열의 참조값이 변하지 않음)
    // 따라서 새로운 배열을 만들어줘야 React의 setState가 작동을 한다.
    if (index !== -1 && incorrectCase.includes(input)) {
      setTestCase((prev) => {
        const newArr = [...prev];
        newArr.splice(index, 1);
        return newArr;
      });
      setInCorrect(false);
    } else {
      setInCorrect(true);
    }
  };
  return (
    <div>
      <h1>동명사를 목적어로 가지는 동사가 아닌것을 입력하시오</h1>
      <h1>
        [
        {testCase.map((element) => {
          if (element !== testCase[testCase.length - 1]) {
            return element + ', ';
          } else {
            return element;
          }
        })}
        ]
      </h1>
      <label htmlFor='input'>제거할 단어 </label>
      <input name='input' value={input} onChange={(event) => setInput(event?.target.value)} />
      <button onClick={() => eraseElement(input)}>제거</button>
      <h1>{incorrect ? '다시 입력해주세요!' : ''}</h1>
    </div>
  );
}

export default Splice;
