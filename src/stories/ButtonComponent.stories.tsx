import React from 'react';
import { ButtonComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    onClick: {
      description: 'Function to handle the click of the button ',
    },
    text: {
      description: 'Sets the button text',
    },
    variant: {
      description: 'Set the  color of the button',
    },
    size: {
      description: 'Set the size of the button',
    },
    disabled: {
      description: 'Set if button disabled or not ',
    },
    active: {
      description: 'Set if button active or not ',
    },
  },
};

const ButtonComponentTemplate = (args: any) => <ButtonComponent {...args} />;

export const Default = ButtonComponentTemplate.bind({});

// Default.args = {};
