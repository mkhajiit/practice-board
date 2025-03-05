import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h4>ERROR 404</h4>
      <h1>오류</h1>
      <p>잘못된 접근 입니다.</p>
      <Link to='/'>Home</Link>
      {/* 이전 페이지로 돌아가게 하는 링크 추가하기 */}
    </div>
  );
}

export default NotFound;
