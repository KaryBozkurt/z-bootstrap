import React from 'react';
import { FormComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/FormComponent',
  component: FormComponent,
  argTypes: {
    onClick: {
      description: 'Function to handle the click of  the submit button   ',
    },
    variant: {
      description: 'Sets the color of the button  ',
    },
    size: {
      description: 'Sets the size of the button  ',
    },
    disabled: {
      description: 'Sets if button disabled or not   ',
    },
    active: {
      description: 'Sets if button active or not ',
    },
    fieldText1: {
      description: 'Sets the text of field 1   ',
    },
    fieldText2: {
      description: 'Sets the text of field 2   ',
    },
    checkboxText: {
      description: 'Sets the text of Checkbox  ',
    },
    placeHolderField1: {
      description: 'Sets the placeholder of field 1   ',
    },
    placeHolderField2: {
      description: 'Sets the placeholder of field 1    ',
    },
    controlIdField1: {
      description: 'Sets the id of field 1    ',
    },
    controlIdField2: {
      description: 'Sets the id of field 2     ',
    },
    classNameField1: {
      description: 'Sets the className of field 1   ',
    },
    classNameField2: {
      description: 'Sets the className of field 2   ',
    },
    submitText: {
      description: 'Function to handle the click of the submit button  ',
    },
  },
};

const FormComponentTemplate = (args: any) => <FormComponent {...args} />;

export const Default = FormComponentTemplate.bind({});

// Default.args = {};
