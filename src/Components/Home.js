import React from 'react';
import styled from 'styled-components'; 

const Home = () => {
  return (
    <MainDiv>
      <ContentWrapper>
        <HeroSection>
          <h1>Bienvenue chez GreenEarns</h1>
          <p>
            Dans un monde de plus en plus conscient des enjeux environnementaux, la gestion des déchets occupe une place centrale dans la lutte pour un avenir durable. GreenEarns se présente comme une réponse innovante et ambitieuse à ce défi global.
          </p>
          <CTAButton href="#features">En savoir plus</CTAButton>
        </HeroSection>
        <Section id="about">
          <h2>À propos de GreenEarns</h2>
          <p>
            GreenEarns propose une approche révolutionnaire pour sensibiliser les citoyens au tri des déchets et optimiser les pratiques de recyclage. Le projet GreenEarns repose sur l'idée que la technologie peut jouer un rôle clé dans la transformation des comportements et des systèmes de gestion des déchets.
          </p>
        </Section>
        <Section id="features">
          <h2>Fonctionnalités</h2>
          <ul>
            <li>Sensibilisation au tri des déchets</li>
            <li>Optimisation des pratiques de recyclage</li>
            <li>Participation citoyenne inclusive</li>
          </ul>
        </Section>
        <Section id="testimonials">
          <h2>Témoignages</h2>
          <Testimonial>
            <p>"GreenEarns a transformé notre approche du recyclage et a rendu notre communauté plus consciente de l'importance du tri des déchets." - Alice</p>
          </Testimonial>
          <Testimonial>
            <p>"Grâce à GreenEarns, nous avons pu réduire nos déchets de manière significative tout en sensibilisant nos enfants à l'importance de l'écologie." - Bob</p>
          </Testimonial>
        </Section>
        <Section id="contact">
          <h2>Contactez-nous</h2>
          <p>Pour plus d'informations, n'hésitez pas à nous <a href="mailto:contact@greenearns.com">contacter</a>.</p>
        </Section>
      </ContentWrapper>
    </MainDiv>
  );
};

export default Home;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  & > p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #555;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    color: #90c138;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroSection = styled.section`
  margin-bottom: 40px;

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
  margin-bottom: 40px;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1.2em;
      margin-bottom: 10px;
    }
  }
`;

const Testimonial = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    color: #555;
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
  margin-top: 20px;

  &:hover {
    background-color: #7da82b;
  }
`;
