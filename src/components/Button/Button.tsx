import React from "react";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  className,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      className={`btn ${className ? className : ""}`}
    >
      {label && <span>{label}</span>}
      {children && children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  &.btn {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Button;
