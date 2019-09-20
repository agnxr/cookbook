import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import muffinIcon from 'assets/icons/muffin.svg';
import logoutIcon from 'assets/icons/logout.svg';
import dinnerIcon from 'assets/icons/dinner.svg';
import plusIcon from 'assets/icons/plus.svg';
import drinkIcon from 'assets/icons/cocktail.svg';
import ButtonIcon from './ButtonIcon';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.pink};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add('Muffin', () => <ButtonIcon icon={muffinIcon} />)
  .add('Active', () => <ButtonIcon active icon={muffinIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Dinner', () => <ButtonIcon icon={dinnerIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Drink', () => <ButtonIcon icon={drinkIcon} />);
