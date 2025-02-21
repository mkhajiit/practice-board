import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
  ul {
    list-style: none; /* 기본 리스트 스타일 제거 */
    padding: 0;
  }
  li {
    display: inline; /* li를 inline으로 설정 */
    margin-right: 15px; /* 항목 간의 간격을 조정 */
  }
`;
function Navigation() {
  return (
    <Navbar>
      <ul>
        <li>
          <Link to='/contents/list'>SaveImage</Link>
        </li>
        <li>
          <Link to='/contents/search'>SearchText</Link>
        </li>
        <li>
          <Link to='/contents/draw'>직업가챠</Link>
        </li>
      </ul>
    </Navbar>
  );
}

export default Navigation;
