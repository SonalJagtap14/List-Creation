import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useListContext } from '../../context/ListContext';
import {
  ListItemContainer,
  ItemInfo,
  ItemName,
  ItemSpecies,
  ArrowButton
} from './styledComponents';

const ListItem = ({ item, listNumber, position }) => {
  const { moveItemToNewList, moveItemFromNewList } = useListContext();
  
  const handleMoveItem = () => {
    if (position === 'left' || position === 'right') {
      // Move from a list to new list
      moveItemToNewList(item);
    } else if (position === 'center-left' || position === 'center-right') {
      // Move from new list to an original list
      moveItemFromNewList(item, listNumber);
    }
  };

  return (
    <ListItemContainer>
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemSpecies>{item.description}</ItemSpecies>
      </ItemInfo>
      {position === 'left' && (
        <ArrowButton onClick={handleMoveItem} aria-label="Move right">
          <ArrowRight size={16} />
        </ArrowButton>
      )}
      {position === 'right' && (
        <ArrowButton onClick={handleMoveItem} aria-label="Move left">
          <ArrowLeft size={16} />
        </ArrowButton>
      )}
      {position === 'center-left' && (
        <ArrowButton onClick={handleMoveItem} aria-label="Move left">
          <ArrowLeft size={16} />
        </ArrowButton>
      )}
      {position === 'center-right' && (
        <ArrowButton onClick={handleMoveItem} aria-label="Move right">
          <ArrowRight size={16} />
        </ArrowButton>
      )}
    </ListItemContainer>
  );
};

export default ListItem;