import React from 'react';
import { OverlayComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/OverlayComponent',
  component: OverlayComponent,
};

const OverlayComponentTemplate = (args: any) => <OverlayComponent {...args} />;

export const Default = OverlayComponentTemplate.bind({});

// Default.args = {};
