import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
} from 'react';
import generateUUID from '@/utils/UUIDGenerator';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type { Todo };

const initialState: Todo[] = [
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
];

type Action =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'CHECK'; id: string }
  | { type: 'DELETE'; id: string };

export const TodoStateContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<Dispatch<Action> | null>(null);

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'CHECK':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type`);
  }
};

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}

export default TodoProvider;
