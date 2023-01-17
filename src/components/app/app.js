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
  {name: "Gray Spaer", salary: 1000000, increase: true, rise: true, id: 1},
  {name: "Vovka Govno", salary: 1001, increase: false, rise: false, id: 2},
  {name: "Natasha Telefon", salary: 10, increase: true, rise: false, id: 3},
  {name: "Tanya Bux", salary: 150, increase: false, rise: false, id: 4},
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
/*/ //Application End

/*Lessons Start
import { Component } from "react";
import "./app.css";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 39
    }
    this.showThis = this.showThis.bind(this)
  }

  minusAge = () => {
    this.setState(({age}) => ({age: age - 1}))
  }

  showThis() {
    console.log(this);
  }

  commitInputNumberValue = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { name, surname, link } = this.props;
    const {age} = this.state

    return (
      <div>
        <button onClick={this.showThis}>This</button>
        <button onClick={this.minusAge}>---</button>
        <h1>
          My name is <b> {name}</b>, Surname - <b>{surname}</b>, Age: <b>{age}</b>
        </h1>
        <a href="N">
          <b>{link}</b>
        </a>
        <form>
          <input type="number" onChange={this.commitInputNumberValue}/>
        </form>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="app">
      <WhoAmI name="Gray" surname="Spaer" link="grayspaer.com" />
      <WhoAmI name="ASPiRe" surname="Gray" link="aspiregray.com" />
    </div>
  );
};

export default App;
*/ //Lessons End
