import React from 'react';
import { NavComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/NavComponent',
  component: NavComponent,
};

const NavComponentTemplate = (args: any) => <NavComponent {...args} />;

export const Default = NavComponentTemplate.bind({});

// Default.args = {};
