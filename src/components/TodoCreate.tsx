import useInputs from '@/hooks/useInputs';
import Input from '@/components/input';
import { useRef } from 'react';

const TodoCreate = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onSubmit } = useInputs({ inputRef });

  return (
    <form onSubmit={onSubmit}>
      <Input ref={inputRef} placeholder="할 일을 입력 후, Enter 를 누르세요" />
    </form>
  );
};

export default TodoCreate;
