"use client";

import { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    // fetch(`/api/users?name=${"Alice"}`)
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data.users));
    searchUsers("Alice").then((users) => setUsers(users));
  }, []);

  return (
    <main>
      <h1>Users</h1>

      {users.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </main>
  );
}
