import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente caso o e-mail seja valido', () => {
  const EMAIL_USER = 'email@example.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText(/email valido/i);
  expect(isValid).toBeInTheDocument();
});

test('Testando o caso de o e-mail ser invalido', () => {
  const EMAIL_USER = 'emailSemNexo';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText(/email inválido/i);
  expect(isValid).toBeInTheDocument();
});
