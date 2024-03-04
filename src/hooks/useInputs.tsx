/* eslint-disable no-param-reassign */
import { useTodoDispatch } from '@/components/TodoProvider';
import { FormEvent, RefObject } from 'react';

const useInputs = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  const dispatch = useTodoDispatch();

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

  return { onSubmit };
};

export default useInputs;
