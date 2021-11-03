import React from 'react';
import { CardComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CardComponent',
  component: CardComponent,
  argTypes: {
    onClickbutton1: {
      description: 'Function to handle button 1 click ',
    },
  },
};

const CardComponentTemplate = (args: any) => <CardComponent {...args} />;

export const Default = CardComponentTemplate.bind({});

// Default.args = {};
