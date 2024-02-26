import styled from '@emotion/styled';

const TodoHeadWrapper = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    font-weight: bold;
  }
  padding: 32px;
  border-bottom: 1px solid #e9ecef;
`;

const TodoHead = () => {
  return (
    <TodoHeadWrapper>
      <h1>to-do List</h1>
    </TodoHeadWrapper>
  );
};

export default TodoHead;
