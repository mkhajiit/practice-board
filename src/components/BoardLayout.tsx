import styled from 'styled-components';
import SaveImage from './contents/SaveImage/SaveImage.tsx';

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
      <SaveImage />
    </Layout>
  );
}

export default BoardLayout;
