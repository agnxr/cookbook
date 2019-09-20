import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: '#ffdef2',
      Secondary: '#ddfffc',
      Tertiary: '#ffffe3',
    };
    const defaultValue = '#ffdef2';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>primary</Button>;
  })
  .add('Secondary', () => <Button secondary>secondary</Button>);
