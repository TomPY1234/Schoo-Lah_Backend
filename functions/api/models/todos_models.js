const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class todosModel {
    constructor() {
        if (this.instance) return this.instance;
        todosModel.instance = this;
    }

    get() { return database.getList('todos') }

    getById(id) { return database.get('todos', id) }

    create(todo) { return database.create('todos', todo) }

    delete(id) { return database.delete('todos', id) }

    update(id, todo) { return database.set('todos', id, todo) }
}

module.exports = new todosModel(); 