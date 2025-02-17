// 1. 메모장에 입력한 텍스트가 저장되도록한다. (React Quill 텍스트 에디터 라이브러리 사용)
// 2. 이미지를 파이어베이스에 업로드하는 페이지를 만든다.
// 3. 업로드한 이미지를 화면에 띄우는 페이지를 만든다.
// 4. form을 react-hook-form 라이브러리로 변경
// 5. 로컬스토리지 저장을 mysql로 구현한 db에 저장하도록 변경

import React, { useState } from 'react';
import { storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import randomNumberGenerator from '../../../constants/randomNumberGenerator';

function SaveImage() {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);

      // 이미지 미리보기
      const previewUrl = URL.createObjectURL(selectedImage);
      setImageUrl(previewUrl);
    }
  };

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      console.log('이미지를 선택해주세요');
      return;
    }
    const storageRef = ref(storage, `image/${image.name}_${Date.now()}`); // 난수를 넣어서 파이어베이스에 중복저장을 막는다
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('업로드 오류:', error);
      },
      async () => {
        // 🔹 업로드가 완료되면 다운로드 URL 가져오기
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);

        setImageUrl(downloadURL);

        // 비동기 문제로 업로드가 끝나고 url이 set되면 실행되도록 한다
        const id = randomNumberGenerator(8);
        const contents = { id: id, title: title, content: text, downloadUrl: downloadURL };

        // 배열에 저장하면 페이지 이동하거나 새로고침시 초기화 되므로 로컬스토리지를 이용한다

        const storedData = localStorage.getItem('db');
        const tempDB = storedData ? JSON.parse(storedData) : []; // null인 경우 빈 배열로 할당
        tempDB.push(contents);
        localStorage.setItem('db', JSON.stringify(tempDB)); // 배열을 다시 저장
      }
    );
  };

  // 입력한 텍스트를 메모장으로 다운로드하는 함수
  // const handleDownload = () => {
  //   const blob = new Blob([text], { type: 'text/plain' });
  //   const aTag = document.createElement('a');
  //   aTag.href = URL.createObjectURL(blob); // blob 객체를 다운로드할수 있는 임시url을 제공;
  //   aTag.download = 'memoFromApp.txt';
  //   aTag.click();
  // };

  return (
    <div>
      <h1>새로 등록할 글을 작성해주세요</h1>
      <form onSubmit={handleUpload}>
        <label htmlFor='title'>제목: </label>
        <input id='title' value={title} onChange={(event) => setTitle(event.target.value)}></input>
        <br />
        <label htmlFor='text'>내용: </label>
        <br />
        <textarea id='text' value={text} onChange={handleChange} rows={10} cols={50} />
        <br />
        <label htmlFor='image'>이미지 등록: </label>
        <input id='image' type='file' accept='image/*' onChange={handleImageChange} />
        <br />
        {imageUrl && <img src={imageUrl} alt='등록한 이미지' width={300} height={200}></img>}
        <br />
        <button type='submit'>글 업로드</button>
      </form>
    </div>
  );
}

export default SaveImage;
