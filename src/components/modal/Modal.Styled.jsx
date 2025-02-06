 import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  width: 300px;
  background-color: white; 
  padding: 20px;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  text-align: center;
`;

export const CloseButton = styled.button`
  background-color:rgb(49, 35, 203); 
  width: 150px;
  color: rgb(247, 251, 251);
  border: none; 
  border-radius: 55px;
  padding: 10px 20px;
  cursor: pointer; 
  margin-top: 10px; 
  &:hover,
    &:focus {
        color:rgb(156, 243, 243);
`;