import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: 0,
  //   amount: 0,
  //   dampingRate: 0.8,
  //   image: "",
  // });
  const initialValue = {
    name: "",
    price: 0,
    amount: 0,
    dampingRate: 0.8,
    image: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://655a3f7d6981238d054d4acf.mockapi.io/products",
        formData
      );
      navigate("/products");
    } catch (error) {
      console.log("error");
    }

    setFormData(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light w-75"
      >
        <h1 className="text-center"> New Product</h1>

        <ProductForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </article>
    </div>
  );
};

export default NewProduct;
