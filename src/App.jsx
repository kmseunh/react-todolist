import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContainer = styled.div`
    display: grid;
    grid-template-rows: auto 13fr 1fr;
`;

const App = () => {
    return (
        <>
            <AppContainer>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </AppContainer>
        </>
    );
};

export default App;
