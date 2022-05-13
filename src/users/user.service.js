import { User } from './user.model.js';
// import { querySkip } from '../helpers/common.js';

const service = {
    getUsers: async() => {
        // const skip = await querySkip(page, perPage);
        return User.find({}).sort({createAt: 'DESC', username: -1 });
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