import Login from "./Login";
import { useState, useEffect } from "react";

function NavBar() {
  const [modalLogin, setModalLogin] = useState(false);

  const [valueName, setValueName] = useState(
    () => localStorage.getItem("userName") || "",
  );
  const [valueEmail, setValueEmail] = useState(
    () => localStorage.getItem("userEmail") || "",
  );

  useEffect(() => {
    localStorage.setItem("userName", valueName);
  }, [valueName]);

  useEffect(() => {
    localStorage.setItem("userEmail", valueEmail);
  }, [valueEmail]);

  return (
    <div>
      <div
        className="flex-center pt-10 gap-5
     bg-old-rose-100 h-screen w-1/6 rounded-br-4xl rounded-tr-4xl"
      >
        <h1 className="text-old-rose-900 font-bold font-special text-2xl">
          ToDo List
        </h1>

        <div className="flex-center gap-2 rounded-full">
          <img
            src=""
            alt="profileImg"
            className="w-20 h-20 rounded-full object-cover ring ring-old-rose-500"
          />
          <span className="text-old-rose-800 text-xl font-bold">
            {valueName}
          </span>
          <span className="text-old-rose-700 text-sm">{valueEmail}</span>
        </div>

        <button
          onClick={() => setModalLogin(true)}
          className="text-old-rose-600 cursor-pointer hover:scale-103 hover:text-old-rose-500"
        >
          Login →
        </button>
      </div>

      {modalLogin && (
        <Login
          setModalLogin={setModalLogin}
          setValueName={setValueName}
          setValueEmail={setValueEmail}
        />
      )}
    </div>
  );
}

export default NavBar;
