import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const SidebarTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

SidebarTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SidebarTemplate;
