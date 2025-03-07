import errorIcon from "../../assets/icons/alert-triangle.svg"
import "./ErrorNotice.css"

interface ErrorProps {
  message: string;
}

const ErrorNotice = ({ message }: ErrorProps) => {
  return (
    <div className="error-card">
      <img src={errorIcon} alt="alert-icon" className="error-icon" />
      <p className="error-message">{"Oшибка: "+message}</p>
    </div>
  );
};
export default ErrorNotice