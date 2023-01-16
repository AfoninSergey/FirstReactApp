import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ empData }) => {
  const employeesComponents = empData.map(({ id, ...otherProps }) => {
    return <EmployeesListItem key={id} {...otherProps} />;
  });

  return <ul className="app-list list-group">{employeesComponents}</ul>;
};

export default EmployeesList;
