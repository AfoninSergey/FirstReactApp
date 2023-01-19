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
        { name: "Tanya Bux", salary: 150, increase: false, rise: true, id: 4 },
      ],
      term: "",
      filter: "all",
    };
  }

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
    this.setState(({ employeesData }) => ({
      employeesData: employeesData.map((empObj) => {
        if (empObj.id === id) {
          return { ...empObj, [key]: !empObj[key] };
        }
        return empObj;
      }),
    }));
  };

  onChangeTerm = (term) => {
    this.setState({ term });
  };

  onSearchEmps = (arr, term) => {
    if (term.length === 0) return arr;
    return arr.filter(
      ({ name }) => name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };
  onFilterEmps = (arr, filter) => {
    switch (filter) {
      case "rise":
        return arr.filter((item) => item.rise);
      case "increase":
        return arr.filter((item) => item.increase);
      case "1000":
        return arr.filter((item) => item.salary > 1000);
      default:
        return arr;
    }
  };

  onChangeSalary = (id, sal) => {
    this.setState(({ employeesData }) => ({
      employeesData: employeesData.map((empObj) => {
        if (empObj.id === id) {
          if (sal <= 0 && sal.length > 0) {
            sal = 0;
          }
          return { ...empObj, salary: sal };
        }
        return empObj;
      }),
    }));
  };

  render() {
    const { employeesData, term, filter } = this.state;

    const visibleEmpData = this.onFilterEmps(
      this.onSearchEmps(employeesData, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo
          total={employeesData.length}
          countIncrs={employeesData.filter((empObj) => empObj.increase).length}
          countRises={employeesData.filter((empObj) => empObj.rise).length}
        />
        <div className="search-panel">
          <SearchPanel changeTerm={this.onChangeTerm} />
          <AppFilter changeFilter={this.onChangeFilter} filter={filter} />
        </div>
        <EmployeesList
          empData={visibleEmpData}
          onDelete={this.onEmpDelete}
          onToggle={this.onToggleKey}
          onChangeSalary={this.onChangeSalary}
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
