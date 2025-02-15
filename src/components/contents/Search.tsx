// 1. 주어진 배열에 검색한 입력 텍스트가 있다면 화면에 나오도록한다.
// 2. 각 배열의 요소는 링크를 가지고 있고 누르면 /: url의 상세페이지로 연결됨

import React, { useState } from 'react';
import MyTestCase from '../../constants/myTestCase.ts';
import { Link } from 'react-router-dom';

function Search() {
  const [itemList, setItemList] = useState<string[]>(MyTestCase);
  const [input, setInput] = useState<string>('');

  // 검색 기능 함수
  const searchItem = (input: string) => {
    console.log(input);
    setItemList((prev) => prev.filter((element) => element.includes(input)));
  };

  // 상태를 reset하는 함수
  const resetList = (originalList: string[]) => {
    setItemList(originalList);
    setInput('');
  };

  return (
    <div>
      <h1>원하는 항목을 검색해보세요</h1>
      <ul>
        {itemList.map((element, index) => (
          <li key={index}>
            <Link to={`/contents/${element}`}>{element}</Link>
          </li>
        ))}
      </ul>
      <input value={input} onChange={(event) => setInput(event.target.value)}></input>
      <button onClick={() => searchItem(input)}>검색</button>
      <br />
      <button onClick={() => resetList(MyTestCase)}>초기화</button>
    </div>
  );
}

export default Search;
