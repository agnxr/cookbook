import React from 'react';
import SidebarTemplate from 'templates/SidebarTemplate';
import Card from 'components/molecules/Card/Card';

const Desserts = () => (
  <SidebarTemplate tabType="dessert">
    <Card cardType="dessert" />
    <Card cardType="dessert" />
    <Card cardType="dessert" />
    <Card cardType="dessert" />
    <Card cardType="dessert" />
    <Card cardType="dessert" />
  </SidebarTemplate>
);

export default Desserts;
