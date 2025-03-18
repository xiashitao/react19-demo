import { useRef, useImperativeHandle } from "react";

function ChildInput({ ref }) {
  const inputRef = useRef(null);
  console.log(ref);
  useImperativeHandle(
    ref,
    () => ({
      // ref 是父组件传递的 ref
      focus: () => {
        inputRef.current.focus();
      },
      getValue: () => {
        return inputRef.current.value;
      },
      setValue: (value) => {
        inputRef.current.value = value;
      },
    }),
    [inputRef]
  );
  return <input ref={inputRef} />;
}

function App() {
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current.focus();
    ref.current.setValue("123");
  };
  return (
    <div ref={ref}>
      <h1>传递ref</h1>
      <ChildInput ref={ref} />
      <button onClick={handleFocus}>聚焦</button>
    </div>
  );
}

export default App;
