import React from 'react';
import { ListGroupComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ListGroupComponent',
  component: ListGroupComponent,
  argTypes: {
    onClick1: {
      description: 'Function to handle the click of item 1 in list group   ',
    },
    onClick2: {
      description: 'Function to handle the click of item 2 in list group   ',
    },
    onClick3: {
      description: 'Function to handle the click of item 3 in list group   ',
    },
    variant1: {
      description: 'Set The background color of item 2 in list group   ',
    },
    variant2: {
      description: 'Set The background color of item 3 in list group    ',
    },
    variant3: {
      description: 'Set The background color of item 1 in list group    ',
    },
    disabled1: {
      description: 'Set if item 1 disabled or not    ',
    },
    disabled2: {
      description: 'Set if item 2 disabled or not   ',
    },
    disabled3: {
      description: 'Set if item 3 disabled or not   ',
    },
    listGroupText1: {
      description: 'Sets the text of item 1 in List group   ',
    },
    listGroupText2: {
      description: 'Sets the text of item 2 in List group   ',
    },
    listGroupText3: {
      description: 'Sets the text of item 3 in List group   ',
    },
  },
};

const ListGroupComponentTemplate = (args: any) => (
  <ListGroupComponent {...args} />
);

export const Default = ListGroupComponentTemplate.bind({});

// Default.args = {};
