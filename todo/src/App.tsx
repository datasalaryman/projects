import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1/3 h-2/3 min-h-fit border-1 p-3.5 gap-3 rounded-xl"> 
        <h1 className="text-2xl text-center pb-8">To do list</h1>
        <div className="rounded-full border-1 border-dashed w-full p-4">Create a new task</div> 
      </div>
    </div>
  )
}

