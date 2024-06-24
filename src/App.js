import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Form  from './Components/Form';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Bins from './Components/Bins';
import Maps from './Components/Maps';
import AppDownload from './Components/AppDownload';
import Footer from './Components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <AppContainer>
        <NavBar/>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<Home />} /> {/* Remplacez <Home /> par <History /> quand History est défini */}
            <Route path="/products" element={<Home />} /> {/* Remplacez <Home /> par <Products /> quand Products est défini */}
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
