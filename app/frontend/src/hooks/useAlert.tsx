import { useState, useCallback } from "react";

interface AlertState {
  show: boolean;
  message: string;
  type: "error" | "success" | "warning";
}

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    message: "",
    type: "error",
  });

  const showAlert = useCallback(
    (
      message: string,
      type: "error" | "success" | "warning" = "error",
      duration: number = 4000,
    ) => {
      setAlert({ show: true, message, type });

      if (duration > 0) {
        setTimeout(() => {
          setAlert((prev) => ({ ...prev, show: false }));
        }, duration);
      }
    },
    [],
  );

  const hideAlert = useCallback(() => {
    setAlert((prev) => ({ ...prev, show: false }));
  }, []);

  return {
    alert,
    showAlert,
    hideAlert,
  };
};
