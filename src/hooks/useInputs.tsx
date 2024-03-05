/* eslint-disable no-param-reassign */
import { FormEvent, RefObject } from 'react';
import { useTodoDispatch } from '@/stores/TodoProvider';
import generateUUID from '@/utils/UUIDGenerator';

const useInputs = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  const dispatch = useTodoDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current;

    if (inputValue) {
      dispatch({
        type: 'CREATE',
        todo: {
          id: generateUUID(),
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
