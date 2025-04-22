const generateIDPlus = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

// const taskExample = [{
//     id: generateIDPlus(),
//     name: "Advanced JavaScript Exercise",
//     completed: false,
//     createdAt: new Date().toISOString(),
//   }];

const tasks = [];

// console.log(taskExample);

const addTask = function (taskName) {
  if (taskName == "") {
    return "The name is empty, please provide it";
  } else {
    tasks.push({
      id: generateIDPlus(),
      name: taskName,
      completed: false,
      createdAt: new Date().toISOString(),
    });
  }
};

const removeTask = function (taskId) {
  // findIndex returns the index (number 0-1)
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return "The task doesn't exist";
  }

  tasks.splice(index, 1);
  return "Task succesfully removed";
};

const toggleTaskStatus = function (taskId) {
  // Find returns the element (object)
  const task = tasks.find((task) => task.id === taskId);
  if (task) task.completed = !task.completed;
  return task.completed;
};

const filterTasks = function (taskId) {};

const searchTasks = function (taskId) {};
