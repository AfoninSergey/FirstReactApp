import "./employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  onDeleteByClick,
  increase,
  rise,
  onTog,
}) => {
  return (
    <li
      className={
        "list-group-item d-flex justify-content-between" +
        (increase ? " increase" : "") +
        (rise ? " like" : "")
      }
    >
      <span
        className="list-group-item-label"
        data-toggle="rise"
        onClick={onTog}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`$${salary}`}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="increase"
          onClick={onTog}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={onDeleteByClick}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
