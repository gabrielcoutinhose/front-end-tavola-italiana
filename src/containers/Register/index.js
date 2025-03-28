import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import RegisterImg from "../../assets/images/register-image.png";
import Logo from "../../assets/logo/logo.png";
import { Button, ErrorMessage } from "../../components";
import api from "../../services/api";
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SignUp,
} from "./styles";

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("insert a valid e-mail, please!")
      .required("the e-mail is required!"),
    password: Yup.string()
      .required("the password is required!")
      .min(6, "It must 6 characters"),
    confirmPassword: Yup.string()
      .required("the password confirmation is required!")
      .oneOf([Yup.ref("password")], "passwords must be the same"),
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
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 201 || status === 200) {
        toast.success("Registered with success!");
      } else if (status === 409) {
        toast.error("Email already in use. Try another one!");
      } else if (status === 400) {
        toast.error(data.error || "Invalid input. Check your information.");
      } else {
        toast.error("Unexpected error. Please, try again later.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Fail on system, please, try again");
    }
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
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="email"
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
          <Label>Password confirmation</Label>
          <Input
            type="password"
            placeholder="Confirm the password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit">Sign Un</Button>
        </form>
        <SignUp>
          Already have an account?{" "}
          <Link style={{ color: "white" }} to="/login">
            Sign In
          </Link>
        </SignUp>
      </ContainerItems>
    </Container>
  );
}
