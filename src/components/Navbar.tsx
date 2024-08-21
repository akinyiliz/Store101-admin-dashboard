import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { adminDetails } = useAuth();

  return (
    <section className="w-full h-16 bg-white fixed z-10 top-0 left-0 right-0">
      <nav className="flex flex-row justify-between items-center gap-2 px-2 py-3 md:px-6 border-b-[3px] border-gray">
        <Link to={"/"} className="flex gap-3">
          <h1 className="text-3xl">
            <span className="font-medium">Store</span>
            <span className="font-semibold text-primaryColor">101</span>
          </h1>
          <h1 className="text-3xl font-medium">Admin</h1>
        </Link>

        {adminDetails && (
          <h2 className="text-lg lg:pr-20">Hello, {adminDetails.username}</h2>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
