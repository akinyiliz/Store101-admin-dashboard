// src/pages/UpdateProduct.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import DashboardLayout from "../components/Layout";
import { Product } from "../types/product";
import { ImSpinner2 } from "react-icons/im";

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { products, updateProduct, loading } = useProduct();
  const [product, setProduct] = useState<Partial<Product>>({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const productToEdit = products.find((product) => product._id === id);
    if (productToEdit) {
      setProduct({
        title: productToEdit.title || "",
        price: productToEdit.price || 0,
        description: productToEdit.description || "",
        category: productToEdit.category || "",
        image: productToEdit.image || "",
      });
    }
  }, [id, products]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: URL.createObjectURL(files[0]),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      updateProduct(id, product as Product);
      navigate("/dashboard");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold pb-2">Update Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            value={product.title || ""}
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
            value={product.price || 0}
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
            value={product.description || ""}
            onChange={handleChange}
            placeholder="Product description"
            className="border border-gray p-2 focus:outline-primaryColor rounded-md resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={product.category || ""}
            onChange={handleChange}
            className="border border-gray p-2 focus:outline-primaryColor rounded-md"
          >
            <option value="">Select Category</option>
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
            "Edit Product"
          )}
        </button>
      </form>
    </DashboardLayout>
  );
};

export default UpdateProduct;
