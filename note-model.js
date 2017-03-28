(function(exports){

  function Note(note) {
    this.text = [note]
  };

  Note.prototype = function() {
    return this.text[0]
  };

  exports.Note = Note;
})(this);
