"use client";

import { useState, useMemo } from "react";
import { categoriesData } from "../../utils/helpers";

const ITEMS_PER_PAGE = 4;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Flatten products with category
  const allProducts = useMemo(() => {
    return categoriesData.flatMap((cat) =>
      cat.products.map((p) => ({
        ...p,
        category: cat.title,
      }))
    );
  }, []);

  // 🔹 Filter by category
  const filteredProducts = useMemo(() => {
    let products =
      selectedCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);

    // 🔹 Sort by price
    if (sortOrder === "low-high") {
      products = [...products].sort((a, b) => a.price - b.price);
    }
    if (sortOrder === "high-low") {
      products = [...products].sort((a, b) => b.price - a.price);
    }

    return products;
  }, [allProducts, selectedCategory, sortOrder]);

  // 🔹 Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {/* 🔹 Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            className="border p-2 rounded"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Categories</option>
            {categoriesData.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* 🔹 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={`${product.category}-${product.id}`}
              className="bg-white rounded-xl p-4
                         shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                         transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />

              <h3 className="font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                {product.category}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-red-500">
                  ${product.price}
                </span>
                <span className="line-through text-sm text-gray-400">
                  ${product.oldPrice}
                </span>
              </div>

              <button
                type="button"
                className="w-full bg-red-500 text-white py-2 rounded
                           hover:bg-red-600 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded border
                  ${
                    currentPage === index + 1
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
