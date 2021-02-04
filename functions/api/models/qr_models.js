const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class qrModel {
    constructor() {
        if (this.instance) return this.instance;
        qrModel.instance = this;
    }

    get() { return database.getList('qr') }

    getById(id) { return database.get('qr', id) }

    create(qr) { return database.create('qr', qr) }

    delete(id) { return database.delete('qr', id) }

    update(id, qr) { return database.set('qr', id, qr) }
}

module.exports = new qrModel(); 