const Inputbar = ({ input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        className="input-bar"
        value={input}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Inputbar;
