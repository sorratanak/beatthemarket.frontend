import React from 'react';
import renderer from 'react-test-renderer';
import { mockNavigation } from '../../../mocks/Setup';
import { SignUp } from '../index';

it('should render correctly', () => {
  const component = renderer.create(<SignUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('navigates to details', () => {
  const component = renderer.create(<SignUp />);
  const button = component.root.findByProps({ testID: 'details' });
  button.instance.props.onPress();
  expect(mockNavigation.navigate).toBeCalledWith('Details', { data: '🤪' });
});
