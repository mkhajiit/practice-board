import styled from 'styled-components';

import { Outlet } from 'react-router-dom';

// 스타일드 컴포넌트
const Layout = styled.div`
  width: 80%;
  height: 60%;
  min-width: 500px;
  min-height: 400px;
  border: 5px solid #b33939;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BoardLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default BoardLayout;
