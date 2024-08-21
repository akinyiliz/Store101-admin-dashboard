import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="fixed w-28 h-screen pt-20 text-black flex flex-col border-r-[3px] border-gray md:w-56 lg:w-64">
      <div className="flex flex-col py-4 px-2 h-full items-center justify-between md:p-4">
        <div className="flex flex-col gap-6 text-sm md:text-lg">
          <Link to="/dashboard" className="hover:text-primaryColor">
            All Products
          </Link>

          <Link to="/dashboard/add" className="hover:text-primaryColor">
            Add Product
          </Link>

          <button
            type="button"
            className="w-full bg-primaryColor px-4 border-4 border-primaryColor text-white font-medium rounded-md"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
