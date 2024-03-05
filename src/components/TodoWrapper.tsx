import { ReactNode } from 'react';
import styled from '@emotion/styled';

const TodoTemplateBlock = styled.div`
  width: 512px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TodoWrapper = ({ children }: { children: ReactNode }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoWrapper;
