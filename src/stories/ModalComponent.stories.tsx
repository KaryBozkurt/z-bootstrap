import React from 'react';
import { ModalComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ModalComponent',
  component: ModalComponent,
};

const ModalComponentTemplate = (args: any) => <ModalComponent {...args} />;

export const Default = ModalComponentTemplate.bind({});

// Default.args = {};
