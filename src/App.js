import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Confirmacao from './pages/Confirmacao/Confirmacao';
import Denuncia from './pages/Denuncia/Denuncia';
import Elogio from './pages/Elogio/Elogio';
import Sugestao from './pages/Sugestao/Sugestao';
import Reclamacao from './pages/Reclamacao/Reclamacao';

function App() {
  return React.createElement(BrowserRouter, null,
    React.createElement(Routes, null, [
      React.createElement(Route, { path: '/', element: React.createElement(Home) }),
      React.createElement(Route, { path: '/confirmacao', element: React.createElement(Confirmacao) }),
      React.createElement(Route, { path: '/denuncia', element: React.createElement(Denuncia) }),
      React.createElement(Route, { path: '/elogio', element: React.createElement(Elogio) }),
      React.createElement(Route, { path: '/sugestao', element: React.createElement(Sugestao) }),
      React.createElement(Route, { path: '/reclamacao', element: React.createElement(Reclamacao) })
    ])
  );
}

export default App;
