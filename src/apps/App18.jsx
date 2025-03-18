import { useState, useDeferredValue } from "react";

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
  // 使用 useDeferredValue 将 query 标记为延迟更新
  const deferredQuery = useDeferredValue(query);
  const searchResults = expensiveSearch(deferredQuery);
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SearchResults query={searchResults} />
    </div>
  );
}

export default App;
