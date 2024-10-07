import styled from 'styled-components';
import { CheckCircle, Edit2, Trash2 } from 'lucide-react';
import React from 'react';

const StyledTd = styled.td`
  padding: 12px;
  ${'' /* border: 1px solid #e5e7eb; */}
  background-color: ${({ completed }) => (completed ? '#d1fae5' : '#fff')};
  color: #374151;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

// TaskItem Component
const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => (
  <tr>
    <StyledTd>{task.title}</StyledTd>
    <StyledTd>{task.description}</StyledTd>
    <StyledTd>
      <ActionButtons>
        <ActionButton
          onClick={() => editTask(task)}
          bgColor="#e0f2fe"
          textColor="#0284c7"
          hoverColor="#bae6fd"
        >
          <Edit2 size={18} />
        </ActionButton>
        <ActionButton
          onClick={() => deleteTask(task.id)}
          bgColor="#fee2e2"
          textColor="#dc2626"
          hoverColor="#fecaca"
        >
          <Trash2 size={18} />
        </ActionButton>
        <ActionButton
          onClick={() => toggleComplete(task.id)}
          bgColor={task.completed ? "#d1fae5" : "#f3f4f6"}
          textColor={task.completed ? "#10b981" : "#000000"}
          hoverColor={task.completed ? "#a7f3d0" : "#d1d5db"}
        >
          <CheckCircle size={18} />
        </ActionButton>
      </ActionButtons>
    </StyledTd>
  </tr>
);
export default TaskItem