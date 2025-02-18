import { Link } from 'react-router-dom';
import getDataBase from '../../../function/getDatabase';

function ContentsList() {
  const database = getDataBase();

  return (
    <div>
      <h1>컨탠츠 리스트</h1>
      <ul>
        {database.map((element) => (
          <li key={element.id}>
            <Link to={`/contents/saved-content/${element.id}`}>
              <h3>{element.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/contents/register`}>
        <button>글 쓰기</button>
      </Link>
    </div>
  );
}

export default ContentsList;
