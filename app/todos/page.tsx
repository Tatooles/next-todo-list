async function getTodos() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/todos/records"
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Here are your todos!</h1>
      {todos?.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}
