import { useState, createContext, use } from "react";

const LanguageContext = createContext();

const messages = {
  zh: {
    greeting: "你好",
    farewell: "再见",
    switchLanguage: "切换语言",
  },
  en: {
    greeting: "Hello",
    farewell: "Goodbye",
    switchLanguage: "Switch Language",
  },
};

function LanguageText() {
  const language = use(LanguageContext);
  return <p>{messages[language].greeting}</p>;
}

function App() {
  const [language, setLanguage] = useState("zh");

  return (
    <div>
      <LanguageContext value={language}>
        <LanguageText />
      </LanguageContext>
      {/* <button onClick={() => setLanguage("zh")}>中文</button> */}
      <button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}>
        {language === "zh" ? "英文" : "中文"}
      </button>
    </div>
  );
}

export default App;
/* 
  react19 中， context有变化
  1. 不需要写provider
  2. 不需要useContext
*/
