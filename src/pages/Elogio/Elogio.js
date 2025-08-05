import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Elogio/Elogio.css';
import Footer from '../../Components/Footer';
import HeaderSimples from '../../Components/HeaderSimples';
import SetaVoltar from '../../Components/SetaVoltar';

function Elogio() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/confirmacao'); 
  };

  return (
    <div className="elogio-container">
      <HeaderSimples />
      <SetaVoltar />

      <div className="elogio-content">
        <h2 className="titulo-pagina">Faça um elogio</h2>

        <div className="instrucoes-preenchimento">
          <p><strong>* Campos Obrigatórios</strong></p>
          <p>* Tamanho máximo para Anexar arquivo: 5 Megabytes.</p>
          <p>Explique em quais casos a denúncia pode ser feita e reforce a confidencialidade do processo.</p>
        </div>

        <div className="form-box">
          <form className="formulario-elogio" onSubmit={handleSubmit}>
            <label>Nome (opcional)</label>
            <input type="text" placeholder="Digite aqui..." />

            <label>E-mail ou Telefone</label>
            <input type="email" placeholder="Digite aqui..." required />

            <label>Local do incidente</label>
            <input type="text" placeholder="Digite aqui..." required />

            <label>Data e Hora do incidente</label>
            <input type="text" placeholder="Digite aqui..." required />

            <label>Descrição detalhada do elogio (ou foto)</label>
            <div className="textarea-container">
              <textarea rows="6" placeholder="Digite aqui..." required></textarea>
              <img
                src={require('../../assets/imagens/icone-anexo.png')}
                alt="Anexar"
                className="icone-anexar"
              />
            </div>

            <small>Atenção: Evite compartilhar imagens que possam comprometer sua segurança ou de outra pessoa.</small>

            <button type="submit" className="btn-confirmar">Confirmar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Elogio;
