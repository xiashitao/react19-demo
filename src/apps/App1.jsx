// import { use } from "react";
const getMessage = Promise.resolve("hello word1");
function App() {
  // 使用use 这个hook 处理promise 并处理 promise的值
  const message = use(getMessage);
  console.log(message);
  return <div>{message}</div>;
}

function use(promise) {
  // 如果传入的不是promise 直接返回
  if (!(promise instanceof Promise)) {
    return promise;
  }

  switch (promise.status) {
    case "fulfilled":
      // 如果promise 已经完成，直接返回结果
      return promise.value;
    case "rejected":
      // 如果promise 已经失败，直接抛出错误
      throw promise.reason;
    default:
      throw promise.then(
        // 成功回调，设置为完成，并且保存结果
        (value) => {
          promise.status = "fulfilled";
          promise.value = value;
          return value;
        },
        (reason) => {
          // 失败回调，设置为失败，并且保存错误的原因
          promise.status = "rejected";
          promise.reason = reason;
          throw reason;
        }
      );
  }
}

export default App;
