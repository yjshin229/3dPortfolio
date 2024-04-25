import { useState } from "react";

//custom hook for displaying Alerts when sending email.
const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "error" });

  const showAlert = ({ text, type = "error" }) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "error" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
