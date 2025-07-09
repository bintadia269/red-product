import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import { FaFileAlt, FaComment, FaUsers, FaEnvelope, FaHotel,FaBuilding,} from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #f4f4f4;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;



const HeaderWrapper = styled.div`
  flex-shrink: 0;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: start;
`;

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Main>
          <Grid>
            <StatCard icon={FaFileAlt} count="125" label="Formulaires" color="#7b5cff" />
            <StatCard icon={FaComment} count="40" label="Messages" color="#00c897" />
            <StatCard icon={FaUsers} count="600" label="Utilisateurs" color="#f8c20c" />
            <StatCard icon={FaEnvelope} count="25" label="E-mails" color="#f03d3d" />
            <StatCard icon={FaHotel} count="40" label="Hôtels" color="#b160ff" />
            <StatCard icon={FaBuilding} count="02" label="Entités" color="#0072ec" />
          </Grid>
        </Main>
      </Content>
    </Container>
  );
};

export default Dashboard;
