const database = require('../database');

class usersModel {
    constructor() {
        if (this.instance) return this.instance;
        usersModel.instance = this;
    }

    get() { return database.getList('users') }

    getById(id) { return database.get('users', id) }

    create(user) { return database.create('users', user) }

    delete(id) { return database.delete('users', id) }

    update(id, user) { return database.set('users', id, user) }
}

module.exports = new usersModel(); 