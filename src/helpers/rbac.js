const roles = Object.freeze({
    sysAdmin: 'sys_admin',
    sysReviewer: 'sys_reviewer',
    admin: 'admin',
    owner: 'owner',
    superUser: 'super_user',
})

const resource = Object.freeze({
    user: 'user',
    product: 'product',
    categories: 'categories',
    subCategories: 'subCategories'
})

export { roles, resource };