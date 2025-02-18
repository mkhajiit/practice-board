// 1. 이미지가 로드 되고나서 페이지가 뜨도록 수정해보기
import { useParams } from 'react-router-dom';
import getDataBase from '../../../function/getDatabase';

function SaveImageContent() {
  const database = getDataBase();

  const { item } = useParams();
  const contentArr = database.filter((element) => element.id === item);
  return (
    <div>
      <h1>{contentArr[0].title}</h1>
      <h2>{contentArr[0].content}</h2>
      <img src={contentArr[0].downloadUrl} alt='이미지' />
    </div>
  );
}

export default SaveImageContent;
