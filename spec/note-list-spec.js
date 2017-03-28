function savesNoteToNotes() {
  var note = new singleNote("My favourite language is JavaScript");
  var notelist = new noteList();
  notelist.notes.push(note.showText());
  assert.isTrue(notelist.notes[0] == "My favourite language is JavaScript")
  if (assert){console.log("PASSED!!!!")};
};

savesNoteToNotes()
