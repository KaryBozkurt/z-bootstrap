import React from 'react';
import { OffcanvasComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/OffcanvasComponent',
  component: OffcanvasComponent,
};

const OffcanvasComponentTemplate = (args: any) => (
  <OffcanvasComponent {...args} />
);

export const Default = OffcanvasComponentTemplate.bind({});

// Default.args = {};
