import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'; 

const Container = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
`;

const Button = styled.button`
  width: 100%;
  background-color: #3d3d3d;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledLink = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #e3c029;

  a {
    color: #e3c029;
    text-decoration: none;
    font-weight: bold;
  }
`;

function ForgotPassword() {
  return (
    <Container>
      <Title>Mot de passe oublié ?</Title>
      <Text>
        Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions
        pour réinitialiser votre mot de passe.
      </Text>
      <Input type="email" placeholder="Votre e-mail" />
      <Button>Envoyer</Button>
      
      <StyledLink>
        <RouterLink to="/">Revenir à la connexion</RouterLink>
      </StyledLink>
    </Container>
  );
}

export default ForgotPassword;
