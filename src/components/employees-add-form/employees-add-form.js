import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      text: "Добавьте нового сотрудника",
    };
  }

  onChangeValue = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.target.name]: ""
      });
    }
  };

  onEmpAddbyForm = (e) => {
    e.preventDefault();

    if (!this.state.name && !this.state.salary) {
      this.setState({ text: "Введите данные!" });
    } else if (!this.state.name) {
      this.setState({ text: "Имя тоже введите!" });
    } else if (!this.state.salary) {
      this.setState({ text: "Заполните зарплату!" });
    } else {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
        text: "Добавьте нового сотрудника",
      });
    }
  };

  render() {
    const { name, salary, text } = this.state;
    return (
      <div className="app-add-form">
        <h3>{text}</h3>
        <form className="add-form d-flex" onSubmit={this.onEmpAddbyForm}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onChangeValue}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
