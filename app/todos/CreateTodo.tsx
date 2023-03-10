"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const create = async () => {
    console.log("create new todo");

    await fetch("http://127.0.0.1:8090/api/collections/todos/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    router.refresh();
  };

  return (
    <form
      onSubmit={create}
      className="flex flex-col border-2 border-black p-4 w-min rounded-md"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 border-gray-300 rounded-md mb-2 p-1"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 border-gray-300 rounded-md mb-2 p-1"
      />
      <button type="submit" className=" bg-green-500 rounded-md p-2">
        Add Todo
      </button>
    </form>
  );
}
