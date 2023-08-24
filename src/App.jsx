import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Home from './pages/Home';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const App = () => {
    return (
        <>
            <AppContainer>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </AppContainer>
        </>
    );
};

export default App;
