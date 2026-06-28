import Login from "./Login";
import { useState } from "react";

function NavBar() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <div>
      <div
        className="flex-center pt-10 gap-5
     bg-old-rose-100 h-screen w-1/6 rounded-br-4xl rounded-tr-4xl"
      >
        {/* title */}
        <h1 className="text-old-rose-900 font-bold font-special text-2xl">
          ToDo List
        </h1>
        {/* profile box */}

        <div className="flex-center gap-2 rounded-full">
          <img
            src=""
            alt="profileImg"
            className="w-20 h-20 rounded-full object-cover ring ring-old-rose-500"
          />
          <span className="text-old-rose-800 text-xl font-bold"></span>
          <span className="text-old-rose-700 text-sm"></span>
        </div>

        <button onClick={() => setModalLogin(true)}>test</button>
      </div>

      {modalLogin && <Login />}
    </div>
  );
}

export default NavBar;
