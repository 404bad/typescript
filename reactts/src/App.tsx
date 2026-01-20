import "./App.css";
import { Card } from "./components/Card.tsx";
import { Counter } from "./components/Counter.tsx";
import List from "./components/List.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 25 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <Card name="headphone" price={5000} />
        <Card name="Ihone" price={50000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <List items={menu} />
      </div>
    </>
  );
}

export default App;
