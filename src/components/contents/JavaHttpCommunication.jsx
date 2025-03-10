import { useState } from 'react';

function JavaHttpCommunication() {
  const [inputMessage, setInputMessage] = useState('기본 메시지 입니다.');
  const [javaMessage, setJavaMessage] = useState('');

  return (
    <div>
      <h1>자바와 통신해 보아요</h1>
      <h2>자바가 보낸 메시지입니다.</h2>
      <h4></h4>
    </div>
  );
}

export default JavaHttpCommunication;
