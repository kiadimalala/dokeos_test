import React from "react";
import styled from "styled-components";

interface InputProps {
  type?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  className,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <InputWrapper
      type={type}
      className={`input ${className ? className : ""}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const InputWrapper = styled.input`
  &.input {
    background: transparent;
    border: none;
    font-size: 16px;
    width: 100%;

    &:focus {
      outline: none;
      border-bottom-color: #000;
    }
  }
`;
export default Input;
