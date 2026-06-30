const AVAILABLE_AVATARS = [
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Milo",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Zoe",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Leo",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Nina",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Max",
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Ruby",
];

function AvatarPicker({ setShowAvatarPicker, setAvatar }) {
  function handleSelect(avatarUrl) {
    setAvatar(avatarUrl);
    setShowAvatarPicker(false);
  }

  return (
    <div
      className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 w-full 
    h-full z-10 flex flex-col items-center justify-center"
    >
      <button
        onClick={() => setShowAvatarPicker(false)}
        className="p-2 rounded-full backdrop-blur-lg border border-[#c23d6c]/20 bg-gradient-to-tr from-white/90
       to-white/70 shadow-lg hover:shadow-2xl hover:shadow-[#c23d6c]/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 
       transition-all duration-300 ease-out cursor-pointer hover:border-[#c23d6c]/50 hover:from-white hover:to-white/80 group relative overflow-hidden"
      >
        <div className="relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#c23d6c] group-hover:text-[#ce6489] transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </button>

      <div
        className="max-w-[400px] bg-gradient-to-t from-white to-[#f3d8e2] rounded-[40px] 
      px-[35px] py-[25px] border-[5px] border-white shadow-[0px_30px_30px_-20px_#ce6489] m-5"
      >
        <div className="text-center font-black text-[24px] text-old-rose-500 mb-5">
          Choose your avatar
        </div>

        <div className="grid grid-cols-4 gap-4">
          {AVAILABLE_AVATARS.map((avatarUrl) => (
            <button
              key={avatarUrl}
              type="button"
              onClick={() => handleSelect(avatarUrl)}
              className="rounded-full overflow-hidden ring-2 ring-transparent hover:ring-[#ce6489] 
              hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer bg-white"
            >
              <img
                src={avatarUrl}
                alt="avatar option"
                className="w-16 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarPicker;
