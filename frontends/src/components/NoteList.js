import React from "react";

const NoteList = ({ notes, onEdit, onDelete }) => (
  <div className="space-y-4 mt-6">
    {notes.map((note) => (
      <div key={note._id} className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">{note.title}</h3>
        <p className="text-gray-700 mt-1">{note.description}</p>
        <small className="text-gray-500">
          {new Date(note.updatedAt).toLocaleString()}
        </small>
        <div className="mt-2 space-x-2">
          <button
            onClick={() => onEdit(note)}
            className="bg-yellow-400 px-3 py-1 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="bg-red-500 px-3 py-1 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default NoteList;
