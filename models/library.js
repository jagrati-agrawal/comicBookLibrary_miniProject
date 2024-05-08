const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        unique: true
    },
    name: String,
    image: String,
    link: String
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;