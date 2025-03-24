"use client";

import { useMutation, useQuery } from "react-query";
import { createTodo, getTodos } from "../actions/todo-actions";
import { useState } from "react";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodosPage() {
  const [todoImport, setTodoImport] = useState("");

  // query = 데이터를 가져오는 것
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  // Mutation = 데이터를 변경시키는 작업
  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoImport === "") throw new Error("Todo is empty");
      return createTodo(todoImport);
    },
    onSuccess: (TODOS) => {
      console.log("TODOS: ", TODOS);
      todosQuery.refetch(); // todosQuery가 성공하자마자 다시 가져옴
      queryClient.invalidateQueries(["todos", 1]); // 1번 인덱스의 todos 데이터를 무효화 (캐시 무효화)
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });
  return (
    <div>
      <h1>TODOS</h1>
      {/* TODOS를 생성하는 부분 */}
      <input
        type="text"
        placeholder="Add a todo"
        value={todoImport}
        onChange={(e) => setTodoImport(e.target.value)}
      />
      <button onClick={() => createTodoMutation.mutate()}>
        {createTodoMutation.isLoading ? "Loading..." : "Add"}
      </button>
      {/* TODOS를 보여주는 부분 */}
      {todosQuery.isLoading && <div>Loading...</div>}
      {todosQuery.data &&
        todosQuery.data.map((todo, index) => <p key={index}>{todo}</p>)}
    </div>
  );
}
