const Inputbar = ({
  input,
  setInput,
  blur,
  setBlur,
  results,
  scrollindex,
  setScrollIndex,
}) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);

    if (e.key === "ArrowDown") {
      if (scrollindex == null) {
        setScrollIndex(0);
      } else if (scrollindex === results.length - 1) {
        setScrollIndex(0);
      } else {
        setScrollIndex((prev) => prev + 1);
      }
    }
    if (e.key === "ArrowUp") {
      if (scrollindex == null) {
        setScrollIndex(0);
      } else if (scrollindex === 0) {
        setScrollIndex(results.length - 1);
      } else {
        setScrollIndex((prev) => prev - 1);
      }
    }
  };

  console.log(scrollindex);

  return (
    <div>
      <input
        className="input-bar"
        value={input}
        onChange={handleChange}
        onFocus={() => {
          setBlur(false);
        }}
        // onBlur={() => {     commented blur functionality
        //   setBlur(true);
        // }}
        // autoFocus   property commented out
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default Inputbar;
