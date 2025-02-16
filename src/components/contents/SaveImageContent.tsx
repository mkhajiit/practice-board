import { useParams } from 'react-router-dom';
import { Item } from '../../constants/tempDB';

function SaveImageContent() {
  const storedData = localStorage.getItem('db');
  const database: Item[] = storedData ? JSON.parse(storedData) : []; // storedData가 null 인경우 빈배열 할당
  const { item } = useParams();
  const contentArr = database.filter((element) => element.title === item);
  return (
    <div>
      <h1>{contentArr[0].title}</h1>
      <h2>{contentArr[0].content}</h2>
      <img src={contentArr[0].downloadUrl} alt='이미지' />
    </div>
  );
}

export default SaveImageContent;
