import DireflowComponent from 'direflow-component';
import { attributes, properties } from './properties';
import { BWTInput } from './Input';

const direflowComponent = new DireflowComponent();

direflowComponent.setAttributes(attributes);
direflowComponent.setProperties(properties);
direflowComponent.render(BWTInput, 'bwt-input');