import { use } from "react";

const getMessage = Promise.resolve("hello word1");
const getMessage2 = Promise.resolve("hello word2");

function App() {
  const condition = true;
  const message = condition ? use(getMessage) : use(getMessage2);
  return <div>{message}</div>;
}

export default App;
