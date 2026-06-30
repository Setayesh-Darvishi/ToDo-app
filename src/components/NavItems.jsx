import AllTasksSvg from "./svg/AllTasksSvg";
import CategorySvg from "./svg/CategorySvg";
import CreateTasksSvg from "./svg/CreateTasksSvg";
import DashboardSvg from "./svg/DashboardSvg";

function NavItems() {
  return (
    <div className="flex flex-col items-start gap-y-3 w-full mt-10">
      <button
        className="flex items-center gap-x-1 cursor-pointer
      focus:bg-old-rose-50 hover:bg-old-rose-50 w-full py-2 transition-transform duration-500 pl-2
      rounded-l-full focus:shadow-[0px_10px_10px_-10px_#ce6489]"
      >
        <DashboardSvg />
        <span className="span-style">Dashboard</span>
      </button>

      <button
        className="flex items-center gap-x-1 cursor-pointer
      focus:bg-old-rose-50 hover:bg-old-rose-50 w-full py-2 transition-transform duration-500 pl-2
      rounded-l-full focus:shadow-[0px_10px_10px_-10px_#ce6489]"
      >
        <AllTasksSvg />
        <span className="span-style">All Tasks</span>
      </button>

      <button
        className="flex items-center gap-x-1 cursor-pointer
      focus:bg-old-rose-50 hover:bg-old-rose-50 w-full py-2 transition-transform duration-500 pl-2
      rounded-l-full focus:shadow-[0px_10px_10px_-10px_#ce6489]"
      >
        <CreateTasksSvg />
        <span className="span-style">Create New Tasks</span>
      </button>

      <button
        className="flex items-center gap-x-1 cursor-pointer
      focus:bg-old-rose-50 hover:bg-old-rose-50 w-full py-2 transition-transform duration-500 pl-2
      rounded-l-full focus:shadow-[0px_10px_10px_-10px_#ce6489]"
      >
        <CategorySvg />
        <span className="span-style">Category</span>
      </button>
    </div>
  );
}

export default NavItems;
