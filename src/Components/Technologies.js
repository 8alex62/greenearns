import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import aiImage from '../Images/IA.jpg';
import iotImage from '../Images/IoT.png';
import appImage from '../Images/App.jpg';
import mapsImage from '../Images/maps.jpg';

const Technologies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <FaBrain />,
      title: "Intelligence Artificielle (IA)",
      text: "L'Intelligence Artificielle (IA) fait référence à la capacité des machines à apprendre, à raisonner et à prendre des décisions de manière autonome, imitant ainsi les capacités cognitives humaines. Dans Greenearns, l'IA est utilisée pour analyser et identifier automatiquement les déchets que les utilisateurs souhaitent recycler. Grâce à des algorithmes sophistiqués, l'IA peut reconnaître différents types de matériaux et diriger les utilisateurs vers le compartiment approprié de la poubelle intelligente. Cette technologie rend le processus de recyclage plus efficace et réduit les erreurs de tri, ce qui est essentiel pour un recyclage réussi.",
      image: aiImage,
    },
    {
      icon: <FaNetworkWired />,
      title: "Internet des Objets (IoT)",
      text: "L'Internet des Objets (IoT) désigne l'interconnexion de dispositifs physiques intégrant des capteurs, des logiciels et d'autres technologies pour échanger des données avec d'autres appareils et systèmes via Internet. Dans le cadre de Greenearns, l'IoT est utilisé pour équiper les poubelles de capteurs intelligents qui peuvent détecter l'ouverture des compartiments et communiquer avec l'application mobile. Ces poubelles intelligentes permettent d'automatiser et de simplifier le processus de recyclage en s'assurant que chaque type de déchet est placé dans le bon compartiment. Cette connectivité améliore la gestion des déchets et encourage une participation plus active des utilisateurs au recyclage.",
      image: iotImage,
    },
    {
      icon: <FaMobileAlt />,
      title: "Application Mobile",
      text: "L'application mobile Greenearns est une plateforme conviviale qui permet aux utilisateurs de scanner un symbole présent sur les produits pour les identifier et savoir dans quel compartiment les recycler. Cette fonctionnalité aide les utilisateurs à trier leurs déchets correctement et à éviter les erreurs de recyclage. En outre, l'application offre un système de récompenses où les utilisateurs peuvent gagner des points pour chaque produit correctement recyclé. Ces points peuvent ensuite être échangés contre des coupons de réduction pour l'achat de nouveaux produits. Cette gamification du recyclage motive les utilisateurs à participer activement et régulièrement au processus de recyclage, contribuant ainsi à la protection de l'environnement.",
      image: appImage,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation des Poubelles",
      text: "En plus de ses fonctionnalités de tri et de récompense, l'application mobile Greenearns permet également aux utilisateurs de localiser les poubelles intelligentes les plus proches et de fournir l'itinéraire le plus rapide pour les atteindre. Cette fonctionnalité est particulièrement utile lorsque les utilisateurs partent faire leurs courses, car ils peuvent en profiter pour jeter leurs déchets et utiliser les coupons de réduction gagnés. Cela rend le recyclage plus pratique et intégré dans la routine quotidienne des utilisateurs.",
      image: mapsImage,
    },
  ];

  return (
    <Container>
      {sections.map((section, index) => (
        <Section key={index} reverse={index % 2 !== 0}>
          <TextBlock
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <SubTitle>
              <Icon>{section.icon}</Icon>
              {section.title}
            </SubTitle>
            <Paragraph>&emsp;{section.text}</Paragraph>
          </TextBlock>
          <ImageContainer
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Image src={section.image} alt={section.title} />
          </ImageContainer>
        </Section>
      ))}
    </Container>
  );
};

export default Technologies;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
`;

const Section = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 60px 0;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 30px 0;
  }
`;

const ImageContainer = styled(motion.div)`
  max-width: 30%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 20px 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextBlock = styled(motion.div)`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 30%;
  text-align: justify;
  color: #000;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 20px 0;
  }
`;

const SubTitle = styled.h3`
  text-align: left;
  color: #000;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  margin: 20px 0 0 0;
  line-height: 1.8;
  text-indent: 2em;
`;
