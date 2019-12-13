import React from 'react';
import { BWTInput } from '../src/components';

export default {
  title: 'Input',
};

export const defaultInput = () => (
  <BWTInput
    label="Title"
    onChangeValue={console.log}
    validValue={/[a-zA-Z]/g}
  />
)

defaultInput.story = {
  name: 'Default input',
};
