import { useState } from "react";
import Inputbar from "./components/Inputbar";
import "./styles.css";
import Resultscontainer from "./components/Resultscontainer";
import { useEffect } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const fetchdata = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const res = await data.json();
    setResults(res?.recipes);
  };

  useEffect(() => {
    fetchdata();
  }, [input]);

  return (
    <div className="App">
      <Inputbar input={input} setInput={setInput}></Inputbar>
      <Resultscontainer results={results} />
    </div>
  );
}
