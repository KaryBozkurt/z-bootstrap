import React from 'react';
import { ListGroupComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ListGroupComponent',
  component: ListGroupComponent,
};

const ListGroupComponentTemplate = (args: any) => (
  <ListGroupComponent {...args} />
);

export const Default = ListGroupComponentTemplate.bind({});

// Default.args = {};
