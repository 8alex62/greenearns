import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar/NavBar";
import styled
 from "styled-components";
function App() {
  return (
    <AppContainer>
      <Navbar/>
        <MainContent>
          <Form/>
        </MainContent>
      <Footer/>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;