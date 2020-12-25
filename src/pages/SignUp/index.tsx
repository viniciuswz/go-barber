import React from 'react';

import { Form } from '@unform/web';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/button';

const SignUp: React.FC = () => {
  function handleSubmitForm(data: Object) {
    console.log(data);
  }
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="" />
        <h1>Faça seu cadastro</h1>
        <Form onSubmit={handleSubmitForm}>
          <Input name="user" placeholder="Nome" icon={FiUser} />

          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <a href="#asdasd">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
