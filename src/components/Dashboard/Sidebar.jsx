import React from 'react';
import styled from 'styled-components';
import { FaHotel, FaTachometerAlt } from 'react-icons/fa';

const Container = styled.div`
  width: 250px;
  background: #2c2c2c;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  padding: 1.5rem;
`;

const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const NavItem = styled.li`
  padding: 1rem;
  background: ${(props) => (props.active ? '#444' : 'transparent')};
  margin-bottom: 0.5rem;
  border-left: 5px solid ${(props) => (props.active ? '#fff' : 'transparent')};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #444;
  }
`;

const Bottom = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #444;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <Logo>RED PRODUCT</Logo>
        <Nav>
          <NavItem active>
            <FaTachometerAlt />
            Dashboard
          </NavItem>
          <NavItem>
            <FaHotel />
            Liste des hôtels
          </NavItem>
        </Nav>
      </Top>
      <Bottom>
        <Avatar src="/avatar.jpg" alt="profil" />
        <div>
          <div>Mouhamet Badiane</div>
          <span style={{ color: '#00c897', fontSize: '0.8rem' }}>● en ligne</span>
        </div>
      </Bottom>
    </Container>
  );
};

export default Sidebar;
