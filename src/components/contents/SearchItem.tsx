import { useParams } from 'react-router-dom';

function SearchItem() {
  // 파라미터 가져오는 훅
  const { item } = useParams();
  return (
    <div>
      <h1>상세페이지</h1>
      <h2>{item}</h2>
    </div>
  );
}

export default SearchItem;
