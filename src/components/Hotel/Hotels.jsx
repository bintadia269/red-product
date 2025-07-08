import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Dashboard/Sidebar';
import { useNavigate } from 'react-router-dom';

// Liste d'hôtels
const hotels = [
  {
    name: 'Hôtel Terrou-Bi',
    address: 'Boulevard Martin Luther King, Dakar 11100',
    price: '25 000 XOF par nuit',
    image:
      'https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/135/488/827/79506958_4K_S.jpg',
  },
  {
    name: 'King Fahd Palace',
    address: 'Rte des Almadies, Dakar',
    price: '20 000 XOF par nuit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYP6ntAwXhe1u9Rwac0t8pTDLw1L12N3kCqw&s',
  },
  {
    name: 'Radisson Blu Hotel',
    address: 'Rte de la Corniche O, Dakar 16868',
    price: '22 000 XOF par nuit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycoMqfPGe4yp1tR1_vfq6Cf-5Lob3S9rYKg&s',
  },
  {
    name: 'Pullman Dakar Teranga',
    address: 'Place de l’Indépendance, 10 Rue PL 29, Dakar',
    price: '30 000 XOF par nuit',
    image: 'https://www.ahstatic.com/photos/8276_ho_00_p_1024x768.jpg',
  },
  {
    name: 'Hôtel Lac Rose',
    address: 'Lac Rose, Dakar',
    price: '25 000 XOF par nuit',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/73/d5/30/photo0jpg.jpg?w=900&h=500&s=1',
  },
  {
    name: 'Hôtel Saly',
    address: 'Mbour, Sénégal',
    price: '20 000 XOF par nuit',
    image:
      'https://www.pressafrik.com/photo/art/default/2616213-3691421.jpg?v=1295023440',
  },
  {
    name: 'Palm Beach Resort & Spa',
    address: 'BP64 Saly 23003',
    price: '20 000 XOF par nuit',
    image:
      'https://www.palmbeach.sn/wp-content/uploads/2023/07/home-page-banner-reception.jpg',
  },
  {
    name: 'Pullman Dakar Teranga',
    address: 'Place de l’Indépendance, 10 Rue PL 29, Dakar',
    price: '30 000 XOF par nuit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxXJXK5z_XddVTEgo_FydAvcc61SJ8IjOaQ&s',
  },
];

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #f4f4f4;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
`;

const Header = styled.header`
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #232323;
`;

const SearchBar = styled.input`
  background: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  width: 220px;
  font-size: 1rem;
  margin-right: 1.5rem;
`;

const AddButton = styled.button`
  background: #fff;
  color: #232323;
  border: 1px solid #ececec;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 1.5rem;

  &:hover {
    background: #f7f7f7;
  }
`;

const Content = styled.section`
  padding: 2rem 2rem 0 2rem;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const HotelCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const HotelInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const HotelName = styled.div`
  font-size: 1.08rem;
  font-weight: 600;
  color: #232323;
`;

const HotelAddress = styled.div`
  font-size: 0.97rem;
  color: rgb(145, 49, 49);
`;

const HotelPrice = styled.div`
  font-size: 1rem;
  color: rgb(27, 26, 29);
  font-weight: 500;
  margin-top: 0.2rem;
`;

function Hotels() {
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar />

      <Main>
        <Header>
          <Title>Liste des hôtels</Title>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchBar placeholder="Rechercher..." />
            <AddButton onClick={() => navigate('/hotels/new')}>
              + Créer un nouvel hôtel
            </AddButton>
          </div>
        </Header>

        <Content>
          <h3
            style={{
              fontWeight: 500,
              color: '#232323',
              marginBottom: '1.2rem',
            }}
          >
            Hôtels{' '}
            <span style={{ color: '#bdbdbd', fontWeight: 400 }}>
              ({hotels.length})
            </span>
          </h3>
          <HotelsGrid>
            {hotels.map((hotel, idx) => (
              <HotelCard key={`${hotel.name}-${idx}`}>
                <HotelImage src={hotel.image} alt={`Photo de ${hotel.name}`} />
                <HotelInfo>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelAddress>{hotel.address}</HotelAddress>
                  <HotelPrice>{hotel.price}</HotelPrice>
                </HotelInfo>
              </HotelCard>
            ))}
          </HotelsGrid>
        </Content>
      </Main>
    </Container>
  );
}

export default Hotels;
