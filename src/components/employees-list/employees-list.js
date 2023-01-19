import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ empData, onDelete, onToggle, onChangeSalary }) => {
  const employeesComponents = empData.map(({ id, ...otherProps }) => {
    return (
      <EmployeesListItem
        key={id}
        {...otherProps}
        onDeleteByClick={() => onDelete(id)}
        onTog={(e) => onToggle(id, e.currentTarget.getAttribute("data-toggle"))}
        changeSalary={(e) => onChangeSalary(id, e.target.value.replace(/\D/g, ""))}
        // onChangeSalary(id, e.target.value.replace(/\D/g, ""))
      />
    );
  });

  return <ul className="app-list list-group">{employeesComponents}</ul>;
};

export default EmployeesList;
