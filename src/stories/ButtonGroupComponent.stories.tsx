import React from 'react';
import { ButtonGroupComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ButtonGroupComponent',
  component: ButtonGroupComponent,
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
    onClickbutton1: {
      description: 'Function to handle the click of the button ',
    },
    onClickbutton2: {
      description: 'Sets the button text',
    },
    onClicbutton3: {
      description: 'Set the  color of the button',
    },
    buttonText1: {
      description: 'Set the size of the button',
    },
    buttonText2: {
      description: 'Set if button disabled or not ',
    },
    buttonText3: {
      description: 'Set if button active or not ',
    },
    buttonVariant1: {
      description: 'Set the size of the button',
    },
    buttonVariant2: {
      description: 'Set if button disabled or not ',
    },
    buttonVariant3: {
      description: 'Set if button active or not ',
    },
    buttonSize1: {
      description: 'Set the size of the button',
    },
    buttonSize2: {
      description: 'Set if button disabled or not ',
    },
    buttonSize3: {
      description: 'Set if button active or not ',
    },
    buttonDisabled1: {
      description: 'Set the size of the button',
    },
    buttonDisabled2: {
      description: 'Set if button disabled or not ',
    },
    buttonDisabled3: {
      description: 'Set if button active or not ',
    },
    buttongActive1: {
      description: 'Set the size of the button',
    },
    buttongActive2: {
      description: 'Set if button disabled or not ',
    },
    buttongActive3: {
      description: 'Set if button active or not ',
    },
  },
};

const ButtonGroupComponentTemplate = (args: any) => (
  <ButtonGroupComponent {...args} />
);

export const Default = ButtonGroupComponentTemplate.bind({});

// Default.args = {};
