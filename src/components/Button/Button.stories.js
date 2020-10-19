import React from 'react';
import Button from './Button';

// meta-data for the component
export default {
  title: 'Button', // unique name for the project
  component: Button,
};

// stories (state of the component)
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
