import { useTodoDispatch } from '@/stores/TodoProvider';
import { useState, FormEvent, ChangeEvent } from 'react';

const useInputs = () => {
  const dispatch = useTodoDispatch();
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  return { value, handleChange, handleSubmit };
};

export default useInputs;
