import { ChangeEvent, FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import useTodoStore from '@/stores/todoStore';

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
  const createTodo = useTodoStore((store) => store.createTodo);
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({
      id: Date.now(),
      text: value,
      done: false,
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
