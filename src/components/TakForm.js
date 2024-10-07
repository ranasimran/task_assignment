import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.form`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: bold;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  outline: none;
  box-shadow: 0 0 0 2px transparent;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px #3182ce;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  outline: none;
  box-shadow: 0 0 0 2px transparent;
  transition: box-shadow 0.2s;
  resize: none;
  height: 8rem;

  &:focus {
    box-shadow: 0 0 0 2px #3182ce;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  color: white;
  background-color: ${({ isCancel }) => (isCancel ? '#a0aec0' : '#4299e1')};
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isCancel }) => (isCancel ? '#718096' : '#3182ce')};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.75rem;
  margin-bottom: 1rem;
`;

const TaskForm = ({ addTask, editingTask, updateTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const validate = () => {
    let formErrors = {};
    if (!title.trim()) {
      formErrors.title = "Required";
    }
    if (!description.trim()) {
      formErrors.description = "Required";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, { title, description });
      setEditingTask(null);
    } else {
      addTask({ title, description });
    }

    setTitle('');
    setDescription('');
    setErrors({});
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Task Title</Label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        {errors.title && <ErrorText>{errors.title}</ErrorText>}
      </div>
      <div>
        <Label htmlFor="description">Task Description</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        {errors.description && <ErrorText>{errors.description}</ErrorText>}
      </div>
      <ButtonGroup>
        <Button type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
        {editingTask && (
          <Button type="button" onClick={() => setEditingTask(null)} isCancel>
            Cancel
          </Button>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};

export default TaskForm;
