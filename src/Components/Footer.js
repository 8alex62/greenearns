import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faRecycle, faMicrochip, faDumpster, faMapMarkerAlt, faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Mention from "./Mention";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GreenEarns : La méthode gagnante du recyclage
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>A propos de nous</Heading>
            <FooterLink to="/history">
              <FontAwesomeIcon icon={faBookOpen} />
              Histoire
            </FooterLink>
            <FooterLink to="/products">
              <FontAwesomeIcon icon={faRecycle} />
              Produits
            </FooterLink>
            <FooterLink to="/technologies">
              <FontAwesomeIcon icon={faMicrochip} />
              Technologies
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink to="/bins">
              <FontAwesomeIcon icon={faDumpster} />
              Nos Poubelles
            </FooterLink>
            <FooterLink to="/map">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Carte
            </FooterLink>
            <FooterLink to="/app">
              <FontAwesomeIcon icon={faHome} />
              Notre Application
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterAnchor href="mailto:contact@greenearns.com">
              <FontAwesomeIcon icon={faEnvelope} />
              contact@greenearns.com
            </FooterAnchor>
            <FooterAnchor href="tel:0428292575">
              <FontAwesomeIcon icon={faPhone} />
              04.28.29.25.75
            </FooterAnchor>
            <FooterAddress>
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
              29 Avenue Leclerc, <br />
              69007 Lyon, France
            </FooterAddress>
          </Column>
          <Column>
            <Heading>Réseaux Sociaux</Heading>
            <FooterAnchor href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
              Facebook
            </FooterAnchor>
            <FooterAnchor href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </FooterAnchor>
            <FooterAnchor href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </FooterAnchor>
            <FooterAnchor href="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
              Youtube
            </FooterAnchor>
            <FooterAnchor href="https://www.tiktok.com">
              <FontAwesomeIcon icon={faTiktok} />
              TikTok
            </FooterAnchor>
          </Column>
        </Row>
      </Container>
      <Mention />
    </Box>
  );
};

export default Footer;

const Box = styled.div`
  padding: 80px 60px;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1800px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  max-width: 220px;
  flex: 1;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }

  svg {
    margin-right: 10px;
  }
`;

const FooterAnchor = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }

  svg {
    margin-right: 10px;
  }
`;

const FooterAddress = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
`;
