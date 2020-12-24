import React from 'react';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/button';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="" />
      <h1>Faça seu cadastro</h1>
      <form action="">
        <Input name="user" placeholder="Nome" icon={FiUser} />

        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <a href="#asdasd">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
