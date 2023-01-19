import "./app-filter.css";

const AppFilter = ({ changeFilter, filter }) => {
  const btnsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "increase", label: "Получат премию" },
    { name: "1000", label: "З/П больше $1000" },
  ];

  const btns = btnsData.map((btnObj) => (
    <button className={"btn " + (btnObj.name === filter ? "btn-light" : "btn-outline-light")} onClick={() => changeFilter(btnObj.name)} key={btnObj.name}>
      {btnObj.label}
    </button>
  ));

  return (
    <div className="btn-group">
      {btns}
      {/* <button className="btn btn-light" onClick={() => changeFilter('all')}>Все сотрудники</button>
      <button className="btn btn-outline-light" onClick={() => changeFilter('rise')}>На повышение</button>
      <button className="btn btn-outline-light" onClick={() => changeFilter('increase')}>Получат премию</button>
      <button className="btn btn-outline-light" onClick={() => changeFilter('1000')}>З/П больше $1000</button> */}
    </div>
  );
};

export default AppFilter;
