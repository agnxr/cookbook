import React from 'react';

import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import MainTemplate from 'templates/MainTemplate';

const App = () => (
  <MainTemplate>
    <>
      <h1>Hello World</h1>
      <Button width="150px">CLOSE / SAVE</Button>
      <Button secondary>Remove</Button>
      <ButtonIcon active />
    </>
  </MainTemplate>
);

export default App;
