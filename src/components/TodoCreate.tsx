import { ChangeEvent, FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import { useTodoDispatch } from '@/components/TodoProvider';

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
  const dispatch = useTodoDispatch();
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: Date.now(),
        text: value,
        done: false,
      },
    });

    setValue('');
  };

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
