/* eslint-disable no-param-reassign */
import { FormEvent, RefObject } from 'react';
import generateUUID from '@/utils/UUIDGenerator';
import useTodoStore from '@/stores/todoStore';

const useInputs = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  const { createTodo } = useTodoStore();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current;

    if (inputValue) {
      createTodo({
        id: generateUUID(),
        text: inputValue.value,
        done: false,
      });

      inputRef.current.value = '';
    }
  };

  return { onSubmit };
};

export default useInputs;
