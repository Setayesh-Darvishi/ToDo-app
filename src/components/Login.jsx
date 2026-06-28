function Login({ setModalLogin }) {
  return (
    <div
      className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 w-full 
    h-full z-10 flex flex-col items-center justify-center"
    >
      <button
        onClick={() => setModalLogin(false)}
        className="p-2 rounded-full backdrop-blur-lg border border-[#c23d6c]/20 bg-gradient-to-tr from-white/90
       to-white/70 shadow-lg hover:shadow-2xl hover:shadow-[#c23d6c]/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 
       transition-all duration-300 ease-out cursor-pointer hover:border-[#c23d6c]/50 hover:from-white hover:to-white/80 group relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#da8ba7]/20 to-transparent -translate-x-full group-hover:translate-x-full 
        transition-transform duration-700 ease-out"
        />

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
        className="max-w-[350px] bg-gradient-to-t from-white to-[#f3d8e2] rounded-[40px] 
      px-[35px] py-[25px] border-[5px] border-white shadow-[0px_30px_30px_-20px_#ce6489] m-5 "
      >
        <div className="text-center font-black text-[30px] text-old-rose-500">
          Sign In
        </div>

        <form className="mt-5">
          <input
            required
            type="text"
            name="Name"
            placeholder="Name"
            className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-[15px] shadow-[0px_10px_10px_-5px_#e7b1c4] border-x-2 
            border-x-transparent focus:outline-none focus:border-x-[#ce6489] placeholder-[#aaaaaa]"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-[15px] shadow-[0px_10px_10px_-5px_#e7b1c4] border-x-2 
            border-x-transparent focus:outline-none focus:border-x-[#ce6489] placeholder-[#aaaaaa]"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white border-none px-5 py-[15px] rounded-[20px] mt-[15px] shadow-[0px_10px_10px_-5px_#e7b1c4] border-x-2 
            border-x-transparent focus:outline-none focus:border-x-[#ce6489] placeholder-[#aaaaaa]"
          />

          <span className="block mt-[10px] ml-[10px]">
            <a href="#" className="text-[11px] text-old-rose-500 no-underline">
              Forgot Password ?
            </a>
          </span>

          <input
            type="submit"
            value="Sign In"
            className="block w-full font-bold bg-gradient-to-r from-[#9b3156] to-[#c23d6c] text-white py-[15px] my-5 mx-auto rounded-[20px] 
            shadow-[0px_20px_10px_-15px_#ce6489] border-none cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.03] 
            hover:shadow-[0px_23px_10px_-20px_#ce6489] active:scale-[0.95] active:shadow-[0px_15px_10px_-10px_#ce6489]"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
