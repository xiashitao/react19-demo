import { Suspense, lazy } from "react";

// const LazyComponent = lazy(() => import("./components/LazyComponents"));

const imageCache = new Map();

// 图片加载组件
function ImageLoader({ src, alt }) {
  function preloadImage(src) {
    if (imageCache.has(src)) {
      return imageCache.get(src);
    }
    let status = "pending";
    let result;
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        status = "success";
        result = src;
        resolve(img);
      };
      img.onerror = () => {
        status = "error";
        result = new Error("Failed to load image");
        reject(result);
      };
    });
    return {
      read() {
        if (status === "pending") throw promise;
        if (status === "error") throw result;
        return result;
      },
    };
  }
  // 预加载图片 并获取资源
  const resource = preloadImage(src);
  imageCache.set(src, resource);
  return <img src={resource.read()} alt={alt} />;
}

function App() {
  return (
    <Suspense fallback={<div>Loading images...</div>}>
      <ImageLoader
        src="http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
        alt="placeholder"
      />
    </Suspense>
  );
}

export default App;
