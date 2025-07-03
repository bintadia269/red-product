import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  padding: 1.2rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

const Icon = styled.div`
  background: ${(props) => props.color || '#ccc'};
  border-radius: 50%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Count = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const StatCard = ({ icon, count, label, color }) => {
  return (
    <Card>
      <Icon color={color}>
        <img src={icon} alt={label} width="20" height="20" />
      </Icon>
      <Info>
        <Count>{count}</Count>
        <Label>{label}</Label>
        <span style={{ fontSize: '0.75rem', color: '#aaa' }}>
          Je ne sais pas quoi mettre
        </span>
      </Info>
    </Card>
  );
};

export default StatCard;
