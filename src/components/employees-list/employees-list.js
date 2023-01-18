import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ empData, onDelete, onToggle }) => {
  const employeesComponents = empData.map(({ id, ...otherProps }) => {
    return (
      <EmployeesListItem
        key={id}
        {...otherProps}
        onDeleteByClick={() => onDelete(id)}
        onTog={(e) => onToggle(id, e.currentTarget.getAttribute("data-toggle"))}
      />
    );
  });

  return <ul className="app-list list-group">{employeesComponents}</ul>;
};

export default EmployeesList;
