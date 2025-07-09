import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Container = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
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

function Register() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifie si les termes sont acceptés
    if (!termsAccepted) {
      alert('Veuillez accepter les termes.');
      return;
    }

    try {
      const response = await fetch('https://red-product-backend-zim0.onrender.com/api/signUp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nom,
          email: email,
          password: motDePasse,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Inscription réussie !');
        console.log(data);
        // Rediriger vers la page de connexion ou une autre page
        window.location.href = '/'; 
      } else {
        alert('Erreur : ' + data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Erreur réseau : ' + error.message);
    }
  };

  return (
    <Container>
      <Title>Inscrivez-vous en tant que Admin</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />

        <CheckboxContainer>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms" style={{ marginLeft: '0.5rem' }}>
            Accepter les termes et la politique
          </label>
        </CheckboxContainer>
        <Button type="submit">S'inscrire</Button>
      </form>
      <Link>
        Vous avez déjà un compte ? <a href="#">Se connecter</a>
      </Link>
    </Container>
  );
}

export default Register;
