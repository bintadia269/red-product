import React from 'react';
import styled from 'styled-components';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Container = styled.div`
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

   
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

   @media (max-width: 667px) {
    text-align: center;
    margin-bottom: 1rem;
    
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;

   @media (max-width: 667px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;

  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #888;

   @media (max-width: 667px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;

  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  
    & > * {
      margin: 0 0.5rem; 
  }

  @media (max-width: 667px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Search = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 200px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  
  @media (max-width: 667px) {
    width: 100%;
  }
  
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #2563eb;
  }
`;

const Header = () => {
  return (
    <Container>
      <LeftContent>
        <Title>Bienvenue sur RED Product</Title>
        <Subtitle>Lorem ipsum dolor sit amet consectetur</Subtitle>
      </LeftContent>
      <RightContent>
        <Search placeholder="Recherche" />
        <IconButton aria-label="Notifications">
          <FaBell size={18} />
        </IconButton>
        <IconButton aria-label="Profil">
          <FaUserCircle size={22} />
        </IconButton>
      </RightContent>
    </Container>
  );
};

export default Header;
