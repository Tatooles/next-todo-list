import Link from "next/link";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";

async function getTodos() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/todos/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

async function addTodo() {
  console.log("adding todo");
}

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <div className="w-full">
      <h1 className="text-3xl mb-4">Here are your todos!</h1>
      <div>
        {todos?.map((todo) => {
          // return <div key={todo.id}>{todo.title}</div>;
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
      <CreateTodo></CreateTodo>
    </div>
  );
}

function Todo({ todo }: any) {
  const { id, title, created } = todo || {};

  // Could add a link
  return (
    // <Link href="/">
    <div className="mb-4 border-2 border-black flex justify-between p-2 items-center">
      <h1>{title}</h1>
      <p>{created}</p>
      <DeleteTodo id={id} />
    </div>
    // </Link>
  );
}
