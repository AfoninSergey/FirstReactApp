import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onChangeTermByValue = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ term: e.target.value });
      this.props.changeTerm(e.target.value);
    } else {
      this.setState({ term: "" });
      this.props.changeTerm("");
    }
  };
  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onChangeTermByValue}
        value={term}
      />
    );
  }
}

export default SearchPanel;
