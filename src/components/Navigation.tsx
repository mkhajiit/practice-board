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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/introduce-myself'>자기 소개</Link>
        </li>
        <li>
          <Link to='/contents'>연습한 과제들</Link>
        </li>
      </ul>
    </Navbar>
  );
}

export default Navigation;
