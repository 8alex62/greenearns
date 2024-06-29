import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Form from './Components/Form';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Bins from './Components/Bins';
import Maps from './Components/Maps';
import AppDownload from './Components/AppDownload';
import Footer from './Components/Footer';
import styled from 'styled-components';
import Compte from './Components/Compte';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContainer>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compte" element={<Compte setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/login" element={<Form setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<Home />} />
            <Route path="/products" element={<Home />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/bins" element={<Bins />} />
            <Route path="/map" element={<Maps />} />
            <Route path="/app" element={<AppDownload />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;
