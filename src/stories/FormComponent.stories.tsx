import React from 'react';
import { FormComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/FormComponent',
  component: FormComponent,
};

const FormComponentTemplate = (args: any) => <FormComponent {...args} />;

export const Default = FormComponentTemplate.bind({});

// Default.args = {};
