const mongoose = require('mongoose')
const db = require('../config.json').database

mongoose.connect(`mongodb://${db.username}:${db.password}@${db.server}:${db.port}/${db.db_name}`)


class FieldInteger {
    constructor(model, name) {
        /** TODO: To create column `name` with type is Integer for relation `model` */
    }
}

class FieldFloat {
    constructor(model, name) {
        /** TODO: To create column `name` with type is Float for relation `model` */
    }
}

class FieldString {
    constructor(model, name) {
        /** TODO: To create column `name` with type is String for relation `model` */
    }
}


class BaseModel {
    static _relation = null
    static _fields = {}

    constructor(id) {
        this.id = id
        this._fields = this.constructor._fields
        this._relation = this.constructor._relation
        this._fetch()
    }
    _fetch() {
        /** TODO: Fetch field value in database */
        for (var fname in this.constructor._fields)
            this[fname] = 'Demo'
    }


    static browse(ids) {
        var objects = []
        for (var i = 0; i < ids.length; i++) {
            objects.push(new this(ids[i]))
        }
        return objects
    }

    static search(domain) {
        /** TODO: Search object by given domain
         */
        return this.browse([1, 2, 3])
    }

    read() {
        return {
            id: this.id,
            name: this.name,
            code: this.code
        }
    }
}
module.exports = { BaseModel, FieldInteger, FieldFloat, FieldString }