import { useTodoDispatch } from '@/components/TodoProvider';
import { useState, FormEvent, ChangeEvent } from 'react';

const useInputs = () => {
  const dispatch = useTodoDispatch();
  const [value, setValue] = useState<string>('');

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

  return { value, onChange, onSubmit };
};

export default useInputs;
