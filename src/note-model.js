(function(exports){

  function Note(note) {
    this.text = note
  };

  Note.prototype = function() {
    return this.text
  };

  exports.Note = Note;
})(this);
