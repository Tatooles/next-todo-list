import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-green-500">Welcome</h1>
      <h2>This is the home page</h2>
      <Link href="/todos">
        <button className="p-2 rounded-md hover:bg-gray-500 border-2 border-black">
          Show Todos
        </button>
      </Link>
    </div>
  );
}
