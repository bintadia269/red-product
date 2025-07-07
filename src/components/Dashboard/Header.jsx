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
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #888;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
