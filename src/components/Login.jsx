function Login() {
  return (
    <div
      className="bg-black/50 fixed top-0 bottom-0 right-0 left-0 w-full 
    h-full z-10 flex flex-col items-center justify-center"
    >
      <button className=""></button>

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
