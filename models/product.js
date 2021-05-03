const { FieldInteger, FieldFloat, FieldString } = require('./datatype')
const BaseModel = require('./base')
const demo_products = [{
    id: 1,
    code: "SP09CP01",
    name: "Camembert Pierrot",
    quantity_onhand: 12.5,
    quantity_bom: 100.0,
    uom: 'kg',
    bom: [{ product_id: 2, quantity: 36.5 }, { product_id: 3, quantity: 63.5 }],
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


class ProductModel extends BaseModel {

    static _fields = {
        id: FieldInteger,
        name: FieldString,
        code: FieldString,
        price: FieldFloat
    }


}

module.exports = ProductModel;