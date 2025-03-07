import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 5px;
`;

function ThemeToggleButton({ toggleTheme }: { toggleTheme: () => void }) {
  return <ToggleButton onClick={toggleTheme}>테마변경</ToggleButton>;
}

export default ThemeToggleButton;
