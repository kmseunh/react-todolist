import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../contexts/TasksContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    return (
        <div className='my-4'>
            <input
                className='border border-gray-300 p-2 mr-2'
                placeholder='Add task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className='bg-blue-500 text-white p-2 rounded'
                onClick={() => {
                    setText('');
                    dispatch({
                        type: 'added',
                        id: nextId++,
                        text: text,
                    });
                }}
            >
                Add
            </button>
        </div>
    );
}

let nextId = 3;
