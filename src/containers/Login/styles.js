import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: 100%;
  width: 40%;
`;

export const ContainerItems = styled.div`
  background: var(--base-color);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: var(--text-light);
    margin-top: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: var(--text-light);
  margin-top: 28px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? " 1px solid #ff0000" : "none")};
  padding-left: 15px;
  text-align: center;
`;

export const SignUp = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-light);
  margin-top: 40px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ff0000;
  margin-top: 2px;
`;
