const generateIDPlus = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

// incrementCounter = (function () {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// })();

const tasks = [
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

// const tasks = [];

// console.log(taskExample);

const addTask = function (taskName) {
  if (typeof taskName !== "string" || taskName.trim() === "") {
    return "Invalid task name. Please provide a non-empty string.";
  }

  tasks.push({
    id: generateIDPlus(),
    name: taskName,
    completed: false,
    createdAt: new Date().toISOString(),
  });

  return "Task successfully created";
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

  if (!task) {
    return "The task doesn't exist";
  }
  task.completed = !task.completed;
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
  if (typeof status !== "boolean") {
    return "Invalid status. Please provide true or false";
  }

  const filteredTasks = tasks.filter((task) => task.completed === status);

  if (filteredTasks.length === 0) {
    return `No ${status ? "completed" : "active"} task found.`;
  }

  return filteredTasks;
};

const searchTasks = function (query) {
  const tasksFound = tasks.filter((task) =>
    task.name.toLowerCase().includes(query.toLowerCase())
  );

  if (tasksFound.length === 0) {
    return "The task was not found";
  }

  return tasksFound;
};

const updateTask = function (id, newName) {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return "The task doesn't exist";
  }

  if (typeof newName !== "string" || newName.trim() === "") {
    return "Invalid new name.";
  }

  task.name = newName;
  return "Task succesfully updated";
};

const sortTaskByCreationDate = function () {
  if (tasks.length === 0) {
    return "No tasks available";
  }
  // Here we are making a copy to show the result without changing the tasks array in-place.
  return [...tasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

const statisticsTask = function () {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed === true).length;

  return `Total Tasks: ${totalTasks} | Completed Tasks: ${completedTasks}`;
};

// console.log(listTasks());
// console.log(sortTaskByCreationDate());
// console.log(addTask());
// console.log(searchTasks("App"));
// console.log(filterTasksByCompletion(true));
