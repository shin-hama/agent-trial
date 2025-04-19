import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const defaultTasks = ['Create a new React app', 'Install Tailwind CSS'];

function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState<string[]>(defaultTasks);

  const addTask = () => {
    if (value) {
      setTasks([...tasks, value]);
      setValue('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 space-y-4">
      <div className="flex items-center justify-center space-x-2 w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <Input
          placeholder="Type here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="default" onClick={addTask}>
          Add
        </Button>
      </div>
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-bold">Tasks</h2>
        <ul className="list-none pl-0">
          {tasks.map((task, index) => (
            <li key={index} className="mt-2 flex items-center justify-between">
              <span>{task}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(index)}
                className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-100"
              >
                <Trash2 size={16} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
