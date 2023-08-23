import { styled } from 'styled-components';

const HeaderContainer = styled.header`
    text-align: center;
    font-size: xx-large;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>ToDo List</h1>
        </HeaderContainer>
    );
};

export default Header;
