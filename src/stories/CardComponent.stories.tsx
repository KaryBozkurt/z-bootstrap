import React from 'react';
import { CardComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CardComponent',
  component: CardComponent,
  argTypes: {
    onClick: {
      description: 'Function to handle button click ',
    },
    buttonText: {
      description: 'Sets the button text ',
    },
    cardTitle: {
      description: 'Sets the title of the Card ',
    },
    cardDescription: {
      description: 'Sets the Description of the Card ',
    },
    cardStyle: {
      description: 'Sets the Style of the Card ',
    },
    cardImage: {
      description: 'Sets the Image of the Card ',
    },
    variant: {
      description: 'Sets the color of the Button ',
    },
    size: {
      description: 'Sets the size of the Button ',
    },
    disabled: {
      description: 'check if button is dsiabled or not  ',
    },
    active: {
      description: 'check if button is active or not ',
    },
  },
};

const CardComponentTemplate = (args: any) => <CardComponent {...args} />;

export const Default = CardComponentTemplate.bind({});

// Default.args = {};
