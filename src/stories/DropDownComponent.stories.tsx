import React from 'react';
import { DropDownComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/DropDownComponent',
  component: DropDownComponent,
  argTypes: {
    onClick1: {
      description: 'Function to handle the click of  DropDown Item 1   ',
    },
    onClick2: {
      description: 'Function to handle the click of  DropDown Item 2  ',
    },
    onClick3: {
      description: 'Function to handle the click of  DropDown Item 3   ',
    },
    variant: {
      description: 'Sets the color of the DropDown  ',
    },
    dropDownText: {
      description: 'Sets the text of the DropDown   ',
    },
    dropDownItemText1: {
      description: 'Sets the text of the DropDown Item 1  ',
    },
    dropDownItemText2: {
      description: 'Sets the text of the DropDown Item 2  ',
    },
    dropDownItemText3: {
      description: 'Sets the text of the DropDown Item 3  ',
    },
    id: {
      description: 'Sets the id of the DropDown   ',
    },
  },
};

const DropDownComponentTemplate = (args: any) => (
  <DropDownComponent {...args} />
);

export const Default = DropDownComponentTemplate.bind({});

// Default.args = {};
