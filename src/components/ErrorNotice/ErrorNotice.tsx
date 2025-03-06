import errorIcon from "../../assets/icons/alert-triangle.svg"
import "./ErrorNotice.css"

const ErrorNotice = () => {
  return (
    <div className="error-card">
      <img src={errorIcon} alt="alert-icon" className="error-icon" />
      <p className="error-message">Ошибка: не удалось загрузить информацию</p>
    </div>
  );
};
export default ErrorNotice