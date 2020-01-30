const NotesService = {
  getAllNotes(knex) {
    return knex
      .select('*')
      .from('noteful_notes');
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into('noteful_notes')
      .returning('*')
      .then ( rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('noteful_notes')
      .where('id', id)
      .first();
  },
  deleteById(knex, id) {
    return knex
      .from('noteful_notes')
      .where('id', id)
      .delete();
  },
  updateById(knex, id, newNoteData) {
    return knex
      .from('noteful_notes')
      .where('id', id)
      .update(newNoteData);
  }
};

module.exports = NotesService;