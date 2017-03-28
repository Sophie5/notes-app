function savesNoteToNotes() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text[0] == "My favourite language is JavaScript")
};

savesNoteToNotes();
