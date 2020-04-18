import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomButton from '../components/button';

storiesOf('CustomButton', module).add('Basic example', () => {
  return <CustomButton>Proceed →</CustomButton>;
});
