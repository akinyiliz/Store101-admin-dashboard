import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center my-40 gap-2">
      <h1 className="text-3xl">Welcome to Store Admin</h1>

      <div className="flex gap-4">
        <Link
          to={"/register"}
          className="font-medium px-8 py-2 rounded-lg bg-primaryColor text-white"
        >
          Register
        </Link>

        <Link
          to={"/login"}
          className="font-medium px-8 py-2 rounded-lg bg-primaryColor text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
