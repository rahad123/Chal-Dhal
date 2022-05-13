// const User = require('./user.model') 
import { User } from './user.model.js';
import { service } from './user.service.js';
import { logger } from '../utils/logger.js';
import { wrapper } from '../helpers/asyncWrapper.js';

import { 
    errors
} from '../utils/error.js';
import { misc } from '../utils/misc.js';
import { cacheManager } from '../config/config.js'
import { cacheKeys } from './user.enum.js';

// const cacheManager = new redisCache();
const userResolvers = {
    Query: {
        getUsers: async (_, args, ctx) => {
            //return await User.find({});
            try {
                // const input = await misc.toJsObject(args);
                const { username, email} = args;
                const cacheTags = await (cacheManager.get(cacheKeys.itemKey()));
                console.log('cacheTags', cacheTags);
                if(cacheTags) {
                    return cacheTags;
                }
                const users = await service.getUsers(args);
                // console.log(users);
                await cacheManager.set(cacheKeys.itemKey(), users, 10000);
                // console.log(users);
                //await cacheManager.set('redis', users, 1000);
                // const redis_value = await cacheManager.put('redis', users, 1000);
                // const redis_value = await cacheManager.has('redis'); 
                // console.log(redis_value);
                // console.log(cacheKeys.itemKey());
                // let value 
                // if(redis_value === true) {
                //     value = await cacheManager.destroy('redis');
                // }
                // console.log(value);       
                //return users; 
            } catch (err) {  
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR); 
            }
        },
        getSingleUser: async(_, args, ctx, info) => {
            try {
                const user = await service.getSingleUser(args);
                console.log(user);
                return user;
            } catch (err) {
                logger.error(err)
                //return withApolloError(INTERNAL_SERVER_ERROR);
                return errors.withApolloError(INTERNAL_SERVER_ERROR)
            }
        },
    },

    Mutation: {
        createUser: async(_ , args, context, info) => {
            try {
                const { createUserInput } = args;
                const input = await misc.toJsObject(createUserInput);  
                await cacheManager.destroy(cacheKeys.itemKey());
                const user = await service.createUser(input);      
                //const user = new User( input );
                // console.log({input,createUserInput}); 
                return user;
            } catch (err) {
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR);
            }
        }, 
        deleteUser: async(_, args, ctx) => {
            try {
                // console.log(args);
                // return;
                await cacheManager.destroy(cacheKeys.itemKey());
                const deleteUser = await service.deleteUser(args);
                // console.log(deleteUser);
                return deleteUser;
            } catch (err) {
                logger.error(err);
                return errors.withApolloError(INTERNAL_SERVER_ERROR);
            }
        },
        updateUser: async(_, args, context, info) => {
            const { id, updateUserInput } = args;
            // const input = await misc.toJsObject(args);
            // console.log(input);
            // return;
            // const userUpdate = await service.updateUser(input);
            // return userUpdate;
            // const {username, email, password} = args.user;
            const user = await User.findByIdAndUpdate( 
                id,
                {
                    updateUserInput
                },
                {new: true}     
            )
            await cacheManager.destroy(cacheKeys.itemKey());
            return user;
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
export { userResolvers };