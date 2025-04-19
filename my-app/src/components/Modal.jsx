import React, { useState } from "react";

const Modal = ({ showModal, setShowModal, onSaveBlog }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSaveBlog = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    if (newTitle && newContent) {
      const newBlog = {
        id: blogs.length + 1,
        title: newTitle,
        content: newContent,
      };
      onSaveBlog(newBlog);
      setNewTitle("");
      setNewContent("");
      setShowModal(false);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold">Yeni Blog Ekle</h2>
            <input
              type="text"
              placeholder="Başlık"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="İçerik"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full p-2 border rounded h-32"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Vazgeç
              </button>
              <button
                onClick={handleSaveBlog}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
