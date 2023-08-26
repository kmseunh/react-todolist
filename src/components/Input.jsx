import { useState } from 'react';

import { styled } from 'styled-components';
import Button from './Button';

const StyledInput = styled.input`
    width: 50rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    margin-right: 10px;
`;

const Input = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
            };
            onAddTodo(newTodo);
            setInputValue('');
        } else {
            alert('Todo를 입력해주세요!!');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledInput
                value={inputValue}
                placeholder='Enter your Todo...'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={handleClick}>Add</Button>
        </div>
    );
};

export default Input;
