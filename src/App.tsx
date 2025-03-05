import styled from 'styled-components';
import Router from './router/Router';

// 전역에 영향을 주는 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
