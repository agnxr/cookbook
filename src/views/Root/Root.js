import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <h1>Hello World</h1>
    <Button width="150px">CLOSE / SAVE</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default App;
