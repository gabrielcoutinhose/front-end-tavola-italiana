import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LoginImg from "../../assets/login-image.png";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button";
import api from "../../services/api";
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  ErrorMessage,
  SignUp,
} from "./styles";

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("insert a valid e-mail, please!")
      .required("the e-mail is required!"),
    password: Yup.string()
      .required("the password is required!")
      .min(6, "It must 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status, data } = await api.post(
        "sessions",
        {
          email: clientData.email,
          password: clientData.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200) {
        toast.success("Welcome!");
        console.log("Login successful:", data);
      } else if (status === 401) {
        toast.error("User not found. Please check your email.");
      } else if (status === 402) {
        toast.error("Incorrect password. Try again!");
      } else {
        toast.error("Unexpected error. Please, try again later.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Fail on system, please, try again.");
    }
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
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Log In</Button>
        </form>
        <SignUp>
          Don&apos;t have an account? <a>Signup</a>
        </SignUp>
      </ContainerItems>
    </Container>
  );
}

export default Login;
