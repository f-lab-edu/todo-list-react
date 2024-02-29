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
  const { value, handleChange, handleSubmit } = useInputs();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        autoFocus
        onChange={handleChange}
        value={value}
        placeholder="할 일을 입력 후, Enter 를 누르세요"
      />
    </form>
  );
};

export default TodoCreate;
