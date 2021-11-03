import React from 'react';
import { ButtonGroupComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ButtonGroupComponent',
  component: ButtonGroupComponent,
  argTypes: {
    onClickbutton1: {
      description: 'Function to handle button 1 click ',
    },
    onClickbutton2: {
      description: 'Function to handle button 2 click',
    },
    onClicbutton3: {
      description: 'Function to handle button 3 click',
    },
    buttonText1: {
      description: 'Set button text 1 ',
    },
    buttonText2: {
      description: 'Set button text 2  ',
    },
    buttonText3: {
      description: 'Set button text 3  ',
    },
    buttonVariant1: {
      description: 'Set the color of button 1',
    },
    buttonVariant2: {
      description: 'Set the color of button 2 ',
    },
    buttonVariant3: {
      description: 'Set the color of button 3 ',
    },
    buttonSize1: {
      description: 'Set the size of button 1 ',
    },
    buttonSize2: {
      description: 'Set the size of button 2 ',
    },
    buttonSize3: {
      description: 'Set the size of button 3 ',
    },
    buttonDisabled1: {
      description: 'Set if button 1  disabled or not ',
    },
    buttonDisabled2: {
      description: 'Set if button 2  disabled or not ',
    },
    buttonDisabled3: {
      description: 'Set if button 3 disabled or not ',
    },
    buttongActive1: {
      description: 'Set if button 1  active or not',
    },
    buttongActive2: {
      description: 'Set if button 2  active or not ',
    },
    buttongActive3: {
      description: 'Set if button 3  active or not ',
    },
  },
};

const ButtonGroupComponentTemplate = (args: any) => (
  <ButtonGroupComponent {...args} />
);

export const Default = ButtonGroupComponentTemplate.bind({});

// Default.args = {};
