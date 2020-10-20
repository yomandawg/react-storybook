import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Form', ['Input', 'Button'], 'Example'],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {},
};

export const decorators = [(Story, context) => withConsole()(Story)(context)];
