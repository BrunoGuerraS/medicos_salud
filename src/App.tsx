import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Search } from "./components/Search/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My APP</h1>
      <Search />
      <Form />
    </>
  );
}

export default App;
