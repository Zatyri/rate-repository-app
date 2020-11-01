import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const signin = jest.fn();
      const {getByTestId} = render(<SignInContainer signIn={signin}/>);      
      fireEvent.changeText(getByTestId('username'), 'user');
      fireEvent.changeText(getByTestId('password'), 'password');

      await waitFor(() => {  
        fireEvent.press(getByTestId('submitButton'));
      });

      expect(signin).toHaveBeenCalledTimes(1);

      expect(signin.mock.calls[0][0]).toEqual({
        username: 'user',
        password: 'password'
      });
    });
  });
});