export const getNotetitle = (notes, id) =>
  notes.find(note => note.id === id).title;
