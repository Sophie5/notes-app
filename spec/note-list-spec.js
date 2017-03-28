function savesNoteToNotes() {
  var notelist = new NoteList(savesNote());
  assert.isTrue(notelist.notes[0] == "My favourite language is JavaScript")
};

savesNoteToNotes()
