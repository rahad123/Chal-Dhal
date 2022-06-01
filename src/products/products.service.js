import mongoose from 'mongoose';
import { Product } from './products.model.js';

const totalProduct = async() => {
    const productCount = (await Product.find({})).length;
    return productCount;
}

const service = {
    getProducts: async() => {
        console.log(await totalProduct());
        return Product.find({});
    },
    getSingleProduct: async({ id: _id }) => {
        return Product.findById({ id })
    },
    deleteProduct: async({ id: _id }) => {
        return Product.findByIdAndDelete({ _id })
    },
    createProduct: async({ ...args }) => {
        //console.log('service', args)
        console.log('args', args);
        if(await totalProduct() === 0) {
            return Product.create({ args })
        }
        const session = await mongoose.startSession();
        await session.startTransaction();

        try {
            const [newProduct] = await Product.create([{ title, desc, priceType, productType }], { session: session });

            const productUpdate = await Product.findByIdAndUpdate(
                { $push: { product: newProduct._id } },
                { session: session, new: true }
            )
            console.log('productUpdate', productUpdate);
            if(!productUpdate) {
                await session.abortTransaction();
                session.endSession();
                return null;
            }

            await session.commitTransaction();
            session.endSession();
            // console.log('newProduct', newProduct);
            return newProduct;

        } catch {

        }
    },
    updateProduct: async({ id: _id, ...args }) => {
        return Product.findByIdAndUpdate({ _id, args, new: true});  
    }  
}

export { service }