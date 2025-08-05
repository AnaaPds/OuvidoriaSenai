import React from "react";
import './Modal.css';



function ModalCadastro({ isOpen, onClose }) {
  if (!isOpen) return null;

  return React.createElement('div', { className: 'modal-overlay', onClick: onClose }, 
    React.createElement('div', { className: 'modal-container', onClick: (e) => e.stopPropagation() }, [
      React.createElement('button', { className: 'close-btn', onClick: onClose }, '×'),
      React.createElement('h2', null, 'Cadastro'),
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'E-mail Educacional'),
        React.createElement('input', { type: 'email', placeholder: 'Digite seu e-mail' })
      ]),
      React.createElement('div', { className: 'input-container' }, [
        React.createElement('label', null, 'Senha'),
        React.createElement('input', { type: 'password', placeholder: 'Digite sua senha' })
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
      React.createElement('button', { className: 'submit-btn' }, 'Cadastrar')
    ])
  );
}

export default ModalCadastro;
