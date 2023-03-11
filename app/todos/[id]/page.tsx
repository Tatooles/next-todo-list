import Link from "next/link";

async function getTodo(id: string) {
  console.log("fetching todo");
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/todos/records/${id}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function TodoPage({ params }: any) {
  const todo = await getTodo(params.id);

  return (
    <div className="w-full">
      <h1 className="text-3xl mb-4">{todo.title}</h1>
      <p className="mb-5">{todo.description}</p>
      <p>Created: {todo.created.split(" ")[0]}</p>
    </div>
  );
}
