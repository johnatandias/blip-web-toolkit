import React, { FC } from 'react';
import { IProperties, IAttributes } from './properties';
import { BWTInput } from '../components';

interface IProps extends IProperties, IAttributes {}

const App: FC<IProps> = () => (
  <BWTInput
    label="Title"
    description="Action descripition"
    onChangeValue={console.log}
    validValue={/[a-zA-Z]/gm}
    errorMessage="Error message"
  />
);

export default App;
