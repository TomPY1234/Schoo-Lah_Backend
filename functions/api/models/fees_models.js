const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class feesModel {
    constructor() {
        if (this.instance) return this.instance;
        feesModel.instance = this;
    }

    get() { return database.getList('fees') }

    getById(id) { return database.get('fees', id) }

    create(fee) { return database.create('fees', fee) }

    delete(id) { return database.delete('fees', id) }

    update(id, fee) { return database.set('fees', id, fee) }
}

module.exports = new feesModel(); 