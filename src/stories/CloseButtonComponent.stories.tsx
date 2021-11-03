import React from 'react';
import { CloseButtonComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CloseButtonComponent',
  component: CloseButtonComponent,
  argTypes: {
    onClick: {
      description: 'Function that handles the click of Close Button  ',
    },
    variant: {
      description: 'Sets the Color of Close Button ',
    },
    className: {
      description: 'Sets the Color of Close Button  ',
    },
    disabled: {
      description: 'Checks if Close Button is disabled or not  ',
    },
  },
};

const CardComponentTemplate = (args: any) => <CloseButtonComponent {...args} />;

export const Default = CardComponentTemplate.bind({});

// Default.args = {};
