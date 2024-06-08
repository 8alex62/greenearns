import React from "react";
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
            <FooterLink href="#">Histoire</FooterLink>
            <FooterLink href="#">Produits</FooterLink>
            <FooterLink href="#">Technologies</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
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
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
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
            <FooterLink href="#">
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
    </Box>
  );
};

export default Footer;




//CSS

 const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: absolute;
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


