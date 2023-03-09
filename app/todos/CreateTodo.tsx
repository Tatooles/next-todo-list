"use client";
import { useRouter } from "next/navigation";

export default function CreateTodo() {
  const router = useRouter();

  const create = async () => {
    console.log("create new todo");

    await fetch("http://127.0.0.1:8090/api/collections/todos/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "default title",
        description: "default decription",
      }),
    });

    router.refresh();
  };

  return <button onClick={create}>Add Todo</button>;
}
