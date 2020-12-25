import React from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="" />
      <h1>Faça seu login</h1>
      <form action="">
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
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