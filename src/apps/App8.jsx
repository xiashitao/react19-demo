// 定义一个异步函数， 用于获取用户详情

import { Suspense, use } from "react";

async function fetchUserData(id) {
  // 向接口发起get请求，获取用户的数据
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await response.json();
  return data;
}

function UserDetails({ user }) {
  const data = use(user);
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </div>
  );
}

function App() {
  // 调用 fetchUserData 方法，获取id为100的用户对应的用户详情
  const user = fetchUserData(100);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserDetails user={user} />
    </Suspense>
  );
}

export default App;
// 异步调用接口，获取返回的数据进行渲染
