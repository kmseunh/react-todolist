import Todo from './Todo.jsx';

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} onDelete={onDeleteTodo} />
                );
            })}
        </div>
    );
};

export default TodoList;
