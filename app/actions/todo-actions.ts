"use server";

let TODOS: string[] = ["Go to Market"];

export const getTodos = async () => {
  return TODOS;
};

export const createTodo = async (data: string) => {
  // sleep for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  TODOS.push(data);
  return TODOS;
};
