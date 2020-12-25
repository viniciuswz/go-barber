import React, { useCallback } from 'react';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/button';

const SignUp: React.FC = () => {
  const handleSubmitForm = useCallback(async (data: Object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(
          6,
          'A senha precisa ter no mínimo 6 caracteres',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.dir(err);
    }
  }, []);
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
