import { useState, use, useEffect, useRef, Suspense } from "react";

const createPromise = (data, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
};

function DisplayData({ promise }) {
  const data = use(promise);
  return <div>{data}</div>;
}

function App() {
  const [promise, setPromise] = useState(() => createPromise("初始数据", 1000));
  return (
    <div>
      <h2>数据更新</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayData promise={promise} />
      </Suspense>
      <button onClick={() => setPromise(createPromise("新数据", 1000))}>
        更新数据
      </button>
    </div>
  );
}

export default App;
