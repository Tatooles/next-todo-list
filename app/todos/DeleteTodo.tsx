"use client";
import { useRouter } from "next/navigation";

export default function DeleteTodo({ id }: any) {
  const router = useRouter();

  const deleteTodo = async () => {
    await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <button onClick={deleteTodo} className="bg-red-500 p-1 rounded-md">
      Delete
    </button>
  );
}
