import AddTask from './components/AddTasks.jsx';
import TaskList from './components/TaskList.jsx';
import { TasksProvider } from './contexts/TasksContext.jsx';

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
