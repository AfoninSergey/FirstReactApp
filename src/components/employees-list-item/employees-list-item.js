import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
      rise: this.props.rise
    };
  }

  onToggleIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };

  onToggleRise = () => {
    this.setState(({rise}) => ({rise: !rise}))
  };

  render() {
    const { name, salary} = this.props;
    const { increase, rise  } = this.state;
    return (
      <li
        className={
          "list-group-item d-flex justify-content-between" +
          (increase ? " increase" : "") +
          (rise ? " like" : "")
        }
      >
        <span className="list-group-item-label" onClick={this.onToggleRise}>{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`$${salary}`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.onToggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
