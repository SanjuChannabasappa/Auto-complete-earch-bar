const Resultscontainer = ({ results, scrollindex }) => {
  return (
    <div className="item-containter">
      {results.map((item, i) => (
        <div className={`item ${scrollindex === i && "highlight"}`} key={i}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Resultscontainer;
