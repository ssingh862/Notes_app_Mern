const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: "Both fields required" });
  const newNote = new Note({ title, description });
  await newNote.save();
  res.status(201).json(newNote);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};
