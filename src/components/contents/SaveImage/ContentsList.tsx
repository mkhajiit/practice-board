import { Item } from '../../../constants/tempDB';

function ContentsList() {
  const storedData = localStorage.getItem('db');
  const database: Item[] = storedData ? JSON.parse(storedData) : []; // storedData가 null 인경우 빈배열 할당

  return (
    <div>
      <h1>컨탠츠 리스트</h1>
      <h3>
        {database.map((element) => (
          <h1>{element.title}</h1>
        ))}
      </h3>
    </div>
  );
}

export default ContentsList;
