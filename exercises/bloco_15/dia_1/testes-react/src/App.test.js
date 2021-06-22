import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Testa renderizações na tela', () => {
  it('renders learn react link', () => {
    const meuApp = render(<App />);
    const linkElement = meuApp.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renders react logo', () => {
    const meuApp = render(<App />);
    const imgElement = meuApp.queryByAltText(/logo/i);
    expect(imgElement).toBeInTheDocument();
  });
  
  it('renders react app title', () => {
    const meuApp = render(<App />);
    const pElement = meuApp.getByText(/edit/i);
    expect(pElement).toBeInTheDocument();
  });
  
  it('app renders an e-mail input', () => {
    const { getByLabelText } = render(<App />);
    const emailInput = getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.type).toBe('email');
  });
  
  it('app renders an e-mail input(alternative matcher)', () => {
    const { getByRole } = render(<App />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  
  it('presence of a button enviar on APP', () =>{
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    expect(button[0]).toBeInTheDocument();
    expect(button[0].type).toBe('button');
    expect(button[0].value).toBe('Enviar');
  });
  
  it('presence of a button voltar on APP', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    expect(button[1]).toBeInTheDocument();
    expect(button[1].type).toBe('button');
    expect(button[1].value).toBe('Voltar');
  });
  
  it('Verificando se existem dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});

describe('funcionalidades do form', () => {
  it('Verifica se o botão e o campo email estão funcionando', () => {
    const { getByTestId, getByLabelText } = render(<App />);

    const EMAIL_USER = 'email@email.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
