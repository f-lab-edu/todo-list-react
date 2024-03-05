import { useContext } from 'react';
import styled from '@emotion/styled';
import { TodoStateContext } from '@/stores/TodoProvider';
import TodoItem from '@/components/TodoItem';

const TodoListWrapper = styled.ol`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useContext(TodoStateContext);
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
