import React from 'react';
import styled from 'styled-components';

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

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
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

const Link = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #e3c029;

  a {
    color: #e3c029;
    text-decoration: none;
    font-weight: bold;
  }
`;

function Login() {
  return (
    <Container>
      <Title>Connectez-vous en tant que Admin</Title>
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Mot de passe" />
      <CheckboxContainer>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" style={{ marginLeft: '0.5rem' }}>Gardez-moi connecté</label>
      </CheckboxContainer>
      <Button>Se connecter</Button>
      <Link><a href="#">Mot de passe oublié?</a></Link>
      <Link>Vous n'avez pas de compte? <a href="#">S’inscrire</a></Link>
    </Container>
  );
}

export default Login;
