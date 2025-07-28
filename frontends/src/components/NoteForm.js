import React, { useEffect, useState } from "react";

const NoteForm = ({ onSubmit, editingNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("All fields required");
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-2"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border px-3 py-2 rounded"
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
