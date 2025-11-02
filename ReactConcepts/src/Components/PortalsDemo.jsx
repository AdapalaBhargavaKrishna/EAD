import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center">
        <h2 className="text-lg font-semibold mb-4">{children}</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 transition-all"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default function PortalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Portal Demo</h3>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          Open Modal
        </button>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>Hello from a Portal! 🚀</Modal>
      )}
    </div>
  );
}
