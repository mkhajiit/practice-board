import styled, { ThemeProvider } from 'styled-components';
import Router from './router/Router';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';

// 전역에 영향을 주는 스타일 컴포넌트
// 일단 핸드폰같은 작은 디바이스에도 적용 되도록 놔둘것
const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  // 로컬 스토리지 저장 추가할 것
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Router toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
