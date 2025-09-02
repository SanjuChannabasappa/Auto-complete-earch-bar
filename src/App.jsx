import { useState } from "react";
import Inputbar from "./components/Inputbar";
import "./styles.css";
import Resultscontainer from "./components/Resultscontainer";
import { useEffect } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [cache, setCache] = useState({});
  const [blur, setBlur] = useState(true);
  const [scrollindex, setScrollIndex] = useState(null);

  const fetchdata = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }

    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const res = await data.json();
    setResults(res?.recipes);
    setCache((prev) => ({ ...prev, [input]: res?.recipes }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchdata();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <div className="App">
      <Inputbar
        input={input}
        setInput={setInput}
        blur={blur}
        setBlur={setBlur}
        results={results}
        scrollindex={scrollindex}
        setScrollIndex={setScrollIndex}
      ></Inputbar>
      {!blur && (
        <Resultscontainer results={results} scrollindex={scrollindex} />
      )}
    </div>
  );
}
