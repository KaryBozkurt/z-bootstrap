import React from 'react';
import { OffcanvasComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/OffcanvasComponent',
  component: OffcanvasComponent,
  argTypes: {
    ButtonOnClickShowCanvas: {
      description:
        'Function to Show/UnShow the canvas when clicked  when clicked  ',
    },
    OffcanvasOnClickShowCanvas: {
      description:
        'Function to Show/UnShow the canvas when clicked  on cancel button or outside canvas   ',
    },
    variant: {
      description: 'Sets the color of the button   ',
    },
    size: {
      description: 'Sets the size of the button   ',
    },
    disabled: {
      description: 'Checks if button is disabled or not   ',
    },
    active: {
      description: 'Checks if button is active or not   ',
    },
    isOffCanvas: {
      description: 'Sets if canvas is off or on   ',
    },
    launchOffcanvasText: {
      description: 'Sets the text of button launched canvas   ',
    },
    OffcanvasTitle: {
      description: 'Sets the title text of the canvas   ',
    },
    OffcanvasBodyDescription: {
      description: 'Sets the description text of the canvas  ',
    },
  },
};

const OffcanvasComponentTemplate = (args: any) => (
  <OffcanvasComponent {...args} />
);

export const Default = OffcanvasComponentTemplate.bind({});

// Default.args = {};
