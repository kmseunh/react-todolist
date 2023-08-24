import { styled } from 'styled-components';

const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor || '#007bff'};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.hoverColor || '#0056b3'};
    }
`;

const Button = ({ onClick, backgroundColor, hoverColor, children }) => {
    return (
        <StyledButton
            onClick={onClick}
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
