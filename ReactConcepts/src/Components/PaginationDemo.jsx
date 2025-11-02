import React, { useState } from "react";

const PaginationDemo = () => {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className=" flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Pagination Demo
        </h1>

        <ul className="divide-y divide-gray-200">
          {currentItems.map((item, index) => (
            <li
              key={index}
              className="p-3 hover:bg-blue-50 transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center mt-6 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-blue-500 hover:text-white border-gray-300"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-blue-500 text-white shadow-md"
                  : "hover:bg-blue-100 text-gray-700 border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-blue-500 hover:text-white border-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationDemo;
