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
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoWrapper>
    </>
  );
};

export default App;
