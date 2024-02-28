/* eslint-disable no-param-reassign */
import { useTodoDispatch } from '@/components/TodoProvider';
import { FormEvent, ChangeEvent, RefObject } from 'react';

const useInputs = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  const dispatch = useTodoDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = e.target.value;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current;

    if (inputValue) {
      dispatch({
        type: 'CREATE',
        todo: {
          id: Date.now(),
          text: inputValue.value,
          done: false,
        },
      });

      inputRef.current.value = '';
    }
  };

  return { onChange, onSubmit };
};

export default useInputs;
