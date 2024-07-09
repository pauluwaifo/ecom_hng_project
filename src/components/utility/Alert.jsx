import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Alert() {
  const { setAlert, alert, message, alert_bg } = useContext(AppContext);
  return (
    <div className=" z-50 fixed top-28 left-0 flex flex-row items-center w-full px-20 py-5">
      <div
        className={`${
          alert ? "block" : "hidden"
        }  basis-full flex-wrap text-white font-bold p-5 ${alert_bg} rounded-lg text-center flex flex-row`}
      >
        <div className="basis-4/5 flex justify-center">{message}</div>
        <div className="flex flex-row justify-center basis-1/5">
          <button onClick={() => setAlert(false)}>X</button>
        </div>
      </div>

    </div>
  );
}

export default Alert;
