import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <MainDiv>
      <HeroSection>
        <h1>Bienvenue chez GreenEarns</h1>
        <p>
          Dans un monde de plus en plus conscient des enjeux environnementaux, la gestion des déchets occupe une place centrale dans la lutte pour un avenir durable. GreenEarns se présente comme une réponse innovante et ambitieuse à ce défi global.
        </p>
        <CTAButton href="#features">En savoir plus</CTAButton>
      </HeroSection>
      <Section id="about">
        <Content>
          <Image src="path/to/your/image.jpg" alt="About" />
          <Text>
            <h2>À propos de GreenEarns</h2>
            <p>
              GreenEarns propose une approche révolutionnaire pour sensibiliser les citoyens au tri des déchets et optimiser les pratiques de recyclage. Le projet GreenEarns repose sur l'idée que la technologie peut jouer un rôle clé dans la transformation des comportements et des systèmes de gestion des déchets.
            </p>
          </Text>
        </Content>
      </Section>
      <Section id="features">
        <Content>
          <Text>
            <h2>Fonctionnalités</h2>
            <ul>
              <li>Sensibilisation au tri des déchets</li>
              <li>Optimisation des pratiques de recyclage</li>
              <li>Participation citoyenne inclusive</li>
            </ul>
          </Text>
          <Image src="path/to/your/image2.jpg" alt="Features" />
        </Content>
      </Section>
      <Section id="testimonials">
        <Content>
          <Image src="path/to/your/image3.jpg" alt="Testimonials" />
          <Text>
            <h2>Témoignages</h2>
            <Testimonial>
              <p>"GreenEarns a transformé notre approche du recyclage et a rendu notre communauté plus consciente de l'importance du tri des déchets." - Alice</p>
            </Testimonial>
            <Testimonial>
              <p>"Grâce à GreenEarns, nous avons pu réduire nos déchets de manière significative tout en sensibilisant nos enfants à l'importance de l'écologie." - Bob</p>
            </Testimonial>
          </Text>
        </Content>
      </Section>
      <Section id="contact">
        <Content>
          <Text>
            <h2>Contactez-nous</h2>
            <p>Pour plus d'informations, n'hésitez pas à nous <a href="mailto:contact@greenearns.com">contacter</a>.</p>
          </Text>
          <Image src="path/to/your/image4.jpg" alt="Contact" />
        </Content>
      </Section>
    </MainDiv>
  );
};

export default Home;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const HeroSection = styled.section`
  width: 100%;
  background-color: #f4f4f4;
  padding: 50px 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

const Section = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-color: #fff;
  animation: ${fadeIn} 1s ease-out;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  padding: 20px;
`;

const Testimonial = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #90c138;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7da82b;
  }
`;
