import React from 'react';
import './Modal.css';

function ModalSenha({ isOpen, onClose }) {
  if (!isOpen) return null;

  return React.createElement('div', { className: 'modal-overlay', onClick: onClose }, 
    React.createElement('div', { className: 'modal-container', onClick: (e) => e.stopPropagation() }, [
      React.createElement('button', { className: 'close-btn', onClick: onClose }, '×'),
      React.createElement('h2', null, 'Esqueci Minha Senha'),
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'CPF'),
        React.createElement('input', { type: 'text', placeholder: 'Digite seu CPF' })
      ]),
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'Nova Senha'),
        React.createElement('input', { type: 'password', placeholder: 'Digite nova senha' })
      ]),
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
      React.createElement('button', { className: 'submit-btn' }, 'Confirmar')
    ])
  );
}

export default ModalSenha;
