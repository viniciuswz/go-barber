import React, { useRef, useCallback } from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();
  const { addToast } = useToast();
  console.log(user);
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail no formato inválido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo 6 digitos'),
        });

        const { email, password } = data;

        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email,
          password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <h1>Faça seu login</h1>
        <Form onSubmit={handleSubmit} ref={formRef} action="">
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <a href="#asdasd">Esqueci minha senha</a>
        </Form>
        <a href="#asdasd">
          <FiLogIn />
          Cadastre-se
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
