import { Product } from './products.model.js';

const service = {
    getProducts: async() => {
        return Product.find({});
    },
    getSingleProduct: async({ id: _id }) => {
        return Product.findById({ _id })
    },
    deleteProduct: async({ id: _id }) => {
        return Product.findByIdAndDelete({ _id })
    },
    createProduct: async({ args }) => {
        //console.log('service', args)
        return Product.create({ args })
    },
    updateProduct: async({ id: _id, ...args }) => {
        return Product.findByIdAndUpdate({ _id, args, new: true});  
    }  
}

export { service }