import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Alert() {
  const { setAlert, alert, message, alert_bg } = useContext(AppContext);
  return (
    <div
      className={`${
        alert ? "block" : "hidden"
      }  z-50 fixed top-28 left-0 w-full flex-wrap text-white font-bold p-2 ${alert_bg} txt-white text-center flex flex-row`}
    >
      <div className="basis-1/2 flex justify-end">{message}</div>
      <div className="flex flex-row justify-end basis-1/2">
        <button onClick={() => setAlert(false)}>X</button>
      </div>
    </div>
  );
}

export default Alert;
