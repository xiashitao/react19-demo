import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./components/LazyComponents"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
