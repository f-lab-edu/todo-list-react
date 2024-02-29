import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type { Todo };

interface TodoState {
  todos: Todo[];
  createTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const useTodoStore = create(
  persist<TodoState>(
    (set) => ({
      todos: [
        {
          id: Date.now(),
          text: '아침 산책',
          done: true,
        },
        {
          id: Date.now() + 1,
          text: '오늘의 뉴스 읽기',
          done: true,
        },
        { id: Date.now() + 3, text: '샌드위치 사 먹기', done: false },
        { id: Date.now() + 4, text: '리액트 공부하기', done: false },
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
