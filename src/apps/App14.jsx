import { Suspense, useState, use } from "react";

function fetchSuggestions(keyword) {
  const controller = new AbortController();
  const signal = controller.signal;
  const promise = fetch(`http://localhost:3000/search?keyword=${keyword}`, {
    signal,
  })
    .then((res) => res.json())
    .catch(() => []);
  promise.controller = controller;
  return promise;
}

function SearchResult({ promise }) {
  const data = use(promise);
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [searchPromise, setSearchPromise] = useState(null);
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    if (searchPromise?.controller) {
      searchPromise.controller.abort();
    }
    const str = e.target.value;
    setKeyword(str);
    setSearchPromise(str.trim() ? fetchSuggestions(str) : null);
  };
  return (
    <div>
      <h2>搜索建议</h2>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="请输入搜索关键词"
      />
      {searchPromise ? (
        <Suspense fallback={<div>正在搜索{keyword}中...</div>}>
          <SearchResult promise={searchPromise} />
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
