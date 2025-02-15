// 1. 메모장에 입력한 텍스트가 저장되도록한다. (React Quill 텍스트 에디터 라이브러리 사용)
// 2. 이미지를 파이어베이스에 업로드하는 페이지를 만든다.
// 3. 업로드한 이미지를 화면에 띄우는 페이지를 만든다.

import React, { useState } from 'react';

function SaveImage() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const aTag = document.createElement('a');
    aTag.href = URL.createObjectURL(blob); // blob 객체를 다운로드할수 있는 임시url을 제공;
    aTag.download = 'memoFromApp.txt';
    aTag.click();
  };
  return (
    <div>
      <h1>메모장에 저장할 텍스트 입력하세요</h1>
      <label htmlFor='input'>메모장에 저장할 텍스트: </label>
      <br />
      <textarea id='input' value={text} onChange={handleChange} rows={10} cols={50} />
      <button onClick={handleDownload}>저장</button>
    </div>
  );
}

export default SaveImage;
