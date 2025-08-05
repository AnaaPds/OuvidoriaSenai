import React from 'react';
import './Modal.css';

function ModalLogin({ isOpen, onClose, onCadastro, onEsqueciSenha }) {
  if (!isOpen) return null;

  return React.createElement('div', { className: 'modal-overlay', onClick: onClose },
    React.createElement('div', { className: 'modal-container', onClick: (e) => e.stopPropagation() }, [

      // Botão de fechar
      React.createElement('button', {
        className: 'close-btn',
        onClick: onClose
      }, '×'),

      // Título
      React.createElement('h2', null, 'Login'),

      // Campo email
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'E-mail Educacional'),
        React.createElement('input', { type: 'email', placeholder: 'Digite seu e-mail' })
      ]),

      // Campo senha
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'Senha'),
        React.createElement('input', { type: 'password', placeholder: 'Digite sua senha' })
      ]),

      // Tipo de usuário
      React.createElement('div', { className: 'user-type' }, [
        React.createElement('label', null, [
          React.createElement('input', { type: 'radio', name: 'tipo' }),
          ' Aluno'
        ]),
        React.createElement('label', null, [
          React.createElement('input', { type: 'radio', name: 'tipo' }),
          ' Funcionário'
        ])
      ]),

      // Botão Entrar
      React.createElement('button', { className: 'submit-btn' }, 'Entrar'),

      // Links de ações
      React.createElement('div', {
        style: {
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '13px'
        }
      }, [
        React.createElement('button', {
          key: 'esqueci',
          style: {
            border: 'none',
            background: 'none',
            color: '#0066cc',
            cursor: 'pointer',
            padding: 0
          },
          onClick: onEsqueciSenha
        }, 'Esqueceu sua senha?'),

        React.createElement('button', {
          key: 'cadastro',
          style: {
            border: 'none',
            background: 'none',
            color: '#0066cc',
            cursor: 'pointer',
            padding: 0
          },
          onClick: onCadastro
        }, 'Primeiro acesso?')
      ])
    ])
  );
}

export default ModalLogin;
