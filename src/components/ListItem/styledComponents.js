import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #0b69ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  
  &:hover {
    background-color: #0b60e0;
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
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ListContainer = styled.div`
  width: 240px;
  height: 350px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #f8fafc;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f1f5f9;
  border-bottom: 1px solid #e5e7eb;
`;

export const ListTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItems = styled.div`
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
`;

export const CreationActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const CancelButton = styled(Button)`
  background-color: #64748b;
  
  &:hover {
    background-color: #475569;
  }
`;

// Styles for ListItem component
export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f1f5f9;
  background-color: white;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.h3`
  font-size: 14px;
  margin: 0 0 4px 0;
  font-weight: 500;
  color: #0f172a;
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
  color: #0b69ff;
  
  &:hover {
    color: #0b60e0;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;