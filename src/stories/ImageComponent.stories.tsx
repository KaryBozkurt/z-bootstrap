import React from 'react';
import { ImageComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ImageComponent',
  component: ImageComponent,
  argTypes: {
    onClick: {
      description: 'Function to handle the click of the image   ',
    },
    Imagesrc: {
      description: 'Sets the source of the image   ',
    },
    imageAlt: {
      description: 'Sets the alt of the image    ',
    },
    roundedCircle: {
      description: 'Turns image to circled version   ',
    },
  },
};

const ImageComponentTemplate = (args: any) => <ImageComponent {...args} />;

export const Default = ImageComponentTemplate.bind({});

// Default.args = {};
