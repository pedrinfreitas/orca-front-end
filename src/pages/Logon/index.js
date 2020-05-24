import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import NavBar from '../../components/NavBar';

import api from "../../services/api";
// import './styled';

import * as CSS from './styled';

export default function Logon() {
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  // const history = useHistory();

  // async function handleLogin(e) {
  //     e.preventDefault();

  //     try{
  //         const response = await api.post('sessions', { id });

  //         localStorage.setItem('ongId', id);
  //         localStorage.setItem('ongName', response.data.name);

  //         history.push('/profile');
  //     } catch (err){
  //         alert('Falha no Login, tente novamente');
  //     }
  // } form - onSubmit={handleLogin}

  return (
    <>

      <NavBar pagina={"logon"} />

      <CSS.Logon_div>

        <div className="main_container">
          <section className="logon-bg">
            <div className="bloco">
              <div className="logon-info">
                <h1>Login</h1>
                <p>Entre com seu e-mail e senha e seja feliz!</p>
                <Link className="back-link" to="/register">
                  <FiArrowLeft size={16} color="#07beb8" />
                                Não tenho Login!?
                            </Link>
              </div>

              <div className="logon-form">
                <form>


                  <input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                  />

                  <input
                    type="password"
                    placeholder="Digite sua senha"
                  />

                  <Link className='back-link' to='/dashboard/' >
                    <button className="button" type="submit">Enviar</button>
                  </Link>

                </form>
              </div>
            </div>
          </section>
        </div>
      </CSS.Logon_div>

    </>
  );
}