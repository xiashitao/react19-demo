import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current++;
  console.log("组件渲染的次数", renderCount.current);

  useEffect(() => {
    console.log("useEffect 执行的次数", count);
    return () => {
      console.log("useEffect 清理的次数", count);
    };
  });

  return (
    <div>
      <p>当前记数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

export default App;
