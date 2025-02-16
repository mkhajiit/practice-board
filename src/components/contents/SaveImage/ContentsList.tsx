import { Link } from 'react-router-dom';
import { Item } from '../../../constants/tempDB';

function ContentsList() {
  const storedData = localStorage.getItem('db');
  const database: Item[] = storedData ? JSON.parse(storedData) : []; // storedData가 null 인경우 빈배열 할당

  return (
    <div>
      <h1>컨탠츠 리스트</h1>
      <h3>
        <ul>
          {database.map((element) => (
            <li key={element.id}>
              <Link to={`/contents/saved-content/${element.id}`}>
                <h1>{element.title}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </h3>
      <Link to={`/contents/register`}>
        <button>글 쓰기</button>
      </Link>
    </div>
  );
}

export default ContentsList;
