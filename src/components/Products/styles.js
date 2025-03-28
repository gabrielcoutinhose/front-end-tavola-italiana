import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-color);
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  overflow-x: auto;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;

  ${({ isYes }) =>
    isYes
      ? `
          background: var(--success-color);
          border: none;
        `
      : `
          background: var(--problem-color);
          border: none;
        `}
`;

export const Button = styled.button`
  background: var(--accent-color);
  padding: 2px;
  border: none;
  border-radius: 6px;
  opacity: 1;
  transition: opacity 0.2s ease;

  img {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;
