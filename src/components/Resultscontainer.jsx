const Resultscontainer = ({ results }) => {
  return (
    <div className="item-containter">
      {results.map((item, i) => (
        <div className="item" key={i}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Resultscontainer;
