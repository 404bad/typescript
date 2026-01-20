interface Todo {
  userId: number;
  id: number;
  title: string;
  sompleted: boolean;
}

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
      throw new Error(`Http error ${res.status}`);
    }
    const data: Todo = await res.json();
  } catch (error: any) {}
};
