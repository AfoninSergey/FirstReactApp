//*Application Start
import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesData: [
        { name: "Gray ASP", salary: 10000, increase: true, rise: true, id: 1 },
        { name: "Vovk Gov", salary: 1001, increase: false, rise: false, id: 2 },
        { name: "Nata Tele", salary: 10, increase: true, rise: false, id: 3 },
        { name: "Tanya Bux", salary: 150, increase: false, rise: false, id: 4 },
      ],
    };
  }
  //nextId()

  onEmpDelete = (id) => {
    this.setState(({ employeesData }) => ({
      employeesData: employeesData.filter((empObj) => empObj.id !== id),
    }));
  };

  onEmpAdd = (name, salary) => {
    this.setState(({ employeesData }) => ({
      employeesData: [
        ...employeesData,
        { name, salary, increase: false, rise: false, id: nextId() },
      ],
    }));
  };

  onToggleKey = (id, key) => {
    // console.log(id, key);
    this.setState(({ employeesData }) => ({
      employeesData: employeesData.map((empObj) => {
        if (empObj.id === id) {
          // empObj[key] = !empObj[key];
          return { ...empObj, [key]: !empObj[key] };
        }
        return empObj;
      }),
    }));
  };

  // onEmpDelete = (id) => {
  //   this.setState(({ employeesData }) => {
  //     const index = employeesData.findIndex((obj) => obj.id === id);
  //     const before = employeesData.slice(0, index);
  //     const after = employeesData.slice(index + 1);
  //     return {
  //       employeesData: [...before, ...after],
  //     };
  //   });
  // };

  render() {
    const { employeesData } = this.state;
    // console.log(employeesData.filter((empObj) => empObj.rise).length);
    return (
      <div className="app">
        <AppInfo
          total={employeesData.length}
          countIncrs={employeesData.filter((empObj) => empObj.increase).length}
          countRises={employeesData.filter((empObj) => empObj.rise).length}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          empData={employeesData}
          onDelete={this.onEmpDelete}
          onToggle={this.onToggleKey}
        />
        <EmployeesAddForm onAdd={this.onEmpAdd} />
      </div>
    );
  }
}

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
