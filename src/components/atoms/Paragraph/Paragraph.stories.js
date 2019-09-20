import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module).add('Normal', () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab sunt eligendi optio et! Nihil
    enim itaque saepe, cum pariatur, dolorem quo iusto veniam vel temporibus officiis expedita,
    debitis a.
  </Paragraph>
));
