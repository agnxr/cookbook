import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  padding: 25px 150px 25px 70px;
`;

const SidebarTemplate = ({ children, tabType }) => (
  <>
    <Sidebar tabType={tabType} />
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </>
);

SidebarTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  tabType: PropTypes.oneOf(['dessert', 'dinner', 'drink']),
};

SidebarTemplate.defaultProps = {
  tabType: 'dessert',
};

export default SidebarTemplate;
