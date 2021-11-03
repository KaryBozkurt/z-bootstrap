import React from 'react';
import { NotificationButtonComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/NotificationButtonComponent',
  component: NotificationButtonComponent,
  argTypes: {
    onClick: {
      description: 'Function to Handles the click of the  button   ',
    },
    buttonText: {
      description: 'Sets the text of the button   ',
    },
    buttonVariant: {
      description: 'Sets the color of the button   ',
    },
    size: {
      description: 'Sets the size of the button   ',
    },
    disabled: {
      description: 'Sets if button is disabled or not    ',
    },
    active: {
      description: 'Sets if button is active or not   ',
    },
    badgeCircular: {
      description: 'Sets if badge is circular or not   ',
    },
    badgeVariant: {
      description: 'Sets the color of the badget  ',
    },
    badgeTextValue: {
      description: 'Sets the text of the badge   ',
    },
  },
};

const NotificationButtonComponentTemplate = (args: any) => (
  <NotificationButtonComponent {...args} />
);

export const Default = NotificationButtonComponentTemplate.bind({});

// Default.args = {};
