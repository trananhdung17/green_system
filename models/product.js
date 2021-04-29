
const {FieldInteger, FieldFloat, FieldString} = require('./datatype')

const demo_products = [{
    id: 1,
    code: "SP09CP01",
    name: "Camembert Pierrot",
    quantity_onhand: 12.5,
    quantity_bom: 100.0,
    uom: 'kg',
    bom: [{product_id: 2, quantity: 36.5}, {product_id: 3, quantity: 63.5}],
    production_steps: [{
        name: "Modulation",
        workcenter_id: 1,
        average_time: 2.5,
    }, {
        name: "Preparation",
        workcenter_id: 2,
        average_time: 1.5,
    }, {
        name: "Packaging",
        workcenter_id: 4,
        average_time: 0.5,
    }] 
}, {
    id: 2,
    code: "SP18CA02",
    name: "Chef Anton's Gumbo Mix"
}, {
    id: 3,
    code: "SP16GSX9",
    name: "Genen Shouyu"
}];


class ProductModel {
    

    constructor (id) {
        this.id = id
        this._fields = {
            id: FieldInteger,
            name: FieldString,
            code: FieldString,
            price: FieldFloat
        }
        this._init_fields()
        this._fetch()
    }
    _init_fields () {
        /** TODO */
    }
    _fetch() {
        /** TODO: Fetch field value in database */
        this.name = 'Demo Name'
        this.code = 'Demo Code'
    }
    
    static browse(ids) {
        var objects = []
        for (var i = 0; i < ids.length; i++) {
            objects.push(new ProductModel(ids[i]))
        }
        return objects
    }

    static search (domain) {
        /** TODO: Search object by given domain
         */
        return ProductModel.browse([1, 2, 3])
    }

    read () {
        return {
            id: this.id,
            name: this.name,
            code: this.code
        }
    }

}

module.exports = ProductModel;
