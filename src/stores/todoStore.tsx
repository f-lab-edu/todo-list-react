import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import generateUUID from '@/utils/UUIDGenerator';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type { Todo };

interface TodoState {
  todos: Todo[];
  createTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const useTodoStore = create(
  persist<TodoState>(
    (set) => ({
      todos: [
        {
          id: generateUUID(),
          text: '아침 산책',
          done: true,
        },
        {
          id: generateUUID(),
          text: '오늘의 뉴스 읽기',
          done: true,
        },
        { id: generateUUID(), text: '샌드위치 사 먹기', done: false },
        { id: generateUUID(), text: '리액트 공부하기', done: false },
      ],

      createTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo,
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: 'todo-storage',
    },
  ),
);

export default useTodoStore;
