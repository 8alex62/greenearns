import React from "react";
import Mention from "./Mention";
import styled from 'styled-components';
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GreenEarns : La méthode gagnante du recyclage
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>A propos de nous</Heading>
            <FooterLink href="#">
              <i className="fa-solid fa-book-open">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                Histoire
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa-solid fa-recycle">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                Produits
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa-solid fa-microchip">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                Technologies
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              <i className="fa-solid fa-dumpster">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                Nos Poubelles
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa-solid fa-map-location-dot">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                Carte
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i className="fab fa-google-play">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                 Notre Application
                </span>
              </i>
              </FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">
            <i className="fa-solid fa-envelope">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                  contact@greenearns.com
                </span>
            </i>
            </FooterLink>
            <FooterLink href="#">  <i className="fa-solid fa-phone">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto", fontSize: "18px"}}>
                04.28.29.25.75
                </span>
            </i></FooterLink>
            <FooterLink href="#">
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <i className="fa-solid fa-house" style={{ marginRight: "10px" }}></i>
                <span style={{ fontFamily: "Roboto", fontSize: "18px" }}>
                  29 Avenue Leclerc, <br />
                  69007 Lyon, France
                </span>
              </div>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Reseaux Sociaux</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto"}}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto"}}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-x-twitter">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto"}}>
                Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://youtu.be/MIbHGAFEWts?si=vg-Ni9R7NVlUp4yD">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto"}}>
                  Youtube
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-tiktok">
                <span style={{ marginLeft: "10px" , fontFamily: "Roboto"}}>
                  TikTok
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Mention/>
    </Box>
  );
};

export default Footer;




//CSS

 const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

 const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
`;

 const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  max-width: 220px;
  
  @media (max-width: 1000px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
`;

 const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap:20%; 
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

 const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

 const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  white-space: nowrap;
`;


