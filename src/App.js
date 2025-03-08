import React from 'react';
import { ListProvider } from './context/ListContext';
import ListCreation from './components/ListCreation';

const App = () => {
  return (
    <ListProvider>
      <ListCreation />
    </ListProvider>
  );
};

export default App;
