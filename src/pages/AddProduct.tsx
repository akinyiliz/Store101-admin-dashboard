import React, { useState } from "react";
import { useProduct } from "../context/ProductContext";
import DashboardLayout from "../components/Layout";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct, loading } = useProduct();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setImageFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("price", product.price.toString());
      formData.append("description", product.description);
      formData.append("category", product.category);
      formData.append("image", imageFile);

      await addProduct(formData);
      setProduct({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
      });
      setImageFile(null);

      navigate("/dashboard");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold pb-2">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full md:w3/4 lg:w-1/2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price (Ksh)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product description"
            className="border border-gray p-2 focus:outline-primaryColor rounded-md resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          >
            <option value="">Select Product Category</option>
            <option value="necklace">Necklace</option>
            <option value="earrings">Earrings</option>
            <option value="bracelet">Bracelet</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            placeholder="Image URL"
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-primaryColor text-white font-semibold text-lg rounded-md flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="animate-spin" size={25} />
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </DashboardLayout>
  );
};

export default AddProduct;
