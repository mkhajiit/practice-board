// 배열에 들어갈 숫자를 입력 받고 배수를 입력받아서 필터링 되도록 만들어라

import React, { useState } from 'react';

function Filter() {
  const [myArr, setMyArr] = useState<number[]>([]);
  const [finalResult, setFinalResult] = useState<number[]>([]);
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [inputMultiple, setInputMultiple] = useState<number>(0);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(Number(event.target.value));
  };

  // 배열에 값을 추가하는 함수
  const insertClickHandler = (inputNumber: number) => {
    setMyArr((prev) => {
      const newArr = [...prev, inputNumber];
      return newArr;
    });
  };

  // 입력된 배수에 따라 배열을 필터링 하는 함수
  const filterClickHandler = (multiple: number) => {
    setFinalResult(myArr.filter((number) => number !== 0 && number % multiple === 0));
  };

  return (
    <div>
      <h1>[ {myArr.join(' ,')} ]</h1>
      <h1>[ {finalResult.join(' ,')} ]</h1>
      <label htmlFor='input'>배열에 집어넣을 값</label>
      <input name='input' type='number' value={inputNumber} onChange={onChangeHandler} />
      <button onClick={() => insertClickHandler(inputNumber)}>Insert</button>
      <br />

      <label htmlFor='input_multiple'>배열에서 필터링할 배수</label>
      <input
        name='input_multiple'
        type='number'
        value={inputMultiple}
        onChange={(event) => setInputMultiple(Number(event.target.value))} //함수 선언없이 바로 할당가능
      />
      <button onClick={() => filterClickHandler(inputMultiple)}>필터링</button>
    </div>
  );
}

export default Filter;
