import React, { createContext, useState } from 'react';

// Create a context
export const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
  const [taskId, setTaskId] = useState(null);

  return (
    <TaskContext.Provider value={{ taskId, setTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};
