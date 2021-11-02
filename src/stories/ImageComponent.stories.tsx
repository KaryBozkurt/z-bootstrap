import React from 'react';
import { ImageComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ImageComponent',
  component: ImageComponent,
};

const ImageComponentTemplate = (args: any) => <ImageComponent {...args} />;

export const Default = ImageComponentTemplate.bind({});

// Default.args = {};
