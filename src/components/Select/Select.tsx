import React from "react";
import styled from "styled-components";

interface SelectOptionProps {
  options?: string[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  name?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  options,
  value,
  onChange,
  className,
  name,
}) => {
  return (
    <SelectWrapper
      value={value}
      onChange={onChange}
      className={`select ${className ? className : ""}`}
      name={name}
    >
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  &.select {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.select:focus {
    outline: none;
  }
`;
export default SelectOption;
