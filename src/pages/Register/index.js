import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NavBar from '../../components/NavBar';

import api from '../../services/api';
import * as CSS from './styled';

export default function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = { nome, email, senha, cpf };

    try {
      const response = await api.post('/usuarios/cadastrar', data);

      alert(`Obrigado ${response.data.nome} seu cadastro foi realizado com sucesso!`);
      history.push('/logon');
    } catch (err) {
      const respo = await api.get('/usuarios');
      alert(`Erro no Cadastro, tente novamenteeeee ${respo}`);
    }
  }

  return (
    <>
      <NavBar pagina={"register"} />

      <CSS.Register_div>

        <div className="main_container">
          <section className="register-bg">
            <div className="bloco">
              <div className="register-info">
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e envie ou receba orçamentos...</p>
                <Link className="back-link" to="/logon">
                  <FiArrowLeft size={16} color="#07beb8" />
                    Já tenho Login!
                </Link>
              </div>

              <div className="register-form">
                <form onSubmit={handleRegister}>
                  <input
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />

                  <input
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />

                  <input
                    type="senha"
                    value={senha}
                    placeholder="Digite uma senha"
                    onChange={e => setSenha(e.target.value)}
                  />

                  <button className="button" type="submit">Cadastrar</button>

                </form>
              </div>
            </div>
          </section>
        </div>
      </CSS.Register_div>
    </>
  );
}