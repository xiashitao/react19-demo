## use

- use 允许直接在组件中处理异步操作(Promise 或者 异步函数)， 而无需显示的管理状态
- use 可以让组件更加的声明式，直接表达使用这个异步资源的，而无需进行处理数据获取和状态管理的样板代码
- useEffect useState

## StrictMode

- 在严格模式下， 组件首次加载会执行两次，它的目的是帮助开发者发现潜在的错误和不纯的组件
- 检测副作用
- 验证清理逻辑

## Suspense

- Suspense 用于处理异步操作
- Suspense 是通过挂起组件渲染，直到数据和资源准备就绪，从而提示用户体验

- 代码拆分， 懒加载组件
- 图片或资源的加载
- 数据获取

## Suspense 工作原理

- Suspense 是通过挂起组件的渲染，直到它依赖的资源（可能是动态导入的代码，也可能是调用接口返回的数据），同时会返回 fallback 对应的 ui
- 核心流程
  - 检测挂起状态，当组件使用了异步资源， React 检测这些资源未就绪的时候，会触发挂起，中断组件的渲染，等待异步任务的完成
  - 触发挂起 组件内的异步操作会抛出一个挂起状态，通过 React 异步任务尚未完成，React 会暂停渲染
  - 显示备用 ui，在挂起期间，React 会渲染最近的 Suspense 组件的 fallback
  - 异步任务完成 当异步任务完成后，组件会重新渲染，并用实际的内容替换掉 fallback

## Suspense 管理多个挂起的 Promise

- 所有挂起的 promise 必须都解析，才能结束挂起状态

## Suspense 组件可以嵌套使用，管理不同子树的挂起状态

## Ref

- useRef 用于管理不参与组件渲染流程的可变引用 ref，当数据的变量不需要触发组件的渲染的时候可以使用 useRef
- useImperativeHandle 用于创建自定义的 ref 对象， 通过 ref 对象暴露给父组件

- useDeferredValue 用于将一个值标记为延迟更新， 当需要延迟更新某个值的时候，可以使用 useDeferredValue,它接受一个值，返回一个延迟更新的值
- useTransition 用于将状态更新标记为过渡状态， 当需要更新状态，但是不希望立即触发重新渲染的时候，可以使用 useTransition

## FormAction

- FormAction 的 action 属性类似于 HTML 表单的 action，但是它接受的是一个函数，而不是一个 url
# react19-demo
