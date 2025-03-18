// 定义一个异步函数， 用于获取用户详情

import { Suspense, use } from "react";

function fetchData(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms.toString());
    }, ms);
  });
}

function AsyncComponent({ data: data1 }) {
  const data = use(data1);
  return <div>{data}</div>;
}

function AnotherAsyncComponent({ data: data2 }) {
  const data = use(data2);
  return <div>{data}</div>;
}

function App() {
  // 调用 fetchUserData 方法，获取id为100的用户对应的用户详情
  const data1 = fetchData(5000);
  const data2 = fetchData(10000);
  return (
    <Suspense fallback={<div>LoadingA...</div>}>
      <AsyncComponent data={data1} />
      <Suspense fallback={<div>LoadingB...</div>}>
        <AnotherAsyncComponent data={data2} />
      </Suspense>
    </Suspense>
  );
}

export default App;
// 异步调用接口，获取返回的数据进行渲染
