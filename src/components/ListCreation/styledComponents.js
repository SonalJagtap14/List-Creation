import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  text-align: center;
  margin: 10px 0;
  font-size: 14px;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListContainer = styled.div`
  width: 240px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
`;

export const ListTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItems = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const CreationActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`;

export const CancelButton = styled(Button)`
  background-color: #6b7280;
  
  &:hover {
    background-color: #4b5563;
  }
`;

// Styles for ListItem component
export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.h3`
  font-size: 14px;
  margin: 0 0 4px 0;
  font-weight: 500;
`;

export const ItemSpecies = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0;
  font-style: italic;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #3b82f6;
  
  &:hover {
    color: #2563eb;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;
