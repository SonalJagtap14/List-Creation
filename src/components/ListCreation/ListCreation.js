import React, { useEffect, useState } from 'react';
import { fetchLists } from '../../services/apiService';
import { useListContext } from '../../context/ListContext';
import { apiStatusConstants } from '../../constants';
import ListItem from '../ListItem';
import Loader from '../common/Loader';
import ErrorView from '../common/ErrorView';
import {
  PageContainer,
  Header,
  ActionContainer,
  Button,
  ErrorMessage,
  ListsContainer,
  ListContainer,
  ListHeader,
  ListTitle,
  CheckboxContainer,
  ListItems,
  CreationActionsContainer,
  CancelButton
} from './styledComponents';

const ListCreation = () => {
  const {
    listItems,
    setListItems,
    getUniqueListNumbers,
    getItemsByListNumber,
    selectedLists,
    toggleListSelection,
    startNewListCreation,
    isCreatingNewList,
    newList,
    cancelNewListCreation,
    updateLists,
    error
  } = useListContext();
  
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  
  const getListData = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    try {
      const response = await fetchLists();
      console.log('API response:', response);
      
      if (response && Array.isArray(response.lists)) {
        setListItems(response.lists);
        setApiStatus(apiStatusConstants.success);
      } else {
        console.error('Invalid API response format:', response);
        setApiStatus(apiStatusConstants.failure);
      }
    } catch (error) {
      console.error("API Error:", error);
      setApiStatus(apiStatusConstants.failure);
    }
  };
  
  useEffect(() => {
    getListData();
  }, []);
  
  const renderLoader = () => (
    <div className="loader-container">
      <Loader />
    </div>
  );
  
  const renderErrorView = () => (
    <ErrorView onRetry={getListData} />
  );
  
  const renderListCreationView = () => {
    // Ensure we have selected lists before proceeding
    if (!Array.isArray(selectedLists) || selectedLists.length !== 2) {
      return (
        <div>
          <ErrorMessage>Unable to create a new list. Please go back and select exactly 2 lists.</ErrorMessage>
          <Button onClick={cancelNewListCreation}>Go Back</Button>
        </div>
      );
    }

    // Sort selectedLists to ensure consistent ordering
    const sortedSelectedLists = [...selectedLists].sort();
    const leftListNumber = sortedSelectedLists[0];
    const rightListNumber = sortedSelectedLists[1];
    
    const leftListItems = getItemsByListNumber(leftListNumber);
    const rightListItems = getItemsByListNumber(rightListNumber);
    
    return (
      <>
        <Header>List Creation</Header>
        <ListsContainer>
          {/* Left List */}
          <ListContainer>
            <ListHeader>
              <ListTitle>List {leftListNumber}</ListTitle>
            </ListHeader>
            <ListItems>
              {Array.isArray(leftListItems) && leftListItems.map((item) => (
                <ListItem 
                  key={`left-${item.id}`}
                  item={item} 
                  position="left"
                />
              ))}
            </ListItems>
          </ListContainer>
          
          {/* New List */}
          <ListContainer>
            <ListHeader>
              <ListTitle>New List</ListTitle>
            </ListHeader>
            <ListItems>
              {Array.isArray(newList) && newList.map((item) => (
                <div key={`new-${item.id}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ListItem 
                    key={`new-left-${item.id}`}
                    item={item} 
                    listNumber={leftListNumber}
                    position="center-left"
                  />
                  <ListItem 
                    key={`new-right-${item.id}`}
                    item={item} 
                    listNumber={rightListNumber}
                    position="center-right"
                  />
                </div>
              ))}
            </ListItems>
          </ListContainer>
          
          {/* Right List */}
          <ListContainer>
            <ListHeader>
              <ListTitle>List {rightListNumber}</ListTitle>
            </ListHeader>
            <ListItems>
              {Array.isArray(rightListItems) && rightListItems.map((item) => (
                <ListItem 
                  key={`right-${item.id}`}
                  item={item} 
                  position="right"
                />
              ))}
            </ListItems>
          </ListContainer>
        </ListsContainer>
        
        <CreationActionsContainer>
          <CancelButton onClick={cancelNewListCreation}>Cancel</CancelButton>
          <Button onClick={updateLists}>Update</Button>
        </CreationActionsContainer>
      </>
    );
  };
  
  const renderLists = () => {
    if (isCreatingNewList) {
      return renderListCreationView();
    }
    
    const uniqueListNumbers = getUniqueListNumbers();
    
    return (
      <>
        <Header>List Creation</Header>
        <ActionContainer>
          <Button onClick={startNewListCreation}>Create a new list</Button>
        </ActionContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ListsContainer>
          {Array.isArray(uniqueListNumbers) && uniqueListNumbers.map((listNumber) => {
            const items = getItemsByListNumber(listNumber);
            
            return (
              <ListContainer key={`list-${listNumber}`}>
                <ListHeader>
                  <ListTitle>List {listNumber}</ListTitle>
                  <CheckboxContainer>
                    <input
                      type="checkbox"
                      checked={selectedLists.includes(listNumber)}
                      onChange={() => toggleListSelection(listNumber)}
                    />
                  </CheckboxContainer>
                </ListHeader>
                <ListItems>
                  {Array.isArray(items) && items.map((item) => (
                    <ListItem 
                      key={`item-${listNumber}-${item.id}`}
                      item={item} 
                      position="none"
                    />
                  ))}
                </ListItems>
              </ListContainer>
            );
          })}
          {(!Array.isArray(uniqueListNumbers) || uniqueListNumbers.length === 0) && (
            <div>No lists available</div>
          )}
        </ListsContainer>
      </>
    );
  };
  
  const renderComponent = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoader();
      case apiStatusConstants.failure:
        return renderErrorView();
      case apiStatusConstants.success:
        return renderLists();
      default:
        return renderLoader();
    }
  };
  
  return <PageContainer>{renderComponent()}</PageContainer>;
};

export default ListCreation;