(function(exports){

  function noteList() {
     this.notes = [];
  };

  noteList.prototype.showNote = function() {
    this.notes.push(singleNote);
    return this.notes;
  };

  exports.noteList = noteList;
})(this);
