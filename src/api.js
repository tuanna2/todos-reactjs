const RESPONSE_DELAY = 500;

const todos = [
  {
    id: "todo-1",
    title: "Todo 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    createdAt: new Date().getTime(),
    status: "done"
  },
  {
    id: "todo-2",
    title: "Todo 2",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    createdAt: new Date().getTime(),
    status: "pending"
  },
  {
    id: "todo-3",
    title: "Todo 3",
    content:
      "Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis egestas sed tempus urna et. Condimentum mattis pellentesque id nibh tortor id",
    createdAt: new Date().getTime(),
    status: "done"
  },
  {
    id: "todo-4",
    title: "Todo 4",
    content:
      "Vitae semper quis lectus nulla. Id consectetur purus ut faucibus. Et ligula ullamcorper malesuada proin libero. Pulvinar pellentesque habitant morbi tristique senectus. Dolor purus non enim praesent",
    createdAt: new Date().getTime(),
    status: "pending"
  },
  {
    id: "todo-5",
    title: "Todo 5",
    content:
      "Et egestas quis ipsum suspendisse. Quisque egestas diam in arcu cursus euismod quis viverra",
    createdAt: new Date().getTime(),
    status: "pending"
  }
];

export default {
  getTodos: async ({ keyword, status } = {}) => {
    const result = todos.filter(t => {
      if (
        keyword &&
        !t.title.includes(keyword) &&
        !t.content.includes(keyword)
      ) {
        return false;
      }
      if (status && t.status !== status) {
        return false;
      }
      return true;
    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          todos: result,
          total: result.length
        });
      }, RESPONSE_DELAY);
    });
  },
  getTodo: id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = todos.findIndex(t => t.id === id);
        if (index < 0) {
          reject(new Error("Todo not found"));
        }
        resolve(todos[index]);
      }, RESPONSE_DELAY);
    });
  },
  createTodo: async todo => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newTodo = {
          ...todo,
          id: `todo-${todos.length + 1}`,
          createdAt: new Date().getTime()
        };
        todos.push(newTodo);
        resolve(newTodo);
      }, RESPONSE_DELAY);
    });
  },
  updateTodo: async (id, todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = todos.findIndex(t => t.id === id);
        if (index < 0) {
          reject(new Error("Todo not found"));
        }
        todos[index] = {
          ...todos[index],
          ...todo
        };
        resolve(todos[index]);
      }, RESPONSE_DELAY);
    });
  },
  deleteTodo: async id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = todos.findIndex(t => t.id === id);
        if (index < 0) {
          reject(new Error("Todo not found"));
        }
        todos.splice(index, 1);
        resolve();
      }, RESPONSE_DELAY);
    });
  }
};
