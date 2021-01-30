const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class BookModel {
    constructor() {
        if (this.instance) return this.instance;
        BookModel.instance = this;
    }

    get() { return database.getList('books') }

    getById(id) { return database.get('books', id) }

    create(book) { return database.create('books', book) }

    delete(id) { return database.delete('books', id) }

    update(id, book) { return database.set('books', id, book) }
}

module.exports = new BookModel();