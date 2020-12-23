import React from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="" />
      <h1>Faça seu login</h1>
      <form action="">
        <div>
          <FiMail size={24} />
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <FiLock size={24} />
          <input type="text" placeholder="Senha" />
        </div>
        <button type="submit">Entrar</button>
        <a href="#asdasd">Esqueci minha senha</a>
      </form>
      <a href="#asdasd">
        <FiLogIn />
        Cadastre-se
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
