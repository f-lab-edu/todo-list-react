import styled from '@emotion/styled';
import useInputs from '@/hooks/useInputs';

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const { value, onChange, onSubmit } = useInputs();

  return (
    <form onSubmit={onSubmit}>
      <Input
        autoFocus
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력 후, Enter 를 누르세요"
      />
    </form>
  );
};

export default TodoCreate;
