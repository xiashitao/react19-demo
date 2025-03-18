import { useState, useDeferredValue, useTransition } from "react";

function SearchResults({ query }) {
  return (
    <div>
      {query.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function expensiveSearch(query, deferredQuery) {
  return Array(10000)
    .fill(0)
    .map((_, index) => `${query} - ${index}`);
}

function App() {
  // 定义搜索查询状态
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // useTransition 返回一个 isPending 状态和一个 startTransition 函数
  // isPending 状态表示过渡状态是否正在进行

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      setResults(expensiveSearch(e.target.value));
    });
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <SearchResults query={results} />
    </div>
  );
}

export default App;
