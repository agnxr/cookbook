import React from 'react';
import { storiesOf } from '@storybook/react';
import cupcakes from 'assets/cupcakes.jpg';
import Card from './Card';

storiesOf('Card', module).add('Desserts', () => <Card src={cupcakes} />);
storiesOf('Card', module).add('Dinners', () => <Card postType="dinner" />);
storiesOf('Card', module).add('Drinks', () => <Card postType="drink" />);
