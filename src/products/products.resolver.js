import { Product } from './products.model.js';
import { service } from './products.service.js';
import { logger } from '../utils/logger.js';
import { 
    errors
} from '../utils/error.js';
import { misc } from '../utils/misc.js';
const productResolvers = {
    Query: {
        getProducts: async (_, args, ctx) => {
            try {
                // const input = await misc.toJsObject(args);
                const products = await service.getProducts(args);
                return products;
            } catch (err) {
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR);
            }
        },
        getSingleProduct: async(_, args, ctx, info) => {
            try {
                const product = await service.getSingleProduct(args);
                console.log(product);
                return product;
            } catch (err) {
                logger.error(err)
                //return withApolloError(INTERNAL_SERVER_ERROR);
                return errors.withApolloError(INTERNAL_SERVER_ERROR)
            }
        },
    },

    Mutation: {
        createProduct: async(_ , args, context, info) => {
            try {
                const { createProductInput } = args;
                const input = await misc.toJsObject(createProductInput);
                console.log({input,createProductInput});  
                // return;
                //const user = await service.createUser({args:input});      
                const product = new Product( input );
                console.log({input,createProductInput}); 
                await product.save();
                return product;
            } catch (err) {
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR);
            }
        }, 
        deleteProduct: async(_, args, ctx) => {
            try {
                // console.log(args);
                // return;
                const deleteProduct = await service.deleteProduct(args);
                console.log(deleteProduct);
                return "ok, item has been deleted";
            } catch (err) {
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR);
            }
        },
        updateProduct: async(_, args, context, info) => {
            const { id, updateProductInput } = args;
            // const input = await misc.toJsObject(args);
            // console.log(input);
            // return;
            // const userUpdate = await service.updateUser(input);
            // return userUpdate;
            // const {username, email, password} = args.user;
            const product = await Product.findByIdAndUpdate( 
                id,
                {
                    updateProductInput
                },
                {new: true}     
            )
            return product;
        }
    }
    // Mutation: {
    //     createCat: async (_, { name }) => {
    //         const kitty = new Cat({ name });
    //         return kitty.save();
    //     }
    // }
}

// module.exports = userResolvers;
export { productResolvers };