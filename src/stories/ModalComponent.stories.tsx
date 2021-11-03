import React from 'react';
import { ModalComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ModalComponent',
  component: ModalComponent,
  argTypes: {
    onClickButtonLeft: {
      description: 'Function to handle the click of the left button  ',
    },
    onClickButtonRight: {
      description: 'Function to handle the click of the right button  ',
    },
    buttonLeftText: {
      description: 'Sets the text of the left button  ',
    },
    buttonRightText: {
      description: 'Sets the text of the right button  ',
    },
    onhide: {
      description: 'Function to handle the on hide event   ',
    },
    modalTitle: {
      description: 'Sets the title text of the model  ',
    },
    modalBodyDescription: {
      description: 'Sets the body text of the   ',
    },
    showModal: {
      description: 'Show/unshow modal  ',
    },
  },
};

const ModalComponentTemplate = (args: any) => <ModalComponent {...args} />;

export const Default = ModalComponentTemplate.bind({});

// Default.args = {};
