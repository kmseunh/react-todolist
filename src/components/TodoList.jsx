import Todo from './Todo.jsx';

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodoList;
