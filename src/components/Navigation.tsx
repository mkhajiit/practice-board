import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';

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

// prop을 전달받기 위해 prop과 타입을 설정
// css yes24 참고해서 비슷하게 바꾸기
// yes24 모바일웹처럼 터치하면 슬라이드로 목록이 왼쪽에서 오른쪽으로 넘어가도록
function Navigation({ toggleTheme }: { toggleTheme: () => void }) {
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
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </ul>
    </Navbar>
  );
}

export default Navigation;
