import React from 'react';
import AddTask from './components/AddTasks';
import TaskList from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';

const TaskApp = () => {
    return (
        <TasksProvider>
            <div className='flex items-center justify-center h-screen bg-gray-100'>
                <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
                    <h1 className='text-2xl font-bold mb-4'>
                        Day off in Kyoto
                    </h1>
                    <AddTask />
                    <TaskList />
                </div>
            </div>
        </TasksProvider>
    );
};

export default TaskApp;
