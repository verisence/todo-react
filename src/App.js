import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 9999 + 1);
    // console.log(id);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task

  const deleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder

  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header title='Task Tracker'></Header>
      <AddTask onAdd={addTask}></AddTask>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "No Tasks At The Moment"
      )}
    </div>
  );
};

export default App;
