import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import LoginImg from '../../assets/login-image.png';
import Logo from '../../assets/logo.png';
import api from '../../services/api';
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  ErrorMessage,
  Button,
  Register,
} from './styles';

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('insert a valid e-mail, please!')
      .required('the e-mail is required!'),
    password: Yup.string()
      .required('the password is required!')
      .min(6, 'It must 6 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-tavola-italiana" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Username"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Log In</Button>
        </form>
        <Register>
          Don&apos;t have an account? <a>Signup</a>
        </Register>
      </ContainerItems>
    </Container>
  );
}

export default Login;
