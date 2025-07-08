import React from 'react';
import styled from 'styled-components';
import { FaHotel, FaUserCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { BsListUl } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f7f7;
`;

const MySidebar = styled.aside`
  width: 240px;
  background: #232428;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
`;

const SidebarHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;
  padding-left: 2rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Principale = styled.h1`
  font-size: 1.25rem;
  font-weight: 100;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  padding-left: 2rem;
`;

const SidebarMenuItem = styled(NavLink)`
  padding: 0.9rem 2rem;
  background: transparent;
  color: #bdbdbd;
  border-left: 4px solid transparent;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;

  &.active {
    background: #36393d;
    color: #fff;
    border-left: 4px solid #ffd600;
    font-weight: 600;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 2rem 2rem 1.3rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #2d2f34;
  border-radius: 0 0 8px 8px;
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a084e8;
  font-size: 1.4rem;
  font-weight: bold;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 1rem;
`;

const UserStatus = styled.div`
  font-size: 0.85rem;
  color: #7bffb2;
`;

const Sidebar = () => {
  return (
    <Container>
      <MySidebar>
        <SidebarHeader>RED PRODUCT</SidebarHeader>
        <SidebarMenu>
          <Principale>Principal</Principale>
          <SidebarMenuItem to="/dashboard">
            <FaHotel /> Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem to="/hotels">
            <BsListUl /> Liste des hôtels
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter>
          <Avatar>
            <FaUserCircle />
          </Avatar>
          <UserInfo>
            <UserName>Binta Dia</UserName>
            <UserStatus>En ligne</UserStatus>
          </UserInfo>
        </SidebarFooter>
      </MySidebar>
    </Container>
  );
};

export default Sidebar;
