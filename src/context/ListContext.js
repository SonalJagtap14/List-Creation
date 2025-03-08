import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]); // Store all list items
  const [selectedLists, setSelectedLists] = useState([]);
  const [newList, setNewList] = useState([]);
  const [isCreatingNewList, setIsCreatingNewList] = useState(false);
  const [error, setError] = useState('');

  // Get unique list numbers from the list items
  const getUniqueListNumbers = () => {
    if (!Array.isArray(listItems)) return [];
    return [...new Set(listItems.map(item => item.list_number))];
  };

  // Group items by list number
  const getItemsByListNumber = (listNumber) => {
    if (!Array.isArray(listItems)) return [];
    return listItems.filter(item => item.list_number === listNumber);
  };

  const toggleListSelection = (listNumber) => {
    setSelectedLists((prev) => {
      if (prev.includes(listNumber)) {
        return prev.filter(num => num !== listNumber);
      } 
      
      if (prev.length < 2) {
        return [...prev, listNumber];
      }
      
      // If we already have 2 selected, replace the oldest one
      return [prev[1], listNumber];
    });
    setError('');
  };

  const startNewListCreation = () => {
    if (selectedLists.length !== 2) {
      setError('You should select exactly 2 lists to create a new list');
      return;
    }
    
    setIsCreatingNewList(true);
    setNewList([]);
    setError('');
  };

  const moveItemToNewList = (item) => {
    // Remove from original list by updating the listItems array
    setListItems(prev => prev.filter(listItem => listItem.id !== item.id));
    
    // Add to new list if not already there
    setNewList(prev => {
      const exists = prev.some(listItem => listItem.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const moveItemFromNewList = (item, toListNumber) => {
    // Remove from new list
    setNewList(prev => prev.filter(listItem => listItem.id !== item.id));
    
    // Add back to original list with the specified list number
    const updatedItem = { ...item, list_number: toListNumber };
    setListItems(prev => [...prev, updatedItem]);
  };

  const cancelNewListCreation = () => {
    // Return items in newList back to their original lists
    if (Array.isArray(newList) && newList.length > 0) {
      // For simplicity, we'll just refresh the data when cancel is clicked
    }
    
    setIsCreatingNewList(false);
    setSelectedLists([]);
    setNewList([]);
  };

  const updateLists = () => {
    // Create a new list number
    const maxListNumber = Math.max(...getUniqueListNumbers(), 0);
    const newListNumber = maxListNumber + 1;
    
    // Add all items from newList to listItems with the new list number
    const updatedItems = newList.map(item => ({
      ...item,
      list_number: newListNumber
    }));
    
    setListItems(prev => [...prev, ...updatedItems]);
    setIsCreatingNewList(false);
    setSelectedLists([]);
    setNewList([]);
  };

  return (
    <ListContext.Provider
      value={{
        listItems,
        setListItems,
        getUniqueListNumbers,
        getItemsByListNumber,
        selectedLists,
        toggleListSelection,
        startNewListCreation,
        isCreatingNewList,
        newList,
        moveItemToNewList,
        moveItemFromNewList,
        cancelNewListCreation,
        updateLists,
        error
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);