import { useRef, useImperativeHandle } from "react";

function ToolTip({ ref }) {
  const tooltipRef = useRef(null);
  const tooltipStyle = {
    display: "none",
    position: "fixed",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "4px",
    fontSize: "14px",
    zIndex: 1000,
    transition: "opacity 0.3s ease-in-out",
  };
  const show = (event) => {
    // tooltipStyle.display = "block";
    const x = event.clientX;
    const y = event.clientY;
    tooltipRef.current.style.display = "block";
    tooltipRef.current.style.opacity = 0;
    tooltipRef.current.style.left = `${x + 10}px`;
    tooltipRef.current.style.top = `${y + 10}px`;
    // 触发重排
    tooltipRef.current.offsetHeight;
    tooltipRef.current.style.opacity = 1;
  };
  const hide = () => {
    tooltipRef.current.style.opacity = 0;
    setTimeout(() => {
      tooltipRef.current.style.display = "none";
    }, 300);
  };
  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));
  return (
    <div style={tooltipStyle} ref={tooltipRef}>
      这是一个提示框
    </div>
  );
}

function App() {
  const tooltipRef = useRef(null);
  const handleMouseEnter = (event) => {
    tooltipRef.current.show(event);
  };

  const handleMouseLeave = () => {
    tooltipRef.current.hide();
  };
  return (
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        鼠标悬停出现提示
      </button>
      <ToolTip ref={tooltipRef} />
    </div>
  );
}

export default App;
