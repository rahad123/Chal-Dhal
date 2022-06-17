import { User } from './user.model.js';
import { Product } from '../products/products.model.js';
// import { querySkip } from '../helpers/common.js';

const totalUser = async() => {
    const userCount = (await User.find({})).length
    console.log('totalUser', userCount);
    return userCount;
}

const service = {
    getUsers: async() => {
        // const skip = await querySkip(page, perPage);
        await totalUser();
        return User.find({});
    },
    getSingleUser: async({ id: _id }) => {
        return User.findById({ _id })
    },
    deleteUser: async({ id: _id }) => {
        return User.findByIdAndDelete({ _id })
    },
    createUser: async({ ...args }) => {
        const user = new User(args);
        await user.save();
        return user;
        // return User.create({ user })
    },
    updateUser: async({ id: _id, ...args }) => {
        return User.findByIdAndUpdate({ _id, args, new: true});  
    }  
}   

export { service }