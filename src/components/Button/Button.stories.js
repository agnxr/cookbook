import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>primary</Button>)
  .add('Secondary', () => <Button secondary>secondary</Button>);
