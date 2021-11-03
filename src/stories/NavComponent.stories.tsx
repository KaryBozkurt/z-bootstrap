import React from 'react';
import { NavComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/NavComponent',
  component: NavComponent,
  argTypes: {
    onSelectAllMapping: {
      description:
        'Function to handle each of the selected Nav 1 item using the eventkey of each nav item   ',
    },
    eventKeyNav1: {
      description: 'Sets the Id for nav 1 item  ',
    },
    eventKeyNav2: {
      description: 'Sets the Id for nav 2 item  ',
    },
    eventKeyNav3: {
      description: 'Sets the Id for nav 3 item  ',
    },
    TitleNav1: {
      description: 'Sets the text title  of nav item 1 ',
    },
    TitleNav2: {
      description: 'Sets the text title  of nav item 2  ',
    },
    TitleNav3: {
      description: 'Sets the text title  of nav item 3  ',
    },
    Disabled1: {
      description: 'Sets if  nav item 1 disabled or not  ',
    },
    Disabled2: {
      description: 'Sets if  nav item 1 disabled or not  ',
    },
    Disabled3: {
      description: 'Sets if  nav item 1 disabled or not  ',
    },
  },
};

const NavComponentTemplate = (args: any) => <NavComponent {...args} />;

export const Default = NavComponentTemplate.bind({});

// Default.args = {};
