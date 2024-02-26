import TodoProvider from '@/components/TodoProvider';
import TodoList from '@/components/TodoList';
import TodoCreate from '@/components/TodoCreate';
import GlobalStyles from '@/GlobalStyles';
import TodoHead from '@/components/TodoHead';
import TodoWrapper from '@/components/TodoWrapper';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TodoWrapper>
        <TodoProvider>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoProvider>
      </TodoWrapper>
    </>
  );
};

export default App;
