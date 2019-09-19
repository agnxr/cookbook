import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Desserts', () => <Card activeColor="pink" />);
storiesOf('Card', module).add('Dinners', () => <Card activeColor="lilac" />);
storiesOf('Card', module).add('Drinks', () => <Card activeColor="blue" />);
