import { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from '../contexts/TasksContext';

export default function TaskList() {
    const tasks = useContext(TasksContext);
    return (
        <div className='mt-4'>
            {tasks.map((task) => (
                <div className='mb-2' key={task.id}>
                    <Task task={task} />
                </div>
            ))}
        </div>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    className='mr-2'
                    value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
                />
                <button
                    className='bg-green-500 text-white p-1 rounded'
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button
                    className='ml-2 p-1 bg-blue-500 text-white rounded'
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </>
        );
    }
    return (
        <label className='flex items-center'>
            <input
                className='form-checkbox h-5 w-5 text-blue-500 mr-2'
                type='checkbox'
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked,
                        },
                    });
                }}
            />
            {taskContent}
            <button
                className='ml-2 p-1 bg-red-500 text-white rounded'
                onClick={() => {
                    dispatch({
                        type: 'deleted',
                        id: task.id,
                    });
                }}
            >
                Delete
            </button>
        </label>
    );
}
