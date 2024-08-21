import { Link } from "react-router-dom";
import DashboardLayout from "../components/Layout";
import { useProduct } from "../context/ProductContext";

const AllProducts = () => {
  const { products, loading, deleteProduct } = useProduct();

  if (loading) return <p>Loading...</p>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold pb-2">All Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg w-full border border-gray"
          >
            <div className="relative w-full h-36 md:h-48 lg:h-64 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-[70%] h-full"
              />
            </div>

            <div className="p-4">
              <h2 className="text-base font-medium">
                {product.title.split(" ").slice(0, 4).join(" ")}
              </h2>
              <p className="mt-1 text-sm font-bold">Ksh. {product.price}</p>
            </div>

            <div className="flex items-center gap-4 text-white px-4 pb-4">
              <Link
                to={`/dashboard/edit/${product._id}`}
                className="py-2 px-4 bg-primaryColor rounded-lg"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProduct(product._id)}
                className="py-2 px-4 bg-primaryColor rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AllProducts;
