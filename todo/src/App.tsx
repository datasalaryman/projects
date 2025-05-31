import { useState } from 'react'
import { Plus } from 'lucide-react'
import '../index.css'

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  
  const handleAdd = (task:string) : void => {
    if (tasks.includes(task)) {
      throw Error("Task already in task list!");
    }

    setTasks(Array.prototype.concat(tasks, [task]));
  };

  const handleDelete = (task:string) : void => {
    if (!tasks.includes(task)) {
      throw Error("Task not in task list!");
    };

    setTasks(tasks.filter((item) => item != task));
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/3 h-2/3 flex flex-col min-h-fit border-1 px-6 py-6 rounded-xl"> 
        <h1 className="text-2xl text-center pb-8">To do list</h1>
        <div className="flex flex-col gap-3">
          <div className="rounded-full border-1 border-dashed hover:border-solid w-full p-4 flex flex-row justify-between">
            <p>Create a new task</p>
            <Plus />
          </div> 
        </div>
      </div>
    </div>
  )
}

