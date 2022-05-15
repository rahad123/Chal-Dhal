// const User = require('./user.model') 
import { User } from './user.model.js';
import { service } from './user.service.js';
import { logger } from '../utils/logger.js';
import { wrapper } from '../helpers/asyncWrapper.js';

import { 
    errors
} from '../utils/error.js';
import { misc } from '../utils/misc.js';

// const cacheManager = new redisCache();
const userResolvers = {
    Query: {
        getUsers: async (_, args, ctx) => {
            //return await User.find({});
            try {
                const { username, email} = args;
                const users = await service.getUsers(args);
                console.log('users', users);
                // console.log(users)
                return users;
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
                console.log('args', args);
                const input = await misc.toJsObject(createUserInput);  
                // await cacheManager.destroy(cacheKeys.itemKey());
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
                const deleteUser = await service.deleteUser(args);
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
}

// module.exports = userResolvers;
export { userResolvers };