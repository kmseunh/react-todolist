import { useState } from 'react';
import { styled } from 'styled-components';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const HomeContainer = styled.div`
    background-color: #f6f6f6;
    width: 110vh;
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

const Home = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <HomeContainer>
                <h1>Todo List</h1>
                <Input onAddTodo={addTodo} />
                <div>
                    <TodoList todos={todos} onDeleteTodo={deleteTodo} />
                </div>
            </HomeContainer>
        </div>
    );
};

export default Home;
