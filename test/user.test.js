import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'chai';
import faker from 'faker';
import { User } from '../src/users/user.model.js';
// import { sample } from 'lodash';
import { service } from '../src/users/user.service.js';
import slugify from 'slugify';
import { wrapper } from '../src/helpers/asyncWrapper.js'

chai.use(chaiHttp);

const createUser = async(args = null) => {
    const userInput = {
        id: mongoose.Types.ObjectId,
        username: slugify(faker.lorem.words(2)),
        email: faker.internet.email(),
        password: faker.lorem.words(2),
    }
    const input = args ? args : userInput;
    const user = await service.createUser(input);
    return user;
}

describe('User test suit', () => {
    beforeEach(async () => {
        await Promise.all([User.deleteMany({})]);
    });

    it('should create a new user', async () => {
        const userId = mongoose.Schema.ObjectId();

        const userInput = {
            username: slugify(faker.lorem.words(2)),
            email: faker.internet.email(),
            password: faker.lorem.words(2),
        };
        const[err, res] = await wrapper(
            chai
                .request(server)
                .post('/graphql')
                .send({
                   query: `
                   mutation {
                    createUser(
                        createUserInput : {
                            username: "${userInput.username}"
                            email: "${userInput.email}"
                            password: "${userInput.password}"
                        }
                    )
                        {
                           username
                           email
                           password     
                        }
                }
                   `, 
                })
        );

        if(res.body.errors) console.error(res.body.errors);
        const user = res.body.data.createUser;
        console.log(user);

        assert.isDefined(user, 'user should be defined');
    })
    afterEach(async () => {
        await Promise.all([User.deleteMany({})]);
    })
});

