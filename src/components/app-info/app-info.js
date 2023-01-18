import "./app-info.css";

const AppInfo = ({ total, countIncrs, countRises }) => {
  return (
    <div className="app-ifo">
      <h1>
        Учет сотрудников компании <br />
        <b>ООО "РОСТТЕХЗАПЧАСТЬ"</b>
      </h1>
      <h2>Общее число сотрудников: {total}</h2>
      <h2>Премию получат: {countIncrs}</h2>
      <h2>Сотрудников на повышение: {countRises}</h2>
    </div>
  );
};

export default AppInfo;
