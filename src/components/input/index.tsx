import styled from '@emotion/styled';
import { InputHTMLAttributes, forwardRef } from 'react';

const InputStyled = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', placeholder, onChange } = props;
  return (
    <InputStyled
      type={type}
      autoFocus
      onChange={onChange}
      ref={ref}
      placeholder={placeholder}
    />
  );
});

export default Input;
