import styled from '@emotion/styled';
import { useTodoDispatch, Todo } from '@/components/TodoProvider';

const Item = styled.li`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div<{ done: boolean }>`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 33px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    `
      border: 1px solid #38d9a9;
      color: #38d9a9;
      &::after{
        content:'✔';
        font-size: 25px;
        width: 30px;
        height: 30px;
        text-align: center;
        position: absolute;
        left: 0;
        top:0;
      }
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  margin-right: 20px;
  ${(props) =>
    props.done &&
    `
      color: #ced4da;
    `}
`;

const RemoveButton = styled.button`
  display: flex;
  width: 60px;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: #ff9900;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #ff0000;
    border: none;
    outline: none;
  }
`;

const TodoItem = ({ id, done, text }: Todo) => {
  const dispatch = useTodoDispatch();

  const handleToggle = () => {
    dispatch({ type: 'CHECK', id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE', id });
  };

  return (
    <Item>
      <CheckCircle
        role="checkbox"
        aria-checked="false"
        done={done}
        onClick={handleToggle}
      >
        {done}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <RemoveButton type="button" onClick={handleDelete}>
        삭제
      </RemoveButton>
    </Item>
  );
};

export default TodoItem;
