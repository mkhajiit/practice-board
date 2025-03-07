import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

// 스타일드 컴포넌트
const MainContainer = styled.div`
  width: 100%;
  height: 60%;
  min-width: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentsLayout = styled.div`
  width: 100%;
  height: auto;
  min-width: 320px;
  min-height: 100vh;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 80%;
    height: 60%;
    min-width: 500px;
    min-height: 400px;
    border: solid #b33939 7px;
  }
`;

function BoardLayout({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <MainContainer>
      <Navigation toggleTheme={toggleTheme} />
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
    </MainContainer>
  );
}

export default BoardLayout;
