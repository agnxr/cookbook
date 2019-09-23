import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const SidebarTemplate = ({ children, tabType }) => (
  <>
    <Sidebar tabType={tabType} />
    {children}
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
