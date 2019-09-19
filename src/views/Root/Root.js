import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const App = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World</h1>
        <Button width="150px">CLOSE / SAVE</Button>
        <Button secondary>Remove</Button>
        <ButtonIcon active />
      </>
    </ThemeProvider>
  </div>
);

export default App;
