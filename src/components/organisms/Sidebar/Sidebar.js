import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import muffinIcon from 'assets/icons/muffin.svg';
import logoutIcon from 'assets/icons/logout.svg';
import dinnerIcon from 'assets/icons/dinner.svg';
import drinkIcon from 'assets/icons/cocktail.svg';
import logoIcon from 'assets/icons/pizza3.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.dessert};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledIconsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLoginButton = styled(ButtonIcon)`
  margin-top: auto; /* max distance from icons list*/
`;

const Sidebar = ({ tabType }) => (
  <StyledWrapper activeColor={tabType}>
    <StyledLogoLink to="/" />
    <StyledIconsWrapper>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={muffinIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/dinners" icon={dinnerIcon} activeClass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/drinks" icon={drinkIcon} activeClass="active" />
      </li>
    </StyledIconsWrapper>
    <StyledLoginButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  tabType: PropTypes.string.isRequired,
};

export default Sidebar;
