//*Application Start
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";



const App = () => {
  //Эмуляция данных с сервера
const employeesData = [
  {name: "Gray Spaer", salary: 1000000, increase: true, id: 1},
  {name: "Vovka Govno", salary: 1001, increase: false, id: 2},
  {name: "Natasha Telefon", salary: 10, increase: true, id: 3},
  {name: "Tanya Bux", salary: 150, increase: false, id: 4},
]

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList empData = {employeesData}/>
      <EmployeesAddForm/>
    </div>
  );
};

export default App;
//*/ //Application End

/*Lessons Start
import "./app.css";

const WhoAmI = (props) => {
  return (
    <div>
      <h1>My name is <b> {props.name}</b>, Surname - <b>{props.surname}</b></h1>
      <a href="N"><b>{props.link}</b></a>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <WhoAmI name="Gray" surname="Spaer" link="grayspaer.com"/>
      <WhoAmI name="ASPiRe" surname="Gray" link="aspiregray.com"/>
    </div>
  );
};

export default App;
*///Lessons End
