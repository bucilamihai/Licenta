import React from "react";
import "./CustomAlert.css";

interface CustomAlertProps {
  show: boolean;
  message: string;
  type: "error" | "success" | "warning";
  onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  show,
  message,
  type,
  onClose,
}) => {
  if (!show) return null;

  return (
    <div className={`custom-alert ${type}`}>
      <div className="custom-alert-message">{message}</div>
    </div>
  );
};

export default CustomAlert;
