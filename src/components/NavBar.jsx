import Login from "./Login";
import AvatarPicker from "./AvatarPicker";
import { useState, useEffect } from "react";

const DEFAULT_AVATAR = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix";

function NavBar() {
  const [modalLogin, setModalLogin] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  const [valueName, setValueName] = useState(
    () => localStorage.getItem("userName") || "",
  );
  const [valueEmail, setValueEmail] = useState(
    () => localStorage.getItem("userEmail") || "",
  );
  const [avatar, setAvatar] = useState(
    () => localStorage.getItem("userAvatar") || DEFAULT_AVATAR,
  );

  useEffect(() => {
    localStorage.setItem("userName", valueName);
  }, [valueName]);

  useEffect(() => {
    localStorage.setItem("userEmail", valueEmail);
  }, [valueEmail]);

  useEffect(() => {
    localStorage.setItem("userAvatar", avatar);
  }, [avatar]);

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
          <button
            type="button"
            onClick={() => setShowAvatarPicker(true)}
            className="bg-old-rose-50 rounded-full cursor-pointer hover:scale-103 transition-transform duration-200"
          >
            <img
              src={avatar}
              alt="profileImg"
              className="w-20 h-20 rounded-full object-cover border border-old-rose-500 ring ring-old-rose-300"
            />
          </button>
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

      {showAvatarPicker && (
        <AvatarPicker
          setShowAvatarPicker={setShowAvatarPicker}
          setAvatar={setAvatar}
        />
      )}
    </div>
  );
}

export default NavBar;
