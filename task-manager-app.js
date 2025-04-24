const generateIDPlus = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

const taskExample = [
  {
    id: generateIDPlus(),
    name: "Advanced JavaScript Exercise",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: generateIDPlus(),
    name: "Basic C-Sharp Console App",
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

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

const listTasks = function () {
  if (tasks.length === 0) {
    return "No tasks available";
  }
  return tasks
    .map(
      (task) =>
        `${task.completed ? "Completed" : "Active"} | ID: ${task.id}, Name: ${
          task.name
        } | Completed: ${task.completed} | CreatedAt: ${task.createdAt}`
    )
    .join("\n");
};

const filterTasksByCompletion = function (status) {
  if (status === undefined) {
    return listTasks();
  }
  return tasks.filter((task) => task.completed === status);
};

const searchTasks = function (query) {
  const task = tasks.filter((filter) =>
    JSON.stringify(filter).toLowerCase().includes(query.toLowerCase())
  );

  if (task.length === 0) {
    return "The contact was not found";
  }

  return task;
};

console.log(searchTasks("Ad"));
