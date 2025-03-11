// 프론트에서 직접 입력한 메시지를 자바 백앤드에서 System.out으로 출력하게 만들기
import axios from 'axios';
import { useEffect, useState } from 'react';

function JavaHttpCommunication() {
  const [inputMessage, setInputMessage] = useState('기본 메시지 입니다.');
  const [javaMessage, setJavaMessage] = useState('');

  async function fetchJavaMessage() {
    try {
      const response = await axios.get<string>('http://localhost:8080/api/message');
      const message = response.data;
      console.log(message);
      setJavaMessage(message);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchJavaMessage();
  }, []);

  const handleOnClickEvent = async () => {
    const response = await axios.post('http://localhost:8080/api/message', inputMessage);
    const message = response.data;
    console.log(message);
  };
  return (
    <div>
      <h1>자바와 통신해 보아요</h1>
      <h2>자바가 보낸 메시지입니다.</h2>
      <h4>{javaMessage}</h4>
      <h4>자바에게 매세지를 보내봅시다</h4>
      <input
        type='string'
        value={inputMessage}
        onChange={(event) => setInputMessage(event.target.value)}
      ></input>
      <button onClick={handleOnClickEvent}>전송</button>
    </div>
  );
}

export default JavaHttpCommunication;
