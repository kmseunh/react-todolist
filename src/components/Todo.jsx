import { styled } from 'styled-components';
import Button from './Button';

const StyledTodo = styled.div`
    width: 93.4vh;
    padding-top: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid #cccccc;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Todo = ({ todo, onDelete }) => {
    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <div>
            <StyledTodo>
                {todo.text}
                <Button
                    backgroundColor='#FF5733'
                    hoverColor='#FF814E'
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </StyledTodo>
        </div>
    );
};
export default Todo;
