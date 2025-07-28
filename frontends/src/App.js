import React, { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import API from "./api";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addOrUpdateNote = async (note) => {
    if (editingNote) {
      const res = await API.put(`/notes/${editingNote._id}`, note);
      setNotes(notes.map((n) => (n._id === res.data._id ? res.data : n)));
      setEditingNote(null);
    } else {
      const res = await API.post("/notes", note);
      setNotes([...notes, res.data]);
    }
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    setNotes(notes.filter((n) => n._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Notes Manager</h1>
        <NoteForm onSubmit={addOrUpdateNote} editingNote={editingNote} />
        {loading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <NoteList
            notes={notes}
            onEdit={setEditingNote}
            onDelete={deleteNote}
          />
        )}
      </div>
    </div>
  );
};

export default App;
