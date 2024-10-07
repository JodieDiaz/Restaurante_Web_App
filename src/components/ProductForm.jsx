"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

function ProductForm() {
  const router = useRouter();
  const params = useParams();
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    portions: "",
    grams: "",
    pricePerGram: "",
    image: null,
  });

  // Cargar los datos del producto si se proporciona un ID
  useEffect(() => {
    const fetchProduct = async () => {
      if (params.id) {
        const response = await axios.get(`/api/products/${params.id}`);
        setFormData(response.data);
      }
    };
    fetchProduct();
  }, [params.id]);

  // Manejar el cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      if (!params.id) {
        await axios.post("/api/products", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axios.put(`/api/products/${params.id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      router.push("/admin");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="form-container">
      <form
        className="bg-transparent shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        ref={form}
      >
        <h2 className="text-lg font-bold mb-4 text-center text-white">
          {params.id ? "Actualizar Producto" : "Crear Producto"}
        </h2>

        <label className="block text-yellow-400 font-bold mb-2" htmlFor="name">
          Nombre del Producto
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label
          className="block text-yellow-400 font-bold mb-2"
          htmlFor="description"
        >
          Descripción
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label className="block text-yellow-400 font-bold mb-2" htmlFor="price">
          Precio
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label
          className="block text-yellow-400 font-bold mb-2"
          htmlFor="portions"
        >
          Porciones
        </label>
        <input
          type="number"
          name="portions"
          value={formData.portions}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label className="block text-yellow-400 font-bold mb-2" htmlFor="grams">
          Gramos
        </label>
        <input
          type="number"
          name="grams"
          value={formData.grams}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label
          className="block text-yellow-400 font-bold mb-2"
          htmlFor="pricePerGram"
        >
          Precio por Gramo
        </label>
        <input
          type="number"
          name="pricePerGram"
          value={formData.pricePerGram}
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
          required
        />

        <label className="block text-yellow-400 font-bold mb-2" htmlFor="image">
          Imagen
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="border border-yellow-400 rounded w-full py-2 px-3 mb-4 bg-gray-800 text-white"
        />

        <button type="submit" className="btn w-full">
          {params.id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
