import { use } from "react";

const getMessage = Promise.resolve("hello word1");
const getMessage2 = Promise.resolve("hello word2");
const getMessage3 = Promise.resolve("hello word3");

const messages = [getMessage, getMessage2, getMessage3];

function App() {
  const dataList = messages.map((message, index) => {
    const data = use(message);
    return (
      <div key={index}>
        消息{index + 1}
        {data}
      </div>
    );
  });
  return <div>{dataList}</div>;
}

export default App;
