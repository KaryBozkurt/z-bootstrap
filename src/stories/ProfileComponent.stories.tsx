import React from 'react';
import { ProfileComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ProfileComponent',
  component: ProfileComponent,
  argTypes: {
    onClick: {
      description: 'Function to handle the image when clicked  ',
    },
    profileSrc: {
      description: 'Sets the image of the profile image  ',
    },
    profileWidth: {
      description: 'Sets the width of the profile image ',
    },
    profileHeight: {
      description: 'Sets the height of the profile image ',
    },
    profileAlt: {
      description: 'Sets the alt of he profile image   ',
    },
    profileDescription: {
      description: 'Sets the description of the profile image  ',
    },
  },
};

const ProfileComponentTemplate = (args: any) => <ProfileComponent {...args} />;

export const Default = ProfileComponentTemplate.bind({});

// Default.args = {};
