import React from 'react';
import { CarouselComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CarouselComponent',
  component: CarouselComponent,
  argTypes: {
    cardImage1: {
      description: 'Sets the Image of Card 1  ',
    },
    cardImage2: {
      description: 'Sets the Image of Card 2 ',
    },
    cardImage3: {
      description: 'Sets the Image of Card 3 ',
    },
    altImage1: {
      description: 'Sets the Alt1  of Image in  Card 1 ',
    },
    altImage2: {
      description: 'Sets the Alt 2  of Image in  Card 2 ',
    },
    altImage3: {
      description: 'Sets the Alt  3 of Image in  Card 3 ',
    },
    className1: {
      description: 'sets the ClassName of  Image 1 in Card 1  ',
    },
    className2: {
      description: 'sets the ClassName of  Image 2 in Card 2  ',
    },
    className3: {
      description: 'sets the ClassName of  Image 3 in Card 3  ',
    },
    SlideLable1: {
      description: 'Sets the Lable text of Card 1 ',
    },
    SlideLable2: {
      description: 'Sets the Lable text of Card 2 ',
    },
    SlideLable3: {
      description: 'Sets the Lable text of Card 3 ',
    },
    SlideLableDescription1: {
      description: 'Sets the Lable Description text of Card 1  ',
    },
    SlideLableDescription2: {
      description: 'Sets the Lable Description text of Card 2',
    },
    SlideLableDescription3: {
      description: 'Sets the Lable Description text of Card 3 ',
    },
  },
};

const CarouselComponentTemplate = (args: any) => (
  <CarouselComponent {...args} />
);

export const Default = CarouselComponentTemplate.bind({});

// Default.args = {};
