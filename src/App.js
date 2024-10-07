import { useEffect, useState } from "react";
import styled from "styled-components";
import TaskForm from "./components/TakForm";
import TaskItem from "./components/TaskItems";
// import TaskItem from "./components/TaskItems";;

// Styled Components
const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  text-align: center;
`;
const StyledTh = styled.th`
  background-color: #f3f4f6;
  padding: 12px;
  border: 1px solid #e5e7eb;
  text-transform: uppercase;
  font-weight: bold;
  color: #4b5563;
`;

const FilterButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${({ active }) => (active ? '#3b82f6' : '#e5e7eb')};
  color: ${({ active }) => (active ? '#ffffff' : '#333')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#2563eb' : '#d1d5db')};
  }
`;
const NoData = styled.div`
  font-size: 1rem;
  color: #999;
  text-align: center;
  margin-top: 2rem;
`;

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        return [];
      }
    }
    return [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('task', tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: Date.now(), completed: false }];
    setTasks(newTasks);
    console.log('newTasks', newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (id, updatedTask) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task);
    setTasks(newTasks);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <Container>
      <Title>Task Manager</Title>
      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
        setEditingTask={setEditingTask}
      />
      <div className="mb-4">
        <FilterButton
          onClick={() => setFilter('all')}
          active={filter === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => setFilter('completed')}
          active={filter === 'completed'}
        >
          Completed
        </FilterButton>
        <FilterButton
          onClick={() => setFilter('pending')}
          active={filter === 'pending'}
        >
          Pending
        </FilterButton>
      </div>

      {filteredTasks.length === 0 ? (
        <NoData>No data available</NoData>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>Title</StyledTh>
              <StyledTh>Description</StyledTh>
              <StyledTh>Actions</StyledTh>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            ))}
          </tbody>
        </StyledTable>
      )}
    </Container>
  );
};

export default App;
