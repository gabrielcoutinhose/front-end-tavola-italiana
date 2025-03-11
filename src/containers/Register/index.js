import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Logo from '../../assets/logo.png';
import RegisterImg from '../../assets/register-image.png';
import Button from '../../components/Button';
import api from '../../services/api';
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  ErrorMessage,
  SignUp,
} from './styles';

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('insert a valid e-mail, please!')
      .required('the e-mail is required!'),
    password: Yup.string()
      .required('the password is required!')
      .min(6, 'It must 6 characters'),
    confirmPassword: Yup.string()
      .required('the password confirmation is required!')
      .oneOf([Yup.ref('password')], 'passwords must be the same'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-tavola-italiana" />
        <h1>Register</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="name"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="email"
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
          <Label>Password confirmation</Label>
          <Input
            type="password"
            placeholder="Confirm the password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit">Sign Un</Button>
        </form>
        <SignUp>
          Already have an account?? <a>Sign In</a>
        </SignUp>
      </ContainerItems>
    </Container>
  );
}

export default Register;
