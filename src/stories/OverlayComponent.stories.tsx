import React from 'react';
import { OverlayComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/OverlayComponent',
  component: OverlayComponent,
  argTypes: {
    variant: {
      description: 'Sets the color of the button  ',
    },
    size: {
      description: 'Sets the size of the button  ',
    },
    disabled: {
      description: 'Check if button is disabled or not  ',
    },
    active: {
      description: 'Check if button is disabled or not  ',
    },
    isShown: {
      description: 'Sets shown to true or false  ',
    },
    overlayPlacement: {
      description: 'Placement/position of overlay   ',
    },
    opacity: {
      description: 'Sets the opacity of the overlay  ',
    },
    buttonText: {
      description: 'Sets the text of the button ',
    },
    overlayText: {
      description: 'Sets the text of the overlay  ',
    },
  },
};

const OverlayComponentTemplate = (args: any) => <OverlayComponent {...args} />;

export const Default = OverlayComponentTemplate.bind({});

// Default.args = {};
